<template>
  <div class="main-container">
    <form @submit.prevent="addTodo" class="form-input">
      <div class="form-container">
        <div class="input-container">
          <label for="input">Todo Item:</label>
          <input type="text" placeholder="Enter list item" v-model="newTask" />
        </div>
        <div class="input-container">
          <label for="type">Status:</label>
          <div class="select-container">
            <select name="type" id="type" v-model="form.status">
              <option value="Todo">Todo</option>
              <option value="In Progress">In Progress</option>
              <option value="Done">Done</option>
            </select>
          </div>
        </div>
      </div>
      <div class="button-container">
        <BaseButtons variant="primary" text="Add Task"/>
      </div>
    </form>
  </div>
</template>
<script setup>
import { reactive, ref } from "vue";

import { useListStore } from "@/stores/ListStore";
import BaseButtons from "./BaseButtons.vue";

const form = reactive({
  status: "select status",
});

const listStore = useListStore();

const newTask = ref("");

const addTodo = () => {
  if (newTask.value.length > 0) {
    listStore.setTodoList({ 
      title: newTask.value ,
      status:form.status,
      id: Math.floor(Math.random() * 10000)
    });
    newTask.value = "";
  }

  return { addTodo, newTask, form };
};
</script>
<style lang="scss" scoped>
.main-container {
  margin: 20px auto;
  color: rgb(0, 0, 0);
  padding: 40px 0;
  background: rgb(255, 255, 255);
  max-width: 745px;
  border-radius: 10px;
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.05);
}

.form-input {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.input-container {
  color: black;
  display: flex;
  align-items: center;
  padding-inline: 40px;
  gap: 50px;
}

.input-container:last-child {
  gap: 40px;
}

.select-container{
  width: 100%;
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.05);
  padding:7px 10px;
  border-radius: 10px;
  border: 1px solid rgb(232, 232, 232);}

.button-container {
  display: flex;
  justify-content: flex-end;
  padding-inline: 40px;
  text-wrap: nowrap;
}

input {
  padding: 10px;
  border-radius: 10px;
  border: none;
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.05);
  width: 100%;
  border: 1px solid rgb(232, 232, 232);
}

input:focus {
  outline-color: rgb(179, 204, 179);
}

select {
  border: none;
  width: 100%;
  background: rgb(255, 255, 255);
}

select:focus {
  outline: none;
}
</style>