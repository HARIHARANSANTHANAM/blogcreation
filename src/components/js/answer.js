import { mapActions } from "vuex"
import CommentContainer from '@/components/CommentContainer'
export default {
    name: 'AnswerContainer',
    data() {
        return {
            loader: false,
            isexpanded: false
        }
    },
    props: {
        data: {}
    },
    components: {
        CommentContainer
    },
    methods: {
        ...mapActions('blogStore', ['VIEW_ANSWER_COMMENT']),
        viewCommentForAnswer(ansid) {
            this.loader = true
            let data = { commentId: ansid, Type: "ANSWER" }
            if (this.isexpanded === false) {
                this.VIEW_ANSWER_COMMENT({
                    success: () => { this.loader = false },
                    fail: () => { this.loader = false },
                    data
                })
                this.isexpanded = true;
            }
            else {
                this.isexpanded = false;
                this.loader = false;
            }
        }
    }

}