import { defineStore } from "pinia";
import { moodResponseMap } from "@/data/moodResponseMap";

export const useMoodStore = defineStore("mood", {
  state: {
    selectedMood: null,
  },

  getters: {
    currentResponse: (state) => {
      return state.selectedMood ? moodResponseMap[state.selectedMood] : null;
    },
  },

  actions: {
    setMood(mood) {
      this.selectedMood = mood;
    },
    resetMood(mood) {
      this.selectedMood = null;
    },
  },
});
