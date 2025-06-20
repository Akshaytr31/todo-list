import { defineStore } from "pinia";
import { ref } from "vue";

export const useListStore = defineStore("listStore", () => {
  const lists = ref([]);

  const setTodoList = (data) => {
    lists.value.push(data)
  };

  const deleteList=(id)=>{
    lists.value=lists.value.filter(item=>{
      return item.id!==id
    })
  }
  
  return { lists, setTodoList ,deleteList}
});
