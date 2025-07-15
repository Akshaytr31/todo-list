<template>
  <div class="wrapper">
    <div class="back-button">
      <router-link to="/" style="text-decoration: none">
        <BaseButtons variant="back" text="back" />
      </router-link>
    </div>
    <TaskForm v-model="form">
      <template #footer>
        <div class="edit-button">
          <BaseButtons
            variant="edit"
            text="Edit Task"
            @on-click="updateTodoItem"
          />
        </div>
      </template>
    </TaskForm>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { watch } from "vue";
import { useRoute, useRouter } from "vue-router";

import { useListStore } from "@/stores/ListStore";
import BaseButtons from "@/components/BaseButtons.vue";
import TaskForm from "@/components/TaskForm.vue";
import type { Task } from "@/types";

const route = useRoute();

const router = useRouter();

const taskID = route.params.id;

const listStore = useListStore();

const currentItem = listStore.lists.find(
  (item) => item.id.toString() === taskID
);

const form = ref<Task>({
  newTask: currentItem?.title || "",
  status: currentItem?.status || "",
  assignedUser: currentItem?.assignedUser || null,
});

const updateTodoItem = () => {
  if (form.value.newTask.length > 0) {
    listStore.updateTodolist({
      title: form.value.newTask,
      status: form.value.status,
      assignedUser: form.value.assignedUser,
      id: Number(taskID),
    });
    router.push("/");
  }
};

watch(
  () => listStore.lists,
  (newList) => {
    const task = newList.find((item) => item.id === Number(taskID));
    if (task) {
      form.value.newTask = task.title;
      form.value.status = task.status;
      form.value.assignedUser = task.assignedUser || null;
    }
  },
  { immediate: true, deep: true }
);
</script>
<style lang="scss" scoped>
.wrapper {
  max-width: 700px;
  margin: 0 auto;
  position: relative;
}

.main-container {
  padding: 80px 0 40px;
}

.edit-button {
  display: flex;
  justify-content: flex-end;
  padding-inline: 40px;
}

.back-button {
  position: absolute;
  padding: 10px;
  top: 0;
}
</style>
