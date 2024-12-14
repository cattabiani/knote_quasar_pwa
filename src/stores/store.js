import { defineStore } from "pinia";

export const useStore = defineStore("mainStore", {
  state: () => ({
    notes: [],
    isChecklist: false
  }),

  getters: {
  },

  actions: {
  },

  persist: {
    key: "mainStorage",
  },
});
