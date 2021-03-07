<template>
  <input type="text" :value='currentHashtag' @input="setHashtag"/>
  <Card v-for="post in filterdPosts">
    <template v-slot:title>
    {{post.title}}
   </template>
  <template v-slot:content>
    {{post.content}}
  </template>
  <template v-slot:description>
   <Controls :post="post" @setHashtag='setHashtag'/>
  </template>
 </Card>
 
</template>

<script>
  import {ref,computed} from 'vue';
import Card from './components/Card'
import Controls from './components/Controls.vue'
import {store} from './store.js'


export default {
  components:{
    Card,
    Controls
  },
  setup(){
    
   
    const filterdPosts=computed(()=>{
      if(!store.state.currentHashtag){
        return store.state.posts
      }
      return store.state.posts.filter(post=>post.hashtags.includes(store.state.currentHashtag))
    })
    const setHashtag=(evt)=>{
      store.setHashtag(evt.target.value)
    }
    return {
      filterdPosts,
      currentHashtag:computed(()=>store.state.currentHashtag),
      setHashtag
    }
  }
}
</script>

<style>

</style>
