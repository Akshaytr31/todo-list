<template>
  <main>
    <header>
      <h1>{{ navHeading.title }}</h1>
    </header>
    <InputForm />
    <TaskList />
    <DeleteItem />
  </main>
</template>
<script setup>
import DeleteItem from "@/components/DeleteItem.vue";
import TaskList from "@/components/TaskList.vue";
import InputForm from "@/components/TaskForm.vue";

const navHeading = {
  title: "Todo List",
};
</script>
