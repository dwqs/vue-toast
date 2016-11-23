<template>
    <div v-show="shown" class="toast-mask">
        <div class="test">{{message}}</div>
    </div>
</template>

<style scoped lang="less">
    .toast-mask{
        position: fixed;
        z-index: 1024;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: transparent;
        box-sizing: border-box;
    }
</style>

<script>

    export default{
        data(){
           return {
              shown:false
           }
        },
        props:{
            message:String,
            type:{
                type:String,
                default:'info'  //info/success/warn/error/loading
            },
            duration:{
                type:Number,
                default:1500
            }
        }
    }
</script>
