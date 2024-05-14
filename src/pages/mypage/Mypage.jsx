import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { PageContext } from '../../components/context/PageContext';

import * as MypageST from './style/MypageStyle';
import * as SignST from '../signup/SignUpStyle';
import Layout from '../../components/layout/Layout';
import SVG from '../../components/imgs/SVG';

export default function Mypage() {

    const { setPage } = useContext(PageContext);
    const navigate = useNavigate();

    const nickname = useSelector((state) => state.user.nickname);
    const point = useSelector((state) => state.user.point);

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
        setPage('mypage');
    }, []);

    return (
    <>
    <Layout>
    <SignST.ContentZone>

        <MypageST.ProfileZone>
            <MypageST.ProfilePic/>
            <MypageST.PicRight>
                <MypageST.NickText>{nickname}&nbsp;</MypageST.NickText>님
            </MypageST.PicRight>
        </MypageST.ProfileZone>

        <MypageST.EditBtn onClick={()=>navigate('/mypageEdit')}>
          프로필 수정 <SVG name='Goto' size='12' color='var(--grey-normal)'/>
        </MypageST.EditBtn>

        <MypageST.BtnZone>
          <MypageST.PointBtn onClick={()=>navigate('/mypoint')}>
            <MypageST.PointColorBtn>
              포인트 <SVG name='Goto' size='10' color='var(--main-black)'/>
              <MypageST.NumberText>{point}&nbsp;P</MypageST.NumberText>
            </MypageST.PointColorBtn>
          </MypageST.PointBtn>
          <MypageST.CouponBtn>
            쿠폰 <SVG name='Goto' size='10' color='var(--main-white)'/>
            <MypageST.NumberText>-</MypageST.NumberText>
          </MypageST.CouponBtn>
          <MypageST.GiticonBtn onClick={()=>navigate('/mygifticon')}>
            기프티콘 <SVG name='Goto' size='10' color='var(--main-white)'/>
            <MypageST.NumberText>532&nbsp;개</MypageST.NumberText>
          </MypageST.GiticonBtn>
        </MypageST.BtnZone>

        <MypageST.AdminCriticBtn>
          <MypageST.Gap8>
            <SVG name='Star' size='10' color='var(--main-black)'/>
            설문조사 접수 리스트
          </MypageST.Gap8>
          <SVG name='Goto' size='10' color='var(--main-black)'/>
        </MypageST.AdminCriticBtn>
        <MypageST.AdminCriticBtn>
          <MypageST.Gap8>
          <SVG name='Star' size='10' color='var(--main-black)'/>
          기프티콘 구매 리스트
          </MypageST.Gap8>
          <SVG name='Goto' size='10' color='var(--main-black)'/>
        </MypageST.AdminCriticBtn>
        <MypageST.AdminBtn>
          기프티콘 등록하기
          <SVG name='Goto' size='10' color='var(--main-black)'/>
        </MypageST.AdminBtn>

        <MypageST.CriticBtn>
          내가 접수한 설문 <SVG name='Goto' size='10' color='var(--main-black)'/>
        </MypageST.CriticBtn>

        <MypageST.HelpBtn onClick={()=>navigate('/inquiryPage')}>
          F&nbsp;A&nbsp;Q <SVG name='Goto' size='10' color='var(--main-white)'/>
        </MypageST.HelpBtn>
        <MypageST.HelpBtn onClick={()=>navigate('/noticePage')}>
          공지사항 <SVG name='Goto' size='10' color='var(--main-white)'/>
        </MypageST.HelpBtn>

        <div style={{ height: '60px'}}/>
    </SignST.ContentZone>
    </Layout>
    </>
    )
}