<template>
    <b-card v-on="$listeners">
    <b-card-body>
       <b-card-title>
        <slot name="title"></slot>
       </b-card-title>
       <b-card-sub-title>
         <slot name="subtitle"></slot>
       </b-card-sub-title>
       <b-card-text  >
       <slot name="description"></slot>
      </b-card-text>
      </b-card-body>
  <b-card-text class="small text-muted">
    <slot name="footer"></slot>
  </b-card-text>

</b-card>
</template>
<script src="./js/blogcard.js"/>