<template>
<div id="home" class="wrapper">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <feature-view></feature-view>
    <tab-control class="tab-control"
                 @tabClick = 'tabClick'
                 :titles="['流行','精选','新款']"></tab-control>
    <goods-list :goods="showGoods"></goods-list>
  <ul>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
  <ul>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
</div>
</template>

<script>
//相对路径
//import SubHome from './SubHome'
//绝对路径（别名路径）
//import SubHome from 'views/home/SubHome'
import NavBar from 'components/common/navbar/NavBar'
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'

import {getHomeMultidata,getHomeGoods} from "network/home";


export default
{
    name: "Home",
    components:{NavBar,HomeSwiper,RecommendView,FeatureView,TabControl,GoodsList},
    data(){
      return{
        banners:[],
        recommends:[],
        goods:{
          'pop':{page:0,list:[]},
          'new':{page:0,list:[]},
          'sell':{page:0,list:[]}
        },
        'currentType':'pop'
      }
  },
  created() {
      //页面加载时，获取数据
      this.getHomeMultidata()
      //
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
  },
  computed:{
      showGoods(){
        return this.goods[this.currentType].list
      }
  },
  methods:{
    tabClick(index){
      switch (index) {
        case 0:
          this.currentType = 'pop'
            break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
    },
    getHomeMultidata(){
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    },
    getHomeGoods(type){
      const  page = this.goods[type].page +1
      getHomeGoods(type,page).then(res => {
        //this.goods[type].list = res.data.list
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page = page +1
      })
    }
  }
}
</script>

<style scoped>
  #home{
    padding-top: 44px;
  }
  .home-nav{
    z-index: 10;
    background: var(--color-tint);
    color: white;
    position: fixed;
    left: 0px;
    right: 0px;
    top: 0px;
  }
  .tab-control{
    position: sticky;
    top:44px;
  }
</style>
