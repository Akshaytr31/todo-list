<template>
  <div class="wrapper">
    <div class="back-button">
      <router-link to="/" style="text-decoration: none">
        <BaseButtons variant="back" text="back" />
      </router-link>
    </div>
    <TaskForm
      v-model:newTask="newTask"
      v-model:status="status"
      v-model:assignedUser="assignedUser"
    >
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
<script setup>
import { ref } from "vue";
import { watchEffect } from "vue";
import { useRoute, useRouter } from "vue-router";

import { useListStore } from "@/stores/ListStore";
import BaseButtons from "@/components/BaseButtons.vue";
import TaskForm from "@/components/TaskForm.vue";
import User from "@/types/User";

const route = useRoute();

const router = useRouter();

const taskID = route.params.id;

const listStore = useListStore();

const newTask = ref("");

const status = ref("");

const assignedUser = (ref < User) | (null > null);

const updateTodoItem = () => {
  if (newTask.value.length > 0) {
    listStore.updateTodolist({
      title: newTask.value,
      status: status.value,
      assignedUser: assignedUser.value,
      id: Number(taskID),
    });
    router.push("/");
  }
};

watchEffect(() => {
  const task = listStore.lists.find((item) => item.id === Number(taskID));
  if (task) {
    newTask.value = task.title;
    status.value = task.status;
    assignedUser = task.assignedUser || null;
  } else {
    console.log("There is no task");
  }
});
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
