<template>
  <b-card v-on="$listeners">
      <b-card-title>
        {{ blog?.title | truncate(80) }}
        <p class="row justify-content-end" style="font-size: 1rem">
          <i class="fa-regular fa-thumbs-up fa-1x ml-1"></i>{{ blog?.upVotes }}
          <i class="fa-solid fa-eye fa-1x ml-1">{{ blog?.noOfViews }}</i>
          <i class="fa-regular fa-thumbs-down fa-1x ml-1">{{
            blog?.downVotes
          }}</i>
        </p>
      </b-card-title>
      <b-card-sub-title>
        <div class="row">
          <span v-for="(tag, index) in blog.blogTags" :key="index">
            <h5>
              <b-badge variant="info" class="ml-1">{{ tag?.tagName }}</b-badge>
            </h5>
          </span>
        </div>
      </b-card-sub-title>
      <b-card-body>
        <div :inner-html.prop="blog?.blogDescription | truncate(80)"></div>
        <div class="row justify-content-end">
         <span>Created <timeago :datetime="blog?.createDateTime"></timeago></span>
        </div>
      </b-card-body>
      <b-card-text v-show="isAuthorized(blog?.quesRaisedBy)">
        <div class="row justify-content-end">
          <b-button variant="dark" @click.stop="editBlog(blog)">
            <b-icon icon="pencil-fill" aria-label="Help"></b-icon>
          </b-button>
          <b-button
            variant="info"
            class="ml-1"
            @click.stop="DeleteQuestion(blog?.blogId)"
            >
            <b-icon icon="trash" aria-label="Help"></b-icon>
            </b-button
          >
        </div>
      </b-card-text>
       <b-modal
        scrollable
        title="Update Blog"
        :id="'updateBlogModal'+(blog?.blogId).toString()"
        hide-footer
        v-if="isAuthorized(blog?.quesRaisedBy)"
      >
        <CreateQuestion Type="UPDATE" :datas="updateBlog" :modalValue="'updateTagModal'+(blog?.blogId).toString()"/>
      </b-modal>
  </b-card>
</template>
<script src="./js/blogcard.js"/>