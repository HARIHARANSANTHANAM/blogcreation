
<template>
  <div>
    <div class="d-flex justify-content-center mb-3" v-if="loader">
      <b-spinner label="Loading..."></b-spinner>
    </div>
    <div v-else>
      <QAContainer Type="BLOG" :id="parseInt($route.query.blogId)">
        <template v-slot:content>
          <h2>{{ getSelectedBlog?.title }}</h2>
          <div class="bg-light" v-html="getSelectedBlog?.blogDescription"></div>
          <div style="display: flex; justify-content: end">
            <p class="text-info">
              Updated
              <timeago :datetime="getSelectedBlog?.updateDateTime"></timeago>
            </p>
          </div>
        </template>
      </QAContainer>
      <br />
      <h4>Answers</h4>
      <div class="container">
        <QAContainer
          v-for="(answer, index) in getSelectedBlog?.answers"
          :key="index"
          Type="ANSWER"
          :id="answer?.ansId"
          :data="answer"
        >
          <template v-slot:content>
            <AnswerContainer :data="answer" />
        </template>
            
        </QAContainer>
     
      </div>
      <b-badge
        variant="info"
        v-for="(tags, index) in getSelectedBlog?.blogTags"
        :key="index"
        >{{ tag }}</b-badge
      >
      <br />
      <p>Your Answer</p>
      <hr />
      <vue-editor
          v-model="content" 
      :show-preview="true"
    ></vue-editor>
      <button type="button" @click="postAnwer()" class="btn btn-info mt-2">Post</button>
    </div>
  </div>
</template>
<script src="./js/blog.js"/>