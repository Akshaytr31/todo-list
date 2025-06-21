<template>
  <main>
    <!-- header -->

    <header>
      <h1>Todo list</h1>
    </header>
    

    <!-- input form -->
    <InputForm/>

    <TaskList/>
    


  </main>
</template>

<script setup>
import TaskList from "./components/TaskList.vue";
import InputForm from "./components/InputForm.vue";
import { useListStore } from "./stores/ListStore";

  const listStore=useListStore()

</script>