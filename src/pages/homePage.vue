<template>
    <div>
    <h4>Top Blogs</h4>
      <hr/> 
    <div class="row">
     <BlogCard  @click="fetchThisBlog(blog?.blogid)" style="cursor:pointer;border-left:.5rem solid #17a2b8"  class="col-lg-12 mb-2" v-for="(blog,index) in getBlogs" :key="index">
     <template v-slot:title>
        {{blog?.title}}
     </template>
    <template v-slot:description >
    <div :inner-html.prop="blog?.blogdescription | truncate(40)"></div>
    </template>
    <template v-slot:footer>
      Created
      <timeago :datetime="blog?.createdatetime"></timeago>
    </template>
     </BlogCard>
</div>
    
    </div>
</template>
<script src="./js/home.js"/>
