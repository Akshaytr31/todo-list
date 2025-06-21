<template>
  <div class="list-elements">
    <div v-for="list in listStore.lists" :key="list.id">
      <ListElement :list="list" />
    </div>
    <div class="clear-block">
      <div class="number-task">
        <label for="">Total number of Tasks : </label>
        <span class="count-tasks">{{ listStore.lists.length }}</span>
      </div>
      <BaseButtons variant="clear" text="Clear All" @clear-event="clearAll" />
    </div>
  </div>
</template>

<script setup>
import { useListStore } from '@/stores/ListStore';
import BaseButtons from './BaseButtons.vue';
import ListElement from './ListElement.vue';

const listStore = useListStore();

const clearAll = () => {
  listStore.lists = [];
};
</script>

<style lang="scss" scoped>
.clear-block{
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
}

.count-tasks{
    padding:5px 10px;
    background: rgb(95, 194, 243);
    color: #fff;
    border-radius: 10px;
}
</style>