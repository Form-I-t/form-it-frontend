import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import * as SignST from './SignUpStyle';
import * as MainST from '../main/MainPageStyle';
import Layout from '../../components/layout/Layout';
import SUsuccess from '../../components/imgs/SUsuccess.png'

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
                    <SignST.SuccessText>회원가입이 완료되었습니다.</SignST.SuccessText>

                    <SignST.SmallText>
                        지금 바로 설문에 참여하시고 <br/>
                        기프티콘을 향해 달려보아요 🔥
                    </SignST.SmallText>

                    <SignST.SUsuccess src={SUsuccess}/>

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