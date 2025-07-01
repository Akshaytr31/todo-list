<template>
  <div v-if="show" class="overlay">
    <div class="wraper">
      <h3>{{ modalData.heading }}</h3>
      <div>
        <p>
          {{ modalData.message }}
        </p>
      </div>
      <div class="container-buttons">
        <BaseButtons
          variant="plane"
          text="Cancel"
          @on-click="$emit('cancel')"
        />
        <BaseButtons
          :variant="confirmVariant"
          :text="modalData.confirmText"
          @on-click="$emit('confirm')"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import { defineProps } from "vue";

import BaseButtons from "./BaseButtons.vue";

const props = defineProps({
  show: Boolean,
  modalData: Object,
  cancelVariant: String,
  confirmVariant: String,
  confirm: Function,
  cancel: Function,
});
</script>
<style lang="scss" scoped>
.overlay {
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

.wraper {
  background-color: white;
  padding: 20px;
  width: 500px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.container {
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

.container-buttons {
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
