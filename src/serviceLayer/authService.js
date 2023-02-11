import axios from 'axios'


const authUser = ({ success, fail, data }) => {
    // const {email,password}=data;
    axios.post(`one/user/userLogin`, data)
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

const signUpUser = ({ success, fail, data }) => {
    // const {userName,password,email,jobPosition}=data;
    axios.post(`one/user/addUser`, data)
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



export default { authUser, signUpUser }

