<template>
  <div>
    <Multiselect
      @select="selectInput"
      v-model="selectedTag"
      :options="tags"
      :multiple="true"
      label="text"
      track-by="value"
      class="custom-multiselect"
    >
    </Multiselect>
  </div>
</template>

<script src="./js/selectTags.js"/>