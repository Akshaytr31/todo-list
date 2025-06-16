import { defineStore } from "pinia";


export const useListStore=defineStore('listStore',{
    state:()=>({
        Lists:[
            {
                id:1,title:'list one'
            }
        ],
    })
})