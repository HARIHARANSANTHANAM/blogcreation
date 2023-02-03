<template>  
    <div class="sidebar"> 
    <b-nav-item  class="nav flex-column">
          <router-link v-for="link in links" :key="link.text" :class="{ 'nav-link': true, 'active': isActive(link.url) }" :to="link.url">
            <small>{{ link.text }}</small>
          </router-link>
      </b-nav-item >
    </div> 
</template>
<script src="./js/sidebar.js"/>
<style scoped>

.sidebar{
    position: -webkit-sticky;
    position: sticky;
    top: 0rem;
    height: calc(100vh - 0rem);
}
a .active{
    font-weight: bold;
    background: #f1f2f3;
    color: black;
    border-right:3px solid #11AFB6;
}
.active{
  font-weight: bold;
    background: #f1f2f3;
    color: black;
    border-right:3px solid #11AFB6;
}

a:hover{
  color:rgb(64, 63, 63);
}
a{
  color:gray
}
</style>