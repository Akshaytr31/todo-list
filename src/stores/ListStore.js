import { defineStore } from "pinia";
import { ref } from "vue";

export const useListStore = defineStore("listStore", () => {
  const Lists = ref([]);

  const getTask = (data) => {
    Lists.value = data;
  };
  
  return { Lists, getTask };
});
