<template>
  <div class="main-container">
    <form @submit.prevent="addTodo" class="form-input">
      <div class="form-container">
        <div class="input-container">
          <label for="input">Todo item:</label>
          <input
            type="text"
            placeholder="Enter list item"
            @input="updateNewTask"
            v-model="newTask"
          />
        </div>
        <div class="input-container">
          <label for="type">Status:</label>
          <div class="select-container">
            <select
              name="type"
              id="type"
              @change="updateStatus"
              v-model="form.status"
            >
              <option value="-">-Select status-</option>
              <option value="Todo">Todo</option>
              <option value="In Progress">In Progress</option>
              <option value="Done">Done</option>
            </select>
          </div>
        </div>
        <div class="input-container">
          <label for="user">Assigned to:</label>
          <UserDropDown
            :users="listStore.users"
            :modelValue="assignedUser"
            @update:modelValue="onUserSelect"
            class="userSelction"
          />
        </div>
      </div>
      <slot name="footer"></slot>
    </form>
  </div>
</template>
<script setup>
import { ref, reactive, onMounted, watch } from "vue";
import { useListStore } from "@/stores/ListStore";
import UserDropDown from "./UserDropDown.vue";

const props = defineProps({
  newTask: String,
  status: String,
  assignedUser: Object,
});

const emit = defineEmits([
  "update:newTask",
  "update:status",
  "update:assignedUser",
]);

const onUserSelect = (val) => {
  assignedUser.value = val;
  emit("update:assignedUser", val);
};

const newTask = ref("");

const form = reactive({ status: "-" });

const assignedUser = ref(null);

const listStore = useListStore();


const updateNewTask = (event) => {
  emit("update:newTask", event.target.value);
};

const updateStatus = (event) => {
  emit("update:status", event.target.value);
};

const addTodo = () => {
  if (newTask.value.length > 0) {
    listStore.setTodoList({
      title: newTask.value,
      status: form.status,
      assignedUser: assignedUser.value,
      id: listStore.lists.length + 1,
    });
    
    newTask.value = "";
    form.status = "-";
    assignedUser.value = "";
  }
};

onMounted(() => {
  if (listStore.users.length === 0) {
    listStore.fetchUsers();
  }
});

watch(
  () => props.assignedUser,
  (val) => {
    assignedUser.value = val;
  },
  { immediate: true }
);
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
