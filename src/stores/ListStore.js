import { ref } from "vue";
import { defineStore } from "pinia";

export const useListStore = defineStore(
  "listStore",
  () => {
    const lists = ref([]);

    const setTodoList = (data) => {
      lists.value.push(data);
    };

    const deleteList = (id) => {
      lists.value = lists.value.filter((item) => item.id !== id);
    };

    const updateTodolist = (updatedTask) => {
      const index = lists.value.findIndex((item) => item.id === updatedTask.id);
      lists.value[index] = { ...lists.value[index], ...updatedTask };
    };

    return { lists, setTodoList, deleteList, updateTodolist};
  },
  {
    persist: true,
  }
);
