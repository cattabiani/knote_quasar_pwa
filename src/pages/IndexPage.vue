<template>
  <q-layout>
    <q-header reveal elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn flat icon="info" @click="showAbout" class="q-ml-auto bg-white text-primary" />
        <q-toolbar-title>kNote</q-toolbar-title>
        <q-btn flat icon="add" @click="addNote" class="q-ml-auto bg-white text-primary" />
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
              <q-item-section lines="2" :class="[note.done ? 'text-decoration-line-through' : '']">{{ note.text }}</q-item-section>
            </q-item>
          </q-slide-item>
        </q-list>
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
        <q-card-section>
          <div>
            <h5>About kNote</h5>
            <p>A simple note-taking app to manage your thoughts and ideas.</p>
            <h6>Usage Tips:</h6>
            <ul>
              <li>Swipe right to delete a note.</li>
              <li>Swipe left to mark/unmark a note as done.</li>
            </ul>
            <p><strong>License:</strong> MIT</p>
            <p><strong>Author:</strong> Alessandro Cattabiani</p>
          </div>
        </q-card-section>
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
import { LocalStorage } from 'quasar';

// State variables
const storedNotes = LocalStorage.getItem('notes') || [];
const notes = ref(Array.isArray(storedNotes) ? storedNotes : JSON.parse(storedNotes || '[]'));
const editNoteId = ref(-1);
const editNoteText = ref("");
const noteInput = ref(null);
const timer = ref(null);
const isAboutDialogVisible = ref(false);

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
}

window.addEventListener('beforeunload', () => {
  save();
});

window.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'hidden') {
    save();
  }
});

onBeforeUnmount(() => {
  window.removeEventListener('beforeunload', save);
  window.removeEventListener('visibilitychange', save);
  clearTimeout(timer.value);
});

</script>

<style scoped>
.q-item:hover {
  background-color: transparent !important;
}

.text-decoration-line-through {
  text-decoration: line-through;
}
</style>
