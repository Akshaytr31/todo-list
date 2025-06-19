import { defineStore } from "pinia";
import { ref } from "vue";

export const useListStore = defineStore("listStore", () => {
  const lists = ref([]);

  const setTodoList = (data) => {
    lists.value.push(data)
  };
  
  return { lists, setTodoList };
});
