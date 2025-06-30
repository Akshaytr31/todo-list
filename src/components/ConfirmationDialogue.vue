<template>
  <div v-if="show" class="delete-overlay">
    <div class="delete-wraper">
      <h3>{{ modalData.heading }}</h3>
      <div>
        <p>
          {{ modalData.message }}
        </p>
      </div>
      <div class="delete-container-buttons">
        <BaseButtons
          :variant="cancelVariant"
          text="Cancel"
          @on-click="$emit('onCancel')"
        />
        <BaseButtons
          :variant="confirmVariant"
          :text="confirmText"
          @on-click="$emit('onConfirm')"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import { defineProps } from "vue";
import BaseButtons from "./BaseButtons.vue";

const props = defineProps({
  show: {
    type: Boolean,
    required: true,
  },
  modalData: {
    type: Object,
  },
  cancelVariant: {
    type: String,
  },
  confirmText: {
    type: String,
    default: "Yes",
  },
  confirmVariant: {
    type: String,
    default: "delete",
  },
  onConfirm: {
    type: Function,
    required: true,
  },
  onCancel: {
    type: Function,
    required: true,
  },
});
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
