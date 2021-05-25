<template>
  <div class="navbar navbar-dark bg-primary content__nav">
    <div class="container-fluid">
      <a href="" class="navbar-brand">Firebase Auth</a>
      <ul class="nav">
        <li class="nav-item  me-2">
          <router-link to="/" class="text-white">Home</router-link>
        </li>
        <li class="nav-item me-2">
          <router-link to="/about" class="text-white">About</router-link>
        </li>
        <li class="nav-item me-2">
          <router-link to="/member" class="text-white">Member Area</router-link>
        </li>
        <li class="nav-item me-2">
          <a style="cursor: pointer" class="text-white" @click="logout">Logout</a>
        </li>
        <li class="nav-item">
          <router-link to="/login" class="text-white">Login</router-link>
        </li>
      </ul>
    </div>
  </div>
  <div class="container">
    <router-view/>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      usr: null,
      isLogged: false,
    }
  },
  mounted: function () {
    this.getCurrentUser();
  },
  methods: {
    getCurrentUser() {
      this.usr = firebase.auth().onAuthStateChanged();
      if (this.usr) {
        this.isLogged = true;
      }
    },
    logout() {
      firebase.auth().signOut().then(
          () => { this.$router.replace('login') }
      )
    }
  }
}

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.content__navbar {
  padding: 0 30px;
}
.nav {
  a {
    text-decoration: none;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
