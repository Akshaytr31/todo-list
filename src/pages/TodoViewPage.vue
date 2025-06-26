<template>
  <div class="view-container">
    <router-link to="/" style="text-decoration: none">
      <BaseButtons variant="home" icon="keyboard_arrow_left" />
    </router-link>
    <div v-for="item in todo" :key="item.id" class="view-task-Detail">
      <p>Todo item: {{ item.title }}</p>
      <p>Status: {{ item.status }}</p>
      <div class="edit-button">
        <BaseButtons variant="edit" icon="edit" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed, ref, watchEffect } from "vue";
import { useRoute } from "vue-router";

import { useListStore } from "@/stores/ListStore";
import BaseButtons from "@/components/BaseButtons.vue";

const route = useRoute();

const listStore = useListStore();

const taskId = computed(() => Number(route.params.id));

const todo = ref([]);

watchEffect(() => {
  todo.value = listStore.lists.filter((item) => item.id === taskId.value);
});
</script>
<style lang="scss" scoped>
.view-container {
  max-width: 700px;
  margin: 10px auto;
  padding: 20px;
  color: rgb(13, 13, 13);
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: center;
  flex-direction: column;
  border: 1px solid rgb(235, 233, 233);
  border-radius: 10px;
  gap: 10px;
}

.edit-button {
  display: flex;
  justify-content: flex-end;
}

.view-task-Detail {
  padding: 20px;
  border: 1px solid rgb(162, 177, 162);
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
}

.view-task-Detail p {
  padding: 10px;
  border: 1px solid rgb(230, 230, 230);
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
}
</style>
