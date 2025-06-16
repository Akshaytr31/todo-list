import { defineStore } from "pinia";


export const useListStore=defineStore('listStore',{
    state:()=>({
        Lists:[
            {
                id:1,title:'list one'
            }
        ],
    }),
    actions:{
        addTask(list){
            this.Lists.push(list)
        },
        deleteTask(id){
            this.list=this.Lists.filter(t=>{
                return t.id!==id
            })
        }
    }
})