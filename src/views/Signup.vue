<template>
  <div class="row">
    <div class="col-sm-5 m-auto mt-3">
      <div class="text-center mb-4">
        <h1>Sing Up</h1>
      </div>
      <form id="signup-form" @submit.prevent="signupRequest">
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
            <button v-if="! xhrRequest" class="btn btn-primary btn-lg col-sm-4">Sign Up</button>
            <button v-if="xhrRequest" class="btn btn-primary btn-lg col-sm-4" type="button" disabled>
              <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
              Wait...
            </button>
          </div>
          <div class="col-sm-12 from-group mt-5">
            <p>Already have an account? <router-link to="/login">Login</router-link> </p>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  data() {
    return {
      email: '',
      password: '',
      xhrRequest: false
    }
  },
  methods: {
    signupRequest() {
      let v = this;

      v.xhrRequest = true;
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
          () => {
            v.xhrRequest = false;
            this.$router.replace('login')
          },
          (err) => {
            v.xhrRequest = false;
            alert(`Error - ${err.message}`)
          }
      )
    }
  }
}
</script>

<style lang="scss"></style>
