<template>
  <main>
    <TaskForm />
    <TaskList />
    <DeleteItem />
  </main>
</template>
<script setup>
import DeleteItem from "@/components/DeleteItem.vue";
import TaskList from "@/components/TaskList.vue";
import TaskForm from "@/components/TaskForm.vue";
</script>
