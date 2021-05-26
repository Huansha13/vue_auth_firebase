<template>
  <div class="row">
    <div class="col-sm-5 m-auto mt-3">
      <div class="text-center mb-4">
        <h1>Log In</h1>
      </div>
      <form id="login-form" @submit.prevent="loginUser">
        <div class="row">
          <div class="col-sm-12 form-group mt-3">
            <label for="email">Email</label>
            <input type="email" id="email" v-model="email" class="form-control form-control-lg">
          </div>
          <div class="col-sm-12 form-group mt-3">
            <label for="password">Password</label>
            <input type="password" id="password" v-model="password" class="form-control form-control-lg">
          </div>
          <div class="col-sm-12 form-group mt-3">
            <button v-if="!xhrRequest" class="btn btn-primary btn-lg col-sm-4">Login</button>
            <button v-if="xhrRequest" class="btn btn-primary btn-lg col-sm-4" type="button" disabled>
              <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
              Wait...
            </button>
          </div>
          <div class="col-sm-12 from-group mt-5">
            <p>Don't have an account? <router-link to="/signup">Sign Up</router-link> </p>
          </div>
        </div>
      </form>
      <div class="alert alert-danger d-flex align-items-center" role="alert" v-if="alert">
        <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
        <div>
          {{ error }}
        </div>
      </div>
<!--      <pre>-->
<!--        {{$data}}-->
<!--      </pre>-->
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'
export default {
  data() {
    return {
      email: '',
      password: '',
      xhrRequest: false,
      alert: false,
      error: ''
    }
  },
  methods: {
    loginUser() {
      let v = this;
      let a = this;
      v.xhrRequest = true
      firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
          .then(() => {
            return firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
                ()=> {
                  v.xhrRequest = false
                  this.$router.replace('member')
                },
                (err) => {
                  v.xhrRequest = false;
                  a.alert = true;
                  this.error = err.message;
                }
            );
          })
          .catch((error) => {
            console.log('Error', error.message)
          });
    }
  }
}
</script>

<style lang="scss"></style>
