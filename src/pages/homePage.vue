<template>
  <div>
    <h4 >Top Blogs</h4>
      <hr />
    <div class="" v-if="loader">
      <b-card v-for="(skeleton,index) in Array.from(Array(10).keys())" class="mb-3" :key="index">
        <b-skeleton animation="wave" width="85%"></b-skeleton>
        <b-skeleton animation="wave" width="55%"></b-skeleton>
        <b-skeleton animation="wave" width="70%"></b-skeleton>
      </b-card>
    </div>
    <div class="row" v-else>
    
      <BlogCard
        @click="fetchThisBlog(blog?.blogId)"
        @edit="editBlog"
        :blog="blog"
        style="cursor: pointer; border-left: 0.5rem solid #17a2b8"
        class="col-lg-12 mb-2"
        v-for="(blog, index) in getBlogs"
        :key="index"
      >
      </BlogCard>
      <b-modal
        scrollable
        title="Update Question"
        id="updateQuestion"
        hide-footer
      >
        <CreateQuestions type="UPDATE" :datas="updateblog" />
      </b-modal>
    </div>
  </div>
</template>
<script src="./js/home.js"/>
<style scoped>
</style>
