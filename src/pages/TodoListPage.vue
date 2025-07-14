<template>
  <main>
    <TaskForm v-model="form">
      <template #footer>
        <div class="button-container">
          <BaseButtons variant="primary" text="Add Task" @on-click="addTodo" />
        </div>
      </template>
    </TaskForm>
    <TaskList />
  </main>
</template>
<script setup lang="ts">
import { ref } from "vue";

import TaskList from "@/components/TaskList.vue";
import TaskForm from "@/components/TaskForm.vue";
import BaseButtons from "@/components/BaseButton.vue";
import { useListStore } from "@/stores/ListStore";
import type { index } from "@/types";

const listStore = useListStore();

const form = ref<index>({
  newTask: "",
  status: "",
  assignedUser: null,
});

const addTodo = () => {
  if (form.value.newTask.trim().length > 0) {
    listStore.setTodoList({
      title: form.value.newTask,
      status: form.value.status,
      assignedUser: form.value.assignedUser,
      id: listStore.lists.length + 1,
    });

    form.value.newTask = "";
    form.value.status = "";
    form.value.assignedUser = null;
  }
};
</script>
<style lang="scss" scoped>
.button-container {
  display: flex;
  justify-content: flex-end;
  padding-inline: 40px;
}
</style>
