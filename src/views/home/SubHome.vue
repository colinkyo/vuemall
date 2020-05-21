<template>
<div>
    <h1>{{$store.state.counter}}</h1>
    <button @click="add">+</button>
    <button @click="sub">-</button>
    <button @click="addbystep(5)">+5</button>
    <button @click="addstu()">+stu</button>
    <div>{{$store.state.student}}</div>
</div>
</template>

<script>
  export default {
    name: "SubHome",
    methods:{
      add(){
        console.log('++++++');
        this.$store.commit('sadd')
      },
      sub(){
        console.log('-------');
        this.$store.commit('ssub')
      },
      addbystep(step){
        //传参数第一种写法
        this.$store.commit('saddbystep',step)
      },
      addstu(){
        //传参数第二种写法
        this.$store.commit({
          type:'saddstu',
          stu:{name:'7yan-5',age:40}
        })
      }
    }
  }
</script>

<style scoped>

</style>
