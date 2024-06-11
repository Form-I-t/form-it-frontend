import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import * as SignST from '../signup/SignUpStyle';
import * as MainST from '../main/MainPageStyle';
import Layout from '../../components/layout/Layout';
import STsuccess from '../../components/imgs/researcher/STsuccess.png';

import { PageContext } from '../../components/context/PageContext';

export default function StepComplete() {

    const { setPage } = useContext(PageContext);
    const navigate = useNavigate();

    useEffect(() => {
        setPage('stepComplete');
    }, []);

    return (
        <>
        <Layout>
            <SignST.ContentZone>
                <SignST.SuccessZone>
                    {/* 문구 */}
                    <MainST.NickText>감사합니다!</MainST.NickText>
                    <SignST.SuccessText>접수가 완료되었습니다.</SignST.SuccessText>

                    <SignST.SmallText>
                        입력사항과 입금내역이 확인되면 <br/>
                        검수 후 설문조사가 게시됩니다 🔥
                    </SignST.SmallText>
                    <div style={{ height: '40px'}}/>
                    <SignST.SUsuccess src={STsuccess}/>

                    {/* 버튼 */}
                    <SignST.SuccessBtn
                     onClick={() => { navigate('/respondent'); }}
                    >
                        설문 참여하기
                    </SignST.SuccessBtn>
                </SignST.SuccessZone>
            </SignST.ContentZone>
        </Layout>
        </>
    );
}