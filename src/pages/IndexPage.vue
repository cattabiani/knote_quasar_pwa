<template>
  <q-layout>
    <q-header reveal elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title style="font-size: 28px;">kNote</q-toolbar-title>
        <q-btn flat icon="info" @click="showAbout" class="q-ml-md bg-white text-primary" aria-label="About kNote" />
        <q-btn 
          flat 
          icon="checklist" 
          @click="isCheckList = !isCheckList" 
          class="q-ml-md bg-white text-primary" 
          aria-label="Activate Checklist Mode" 
        />
        <q-btn flat icon="add" @click="addNote" class="q-ml-md bg-white text-primary" aria-label="Add a new note" />
      </q-toolbar>
      <q-toolbar v-if="installEvent" >
        <q-btn 
          flat icon="download"
          @click="installEvent.prompt()" 
          class="q-ml-auto q-mr-auto bg-white text-primary" 
          aria-label="Install kNote"
        >
          Install me!
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <q-page>
        <q-list bordered class="q-my-md">
          <q-slide-item
            v-for="(note, index) in notes.slice().reverse()"
            :key="index"
            @left="(event) => onLeft(event, rIndex(index))"
            @right="(event) => onRight(event, rIndex(index))"
            left-color="red" right-color="green"
            @dblclick="editNote(rIndex(index))"
          >
            <template v-slot:left>
              <q-icon name="delete" />
            </template>
            <template v-slot:right>
              <q-icon name="done" background-color="green" />
            </template>

            <q-item clickable :class="index % 2 === 0 ? 'bg-grey-1' : 'bg-white'">
              <q-item-section lines="2" :class="[note.done && !isCheckList ? 'text-decoration-line-through' : '']" >
                <div class="q-gutter-sm" style="display: flex; align-items: left;">
                  <q-icon v-if="isCheckList && note.done" name="check_circle" class="text-green q-mr-md" />
                  <q-icon v-else-if="isCheckList && !note.done" name="radio_button_unchecked" class="q-mr-md" />
                  {{ note.text }}
                </div>
              </q-item-section>
            </q-item>
          </q-slide-item>
        </q-list>

    <!-- empty state -->
    <div v-if="notes.length === 0" style="padding: 20px;">
      <AboutContent />
    </div>

      </q-page>
    </q-page-container>



    <!-- Modal for adding/editing a note -->
    <q-dialog v-model="isEditNoteModalVisible" persistent @open="focusInput">
      <q-card style="width: 90%">
        <q-card-section>
          <q-input ref="noteInput" v-model="editNoteText" label="Note" autogrow outlined type="textarea" />
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
          <q-btn icon="close" color="red" @click="isAboutDialogVisible = false" />
        </q-card-actions>
      </q-card>
    </q-dialog>

  </q-layout>
</template>

<script setup>
import { ref, computed, nextTick, onBeforeUnmount } from 'vue';
import { v4 as uuidv4 } from 'uuid';
import { LocalStorage, useQuasar } from 'quasar';
import AboutContent from '../components/AboutContent.vue';

// State variables
const storedNotes = LocalStorage.getItem('notes') || [];
const notes = ref(Array.isArray(storedNotes) ? storedNotes : JSON.parse(storedNotes || '[]'));
const editNoteId = ref(-1);
const editNoteText = ref("");
const noteInput = ref(null);
const timer = ref(null);
const isAboutDialogVisible = ref(false);
const $q = useQuasar();
const installEvent = ref(null);
const isCheckList = ref(LocalStorage.getItem('isCheckList') || false);

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
  notes.value[index].done = !notes.value[index].done;
  finalize(reset);
};

// Computed property for modal visibility
const isEditNoteModalVisible = computed(() => editNoteId.value >= 0);

// Reverse index for slide item
const rIndex = (index) => notes.value.length - 1 - index;

// Add a new note or edit an existing one
const addNote = () => {
  editNoteText.value = "";
  editNoteId.value = notes.value.length; // Set to the new note index
  focusInput();
};

// Save note and close the modal
const saveAndCloseModal = () => {
  if (editNoteId.value >= notes.value.length) {
    notes.value.push({id: uuidv4(), text: editNoteText.value, done: false });
  } else {
    notes.value[editNoteId.value].text = editNoteText.value;
  }
  closeModal();
};

// Delete a note at the given index
const deleteNote = (index) => {
  notes.value.splice(index, 1);
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
  editNoteText.value = notes.value[index].text;
  editNoteId.value = index;
  focusInput();
};

const save = () => {
  LocalStorage.set('notes', notes.value);
  LocalStorage.set('isCheckList', isCheckList.value);
}

window.addEventListener('beforeunload', () => {
  save();
});

window.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'hidden') {
    save();
  }
});

const installPromptHandler = (event) => {
  event.preventDefault(); // Prevent the default prompt from appearing

  installEvent.value = event;

  // // Wait for 5 seconds before showing the install notification
  // setTimeout(() => {
  //   $q.notify({
  //     message: 'Install me!',
  //     color: 'blue',
  //     icon: 'cloud_download',
  //     timeout: 5000,
  //     actions: [
  //       {
  //         label: 'Install',
  //         color: 'white',
  //         handler: () => {
  //           event.prompt(); // Show the install prompt
  //           event.userChoice.then((choiceResult) => {
  //             if (choiceResult.outcome === 'accepted') {
  //               console.log('User accepted the install prompt');
  //             } else {
  //               console.log('User dismissed the install prompt');
  //             }
  //           });
  //         }
  //       }
  //     ]
  //   });
  // }, 5000);
};




window.addEventListener('beforeinstallprompt', installPromptHandler);

onBeforeUnmount(() => {
  window.removeEventListener('beforeinstallprompt', installPromptHandler);
  window.removeEventListener('beforeunload', save);
  window.removeEventListener('visibilitychange', save);
  clearTimeout(timer.value);
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
