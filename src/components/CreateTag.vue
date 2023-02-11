<template>
  <div>
    <form >
      <div class="form-outline mb-4">
        <label class="form-label text-secondary">Tags</label>
        <b-form-input
          id="input-default"
          type="text"
          placeholder="Tag Name"
          v-model="tagName"
          required
        ></b-form-input>
      </div>
      <div class="form-outline mb-4">
        <label class="form-label text-secondary">Tag Description</label>
        <b-form-textarea
          id="textarea"
          v-model="tagDescription"
          placeholder="Tag Description..."
          rows="3"
          max-rows="6"
          required
        ></b-form-textarea>
        <br />
        <b-button
          block
          variant="info"
          type="submit"
          :disabled="tagDescription == '' || tagName == '' || loading"
          v-if="Type=='CREATE'"
          @click="addTags()"
        >
          <span v-show="!loading"> Add Tag </span>

          <div v-show="loading">
            <b-spinner small type="grow"></b-spinner>
            Add Tag
          </div>
        </b-button>
        <b-button
          block
          variant="info"
          type="submit" 
          :disabled="tagDescription == '' || tagName == '' || loading"
          v-else-if="Type=='UPDATE'"
          @click="updateTag()"
        >
          <span v-show="!loading"> Update Tag </span>

          <div v-show="loading">
            <b-spinner small type="grow"></b-spinner>
            Add Tag
          </div>
        </b-button>
      </div>
    </form>
  </div>
</template>
<script src="./js/createTag.js"/>