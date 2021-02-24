<template>
  <div id="app">
    <div id="flashMessage" v-if="GStore.flashMessage">
      <!-- displaying the flashMessage if it exists -->
      {{ GStore.flashMessage /* Flash Message */ }}
    </div>
    <div id="nav">
      <router-link :to="{ name: 'EventList' }">Events</router-link> |
      <router-link :to="{ name: 'About' }">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  inject: ['GStore'] // <---- Inject GStore object for displaying flashMessage
}
</script>

<style>
/* Flash Message - below this comment*/
@keyframes yellowfade {
  from {
    background: yellow;
  }
  to {
    background: transparent;
  }
}

#flashMessage {
  animation-name: yellowfade;
  animation-duration: 3s;
}
/* Flash Message - above this comment */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

h4 {
  font-size: 20px;
}
</style>
