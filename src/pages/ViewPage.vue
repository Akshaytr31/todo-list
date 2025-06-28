<template>
  <div class="main-container">
    <div class="back-button">
      <router-link to="/" style="text-decoration: none">
        <BaseButtons variant="back" text="back" />
      </router-link>
    </div>
    <form @submit.prevent="addTodo" class="form-input">
      <div class="form-container">
        <div class="input-container">
          <label for="input">Todo item:</label>
          <input type="text" placeholder="Enter list item" v-model="newTask" />
        </div>
        <div class="input-container">
          <label for="type">Status:</label>
          <div class="select-container">
            <select name="type" id="type" v-model="form.status">
              <option value="-">-Select status-</option>
              <option value="Todo">Todo</option>
              <option value="In Progress">In Progress</option>
              <option value="Done">Done</option>
            </select>
          </div>
        </div>
      </div>
      <div class="button-container">
        <BaseButtons variant="primary" text="Update Task" />
      </div>
    </form>
  </div>
</template>
<script setup>
import { reactive, ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

import { useListStore } from "@/stores/ListStore";
import BaseButtons from "@/components/BaseButtons.vue";

const route = useRoute();

const router = useRouter();

const taskId = route.params.id;

console.log(taskId);

const form = reactive({
  status: "-",
  title: "",
});

const listStore = useListStore();

const newTask = ref("");

const addTodo = () => {
  if (newTask.value.length > 0) {
    listStore.updateTask({
      title: newTask.value,
      status: form.status,
      id: Number(taskId),
    });
    router.push("/");
  }
};

onMounted(() => {
  const task = listStore.lists.find((item) => item.id === Number(taskId));
  newTask.value = task.title;
  form.status = task.status;
});
</script>
<style lang="scss" scoped>
.main-container {
  margin: 20px auto;
  color: rgb(0, 0, 0);
  padding: 30px 0 40px;
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
  text-wrap: nowrap;
}

.input-container:last-child {
  gap: 80px;
}

.select-container {
  width: 100%;
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  border: 1px solid rgb(232, 232, 232);
}

.button-container {
  display: flex;
  justify-content: flex-end;
  padding-inline: 40px;
  text-wrap: nowrap;
}

.back-button {
  padding: 0 20px 20px;
}

input {
  padding: 8px;
  border-radius: 5px;
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
  padding: 7px;
  border-radius: 5px;
}

select:focus {
  outline: none;
}
</style>
