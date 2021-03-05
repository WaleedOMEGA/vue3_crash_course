<template>
  <button @click="increment">{{count}}</button>
  <button @click="increase('a')">{{numbers.a}}</button>
  <button @click="increase('b')">{{numbers.b}}</button>
  {{total}}
</template>

<script>
import {ref,reactive,computed} from 'vue'

export default {
  setup(){
    const count = ref(0)
    const numbers = reactive({
      a:0,
      b:0
    })
    const increase=(num)=>{
numbers[num]+=1
    }
    const increment=()=>{
      count.value+=1
    }
    const total=computed(()=>{
      return count.value+numbers.a+numbers.b
    })
    return{
      total,
      increment,
      increase,
      count,
      numbers
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
