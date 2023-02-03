<template>
<div>
<form @submit.prevent="addTags()">
    <div class="form-outline mb-4">

        <label class="form-label text-secondary" >Tags</label>
         <b-form-input id="input-default" type="text" placeholder="Tag Name" v-model="tagName" ></b-form-input>
      </div>
      <div class="form-outline mb-4">

        <label class="form-label text-secondary" >Tag Description</label>
       <b-form-textarea
      id="textarea"
      v-model="tagDescription"
      placeholder="Tag Description..."
      rows="3"
      max-rows="6"
    ></b-form-textarea>
        <br/>
        <b-button block variant="info" type="submit">
                Add Tag
        </b-button>
      </div>
</form>
</div>
</template>
<script src="./js/createTag.js"/>