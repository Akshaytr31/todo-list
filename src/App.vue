<template>
  <main>
    <!-- header -->

    <header>
      <h1>Todo list</h1>
    </header>
    

    <!-- input form -->
    <InputForm/>


    <div class="list-elements">
      <div v-for="list in listStore.Lists" :key="list.id">
        <ListElement :list="list"/>
      </div>
    </div>
  </main>
</template>

<script setup>
import InputForm from "./components/InputForm.vue";
import ListElement from "./components/ListElement.vue";
import { useListStore } from "./stores/ListStore";

  const listStore=useListStore()
  listStore.getTodoList()

</script>