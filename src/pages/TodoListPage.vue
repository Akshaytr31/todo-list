<template>
  <main>
    <TaskForm>
      <template #footer>
        <div class="button-container">
          <BaseButtos variant="primary" text="Add Task" />
        </div>
      </template>
    </TaskForm>
    <TaskList />
  </main>
</template>
<script setup>
import TaskList from "@/components/TaskList.vue";
import TaskForm from "@/components/TaskForm.vue";
import BaseButtos from "@/components/BaseButton.vue";
</script>
<style lang="scss" scoped>
.button-container{
  display: flex;
  justify-content: flex-end;
  padding-inline: 40px;
}
</style>