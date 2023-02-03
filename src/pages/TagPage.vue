<template>
  <div>
    <h3>Tags</h3>
    <p>
      A tag is a keyword or label that categorizes your question with other,
      similar questions. Using the right tags makes it easier for others to find
      and answer your question.
    </p>
    <div class="row justify-content-end">
      <button class="btn btn-info" @click="$bvModal.show('modal-center')">
        Add Tags
      </button>
    </div>
    <br/>
    <div class="row">
    <BlogCard
      style="cursor: pointer"
      class="col-md-6 col-lg-4 col-sm-12 mb-2"
      v-for="(tag, index) in getTags"
      :key="index"
      @click="fetchTagsBlog(tag?.tagid)"
    >
      <template v-slot:title>
      <b-badge variant="info">{{ tag?.tagname }}</b-badge>
        
      </template>
      <template v-slot:description>
        {{
          tag?.tagdescription+" Though it helps many people, this medication may sometimes cause addiction. This risk may be higher if you have a substance use disorder (such as overuse of or addiction to drugs/alcohol). Take this medication exactly as prescribed to lower the risk of addiction. Ask your doctor or pharmacist for more details.Do not suddenly stop using this drug without consulting your doctor. Some conditions may become worse when this drug is abruptly stopped. Your dose may need to be gradually decreased.When this medication is used for a long time, it may not work as well. Talk with your doctor if this medication stops working well.Tell your doctor if your condition persists or worsens."
            | truncate(100)
        }}
      </template>
    </BlogCard>
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
</template>
<script src="./js/tagpage.js"/>