<template>
  <div>
    <div class="d-flex justify-content-center mb-3" v-if="loader">
      <b-spinner label="Loading..."></b-spinner>
    </div>
    <div v-else>
      <p v-if="!getBlogs?.length">No blogs Related to tag</p>
      <div v-else>
        <BlogCard
          @click="fetchThisBlog(blog?.blogid)"
          :blog="blog"
          style="cursor: pointer; border-left: 0.5rem solid #17a2b8"
          class="col-lg-12 mb-2"
          v-for="(blog, index) in getBlogs"
          :key="index"
        >
        </BlogCard>
      </div>
    </div>
  </div>
</template>
<script src="./js/tagblog.js"/>