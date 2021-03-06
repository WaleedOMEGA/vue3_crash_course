<template>
<<<<<<< HEAD
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
=======
  <button @click="increment">{{ count }}</button>
  <button @click="a++">{{ a }}</button>
  <button @click="b++">{{ b }}</button>
  <div v-for="msg in history">
    {{ msg }}
  </div>
</template>

<script>
import { useNumbers } from './numbers'

export default {
  setup() {
    const {
      history,
      increment,
      count,
      a,
      b
    } = useNumbers()

    return {
      history,
      increment,
      count,
      a,
      b
    }
  }
}
</script>
>>>>>>> aa29a58fc4746ee59e0bcb2ac5d544d7bdd631bf
