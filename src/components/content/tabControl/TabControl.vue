<template>
    <div class="tab-control">
      <div class="tab-control-item"
           v-for="(item, index) in titles"
           :class="{active:(index === currentIndex)}"
           @click="itemClick(index)">
        <span>{{item}}</span>
      </div>
    </div>
</template>

<script>
  export default {
    name: "TabControl",
    data(){
      return{
        currentIndex: 0
      }
    },
    props:{
      titles:{
        type:Array,
        default(){
          return []
        }
      }
    },
    methods:{
      itemClick(index){
        this.currentIndex = index
        this.$emit('tabClick',index)
      }
    }
  }
</script>

<style scoped>
  .tab-control{
    display: flex;
    text-align: center;
    height: 40px;
    line-height: 40px;
    background-color: white;
  }
.tab-control-item{
  flex: 1;
}
  .active{
    color: var(--color-tint);
  }
  .tab-control-item span{
    padding: 5px;
  }
  .active span{
    border-bottom: solid 2px var(--color-tint);
  }
</style>
