import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import * as LoginST from './LoginStyle';
import Layout from '../../components/layout/Layout';
import SVG from '../../components/imgs/SVG';
import Logo from '../../components/imgs/Logo.png';

import { PageContext } from '../../components/context/PageContext';
import { useInput } from '../../hooks/useInput';
import { login } from '../../shared/api/AuthAPI';
import { userInfo } from '../../shared/api/AuthAPI';
import { setRefreshToken } from '../../shared/storage/Cookie';
import { SET_TOKEN } from '../../redux/modules/AuthSlice';
import { SET_USER } from '../../redux/modules/UserSlice';

export default function SignUp() {

    const { setPage } = useContext(PageContext);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [isCantLogin, setIsCantLogin] = useState(false);

    const [ { email, pw },
            onInputChange,
            resetInput
          ] = useInput(
            { email: "",
              pw: "",
            })

    //로그인 핸들러
    const LoginHandler = async () => {
        login({email: email, password: pw})
        .then(response => {
            if (parseInt(Number(response.status) / 100) === 2) {
                if ((email || pw) === '') {
                    setIsCantLogin(true);
                } else {
                    setRefreshToken(response.headers['authorization']);
                    dispatch(SET_TOKEN(response.headers['refresh_token']));
                    userInfo(response.data.memberId)
                    .then(res => {
                        if (parseInt(Number(res.status) / 100) === 2) {
                            dispatch(SET_USER(res.data.memberInfo));
                        } else {
                            setIsCantLogin(true);
                            resetInput();
                        }
                    }).catch((error) => {
                        setIsCantLogin(true);
                        resetInput();
                    })
                    navigate('/');                    
                }            
            } else {
                setIsCantLogin(true);
                resetInput();
            }
        }).catch((error) => {
            setIsCantLogin(true);
            resetInput();
        });
    }

    useEffect(() => {
        setPage('Login');
    }, []);

    return (
        <>
        <Layout>
            <LoginST.MainBg>
            <LoginST.ContentZone>

                {/* 문구 */}
                <LoginST.LogoImage src={Logo}/>
                <LoginST.LogoZone> 쉽고 편한 설문 운영,관리 솔루션 </LoginST.LogoZone>    
                
                <LoginST.InputZone>
                {/* 이메일 */}
                <LoginST.InputBox
                    name = "email"
                    type = 'text'
                    value = {email}
                    onChange = {onInputChange}
                    placeholder = '이메일을 입력해주세요.'/>

                {/* 비밀번호 */}
                <LoginST.InputBox
                    name = "pw"
                    type = 'password'
                    value = {pw}
                    onChange = {onInputChange}
                    placeholder = '비밀번호를 입력해주세요.'/>
                </LoginST.InputZone>

                {/* 로그인 성공여부 */}
                {(isCantLogin === true) ? (
                    <LoginST.CautionText>
                        <SVG name='Caution' size='15' color='var(--main-pink)'/>
                        이메일과 비밀번호를 다시 확인해주세요 !
                    </LoginST.CautionText>
                ) : (
                    <LoginST.NoCaution/>
                )}

                <LoginST.LoginBtn onClick={LoginHandler}>
                    로그인
                </LoginST.LoginBtn>

                <LoginST.SignUpBtn onClick={() => navigate('/signup')}>
                    회원가입
                </LoginST.SignUpBtn>

                <LoginST.SignUpBtn onClick={() => navigate('/')}>
                    한냥 홈으로
                </LoginST.SignUpBtn>

            </LoginST.ContentZone>
            </LoginST.MainBg>
        </Layout>
        </>
    );
}