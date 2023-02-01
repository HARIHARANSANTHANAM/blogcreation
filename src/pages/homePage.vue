<template>
    <div>
    <h4>Top Blogs</h4>
      <hr/> 
    <div class="row">
     <BlogCard  @click="fetchThisBlog(blog?.id)" style="cursor:pointer"  class="col-lg-12 mb-2" v-for="(blog,index) in getBlogs" :key="index" :title="blog?.title" description="Though it helps many people, this medication may sometimes cause addiction. This risk may be higher if you have a substance use disorder (such as overuse of or addiction to drugs/alcohol). Take this medication exactly as prescribed to lower the risk of addiction. Ask your doctor or pharmacist for more details.

Do not suddenly stop using this drug without consulting your doctor. Some conditions may become worse when this drug is abruptly stopped. Your dose may need to be gradually decreased.

When this medication is used for a long time, it may not work as well. Talk with your doctor if this medication stops working well.

Tell your doctor if your condition persists or worsens." />
</div>
    
    </div>
</template>
<script src="./js/home.js"/>
