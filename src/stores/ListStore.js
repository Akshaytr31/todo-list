import { defineStore } from "pinia";
import { ref } from "vue";

export const useListStore = defineStore("listStore", () => {
  const Lists = ref([]);
  const getTask = async () => {
    const res = await fetch("http://localhost:3000/tasks");
    const data = await res.json();
    Lists.value = data;
  };

  return { Lists,getTask };
});