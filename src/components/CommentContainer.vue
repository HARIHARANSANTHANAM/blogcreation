<template>
  <div>
    <ul v-for="(comment, index) in comments" :key="index">
      <QAContainer Type="COMMENT" :id="index" :data="{ upvotes: 3, downvotes: 3 }">
        <template v-slot:content >
          <CommentComponent :id="1">
            <template v-slot:comment>
              {{ comment.comment }}
            </template>
          </CommentComponent>
          <div class="row justify-content-end">
           <b-button variant="info" @click="comment.isExpanded = !comment.isExpanded">
          View Comments
        </b-button>
          </div>
        <div v-if="comment.isExpanded">
          <CommentContainer :comments="comment.comments"></CommentContainer>
        </div>
        </template>
  
       
      </QAContainer>
    </ul>
  </div>
</template>

<script>
import CommentComponent from "@/components/CommentComponent.vue";
import QAContainer from "@/components/Q&AContainer.vue";
export default {
  name: "CommentContainer",
  components: {
    CommentComponent,
    QAContainer,
  },
  props: {
    comments: {
      type: Array,
      required: true,
    },
  },
};
</script>