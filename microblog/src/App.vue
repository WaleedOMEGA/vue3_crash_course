<template>
  
  <Card v-for="post in store.state.posts">
    <template v-slot:title>
    {{post.title}}
   </template>
  <template v-slot:content>
    {{post.content}}
  </template>
  <template v-slot:description>
   <Controls />
  </template>
 </Card>
 
</template>

<script>
import Card from './components/Card'
import Controls from './components/Controls.vue'
import {store} from './store.js'


export default {
  components:{
    Card,
    Controls
  },
  setup(){
    return {
      store
    }
  }
}
</script>

<style>

</style>
