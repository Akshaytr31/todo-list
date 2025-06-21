<template>
  <div class="list-wrapper">
    <p>{{ list.title }}</p>
    <div class="container">
      <BaseButtons variant="view" text="view" />
      <BaseButtons
        variant="delete"
        icon="delete"
        @delete-event="deleteTodoList"
      />
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

import { useListStore } from "@/stores/ListStore";
import BaseButtons from "./BaseButtons.vue";

const listStore = useListStore();
const props = defineProps({
  list: {
    title: String,
    id: Number,
  },
});

const deleteTodoList = (id) => {
  listStore.deleteList(props.list.id);
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  gap: 40px;
  align-items: center;
}

.delete {
  height: 41px;
  display: flex;
  justify-content: center;
}

.list-wrapper {
  max-width: 640px;
  margin: 4px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 30px;
  background: rgb(255, 252, 252);
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
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