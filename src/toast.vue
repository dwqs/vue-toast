<template>
    <div v-show="shown">
        <div class="test">{{message}}</div>
    </div>
</template>

<style scoped lang="less">
    .test{
        color: red;
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
