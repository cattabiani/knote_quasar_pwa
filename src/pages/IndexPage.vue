<template>
  <q-layout>
    <q-header reveal elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title style="font-size: 28px">kNote</q-toolbar-title>
        <q-btn
          flat
          icon="info"
          @click="showAbout"
          class="q-ml-md bg-white text-primary"
          aria-label="About kNote"
        />
        <q-btn
          flat
          icon="checklist"
          @click="store.isCheckList = !store.isCheckList"
          class="q-ml-md bg-white text-primary"
          aria-label="Activate Checklist Mode"
        />
        <q-btn
          flat
          icon="add"
          @click="addNote"
          class="q-ml-md bg-white text-primary"
          aria-label="Add a new note"
        />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <q-page>
        <q-list bordered class="q-my-md">
          <q-slide-item
            v-for="(note, index) in store.notes.slice().reverse()"
            :key="index"
            @left="(event) => onLeft(event, rIndex(index))"
            @right="(event) => onRight(event, rIndex(index))"
            left-color="red"
            right-color="green"
            @dblclick="editNote(rIndex(index))"
          >
            <template v-slot:left>
              <q-icon name="delete" />
            </template>
            <template v-slot:right>
              <q-icon name="done" background-color="green" />
            </template>

            <q-item
              clickable
              :class="index % 2 === 0 ? 'bg-grey-1' : 'bg-white'"
            >
              <q-item-section
                lines="2"
                :class="[
                  note.done && !store.isCheckList
                    ? 'text-decoration-line-through'
                    : '',
                ]"
              >
                <div
                  class="q-gutter-sm"
                  style="display: flex; align-items: left"
                >
                  <q-icon
                    v-if="store.isCheckList && note.done"
                    name="check_circle"
                    class="text-green q-mr-md"
                  />
                  <q-icon
                    v-else-if="store.isCheckList && !note.done"
                    name="radio_button_unchecked"
                    class="q-mr-md"
                  />
                  {{ note.text || "New Note" }}
                </div>
              </q-item-section>
            </q-item>
          </q-slide-item>
        </q-list>

        <!-- empty state -->
        <div v-if="store.notes.length === 0" style="padding: 20px">
          <AboutContent />
        </div>
      </q-page>
    </q-page-container>


    <!-- Modal for adding/editing a note -->
    <q-dialog v-model="isEditNoteModalVisible" persistent @open="focusInput">
      <q-card style="width: 90%">
        <q-card-section>
          <q-input
            ref="noteInput"
            v-model="editNoteText"
            label="Note"
            autogrow
            outlined
            type="textarea"
          />
        </q-card-section>
        <q-card-actions align="center">
          <q-btn icon="close" color="red" @click="closeModal" />
          <q-btn icon="check" color="primary" @click="saveAndCloseModal" />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <!-- Modal for about -->
    <q-dialog v-model="isAboutDialogVisible" persistent>
      <q-card style="width: 90%">
        <q-card-section><AboutContent /></q-card-section>
        <q-card-actions align="center">
          <q-btn
            icon="close"
            color="red"
            @click="isAboutDialogVisible = false"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-layout>
</template>

<script setup>
import { ref, computed, nextTick, onBeforeUnmount } from "vue";
import { v4 as uuidv4 } from "uuid";
import { useQuasar } from "quasar";
import AboutContent from "../components/AboutContent.vue";
import { useStore } from "src/stores/store";

const store = useStore();


const editNoteId = ref(-1);
const editNoteText = ref("");
const noteInput = ref(null);
const timer = ref(null);
const isAboutDialogVisible = ref(false);
const $q = useQuasar();
let notification = null;

// Method to finalize actions after a short delay
const finalize = (reset) => {
  timer.value = setTimeout(() => {
    reset?.(); // Optional chaining to call reset if defined
  }, 0);
};

const showAbout = () => {
  // Logic to show the about dialog
  isAboutDialogVisible.value = true; // Set the dialog to visible
};

// Handling note deletion on swipe left
const onLeft = ({ reset }, index) => {
  finalize(reset);
  setTimeout(() => {
    deleteNote(index);
  }, 1);
};

// Toggling the 'done' status of a note
const onRight = ({ reset }, index) => {
  store.notes[index].done = !store.notes[index].done;
  finalize(reset);
};

// Computed property for modal visibility
const isEditNoteModalVisible = computed(() => editNoteId.value >= 0);

// Reverse index for slide item
const rIndex = (index) => store.notes.length - 1 - index;

// Add a new note or edit an existing one
const addNote = () => {
  editNoteText.value = "";
  editNoteId.value = store.notes.length; // Set to the new note index
  focusInput();
};

// Save note and close the modal
const saveAndCloseModal = () => {
  if (editNoteId.value >= store.notes.length) {
    store.notes.push({ id: uuidv4(), text: editNoteText.value, done: false });
  } else {
    store.notes[editNoteId.value].text = editNoteText.value;
  }
  closeModal();
};

// Delete a note at the given index
const deleteNote = (index) => {
  store.notes.splice(index, 1);
};

// Close the modal and reset the edit note ID
const closeModal = () => {
  editNoteId.value = -1;
};

// Focus the input when the modal opens
const focusInput = () => {
  nextTick(() => {
    noteInput.value?.focus(); // Optional chaining to focus input if it exists
    noteInput.value?.select(); // Select all text
  });
};

// Load the note text into the input for editing
const editNote = (index) => {
  editNoteText.value = store.notes[index].text;
  editNoteId.value = index;
  focusInput();
};



const installPromptHandler = (event) => {
  event.preventDefault(); // Prevent the default prompt from appearing

  notification = $q.notify({
    actions: [
      {
        label: 'Install',
        color: 'white',
        handler: () => {
          if (event) {
            event.prompt(); // Show the install prompt
            notification.close(); // Dismiss the notification
          }
        }
      },
      {
        label: 'Dismiss',
        color: 'white',
        handler: () => {
          notification.close(); // Dismiss the notification
        }
      }
    ],
    timeout: 0,  // Prevent it from auto-closing
  });
};

window.addEventListener("beforeinstallprompt", installPromptHandler);

onBeforeUnmount(() => {
  window.removeEventListener("beforeinstallprompt", installPromptHandler);
});
</script>

<style scoped>
.q-item:hover {
  background-color: transparent !important; /* Ensure no background on hover */
}

.text-decoration-line-through {
  text-decoration: line-through; /* Apply strikethrough text decoration */
}
</style>
