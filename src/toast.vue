<template>
    <div v-show="shown" class="toast-mask">
        <div class="toast">
            {{message}}
        </div>
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
        font-size: 16px;
        background-color: transparent;
        box-sizing: border-box;
        *{
            box-sizing: border-box;
        }
    }

    .toast{
        position: absolute;
        top: 24px;
        left: 50%;
        transform: translate(-50%, 0);
        width: 5em;
        height: 3em;
        font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
        font-size: 16px;
        color: #fff;
        text-align: center;
        border-radius: 4px;
        background: rgba(0, 0, 0, 0.7);
        &:before{
            content: '';
            display: inline-block;
            width: 0;
            height: 100%;
            font-size: 0;
            vertical-align: middle;
        }
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
