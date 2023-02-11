<template>
  <div>
    <form @submit.prevent="createQuestions()">
      <div class="form-outline mb-4">
        <label class="form-label text-secondary">Title</label>
        <input type="text" v-model="data.title" class="form-control" required />
      </div>
      <div class="form-outline mb-4">
        <label class="form-label text-secondary">Description</label>
        <vue-editor
          v-model="data.description"
      :show-preview="true"
    ></vue-editor>
      </div>
      <div class="form-outline mb-4">
        <label class="form-label text-secondary">Tried</label>
         <vue-editor
          v-model="data.thingsTried"
      :show-preview="true"
    ></vue-editor>
      </div>
      <div class="form-outline mb-4">
        <label class="form-label text-secondary">Tags to Be included</label>
        <SelectTags
          @input="inputSelectTags"
          :tags="tags"
          :selectedTags="data.tagId"
        />
      </div>
      <br />
      <b-button
        v-if="Type == 'CREATE'"
        block
        variant="info"
        type="submit"
        :disabled="isAllFilled"
      >
        Create Question
      </b-button>

      <b-button
        v-if="Type == 'UPDATE'"
        block
        variant="info"
        type="submit"
        :disabled="isAllFilled"
      >
        Update Question
      </b-button>
    </form>
  </div>
</template>
<script src="./js/createquestion.js"/>