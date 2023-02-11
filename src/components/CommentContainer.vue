<template>
  <ul>
    <span v-for="(comment, index) in comments" :key="index">
      <QAContainer Type="COMMENT" :id="index" :data="comment">
        <template v-slot:content>
          <CommentComponent :id="comment.commentid" :comment="comment">
            <template v-slot:comment>
              <div class="row">
                {{ comment.content }}
                <div style="margin-left: auto">
                  <b-button
                    variant="info"
                    @click="fetchComments(comment)"
                    size="sm"
                  >
                    <b-icon
                      icon="chevron-down"
                      v-show="comment?.isExpanded"
                      aria-hidden="true"
                    ></b-icon>
                    <b-icon
                      icon="chevron-up"
                      v-show="!comment?.isExpanded"
                      aria-hidden="true"
                    ></b-icon>
                  </b-button>
                </div>
              </div>
            </template>
          </CommentComponent>

          <div class="nested-comments" v-if="comment.isExpanded">
            <CommentContainer :comments="comment.comments"></CommentContainer>
          </div>
        </template>
      </QAContainer>
    </span>
  </ul>
</template>

<style scoped>
.nested-comments {
  margin: 0;
  padding: 0px;
}
</style>
<script>
import CommentComponent from "@/components/CommentComponent.vue";
import QAContainer from "@/components/Q&AContainer.vue";
import { mapActions } from "vuex";
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
      default: () => [],
    },
  },
  methods: {
    ...mapActions("blogStore", ["VIEW_COMMENT_COMMENT"]),
    fetchComments(comment) {
      comment.isExpanded = !comment?.isExpanded;

      if (comment.isExpanded) {
        let data = { commentId: comment.commentid, Type: "COMMENT" };
        this.VIEW_COMMENT_COMMENT({
          success: (res) => {
            console.log(res);
          },
          fail: (err) => {
            console.log(err);
          },
          data,
        });
      }
    },
  },
};
</script>