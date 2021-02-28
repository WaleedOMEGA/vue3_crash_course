<template>
<MyButton
color="white"
background="red"
disabled="true"
:disable="!valid"
/>
</template>

<script>
import MyButton from './components/MyButton'

export default {
 components:{
   MyButton
 },
 data(){
return{
  valid:false
}
 }
}
</script>

<style>
div{
  color:red
}
</style>
