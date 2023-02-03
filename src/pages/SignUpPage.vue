<template>
<div class="signup_container">
    <div class="signup_box">
  <center>
        <img :src="require('@/assets/images.jpeg')" width="80" height="80" style="border-radius:10px"/>
        <p class="text-secondary">QBloggers</p>  
        </center>
          <br>
          <div class="alert alert-danger" role="alert" v-if="user.password !== repeatPassword">
            Mismatched Password!
        </div>
       
        <div v-if="errors.password" class="alert alert-danger" role="alert" >
            {{ errors.password }}
        </div>
    <form @submit.prevent="addUser()">
      <!-- Username input -->
      <div class="form-outline mb-4">

        <label class="form-label text-secondary" >Username</label>
        <input type="text" v-model="user.username" class="form-control" required/>
      </div>

      <!-- Email input -->
      <div class="form-outline mb-4">

        <label class="form-label text-secondary" >Email</label>
        <input type="email" id="registerEmail" v-model="user.email" class="form-control" required/>
      </div>

    <b-row class="my-1" >
      <!-- Password input -->
       <b-col sm="12" md="6" >
      <div class="form-outline mb-4">

        <label class="form-label text-secondary" >Password</label>
        <input type="password" v-model="user.password" class="form-control" required/>
      </div>
       </b-col>

        <b-col sm="12" md="6" >
      <!-- Repeat Password input -->
      <div class="form-outline mb-4">

        <label class="form-label text-secondary">Confirm password</label>
        <input type="password" v-model="repeatPassword" class="form-control" required/>
      </div>
        </b-col>
    </b-row>
       <div class="form-outline mb-4">

        <label class="form-label text-secondary" >Job Description</label>
        <input type="text" v-model="user.jobPosition" class="form-control" required/>   
      </div>

      <div class="form-outline mb-4">
      <label class="form-label text-secondary" >Interested Tags</label>
      <SelectTags @input="inputSelectTags" :tags="tags"/>
      </div>
  
        
      <!-- Submit button -->
      <button type="submit" class="btn btn-info btn-block mb-3">Sign Up</button>
       <router-link to="/"> <b-button type="submit" variant="info"  class="button btn-block"  >Signin</b-button></router-link>
      
    </form>
    </div>
</div>
</template>
<style scoped>
.signup_box{
    background:white;
    padding:1rem;
    border-radius: 4px;
    box-shadow: -1px 2px 17px 0 #e3e3e3;
}
.signup_container{
 position:absolute;
 top:50%;
 left:50%;
  min-width:280px;
 transform: translate(-50%,-50%);
}
.custom-multiselect .multiselect__tag {
  background-color: red;
  color: white;
}

</style>
<script src="./js/signup.js"/>