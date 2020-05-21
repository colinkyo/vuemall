<template>
    <div class="recommend">
        <div class="recommend-item" v-for="item in recommends">
            <a :href="item.link">
                <img :src="item.image">
                <div>{{item.title}}</div>
            </a>
        </div>
    </div>
</template>

<script>
  export default {
    name: "RecommendView",
    props:{
      recommends:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
.recommend{
    display: flex;
    text-align: center;
    border-bottom: #eee solid 8px;
    padding: 15px 0 30px;
}
    .recommend-item{
        flex: 1px;
        font-size: 12px;
    }
.recommend-item img{
    width: 70px;
    height: 70px;
    margin-bottom: 5px;
}
</style>
