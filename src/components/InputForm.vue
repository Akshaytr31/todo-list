<template>
  <div class="main-container">
    <form @submit.prevent="addTodo" class="from-input">
      <input type="text" placeholder="Enter list item" v-model="newTask" />
      <div class="select-box">
        <label for="type">Status</label>
        <select name="type" id="type" v-model="form.type" class="select">
          <option value="todo">Todo</option>
          <option value="pending">In Progress</option>
          <option value="done">Done</option>
        </select>
      </div>
    </form>
    <BaseButtons variant="primary" text="Add"/> 
  </div>
</template>

<script setup>
import BaseButtons from "./BaseButtons.vue";
import { reactive, ref } from "vue";
import { useListStore } from "@/stores/ListStore";

const form = reactive({
  type: "todo",
});
const listStore = useListStore();
const newTask = ref("");

const addTodo = () => {
  if (newTask.value.length > 0) {
    listStore.getTodoList({ title: newTask.value });
    newTask.value = "";
  }
  return { addTodo, newTask, form };
};
</script>

<style lang="scss" scoped>
.main-container {
  background: #fff;
  padding: 20px 40px;
  max-width: 600px;
  margin: 30px auto 0 auto;
  border-radius: 15px;
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
.from-input{
  display: flex;
  gap: 30px;
  justify-content: space-between;
  width: 100%;
}
.select {
  border: 2px solid rgb(245, 245, 245);
  background: #fff;
  max-width: 300px;
  border-radius:6px ;
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.05);
  padding: 4px;
}
.select:focus {
  outline: none;
}
input::placeholder{
  font-size: 20px;
}
.select-box {
  background: #fff;
  display: flex;
  // padding-inline: 30px;
  flex-direction: column;
  color: #676565;
}
form {
  display: flex;
  max-width: 600px;
  background: #fff;
  height: 59px;
  // padding-inline: 30px;
  margin: 10px auto;
  border-radius: 5px;
}
input {
  outline: none;
  border: 2px rgb(238, 238, 238) solid;
  width: 100%;
  border-radius: 50px;
  padding: 20px 20px 13px 20px;;
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.05);
}
button {
  height: 63px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  border: 0;
  padding-inline: 20px;
  background: blue;
  font-size: 40px;
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.05);
}
.select option{
  background: rgb(255, 255, 255);
  border: none;
}
</style>
