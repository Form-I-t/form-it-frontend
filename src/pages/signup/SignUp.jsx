import React, { useContext, useEffect, useState } from 'react';

import * as SignST from './SignUpStyle';
import * as MainST from '../main/MainPageStyle';
import * as LoginST from '../login/LoginStyle';
import Layout from '../../components/layout/Layout';
import SVG from '../../components/imgs/SVG';

import { PageContext } from '../../components/context/PageContext';
import { useInput } from '../../hooks/useInput';
import { useNavigate } from 'react-router-dom';

import { signUp } from '../../shared/api/AuthAPI';
import { emailDouble, nickDouble } from '../../shared/api/AuthAPI';

export default function SignUp() {

    const { setPage } = useContext(PageContext);
    const navigate = useNavigate();

    const [isBeforeInputEm, setIsBeforeInputEm] = useState(true);
    const [isEmailFail, setIsEmailFail] = useState(true);
    const [emCheckText, setEmCheckText] = useState('');
    const [isBeforeInputPw, setIsBeforeInputPw] = useState(true);
    const [isPwFail, setIsPwFail] = useState(true);
    const [pwCheckText, setPwCheckText] = useState('');
    const [isBeforeInputPwChk, setIsBeforeInputPwChk] = useState(true);
    const [isPwChkFail, setIsPwChkFail] = useState(true);
    const [pwChkCheckText, setPwChkCheckText] = useState('');
    const [isBeforeInputNick, setIsBeforeInputNick] = useState(true);
    const [isNickFail, setIsNickFail] = useState(true);
    const [nickCheckText, setNickCheckText] = useState('');
    const [allPass, setAllPass] = useState(false);
    const [isCantSignIn, setIsCantSignIn] = useState(false);

    const EmailPattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
    const PwPattern = /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[~?!@#$%^&*_-]).{8,}$/;
    const NickPattern = /^(?=.*[0-9가-힣])[0-9가-힣]{2,6}$/;

    const [ { email, pw, pwCheck, nick },
            onInputChange,
            resetInput
          ] = useInput(
            { email: "",
              pw: "",
              pwCheck: "",
              nick: "",
            })

    function emailValidChk() {
        if(EmailPattern.test(email) === false) { return false; }
        else { return true; }
    }

    function pwValidChk() {
        if(PwPattern.test(pw) === false) { return false; }
        else { return true; }
    }

    function pwChkValidChk() {
        if(pw === pwCheck) { return true; }
        else { return false; }
    }

    function nickValidChk() {
        if(NickPattern.test(nick) === false) { return false; }
        else { return true; }
    }

    //회원가입 핸들러
    const SubmitHandler = async () => {
        signUp({role: "ROLE_MEMBER", email: email, password: pwCheck, nickname:nick})
        .then(response => {
            if(parseInt(Number(response) / 100) === 2) {
                navigate('/SignUpSuccess');
            } else {
                resetInput();
                setIsCantSignIn(true);
            }
        }).catch(error => {
            resetInput();
            setIsCantSignIn(true);
        });
    }

    useEffect(() => {
        setPage('SignUp');
    }, []);

    //이메일 체크
    useEffect(() => {
        if (email === '') {
            setIsBeforeInputEm(true);
        } else {
            const emailHandler = setTimeout(async () => {
                const emailRes = await emailValidChk(email);
                if (emailRes === true) {   
                    emailDouble(email)
                    .then((response) => {
                        if (response === 'ok') {
                            setIsEmailFail(true);
                            setIsBeforeInputEm(false);
                            setEmCheckText('이미 사용 중인 이메일입니다.');
                        } else {
                            setIsEmailFail(true);
                            setIsBeforeInputEm(false);
                            setEmCheckText('오류가 발생하였습니다. 다시 시도해주세요 !');
                        }
                    }).catch(() => {
                            setIsEmailFail(false);
                            setIsBeforeInputEm(false);
                            setEmCheckText('사용 가능한 이메일입니다 !');
                    })
                } else {
                    setEmCheckText('이메일을 다시 확인해주세요.');
                    setIsBeforeInputEm(false);
                    setIsEmailFail(true);
                }
            }, 700)
            return () => {
                clearTimeout(emailHandler);
            };
        }
      }, [email]);

    //비밀번호 체크
    useEffect(() => {
        if (pw === '') {
            setIsBeforeInputPw(true);
        } else {
            const pwHandler = setTimeout(async () => {
                const pwRes = await pwValidChk(pw);
                if (pwRes === true) {
                setIsPwFail(false);
                setIsBeforeInputPw(false);
                setPwCheckText('사용 가능한 비밀번호입니다 !');
                } else {
                setPwCheckText('영문 소문자, 숫자, 특수문자를 포함해 8자 이상이어야 합니다.');
                setIsBeforeInputPw(false);
                setIsPwFail(true);
                } 
            }, 700)
            return () => {
                clearTimeout(pwHandler);
            };
        }
      }, [pw]);

    //비밀번호 일치 체크
    useEffect(() => {
        if (pwCheck === '') {
            setIsBeforeInputPwChk(true);
        } else {
            const pwChkHandler = setTimeout(async () => {
                const pwChkRes = await pwChkValidChk(pwCheck);
                if (pwChkRes === true && isPwFail === false) {
                setIsPwChkFail(false);
                setIsBeforeInputPwChk(false);
                setPwChkCheckText('비밀번호가 일치합니다 !');
                } else {
                setPwChkCheckText('비밀번호를 다시 입력해주세요.');
                setIsBeforeInputPwChk(false);
                setIsPwChkFail(true);
                } 
            }, 700)
            return () => {
                clearTimeout(pwChkHandler);
            };
        }
      }, [pwCheck, pw]);

    //닉네임 체크
    useEffect(() => {
        if (nick === '') {
            setIsBeforeInputNick(true);
        } else {
            const nickHandler = setTimeout(async () => {
                const nickRes = await nickValidChk(nick);
                if (nickRes === true) {
                    nickDouble(nick)
                    .then((response) => {
                        if (response === 'ok') {
                            setIsNickFail(true);
                            setIsBeforeInputNick(false);
                            setNickCheckText('이미 사용 중인 별명입니다.');
                        } else {
                            setIsNickFail(true);
                            setIsBeforeInputNick(false);
                            setNickCheckText('오류가 발생하였습니다. 다시 시도해주세요 !');
                        }
                    }).catch(() => {
                        setIsNickFail(false);
                        setIsBeforeInputNick(false);
                        setNickCheckText('사용 가능한 별명입니다 !');
                    })
                } else {
                    setNickCheckText('2~6자의 한글 또는 숫자로 구성해주세요.');
                    setIsBeforeInputNick(false);
                    setIsNickFail(true);
                } 
            }, 700)
            return () => {
                clearTimeout(nickHandler);
            };
        }
      }, [nick]);

    useEffect(() => {
        if(
            ((isEmailFail === false) &&
            (isPwFail === false) &&
            (isPwChkFail === false) &&
            (isNickFail === false)
            )
            && ((email && pw && pwCheck && nick) !== '')
        ) {setAllPass(true)}
        else {setAllPass(false)}
    }, [isEmailFail, isPwFail, isPwChkFail, isNickFail, email, pw, pwCheck, nick]);

    return (
        <>
        <Layout>
            <SignST.ContentZone>

                {/* 문구 */}
                <SignST.GuideZone>
                    <MainST.GuideText>
                        <MainST.NickText>Formit&nbsp;</MainST.NickText> 에
                    </MainST.GuideText>
                    <MainST.GuideText>
                        오신 것을 환영합니다 !
                    </MainST.GuideText>
                </SignST.GuideZone>    

                {/* 이메일 */}
                <LoginST.InputBox
                    name = "email"
                    type = 'text'
                    value = {email}
                    onChange = {onInputChange}
                    placeholder = '이메일'/>
                {/* 이메일검사 */}
                {isBeforeInputEm === true ? null : (
                    (isEmailFail === true) ? (
                    <SignST.CautionText>
                        <SVG name='Caution' size='15' color='var(--main-pink)'/>
                        {emCheckText}
                    </SignST.CautionText>
                    ) : (
                    <SignST.CheckText>
                        <SVG name='Check' size='15'/>
                        {emCheckText}
                    </SignST.CheckText>
                    )
                )}

                {/* 비밀번호 */}
                <LoginST.InputBox
                    name = "pw"
                    type = 'password'
                    value = {pw}
                    onChange = {onInputChange}
                    placeholder = '비밀번호 (8자 이상 / 영문 소문자, 숫자, 특수문자)'/>
                {/* 비밀번호검사 */}
                {isBeforeInputPw === true ? null : (
                    (isPwFail === true) ? (
                    <SignST.CautionText>
                        <SVG name='Caution' size='15' color='var(--main-pink)'/>
                        {pwCheckText}
                    </SignST.CautionText>
                    ) : (
                    <SignST.CheckText>
                        <SVG name='Check' size='15'/>
                        {pwCheckText}
                    </SignST.CheckText>
                    )
                )}

                {/* 비밀번호 확인 */}
                <LoginST.InputBox
                    name = "pwCheck"
                    type = 'password'
                    value = {pwCheck}
                    onChange = {onInputChange}
                    placeholder = '비밀번호 확인'/>
                {/* 비밀번호 확인 검사 */}
                {isBeforeInputPwChk === true ? null : (
                    (isPwChkFail === true) ? (
                    <SignST.CautionText>
                        <SVG name='Caution' size='15' color='var(--main-pink)'/>
                        {pwChkCheckText}
                    </SignST.CautionText>
                    ) : (
                    <SignST.CheckText>
                        <SVG name='Check' size='15'/>
                        {pwChkCheckText}
                    </SignST.CheckText>
                    )
                )}

                {/* 닉네임 */}
                <LoginST.InputBox
                    name = "nick"
                    type = "text"
                    maxLength= "6"
                    value = {nick}
                    onChange = {onInputChange}
                    placeholder = '닉네임 (2~6자 / 한글 또는 숫자로 구성)'/>
                {/* 닉네임 검사 */}
                {isBeforeInputNick === true ? null : (
                    (isNickFail === true) ? (
                    <SignST.CautionText>
                        <SVG name='Caution' size='15' color='var(--main-pink)'/>
                        {nickCheckText}
                    </SignST.CautionText>
                    ) : (
                    <SignST.CheckText>
                        <SVG name='Check' size='15'/>
                        {nickCheckText}
                    </SignST.CheckText>
                    )
                )}

                {/* 회원가입 실패 */}
                {(isCantSignIn === true) ? (
                    <SignST.CautionText>
                        <SVG name='Caution' size='15' color='var(--main-pink)'/>
                        오류가 발생하였습니다. 다시 시도해주세요 !
                    </SignST.CautionText>
                ) : null}

                <SignST.SubmitBtn
                    onClick={SubmitHandler}
                    disabled={allPass === false}
                    >
                    가입하기
                </SignST.SubmitBtn>

            </SignST.ContentZone>
        </Layout>
        </>
    );
}