<template>
  <main>
    <!-- header -->

    <header>
      <h1>Todo list</h1>
    </header>

    <div class="list-elements">
      <div v-for="list in listStore.Lists" :key="list.id">
        <ListElement :list="list"/>
      </div>
    </div>
  </main>
</template>

<script>
import ListElement from "./components/ListElement.vue";
import { useListStore } from "./stores/ListStore";
export default {
  components:{ListElement},
  setup(){
    const listStore=useListStore()
    return {listStore}
  }
};
</script>