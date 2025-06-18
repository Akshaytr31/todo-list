<template>
    <button class="['base-button',variant]">
        {{ icon }}
    </button>
</template>

<script setup>
    defineProps({
        name:'BaseButton',
        variant:{
            type:String,
            default:'primary',
        },
        icon:{
            add:'Add',
            view:'View',
            delete:'Delete'
        }
    })
</script>

<style lang="scss" scoped>
    .base-button{
        padding: 10px;
        border: none;
        border-radius: 8px;
        font-size: 18px;
        cursor: pointer;
        transition: 0.3s ease all;
    }
    .base-button.primary{
        background-color: #007bff;
        color: #fff;
    }
</style>