<template>
  <div>
    <form @submit.prevent="createQuestions()">
      <div class="form-outline mb-4">
        <label class="form-label text-secondary">Title</label>
        <input type="text" v-model="data.title" class="form-control" required />
      </div>
      <div class="form-outline mb-4" v-if="data.title">
        <label class="form-label text-secondary">Description</label>
          <TextEditorComponent @content="fetchDescription"/>
      </div>
       <div class="form-outline mb-4" v-if="data.description">
        <label class="form-label text-secondary">Tried</label>
        <TextEditorComponent @content="fetchTried" />
       </div>
        <div class="form-outline mb-4" v-if="data.thingsTried">
             <label class="form-label text-secondary">Tags to Be included</label>
        <SelectTags @input="inputSelectTags" :tags="tags"/>
        </div>
        <br />
        <b-button block variant="info" type="submit" :disabled="isAllFilled"> Create Question </b-button>
            </form>
            <b-alert v-if="message" :variant="messageVariant" :dismissible="false">
      {{ message }}
    </b-alert>
      </div>
</template>
<script src="./js/createquestion.js"/>