<template>
<div>
  <b-navbar toggleable="lg" type="light" variant="light" class="sticky-top" style="height:4rem">
    <b-navbar-nav >
    <b-navbar-brand href="/home" style="display:flex;align-items:center" class="text-secondary">
     <img :src="require('@/assets/images.jpeg')" class="d-inline-block align-top ml-4" alt="Kitten" width="40" height="40">
      <b-nav-item href="#">QBloggers</b-nav-item>
    </b-navbar-brand>
   
  </b-navbar-nav>

    <b-navbar-toggle target="sidebar-nav"></b-navbar-toggle>


  
    <b-collapse id="sidebar-nav" is-nav>
      
      <b-navbar-nav class="ml-auto">
      <b-nav-item class="nav-item" v-for="link in links" :key="link.text">
          <router-link :class="{ 'nav-link': true, 'active': link.active }" :to="link.url">
            {{ link.text }}
          </router-link>
      </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>

  <b-container fluid style="min-height: 100vh">
    <b-row>
      <b-col lg="2" class="d-none d-lg-block border-right" style="height:100vh;position:sticky;top:0rem">
          <div class="mt-2">
          <SearchComponent/>
          <hr/>
          <SidebarComponent :links="links"/>
          </div>
      </b-col>
      <b-col>
            <div class="container mt-3">
             <router-view/>
            </div>
          
      </b-col>
    </b-row>
  </b-container>
</div>
</template>

<style>
.bg-light {
  background-color: lightgray;
}


</style>
<script src="./js/header.js"/>
