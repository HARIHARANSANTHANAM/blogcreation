<template>
  <div class="input-group mb-3">
    <div class="input-group-prepend">
      <button class="btn btn-info" type="button">
        <i class="fas fa-search"></i>
      </button>
    </div>
    <input
      type="text"
      class="form-control"
      placeholder="Search.."
      aria-label=""
      aria-describedby="basic-addon1"
      v-model="searchQuery"
    />
  </div>
</template>

<script src="./js/search.js"/>

