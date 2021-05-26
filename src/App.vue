<template>
  <div class="navbar navbar-dark bg-primary content__nav">
    <div class="container-fluid">
      <a href="" class="navbar-brand">Firebase Auth</a>
      <ul class="nav">
        <li class="nav-item">
          <router-link to="/" class="text-white btn">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="text-white btn">About</router-link>
        </li>
        <li>
          <template v-if="user.loggedIn">
            <ul class="nav">
              <li class="nav-item">
                <router-link to="/member" class="text-white btn">Member Area</router-link>
              </li>
              <li class="nav-item"><a style="cursor: pointer" class="text-white btn" @click="logout">Logout</a></li>
            </ul>
          </template>
          <template v-else>
            <ul class="nav">
              <li class="nav-item">
                <router-link to="/login" class="text-white btn btn-danger">Login</router-link>
              </li>
            </ul>
          </template>
        </li>
        <li >
        </li>

      </ul>
    </div>
  </div>
  <div class="container">
    <router-view/>
  </div>
</template>

<script>
import firebase from "firebase/app";
import { mapGetters } from 'vuex'
import 'firebase/firestore'
import 'firebase/auth'

export default {
  data() {
    return {
      usr: null,
      isLogged: false,
    }
  },
  computed: {
    ...mapGetters({
      user: 'user'
    })
  }
  ,
  methods: {
    logout() {
      firebase
          .auth()
          .signOut()
          .then( () => {
            this.$router.replace({name: 'Login'})
          })
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
