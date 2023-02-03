<template>
<div>
    <h4>MyQuestions</h4>
    <hr/>
    <BlogCard  @click="fetchThisBlog(blog?.blogid)" style="cursor:pointer"  class="col-lg-12 mb-2" v-for="(blog,index) in blogs" :key="index">
     <template v-slot:title>
        {{blog?.title}}
     </template>
    <template v-slot:description>
    <div :inner-html.prop="blog?.blogdescription | truncate(40)"/>
    </template>
     </BlogCard>
    <router-view/>
</div>
</template> 
<script src="./js/myQuestions.js"/>