<template>
  <TaskForm v-model:newTask="newTask" v-model:status="status" :showAddButton="false">
    <template #back>
      <div class="back-button">
        <router-link to="/" style="text-decoration: none">
          <BaseButtons variant="back" text="back" />
        </router-link>
      </div>
    </template>
    <template #edit>
      <div class="edit-button">
        <BaseButtons variant="edit" text="Edit Task" @on-click="addTodo" />
      </div>
    </template>
  </TaskForm>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

import { useListStore } from "@/stores/ListStore";
import BaseButtons from "@/components/BaseButtons.vue";
import TaskForm from "@/components/TaskForm.vue";

const route = useRoute();

const router = useRouter();

const taskId = route.params.id;

const listStore = useListStore();

const newTask = ref("");

const status = ref("");

const addTodo = () => {
  if (newTask.value.length > 0) {
    listStore.updateTask({
      title: newTask.value,
      status: status,
      id: Number(taskId),
    });
    router.push("/");
  }
};

onMounted(() => {
  const task = listStore.lists.find((item) => item.id === Number(taskId));
  newTask.value = task.title;
  status.value = task.status;
});
</script>
<style lang="scss" scoped>
.edit-button {
  display: flex;
  justify-content: flex-end;
  padding-inline: 40px;
}

.back-button {
  padding: 0 20px 20px;
}
</style>
