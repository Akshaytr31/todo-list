<template>
  <div class="list">
    <p>{{ list.title }}</p>
    <div class="container">
      <BaseButtons variant="view" text="view" />
      <div class="icons">
        <BaseButtons variant="delete" icon="delete" @delete-event="listStore.deleteList(list.id)" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useListStore } from "@/stores/ListStore";
import BaseButtons from "./BaseButtons.vue";
import { defineProps } from "vue";

const listStore=useListStore()
const props = defineProps({
  list: {
    title: String,
    id: Number,
  },
});
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  gap: 40px;
  align-items: center;
}
.delete {
  height: 47px;
  display: flex;
  justify-content: center;
}
.list {
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
.list:hover {
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
