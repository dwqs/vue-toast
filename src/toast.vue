<template>
    <div v-show="shown" class="toast-mask">
        <div class="toast" :style="{color:textColor}">
            <i :class="['toast-icon',type+'-icon',{'toast-spin': type==='loading'}]"></i>
            <span class="message" v-text="message"></span>
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
        width: auto;
        max-width: 270px;
        height: 44px;
        padding: 8px 16px;
        font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
        font-size: 16px;
        text-align: center;
        border-radius: 4px;
        background: #FFFFFF;
        box-shadow: 0 2px 8px rgba(0, 0, 0, .2);
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        &:before{
            content: '';
            display: inline-block;
            width: 0;
            height: 100%;
            font-size: 0;
            vertical-align: middle;
        }
    }

    .toast-icon{
        position: relative;
        top: 5px;
        display: inline-block;
        width: 18px;
        height: 18px;
        font-size: 14px;
        color: #FFFFFF;
        margin-right: 4px;
        border-radius: 50%;
        &.info-icon{
            background-color: #2DB7F5;
            &:before{
                content: '';
                position: absolute;
                top: 3px;
                left: 8px;
                width: 2px;
                height: 2px;
                border-radius: 50%;
                background-color: #FFFFFF;
            }
            &:after{
                content: '';
                position: absolute;
                top: 6px;
                left: 8px;
                width: 2px;
                height: 8px;
                border-radius: 1px;
                background-color: #FFFFFF;
            }
        }
        &.success-icon{
            background-color: #5FBC29;
            &:before,&:after{
                content: '';
                position: absolute;
                width: 1px;
                border-radius: 1px;
                background-color: #FFFFFF;
            }
            &:before{
                top: 7px;
                left: 5px;
                height: 6px;
                transform: rotate(-40deg);
            }
            &:after{
                top: 4px;
                left: 10px;
                height: 10px;
                transform: rotate(45deg);
            }
        }
        &.error-icon{
            background-color: #FF3858;
            &:before{
                content: '';
                position: absolute;
                top: 12px;
                left: 8px;
                width: 2px;
                height: 2px;
                border-radius: 50%;
                background-color: #FFFFFF;
            }
            &:after{
                content: '';
                position: absolute;
                top: 3px;
                left: 8px;
                width: 2px;
                height: 8px;
                border-radius: 1px;
                background-color: #FFFFFF;
            }
        }
        &.warn-icon {
            background-color: #FF8A0C;
            &:before{
                content: '';
                position: absolute;
                top: 12px;
                left: 8px;
                width: 2px;
                height: 2px;
                border-radius: 50%;
                background-color: #FFFFFF;
            }
            &:after{
                content: '';
                position: absolute;
                top: 3px;
                left: 8px;
                width: 2px;
                height: 8px;
                border-radius: 1px;
                background-color: #FFFFFF;
            }
        }
        &.loading-icon {
            background-color: #FFFFFF;
        }
        &.toast-spin{
            border-top: 1px solid #FFFFFF;
            border-right: 1px solid #2DB7F5;
            border-bottom: 1px solid #2DB7F5;
            border-left: 1px solid #2DB7F5;
            animation: 0.85s spin infinite;
            -webkit-animation: 0.85s spin infinite;
            -moz-animation: 0.85s spin infinite;
            -o-animation: 0.85s spin infinite;
        }
    }

    .message{
        position: relative;
        top: 3px;
    }

    @keyframes spin {
        0% {
            transform-origin: 50% 50%;
            transform: rotate(0deg);
        }
        100% {
            transform-origin: 50% 50%;
            transform: rotate(360deg);
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
        },
        computed:{
            textColor(){
                switch(this.type){
                    case "info":
                    case "loading":
                        return "#369BE9";
                    case "success":
                        return "#16C294";
                    case "error":
                        return "#E95471";
                    case "warn":
                        return "#FA9E33";

                }
            }
        }
    }
</script>
