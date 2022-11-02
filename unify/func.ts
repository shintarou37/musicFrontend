import { axiosBase } from './const'
import { parseCookies, setCookie, destroyCookie } from 'nookies'

export const sendRegister = (name: string, artist: string, reason: string, situation: string) => {
    const cookies = parseCookies();
    let userID;
    if(cookies.id){
        userID = cookies.id;
    }
    else{
        userID = 0;
    }
    return axiosBase.post(`/register?situation=${situation}&name=${name}&artist=${artist}&reason=${reason}&userID=${userID}`)
        .then(() => {
            return true;
        })
        // Go側でエラーがあった場合
        .catch(() => {
            return false;
        });
};

export const sendUpdate = (id: number, name: string, artist: string, reason: string, situation: string) => {
    return axiosBase.post(`/update?id=${id}&situation=${situation}&name=${name}&artist=${artist}&reason=${reason}`)
        .then(() => {
            return 200;
        })
        .catch((err) => {
            // JWT認証エラー
            if (err.response.status == 401) {
                return 401;
            }
            return 400;
        });
};

export const sendSignUp = (name: string, password: string) => {
    return axiosBase.post(`/signup?name=${name}&password=${password}`)
        .then(() => {
            return 200
        })
        .catch((err) => {
            // 入力した名前が既に存在している場合
            if (err.response.status == 400) {
                return 400;
            }
            return 500;
        });
};

export const sendSignIn = (name: string, password: string) => {
    return axiosBase.post(`/signin?name=${name}&password=${password}`)
        .then((res) => {
            // レスポンス内容をCookieに保存する
            setCookie(null, 'name', res.data.Name, {
                maxAge: 60 * 60,
            })
            setCookie(null, 'token', res.data.Token, {
                maxAge: 60 * 60,
            })
            setCookie(null, 'id', res.data.ID, {
                maxAge: 60 * 60,
            })

            return 200;
        })
        .catch((err) => {
            // 名前がDBに存在しない場合
            if (err.response.status == 401) {
                return 401;
            }
            // パスワード間違い;
            if (err.response.status == 406) {
                return 406;
            }
            return 500;
        });
};