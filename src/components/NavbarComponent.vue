<template>
  <div>
    <b-navbar
      toggleable="lg"
      type="light"
      variant="light"
      class="sticky-top"
      style="height: 4rem; padding: 0.3rem"
    >
      <b-navbar-nav>
        <b-navbar-brand
          href="/home"
          style="display: flex; align-items: center"
          class="text-secondary"
        >
          <img
            :src="require('@/assets/images.jpeg')"
            class="d-inline-block align-top ml-4"
            alt="Qblogers"
            width="40"
            height="40"
          />
          <b-nav-item href="/home">QBloggers</b-nav-item>
        </b-navbar-brand>
      </b-navbar-nav>

      <b-navbar-toggle target="sidebar-nav"></b-navbar-toggle>

      <b-collapse id="sidebar-nav" is-nav>
        <b-navbar-nav class="ml-auto bg-light">
          <b-nav-item class="nav-item" v-for="link in links" :key="link.text">
            <router-link
              :class="{ 'nav-link': true, active: link.active }"
              :to="link.url"
            >
                <span><i :class='[link.icons,"mr-2"]' aria-hidden="true"></i></span>
        <small>{{ link.text }}</small>
            </router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/CreateQuestions" style="color: white">
              <b-button
                variant="btn btn-dark btn-sm"
                style="height: 2.5rem; color: white"
                >Ask Questions</b-button
              ></router-link
            >
          </b-nav-item>
          <b-nav-item>
            <b-button
              variant="info"
              class="btn-sm"
              @click="logout()"
              style="height: 2.5rem"
              >Logout</b-button
            >
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <b-container fluid>
      <b-row>
        <b-col
          lg="2"
          class="d-none d-lg-block border-right sticky-top"
          style="
            height: 100vh;
            z-index: 1000;
            padding:0px;
          "
        >
          <div class="mt-1" style="
            height: 100vh;
            position: sticky;
            top: 4.5rem;
            width: auto;
            z-index: 1000;
          ">
            <SidebarComponent :links="links" />
          </div>
        </b-col>
        <b-col >
            <div
              style="position: sticky; top: 4rem; z-index: 1000;padding:0.09rem;margin:0"
              class="bg-light"
            >
              <SearchComponent />
            </div>
          <div class="container mt-3">
            <hr />
            <router-view v-slot="{ Component, route }">
              <Transition :name="route.meta.transition">
                <component :is="Component" />
              </Transition>
            </router-view>
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
