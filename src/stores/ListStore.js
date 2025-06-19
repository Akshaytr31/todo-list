import { defineStore } from "pinia";
import { ref } from "vue";

export const useListStore = defineStore("listStore", () => {
  const Lists = ref([]);

  const getTodoList = (data) => {
    Lists.value.push(data)
  };
  
  return { Lists, getTodoList };
});
