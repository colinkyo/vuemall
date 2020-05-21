<template>
    <div class="tab-bar-item" @click="itemClick">
        <div v-if="!isActive"><slot name="item-icon"></slot></div>
        <div v-else><slot name="item-icon-active"></slot></div>
        <div :style="activeStyle"><slot name="item-text"></slot></div>
    </div>
</template>

<script>
    export default {
        name: "TabBarItem",
        props:{
          path:String,
          activeColor:{
            type:String,
            default:'red'
          }
        },
        data(){
          return {
            //isActive:true
          }
        },
      computed:{
        isActive(){
          //当前活跃route的path
          return this.$route.path.indexOf(this.path) !== -1;
        },
        activeStyle(){
          return this.isActive?{color:this.activeColor}:{}
        }
      },
      methods:{
        itemClick(){
          //有bug，原因：在路由中添加了相同的路由。解决1：用replace 2：用this.$router.push(this.path).catch(data => {  })
          //this.$router.push(this.path)
          this.$router.push(this.path).catch(data => {})
        }
      }
    }
</script>

<style scoped>
    .tab-bar-item
    {
        flex: 1;
        height: 49px;
        text-align: center;
        font-size: 14px;
    }
    .tab-bar-item img
    {
        width: 24px;
        height: 24px;
        margin-top: 5px;
        vertical-align: middle;
        margin-bottom: 1px;
    }
    .active{
        color: red;
    }
</style>
