<template>
<div>
     <Multiselect  @select="selectInput" v-model="selectedTags" :options="tags" :multiple="true" label="text" track-by="value" class="custom-multiselect">
    </Multiselect>
    </div>
</template>

<script src="./js/selectTags.js"/>