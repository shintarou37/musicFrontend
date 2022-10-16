import { axiosBase } from './const'
import { parseCookies, setCookie, destroyCookie } from 'nookies'

export const sendRegister = (name: string, artist: string, reason: string, situation: string) => {
    return axiosBase.post(`/register?situation=${situation}&name=${name}&artist=${artist}&reason=${reason}`)
        .then(() => {
            return true
        })
        // Go側でエラーがあった場合
        .catch((err) => {
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
            return false
        });
};

export const sendSignIn = (name: string, password: string) => {
    return axiosBase.post(`/signin?name=${name}&password=${password}`)
        .then((res) => {
            setCookie(null, 'name', res.data.Name, {
                maxAge: 60 * 60,
                path: '/',
            })
            setCookie(null, 'token', res.data.Token, {
                maxAge: 60 * 60,
                path: '/',
            })
            return 200
        })
        // Go側でエラーがあった場合
        .catch((err) => {
            if(err.response.status == 401){
                return 401
            }
            if(err.response.status == 406){
                return 406
            }
            return 200
        });
};