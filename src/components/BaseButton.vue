<template>
  <button :class="['base-button',variant]">
      <i v-if="icon" class="material-icons" @click="$emit('deleteEvent')">{{ icon }}</i>
      <span>{{ text }}</span>
  </button>
</template>

<script setup>
  defineProps({
      text:String,
      variant:{
          type:String,
          default:'primary'
      },
      icon:String
  })
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

.base-button i{
padding-left: 8px;
}

.base-button.primary {
background-color: green;
color: #fff;
}

.base-button.view {
background-color: #007bff;
color: #fff;
}

.base-button.delete {
background-color: red;
color: #fff;
}

.base-button.clear {
background-color: rgb(255, 132, 0);
color: #fff;
margin-top: 20px;
}

.clear-block{
display: flex;
}

.number-task{
display: flex;
gap: 10px;
}
</style>