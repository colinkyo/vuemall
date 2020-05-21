<template>
<div>
    <div>我是首页</div>
    <div>{{$store.state.student}}</div><br />
    <div>{{$store.getters.more20stu}}</div><br />
    <div>{{$store.getters.more20stulen}}</div><br />
    <div>{{$store.getters.morestybyage(30)}}</div><br />
    <hr>
    <sub-home></sub-home>
</div>
</template>

<script>
//相对路径
//import SubHome from './SubHome'
//绝对路径（别名路径）
import SubHome from 'views/home/SubHome'
export default
{
    name: "Home",
    components:{SubHome}
}
</script>

<style scoped>

</style>
