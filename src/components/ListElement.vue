<template>
    <div class="list">
        <p>{{ list.title }}</p>
        <div class="icons">
            <i class="material-icons">delete</i>
        </div>
    </div>
</template>

<script>
    export default {
       props:['list']
        
    }
</script>


<style lang="scss" scoped>
.list{
    margin: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-inline: 30px;
    background:rgb(255, 252, 252);
    box-shadow: 2px 4px 6px rgba(0,0,0,0.05);
    border-radius: 5px;
}
.list:hover{
    box-shadow: 2px 4px 6px rgba(0,0,0,0.09);
    transition: 0.5s ease-in;
}
.material-icons{
    color: #fff;
    background: rgb(216, 3, 3);
    padding: 8px;
    border-radius: 8px;
    box-shadow: 2px 4px 6px rgba(0,0,0,0.05);
}
.material-icons:hover{
    scale: 1.02;
    transition: 0.2s ease;
}
</style>