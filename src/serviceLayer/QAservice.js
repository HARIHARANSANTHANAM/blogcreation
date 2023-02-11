import axios from 'axios';
const QAURL = {
    addanswer: "/answer/addAnswer",
    getcomments: "/comment/getComment",
    addcomment: "comment/addComment"
}
export const QA = axios.create({
    baseURL: "/three",
    headers: {
        "content-type": "application/json",
    },
});

const answerByBlog = ({ success, fail, data }) => {
    QA.post(QAURL.addanswer, data)
        .then((res) => {
            if (res.status === 200) {
                success(res);
            }
            else if (res.status >= 400 && res.status <= 499) {
                fail(res.message)
            }
        })
        .catch((err) => {
            fail(err);
        })
}

const fetchComments = ({ success, fail, data }) => {
    QA.get(QAURL.getcomments + `?commentId=${data.commentId}&type=${data.Type}`)
        .then((res) => {
            if (res.status === 200) {
                success(res);
            }
            else if (res.status >= 400 && res.status <= 499) {
                fail(res.message)
            }
        })
        .catch((err) => {
            fail(err);
        })
}

const addComments = ({ success, fail, data }) => {
    QA.post(QAURL.addcomment, data)
        .then((res) => {
            if (res.status === 200) {
                success(res);
            }
            else if (res.status >= 400 && res.status <= 499) {
                fail(res.message)
            }
        })
        .catch(err => {
            fail(err)
        })
}

export default { answerByBlog, fetchComments, addComments }