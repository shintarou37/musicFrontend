import { axiosBase } from './const'

export const sendRegister = (name: string, artist: string, reason: string, situation: string) => {
    return axiosBase.post(`/register?situation=${situation}&name=${name}&artist=${artist}&reason=${reason}`)
        .then(() => {
            return true
        })
        // Go側でエラーがあった場合
        .catch((err) => {
            console.log("err--------------------------" + JSON.stringify(err))
            return false
        });
};

export const sendSignUp = (name: string, password: string) => {
    return axiosBase.post(`/signup?name=${name}&password=${password}`)
        .then(() => {
            return true
        })
        // Go側でエラーがあった場合
        .catch((err) => {
            console.log("sendSignUp err--------------------------" + JSON.stringify(err))
            return false
        });
};