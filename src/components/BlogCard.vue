<template>
    <b-card v-on="$listeners">
    <b-card-body>
       <b-card-title v-if="title">{{title}}</b-card-title>
       <b-card-sub-title v-if="subtitle">{{subtitle}}</b-card-sub-title>
       <b-card-text  v-if="description">
       {{description | truncate(100)}}
      </b-card-text>
      </b-card-body>
  <b-card-text class="small text-muted">Last updated 3 mins ago</b-card-text>

</b-card>
</template>
<script src="./js/blogcard.js"/>