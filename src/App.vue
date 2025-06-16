<template>
  <main>
    <!-- header -->

    <header>
      <h1>Todo list</h1>
    </header>

    <div class="list-elements">
      <div v-for="list in listStore.Lists" :key="list.id">
        <p>{{ list.id }}</p>
      </div>
    </div>
  </main>
</template>

<script>
import { useListStore } from "./stores/ListStore";
export default {
  setup(){
    const listStore=useListStore()
    return {listStore}
  }
};
</script>