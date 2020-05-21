<template>
    <tab-bar>
        <tab-bar-item v-for="item in list" :path="item.path" :active-color="item.activeColor">
            <img :src="item.src" slot="item-icon">
            <img src="~assets/img/tabbar/img1-active.svg" slot="item-icon-active">
            <div slot="item-text">{{item.name}}</div>
        </tab-bar-item>
    </tab-bar>
</template>

<script>
  import TabBar from 'components/common/tabbar/TabBar'
  import TabBarItem from 'components/common/tabbar/TabBarItem'

  export default {
    name: "MainTabBar",
    data(){
      return {
        list:[
          {name:"首页",path:'/home',activeColor:'pink',src:'~assets/img/tabbar/img1.svg',srcactive:'~assets/img/tabbar/img1.svg'},
          {name:"分类",path:'/category',activeColor:'blue',src:'img/tabbar/img2.svg'},
          {name:"购物",path:'/car',src:'img/tabbar/img3.svg'},
          {name:"我的",path:'/profile',src:'img/tabbar/img4.svg'}
        ]
      }
    },
    components: {TabBar,TabBarItem}
  }
</script>

<style scoped>

</style>
