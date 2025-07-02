<template>
  <div class="dropdown-wrapper">
    <div class="dropdown-toggle" @click="toggleDropdown">
      {{ selectedUser?.name || "-Select User-" }}
      <span class="material-icons arrow">arrow_back_ios_new</span>
    </div>
    <ul v-if="open" class="dropdown-menu">
      <li v-for="user in users" :key="user.id" @click="selectUser(user)">
        {{ user.name }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  users: Array,
  modelValue: Object,
});

const emit = defineEmits(["update:modelValue"]);

const open = ref(false);

const selectedUser = ref(props.modelValue);

const toggleDropdown = () => {
  open.value = !open.value;
};

const closeDropdown = () => {
  open.value = false;
};

const selectUser = (user) => {
  selectedUser.value = user;
  emit("update:modelValue", user);
  closeDropdown();
};
</script>
<style scoped>
.dropdown-wrapper {
  position: relative;
  width: 200px;
  font-family: sans-serif;
}

.dropdown-toggle {
  font-size: 15px;
  padding: 5px 3px 5px 5px;
  border: 1px solid rgb(228, 226, 226);
  border-radius: 5px;
  cursor: pointer;
  background: rgb(255, 255, 255);
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.05);
}

.arrow {
  font-size: 11px;
  rotate: 270deg;
  font-weight: bold;
}

.dropdown-menu {
  position: absolute;
  width: 100%;
  background: rgb(255, 255, 255);
  border: 1px solid rgb(204, 204, 204);
  margin-top: 2px;
  max-height: 200px;
  overflow-y: auto;
  z-index: 10;
  padding: 0;
  list-style: none;
}

.dropdown-menu li {
  padding: 10px;
  cursor: pointer;
}

.dropdown-menu li:hover {
  background: rgb(240, 240, 240);
}
</style>
