<template>
  <div class="login_container">
    <div class="login_box">
      <center>
        <img
          :src="require('@/assets/images.jpeg')"
          width="80"
          height="80"
          style="border-radius: 10px"
        />
      </center>
      <br />
      <form @submit="signin">
        <b-row class="my-1">
          <b-col sm="12">
            <p class="text-secondary mb-2 mt-2">Email*</p>
            <b-form-input
              id="input-default"
              type="email"
              placeholder="EmailId"
              v-model="email"
              data-test="email"
            ></b-form-input>
          </b-col>
        </b-row>
        <b-row class="my-1">
          <b-col sm="12">
            <p class="text-secondary mb-2 mt-2">Password*</p>
            <b-form-input
              id="input-default"
              type="password"
              placeholder="Password"
              v-model="password"
              data-test="password"
            ></b-form-input>
          </b-col>
        </b-row>
        <br />
        <b-button
          type="submit"
          variant="info"
          v-if="!login"
          class="button btn-block"
          :disabled="validator"
          data-test="login-button"
          >Login</b-button
        >
        <b-button class="button btn-block" v-else disabled>
          <b-spinner small type="grow"></b-spinner>
          Loading...
        </b-button>
        <br />
        <router-link to="/signup">
          <b-button type="submit" variant="info" class="button btn-block"
            >Signup</b-button
          ></router-link
        >
      </form>
    </div>
  </div>
</template>

<script src="./js/login.js"/>
<style scoped>
.login_box {
  background: white;
  padding: 1rem;
  border-radius: 4px;
  box-shadow: -1px 2px 17px 0 #e3e3e3;
}
.login_container {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 350px;
  transform: translate(-50%, -50%);
}
.button {
  background: #11afb6;
  color: white;
}
.btn-block {
  width: 100%;
  display: block;
}
@media (max-width: 500px) {
  .login_container {
    min-width: 90%;
  }
}
</style>