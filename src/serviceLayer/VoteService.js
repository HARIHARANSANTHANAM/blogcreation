import axios from 'axios'

export const Vote = axios.create({
    baseURL: "/two",
    headers: {
        "content-type": "application/json",
    },
});
const VoteURL = {
    getVotes: "three/vote/getVoteStatus",
    updateVote: "three/vote/addvote"
}


const getVoteStatus = ({ success, fail, data }) => {
    const { votedfor, userId, type } = data
    axios.get(VoteURL.getVotes + `?votedfor=${votedfor}&userId=${userId}&type=${type}`)
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

const UpdateVote = ({ success, fail }) => {
    axios.post(VoteURL.updateVote)
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




export default { UpdateVote, getVoteStatus }

