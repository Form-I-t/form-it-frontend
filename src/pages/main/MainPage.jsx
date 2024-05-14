import React, { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import * as MainST from './MainPageStyle';
import Layout from '../../components/layout/Layout';
import SVG from '../../components/imgs/SVG';

import { PageContext } from '../../components/context/PageContext';

export default function MainPage() {

    const nickname = useSelector((state) => state.user.nickname);
    const point = useSelector((state) => state.user.point);
    const authenticated = useSelector((state) => state.token.authenticated);
    const [isLogin, setIsLogin] = useState(false);

    const { setPage } = useContext(PageContext);
    const navigate = useNavigate();

    const giftArray = ['공차', '커피', '베라', '치킨'];
    const randomValue = giftArray[Math.floor(Math.random() * giftArray.length)];

    useEffect(() => {
        setPage('MainPage');
        if (authenticated === true) {
            setIsLogin(true);
          } else {
            setIsLogin(false);
          };
    }, []);

    return (
        <>
        <Layout>
            <MainST.ContentZone>
                {isLogin === false ?
                <MainST.GuideZone>
                    <MainST.GuideText>
                        설문조사 참여하고
                    </MainST.GuideText>
                    <MainST.GuideText>
                        <MainST.NickText>{randomValue}&nbsp;</MainST.NickText> 먹자!
                    </MainST.GuideText>
                    <MainST.GuideButton
                        onClick={() => {
                            navigate('/login');
                        }}
                    > 로그인하고 시작하기
                    </MainST.GuideButton>
                </MainST.GuideZone>
                :
                <MainST.GuideZone>
                    <MainST.GuideText>
                        <MainST.NickText>{nickname}</MainST.NickText>&nbsp;님! 설문 참여하고
                    </MainST.GuideText>
                    <MainST.GuideText>
                        커피 한 잔 어때요 ?
                    </MainST.GuideText>
                    <MainST.NumberZone>
                        오늘 참여&nbsp;&nbsp;<MainST.NumberText>12개</MainST.NumberText>&nbsp;
                        |&nbsp;&nbsp;내 기프티콘&nbsp;&nbsp;<MainST.NumberText>2개</MainST.NumberText>
                    </MainST.NumberZone>
                    <MainST.PointText>
                        {point}
                    </MainST.PointText>
                </MainST.GuideZone>
                }
            
            <MainST.OptionBox>
                <MainST.Option onClick={()=>{navigate('/researcher')}}>
                    설문등록
                    <MainST.OptionText>
                        설문조사<br/><MainST.HighLight>등록</MainST.HighLight>하기
                    </MainST.OptionText>
                </MainST.Option>
                <MainST.Option onClick={()=>{navigate('/respondent')}}>
                    설문참여
                    <MainST.OptionText>
                        설문조사<br/><MainST.HighLight>참여</MainST.HighLight>하기
                    </MainST.OptionText>
                </MainST.Option>
            </MainST.OptionBox>

            <MainST.BubbleZone>
                <MainST.BubbleIcon/>
                <MainST.BubbleText>
                    <MainST.SmallText>반가워요 !</MainST.SmallText>
                    폼잇은 처음이신가요 ?
                </MainST.BubbleText>
                <SVG name='Goto' size='12' color='var(--main-white)'/>
            </MainST.BubbleZone>
            <MainST.BubblePoint/>

            <div style={{ height: '60px'}}/>
            </MainST.ContentZone>
        </Layout>
        </>
    );
}