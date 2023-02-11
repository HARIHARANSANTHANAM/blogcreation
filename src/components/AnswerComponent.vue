<template>
  <div>
    <div
      class="container"
      style="min-height: 0rem"
      v-html="data?.anscontent"
    ></div>

    <div class="row justify-content-end">
      <span class="text-secondary"
        >Updated <timeago :datetime="data?.updatedatetime"></timeago
      ></span>
      <span class="ml-2 mr-2">|</span>
      <span class="text-secondary">
        Created at <timeago :datetime="data?.createdatetime"></timeago
      ></span>
    </div>

    <div class="row justify-content-end">
      <b-button
        variant="info mt-3"
        @click="viewCommentForAnswer(data?.ansid)"
        :disabled="loader"
        >View Comment</b-button
      >
    </div>
    <div v-if="data?.comments" v-show="isexpanded">
      <h5>Comments</h5>
      <CommentContainer :comments="data?.comments" />
      <hr />
    </div>
  </div>
</template>

<script src="./js/answer.js"/>