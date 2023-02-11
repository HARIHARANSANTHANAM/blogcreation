<template>
  <div>
    <div class="d-flex justify-content-center mb-3" v-if="loader">
      <b-spinner label="Loading..."></b-spinner>
    </div>
    <div v-else>
      <h3>Tags</h3>
      <p>
        A tag is a keyword or label that categorizes your question with other,
        similar questions. Using the right tags makes it easier for others to
        find and answer your question.
      </p>
      <div class="row justify-content-end">
        <button class="btn btn-info" @click="$bvModal.show('modal-center')">
          Add Tags
        </button>
      </div>
      <br />
      <div class="row">
        <TagCard
          style="cursor: pointer"
          class="col-md-6 col-lg-4 col-sm-12 mb-2"
          v-for="(tag, index) in getTags"
          :key="index"
          :tag="tag"
          @click="fetchTagsBlog(tag?.tagId)"
        >
        </TagCard>
      </div>
      <b-modal
        id="modal-center"
        hide-footer
        no-close-on-backdrop
        title="Add Tags"
      >
        <CreateTag />
      </b-modal>
    </div>
  </div>
</template>
<script src="./js/tagpage.js"/>