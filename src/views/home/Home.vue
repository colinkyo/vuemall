<template>
<div id="home" class="wrapper">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
</div>
</template>

<script>
//相对路径
//import SubHome from './SubHome'
//绝对路径（别名路径）
//import SubHome from 'views/home/SubHome'
import NavBar from 'components/common/navbar/NavBar'
import {getHomeMultidata} from "network/home";
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'


export default
{
    name: "Home",
    components:{NavBar,HomeSwiper,RecommendView},
    data(){
      return{
        banners:[],
        recommends:[]
      }
  },
  created() {
      //页面加载时，获取数据
    getHomeMultidata().then(res => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    })
  }
}
</script>

<style scoped>
    .home-nav{
        background: var(--color-tint);
        color: white;
    }
</style>
