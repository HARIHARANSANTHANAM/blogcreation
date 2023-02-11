<template>
  <div class="sidebar">
    <b-nav-item class="nav flex-column">
      <router-link
        v-for="link in links"
        :key="link.text"
        :class="{ 'nav-link': true, active: isActive(link.url) }"
        :to="link.url"
      >
        <small>{{ link.text }}</small>
      </router-link>
    </b-nav-item>
  </div>
</template>
<script src="./js/sidebar.js"/>
<style scoped>
a .active {
  font-weight: bold;
  background: #f1f2f3;
  color: black;
  border-right: 3px solid #11afb6;
}
.active {
  font-weight: bold;
  background: #f1f2f3;
  color: black;
  border-right: 3px solid #11afb6;
}

a:hover {
  color: rgb(64, 63, 63);
}
a {
  color: gray;
}
</style>