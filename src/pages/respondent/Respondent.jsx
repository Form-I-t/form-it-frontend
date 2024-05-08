import React, { useContext, useEffect } from 'react';
import { useSelector } from 'react-redux';

import * as ResrchST from '../researcher/ResrchStyle';

import Layout from '../../components/layout/Layout';
import { PageContext } from '../../components/context/PageContext';

export default function Respondent() {

    const { setPage } = useContext(PageContext);

    // const id = useSelector((state) => state.survey.id); //접수번호
    // const googleFormLink = useSelector((state) => state.survey.googleFormLink); //구글폼 링크
    // const participantCount = useSelector((state) => state.survey.participantCount); //희망 응답자 수
    // const rewardPoints = useSelector((state) => state.survey.rewardPoints); //인당 포인트
    // const deadline = useSelector((state) => state.survey.deadline); //설문 종료날짜
    // const accountHolderName = useSelector((state) => state.survey.accountHolderName); //예금주
    // // +은행명
    // const account = useSelector((state) => state.survey.account); //계좌번호
    // const createdAt = useSelector((state) => state.survey.createdAt); //설문 시작날짜
    // const price = useSelector((state) => state.survey.price); //결제금액

    // console.log(
    //     id,
    //     googleFormLink,
    //     participantCount,
    //     rewardPoints,
    //     deadline,
    //     accountHolderName,
    //     account,
    //     createdAt,
    //     price
    // );

    useEffect(() => {
        setPage('Respondent');
    }, []);

    return (
        <>
        <Layout>
            <ResrchST.ResrchContent>
                <ResrchST.IntroTitle>
                    참여자페이지
                </ResrchST.IntroTitle>

                <ResrchST.IntroText>
                    설문조사들 나열
                </ResrchST.IntroText>
            </ResrchST.ResrchContent>
        </Layout>
        </>
    );
}