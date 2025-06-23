<template>
  <button :class="['base-button', variant]">
    <i v-if="icon" class="material-icons" @click="handleEvent">{{ icon }}</i>
    <span @click="$emit('clearEvent')">{{ text }}</span>
  </button>
</template>
<script setup>
import { defineEmits } from "vue";

defineProps({
  text: String,
  variant: {
    type: String,
    default: "primary",
  },
  icon: String,
});

const emit = defineEmits();

const handleEvent = () => {
  emit("onClick");
};
</script>
<style lang="scss" scoped>
.base-button {
  padding: 10px;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  cursor: pointer;
  transition: 0.3s ease all;
  display: flex;
  align-items: center;
  gap: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.base-button i {
  padding-left: 8px;
}

.base-button.primary {
  background-color: green;
  color: rgb(255, 255, 255);
}

.base-button.view {
  background-color: rgb(0, 123, 255);
  color: rgb(255, 255, 255);
}

.base-button.delete {
  background-color: rgb(255, 0, 0);
  color: rgb(255, 255, 255);
}

.base-button.clear {
  background-color: rgb(255, 132, 0);
  color: rgb(255, 255, 255);
  margin-top: 20px;
}

.base-button.edit {
  background-color: rgb(0, 183, 255);
  color: rgb(255, 255, 255);
}

.base-button.home {
  background-color: rgb(47, 47, 47);
  color: rgb(255, 255, 255);
}

.clear-block {
  display: flex;
}
</style>
