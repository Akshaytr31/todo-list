<template>
  <div class="list-elements">
    <div v-for="list in listStore.lists" :key="list.id">
      <TodoListItem :list="list" />
    </div>
    <div class="clear-block">
      <div>
        <label for="Total">Total number of Tasks : </label>
        <span class="count-tasks">{{ listStore.lists.length }}</span>
      </div>
      <BaseButtons variant="clear" text="Clear All" @on-click="clearAllTask" />
    </div>
  </div>
</template>
<script setup>
import { useListStore } from "@/stores/ListStore";
import BaseButtons from "./BaseButtons.vue";
import TodoListItem from "./TodoListItem.vue";

const listStore = useListStore();

const clearAllTask = () => {
  listStore.lists = [];
};
</script>
<style lang="scss" scoped>
.clear-block {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
}

.count-tasks {
  padding: 0px 10px;
  background: rgb(230, 230, 231);
  color: #646363;
  border-radius: 5px;
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.05);
}
</style>
