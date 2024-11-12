<template>
  <div>
    <h5>About kNote</h5>
    <p>A simple note-taking app to manage your thoughts and ideas.</p>
    <h6>Usage Tips:</h6>
    <ul>
      <li>
        <strong>Add</strong> a note: press
        <q-icon name="add" size="md" class="q-mr-sm" />.
      </li>
      <li><strong>Delete</strong> a note: swipe right</li>
      <li><strong>Toggle</strong> a note as done/undone: swipe left</li>
      <li><strong>Edit</strong> a note: double click</li>
    </ul>
    <p>
      <strong>License:</strong>
      <a
        href="https://github.com/cattabiani/knote_quasar_pwa/blob/main/LICENSE"
        target="_blank"
        rel="noopener"
        >MIT</a
      >
    </p>
    <p>
      <strong>Repository:</strong>
      <a
        href="https://github.com/cattabiani/knote_quasar_pwa"
        target="_blank"
        rel="noopener"
        >View on GitHub</a
      >
    </p>
    <p>
      <strong>Star:</strong>
      <a
        href="https://github.com/cattabiani/knote_quasar_pwa/stargazers"
        target="_blank"
        rel="noopener"
      >
        Give a Star on GitHub!
      </a>
    </p>
    <p><strong>Author:</strong> Alessandro Cattabiani</p>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useQuasar } from "quasar";

const $q = useQuasar();

function checkConnection() {
  if (!navigator.onLine) {
    $q.notify({
      message: "No internet connection. Some features may not work.",
      color: "negative",
      icon: "wifi_off",
    });
  }
}

onMounted(() => {
  checkConnection();
});
</script>

<style>
/* Optional styles */
</style>
