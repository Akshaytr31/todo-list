<template>
  <div class="main-container">
    <form @submit.prevent class="form-input">
      <div class="form-container">
        <div class="input-container">
          <label for="input">Todo item:</label>
          <input
            id="input"
            type="text"
            placeholder="Enter list item"
            :value="modelValue.newTask"
            @input="handleTaskChange"
          />
        </div>
        <div class="input-container">
          <label for="type">Status:</label>
          <div class="select-container">
            <select
              id="type"
              :value="modelValue.status"
              @change="handleStatusChange"
            >
              <option value="">-Select status-</option>
              <option value="Todo">Todo</option>
              <option value="In Progress">In Progress</option>
              <option value="Done">Done</option>
            </select>
          </div>
        </div>

        <div class="input-container">
          <label for="user">Assigned to:</label>
          <div class="select-container">
            <select
              :value="modelValue.assignedUser"
              @change="handleAssignedUserChange"
            >
              <option value="">-Select User-</option>
              <option
                v-for="user in listStore.users"
                :key="user.id"
                :value="user.name"
              >
                {{ user.name }}
              </option>
            </select>
          </div>
        </div>
      </div>
      <slot name="footer"></slot>
    </form>
  </div>
</template>
<script setup lang="ts">
import { defineEmits, defineProps, onMounted } from "vue";
import { useListStore } from "@/stores/ListStore";
import type { FormType } from "@/types/FormType";

const props = withDefaults(defineProps<{ modelValue?: FormType }>(), {
  modelValue: () => ({
    newTask: "",
    status: "",
    assignedUser: null,
  }),
});
const emit = defineEmits(["update:modelValue"]);

const listStore = useListStore();

function handleInputChange(field: keyof FormType, value: string) {
  emit("update:modelValue", {
    ...props.modelValue,
    [field]: value,
  });
}

function handleTaskChange(e: Event) {
  const target = e.target as HTMLInputElement;
  handleInputChange("newTask", target.value);
}

function handleStatusChange(e: Event) {
  const target = e.target as HTMLSelectElement;
  handleInputChange("status", target.value);
}

function handleAssignedUserChange(e: Event) {
  const target = e.target as HTMLSelectElement;
  handleInputChange("assignedUser", target.value);
}

onMounted(async () => {
  await listStore.fetchUsers();
});
</script>
<style lang="scss" scoped>
.main-container {
  margin: 20px auto;
  color: rgb(0, 0, 0);
  padding: 40px 0;
  background: rgb(255, 255, 255);
  max-width: 745px;
  border-radius: 10px;
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.05);
}

.form-input {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.input-container {
  color: black;
  display: flex;
  align-items: center;
  padding-inline: 40px;
  gap: 50px;
  text-wrap: nowrap;
}

.userSelction {
  width: 100%;
}

.input-container:nth-child(2) {
  gap: 80px;
}

.input-container:last-child {
  gap: 38px;
}

.select-container {
  width: 100%;
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  border: 1px solid rgb(232, 232, 232);
}

.button-container {
  display: flex;
  justify-content: flex-end;
  padding-inline: 40px;
  text-wrap: nowrap;
}

input {
  padding: 8px;
  border-radius: 5px;
  border: none;
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.05);
  width: 100%;
  border: 1px solid rgb(232, 232, 232);
}

input:focus {
  outline-color: rgb(179, 204, 179);
}

select {
  border: none;
  width: 100%;
  background: rgb(255, 255, 255);
  padding: 7px;
  border-radius: 5px;
}

select:focus {
  outline: none;
}
</style>
