<template>
  <div class="main-container">
    <form @submit.prevent="addTodo" class="form-input">
      <div class="container">
        <div class="input-container">
          <label for="">Input</label>
          <input type="text" placeholder="Enter list item" v-model="newTask" />
        </div>
        <div class="input-container">
          <label for="type">Status</label>
          <select name="type" id="type" v-model="form.type" class="select">
            <option value="todo">Todo</option>
            <option value="pending">In Progress</option>
            <option value="done">Done</option>
          </select>
        </div>
      </div>
      <div class="button-container">
        <BaseButtons variant="primary" text="Add" />
      </div>
    </form>
  </div>
</template>

<script setup>
import { reactive ,ref} from "vue";
import BaseButtons from "./BaseButtons.vue";
import { useListStore } from "@/stores/ListStore";

const form = reactive({
  type: "todo",
});
const listStore = useListStore();
const newTask = ref("");

const addTodo = () => {
  if (newTask.value.length > 0) {
    listStore.setTodoList({ title: newTask.value });
    newTask.value = "";
  }
  return { addTodo, newTask, form };
};
</script>

<style lang="scss" scoped>
.primary{
  padding-inline: 40px;
  max-width: 60px;
  display: flex;
  justify-content: center;
  float: left;
}
.main-container{
  margin: 20px auto;
  color: #000;
  padding: 40px 0;
  background: #fff;
  max-width: 700px;
  border-radius: 10px;
  box-shadow: 2px 4px 6px rgba(0,0,0,0.05);
}
.form-input{
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.container{
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.input-container{
  color: black;
  display: flex;
  align-items: center;
  padding-inline: 40px;
  gap: 50px;
}
.input-container:last-child{
  gap: 40px;
}
.button-container{
  display: flex;
  justify-content: flex-end;
  padding-inline: 40px;
}

input{
  padding: 10px;
  border-radius: 10px;
  border: none;
  box-shadow: 2px 4px 6px rgba(0,0,0,0.05);
  width: 100%;
  border: 1px solid rgb(232, 232, 232);

}
input:focus{
  outline-color: rgb(179, 204, 179);
}
select{
 width: 100%;
 box-shadow: 2px 4px 6px rgba(0,0,0,0.05);
 border: none;
 padding: 10px;
 border-radius:10px ;
}
select:focus{
  outline-color: rgb(179, 204, 179);
}
</style>
