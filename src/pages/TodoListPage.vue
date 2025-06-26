<template>
  <main>
    <header>
      <h1>Todo List</h1>
    </header>
    <TaskForm />
    <TaskList />
    <DeleteItem />
  </main>
</template>
<script setup>
import TaskList from "@/components/TaskList.vue";
import TaskForm from "@/components/TaskForm.vue";
</script>
