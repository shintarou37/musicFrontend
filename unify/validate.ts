export const validateRegister = (name: string, artist: string, reason: string, setErrMessage: Function) => {
    let errMessageTpm = "";
    if (name.length == 0 || name.length >= 101) {
      errMessageTpm += "曲名を0 ~ 100文字で入力してください。";
    }
    if (artist.length == 0 || artist.length >= 101) {
      errMessageTpm += "歌手名を0 ~ 100文字で入力してください。";
    }
    if (reason.length >= 1001) {
      errMessageTpm += "おすすめポイントを1000文字以内で入力してください。";
    }
    if (errMessageTpm != "") {
      setErrMessage(errMessageTpm);
      return false;
    }
    return true;
}

export const validateSignUp = (name: string, password: string, setErrMessage: Function) => {
    let errMessageTpm = "";
    if (name.length == 0 || name.length >= 10) {
      errMessageTpm += "名前を1 ~ 10文字で入力してください。";
    }
    if (password.length < 8 || password.length >= 16) {
      errMessageTpm += "パスワードを8 ~ 16文字で入力してください。";
    }

    if (errMessageTpm != "") {
      setErrMessage(errMessageTpm);
      return false;
    }
    return true;
}