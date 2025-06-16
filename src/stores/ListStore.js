import { defineStore } from "pinia";

import { ref } from "vue";


export const useListStore=defineStore('listStore',()=>{
    const Lists=ref([{id:1,title:'list one'}])
    return {Lists}
})