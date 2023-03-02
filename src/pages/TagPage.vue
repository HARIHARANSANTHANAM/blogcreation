<template>
  <div>
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
      <b-modal
        id="modal-center"
        hide-footer
        no-close-on-backdrop
        title="Add Tags"
      >
        <CreateTag />
      </b-modal>
      <br />
    <b-row v-if="loader">
      <b-col  v-for="(skeleton,index) in Array.from(Array(10).keys())"  :key="index" col cols=12 xl="4" lg="3" md="6" sm="12" class="mb-2">
      <b-card  >
        <b-skeleton animation="wave" width="85%"></b-skeleton>
        <b-skeleton animation="wave" width="55%"></b-skeleton>
        <b-skeleton animation="wave" width="70%"></b-skeleton>
      </b-card>
      </b-col>
    </b-row>
    <div v-else>
      
     
      <div class="row">
      <b-col  class="col-md-6 col-lg-4 col-sm-12 mb-2">
        <TagCard
          style="cursor: pointer"
         
          v-for="(tag, index) in getTags"
          :key="index"
          :tag="tag"
          @click="fetchTagsBlog(tag?.tagId)"
        >
        </TagCard>
      </b-col>
      </div>
      
    </div>
  </div>
</template>
<script src="./js/tagpage.js"/>