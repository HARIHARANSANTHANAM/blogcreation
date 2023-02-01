<template>
    <div id="app">
    <vue-editor v-model="content" :show-preview="true"></vue-editor>
    <button @click="setEditorContent" class="btn btn-info mt-2">Post</button>
  </div>
</template>
<script src="./js/texteditor"/>