<template>
<div>
    <h4>MyQuestions</h4>
    <hr/>
   <div  v-if="loader" class="row">
      <b-col v-for="(skeleton,index) in Array.from(Array(5).keys())"  :key="index" col cols=12 lg="6" md="6" sm="12"  class="mb-2">
      <b-card >
        <b-skeleton animation="wave" width="85%"></b-skeleton>
        <b-skeleton animation="wave" width="55%"></b-skeleton>
        <b-skeleton animation="wave" width="70%"></b-skeleton>
      </b-card>
      </b-col>
    </div>
    <div v-else>
    <BlogCard  @click="fetchThisBlog(blog?.blogid)"    :blog="blog" style="cursor:pointer;border-left:.5rem solid #17a2b8"  class="col-lg-6 mb-2" v-for="(blog,index) in getBlogs" :key="index">   
     </BlogCard>
    </div>
</div>
</template> 
<script src="./js/myQuestions.js"/>