<template>
  <div v-if="show" class="delete-overlay">
    <div class="delete-wraper">
      <h3>Confirm Deletion</h3>
      <div>
        <p>
          Are you sure you want to delete <strong>{{ title }}</strong
          >?
        </p>
      </div>
      <div class="delete-container-buttons">
        <BaseButton variant="plane" text="No" @on-click="closeModal" />
        <BaseButton variant="delete" text="Yes" @on-click="deleteTodoItem" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed } from "vue";
import { defineProps } from "vue";
import { useListStore } from "@/stores/ListStore";
import BaseButton from "./BaseButtons.vue";
import { useRoute } from "vue-router";

const props = defineProps({
  list: {
    title: String,
    id: Number,
  },
  show: Boolean,
  id: Number,
});

const title = props.list.title;

const route = useRoute();

const listStore = useListStore();

const taskId = computed(() => Number(route.params.id));

const filterById = (id) => {
  return computed(() => {
    return listStore.lists.filter((item) => item.id === id);
  });
};

const emit = defineEmits(["close"]);

const closeModal = () => {
  emit("close");
};

const deleteTodoItem = (id) => {
  listStore.deleteList(props.list.id);
};
</script>
<style lang="scss" scoped>
.delete-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(111, 104, 104);
  flex-direction: column;
}

.delete-wraper {
  background-color: white;
  padding: 20px;
  width: 500px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.delete-container {
  background-color: rgb(255, 255, 255);
  width: 500px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-radius: 10px;
  border: 1px solid rgb(222, 219, 219);
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.05);
}

.delete-container-buttons {
  display: flex;
  gap: 20px;
  justify-content: flex-end;
}

h3 {
  margin: 0;
}

p {
  margin: 0;
}
</style>
