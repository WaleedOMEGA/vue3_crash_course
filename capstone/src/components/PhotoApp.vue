<template>
    <layout>
   <template v-slot:header>
     header
   </template>
   <template v-slot:sidebar>
     <album v-for="album in albums" 
     :album="album"
     ></album>
       
     
   </template>
   <template v-slot:content>
       <router-view />
     
     
   </template>
    </layout>
   </template>
   
   <style lang="scss">
   *{
     box-sizing:border-box;
   }
   body{
     margin: 0;
   }
   </style>
   <script>
    import Layout from './Layout.vue'
import Album from './Album.vue'
export default {
  components: {
    Layout,
    Album
  },
    
     async created(){
      this.$store.dispatch('albums/fetchAlbums')
     },
     computed:{
       currentAlbumPhotos(){
         return this.$store.state.photos.currentAlbumPhotos
       },
   albums(){
     return this.$store.state.albums.all
   }
     }
   }
   </script>