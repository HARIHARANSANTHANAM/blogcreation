<template>
  <b-card v-on="$listeners">
    <b-card-title>
      <b-badge variant="info">{{ tag?.tagName }}</b-badge>
    </b-card-title>
    <b-card-body class="cardbody">
      {{
        tag?.tagDescription | truncate(100)
      }}
      
    </b-card-body>
      <b-card-footer v-show="isAuthorized(tag?.createdBy)" style="background:white;border:none">
        <div class="row justify-content-end">
            <b-icon icon="pencil-fill" aria-label="Help" @click.stop="editTag(tag)" variant="dark"></b-icon>
            <b-icon icon="trash-fill" class="ml-2" variant="info" @click.stop="DeleteTag(tag?.tagId)" aria-label="Help"></b-icon>
        </div>
      </b-card-footer>
      <b-modal
        scrollable
        title="Update Tag"
        :id="'updateTagModal'+(tag?.tagId).toString()"
        hide-footer
        v-if="isAuthorized(tag?.createdBy)"
      >
        <CreateTag Type="UPDATE" :datas="updateTag" :modalValue="'updateTagModal'+(tag?.tagId).toString()"/>
      </b-modal>
  </b-card>
  
</template>
<script src="./js/tagcard.js"/>
<style scoped>
.cardbody{
    height:100px;

}
</style>