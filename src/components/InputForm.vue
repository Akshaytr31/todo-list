<template>
    <form @submit.prevent="handleSubmit" class="from-input">
        <input type="text"
        placeholder="Enter list item"
        v-model="newElement"
        >
        <button>+</button>
    </form>
</template>

<script>
import { ref } from 'vue';
import { useListStore } from '@/stores/ListStore';

    export default {
        setup(){

            const listStore=useListStore()
            const newElement=ref('')
            const handleSubmit=()=>{
                if(newElement.value.length>0){
                    listStore.Lists.push({
                        title:newElement.value,
                        id:Math.floor(Math.random()*1000)
                    })
                    newElement.value=''
                }
            }
            return {handleSubmit,newElement}
        }
        
    }
</script>

<style lang="scss" scoped>
.main{
    display: flex;
    justify-content: center;
}
form{
    display: flex;
    max-width:600px;
    background: #fff;
    height: 59px;
    padding-inline: 30px;
    margin: 10px auto;
    border-radius: 5px;
    box-shadow: 2px 4px 6px rgba(0,0,0,0.05);

}
input{
    outline: none;
    border: 0;
    height: 57px;
    width: 100%;
}
button{
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    border: 0;
    padding-inline: 20px;
    background: blue;
    font-size: 40px;
    box-shadow: 2px 4px 6px rgba(0,0,0,0.05);

}

</style>