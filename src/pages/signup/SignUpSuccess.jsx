import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import * as SignST from './SignUpStyle';
import * as MainST from '../main/MainPageStyle';
import Layout from '../../components/layout/Layout';

import { PageContext } from '../../components/context/PageContext';

export default function SignUpSuccess() {

    const { setPage } = useContext(PageContext);
    const navigate = useNavigate();

    useEffect(() => {
        setPage('SignUpSuccess');
    }, []);

    return (
        <>
        <Layout>
            <SignST.ContentZone>
                <SignST.SuccessZone>
                    {/* 문구 */}
                    <MainST.NickText>감사합니다!</MainST.NickText>
                    <div style={{ height: '8px'}}/>
                    <SignST.SuccessText>회원가입이 완료되었습니다.</SignST.SuccessText>
                    {/* 버튼 */}
                    <SignST.SuccessBtn onClick={() => { navigate('/login'); }}>
                        지금 시작하기
                    </SignST.SuccessBtn>
                </SignST.SuccessZone>
            </SignST.ContentZone>
        </Layout>
        </>
    );

}