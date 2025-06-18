<template>
  <div class="main-container">
    <form @submit.prevent="addTodo" class="from-input">
      <input type="text" placeholder="Enter list item" v-model="newTask" />
      <button>Add</button>
    </form>
    <div class="select-box">
      <label for="type">Select status</label>
      <select name="type" id="type" v-model="form.type" class="select">
        <option value="todo">Todo</option>
        <option value="pending">In Progress</option>
        <option value="done">Done</option>
      </select>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useListStore } from "@/stores/ListStore";

const form = reactive({
  type: "todo",
});
const listStore = useListStore();
const newTask = ref("");

const addTodo = () => {
  if (newTask.value.length > 0) {
    listStore.Lists.push({
      title: newTask.value,
    });
    newTask.value = "";
  }
  return { addTodo, newTask, form };
};
</script>

<style lang="scss" scoped>
.main-container {
  background: #fff;
}
.select {
  border: 2px solid gray;
  background: #fff;
  max-width: 300px;
}
.select:focus {
  outline: none;
}
.select-box {
  background: #fff;
  display: flex;
  padding-inline: 30px;
  flex-direction: column;
  color: #000;
}
form {
  display: flex;
  max-width: 600px;
  background: #fff;
  height: 59px;
  padding-inline: 30px;
  margin: 10px auto;
  border-radius: 5px;
}
input {
  outline: none;
  border: 2px gray solid;
  height: 57px;
  width: 100%;
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
</style>
