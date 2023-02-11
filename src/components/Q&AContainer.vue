<template>
  <li class="row mt-2 justify-content-center">
    <div>
      <slot name="vote">
        <VotingComponent
          :upvoteCount="data?.upvotes"
          :downvoteCount="data?.downvotes"
        />
      </slot>
    </div>
    <div class="col ml-4">
      <slot name="content"></slot>
      <div class="row justify-content-end" v-if="!showReply">
      <span @click="showReply = true" style="cursor: pointer">Show Reply</span>
    </div>
    <form
      block
      class="row mt-2 bg-light pd-2"
      v-else
      @submit.prevent="addComment()"
    >
      <input
        type="text"
        placeholder="Reply..."
        v-model="newcomment"
        class="col-9"
      />
      <button type="submit" class="btn btn-info col ml-1">
      <b-icon icon="telegram" aria-hidden="true"></b-icon>
      </button>
      <button
        type="button"
        class="btn btn-dark col ml-1"
        @click="showReply = false"
      >
        Cancel
      </button>
    </form>
      <hr />
    </div>
  </li>
</template>
<script src="./js/Q&AContainer.js"/>