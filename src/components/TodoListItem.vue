<template>
  <div class="list-wrapper">
    <p>{{ list.title }}</p>
    <p>{{ list.status || "-" }}</p>
    <div class="container">
      <router-link :to="`/view/${props.list.id}`" style="text-decoration: none">
        <BaseButtons variant="view" text="view" />
      </router-link>
      <BaseButtons variant="delete" icon="delete" @on-click="showModal" />
      <ConfirmationDialogue
        v-if="isModalOpen"
        :list="list"
        :show="isModalOpen"
        :modal-data="modalContent"
        confirm-variant="delete"
        @confirm="deleteTodoItem"
        @cancel="closeModal"
      />
    </div>
  </div>
</template>
<script setup>
import { defineProps, ref } from "vue";

import { useListStore } from "@/stores/ListStore";
import BaseButtons from "./BaseButtons.vue";
import ConfirmationDialogue from "./ConfirmationDialogue.vue";

const listStore = useListStore();

const props = defineProps({
  list: {
    title: String,
    status: String,
    id: Number,
  },
});

const isModalOpen = ref(false);

const modalContent = {
  heading: "Confirm Deletion",
  message: "Are you sure you want to delete this item?",
  confirmText: "Delete",
};

const taskId = props.list.id;

const deleteTodoItem = () => {
  listStore.deleteList(taskId);
};

const showModal = () => {
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  gap: 40px;
  align-items: center;
}

.delete {
  height: 37px;
  display: flex;
  justify-content: center;
}

.list-wrapper {
  max-width: 640px;
  margin: 4px auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding-left: 30px;
  background: rgb(255, 252, 252);
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  border: 1px solid rgb(233, 233, 233);
}

.list-wrapper:hover {
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.09);
  transition: 0.5s ease-in;
}

.material-icons {
  color: #fff;
  background: rgb(216, 3, 3);
  padding: 8px;
  border-radius: 8px;
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.05);
}

.material-icons:hover {
  scale: 1.02;
  transition: 0.2s ease;
}
</style>
