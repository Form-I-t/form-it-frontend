import { Cookies } from "react-cookie";

const cookies = new Cookies();

//refreshToken을 쿠키에 저장
export const setRefreshToken = (refreshToken) => {
    const today = new Date();
    const expireDate = today.setDate(today.getDate() + 1);
    document.cookie = "myCookie=myValue; SameSite=None; Secure";

    return cookies.set('refreshToken', refreshToken, {
        sameSite: 'strict',
        secure: true,
        path: '/',
        expires: new Date(expireDate),
    });
};

//쿠키에 저장된 refreshToken을 가져옴
export const getCookieToken = () => {
    return cookies.get('refreshToken')
}

//쿠키 삭제, 로그아웃
export const removeCookieToken = () => {
    return cookies.remove('refreshToken', {
        sameSite: 'strict',
        path: '/',
    })
}