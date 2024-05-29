import { useContext, useEffect, useState } from 'react';

import { PageContext } from '../../../components/context/PageContext';

import * as MypageST from '../style/MypageStyle';
import * as SignST from '../../signup/SignUpStyle';
import * as LoginST from '../../login/LoginStyle';
import Layout from '../../../components/layout/Layout';
import Setting from '../../../components/imgs/Setting.png'
import MyPicEdit from './MyPicEdit'
import MypageSetting from './MypageSetting';

export default function MypageEdit() {

    const { setPage } = useContext(PageContext);
    const [isPicModal, setIsPicModal] = useState(false);
    const [isSettModal, setIsSettModal] = useState(false);

    const openPicModal = () => {
        setIsPicModal(true);
    }
    const closePicModal = () => {
        setIsPicModal(false);
    }
    const openSettModal = () => {
        setIsSettModal(true);
    }
    const closeSettModal = () => {
        setIsSettModal(false);
    }

    useEffect(() => {
        setPage('mypageEdit');
    }, []);

    return (
    <>
    <Layout>
        {/* 모달 */}
        {isPicModal === true ?
          <MyPicEdit closePicModal={closePicModal}/> :
          <></>}
        {isSettModal === true ?
          <MypageSetting closeSettModal={closeSettModal}/> :
          <></>}
    <SignST.ContentZone>
        {/* 프로필사진 */}
        <MypageST.EditSetting src={Setting} onClick={openSettModal}/>
        {/* 윗부분 */}
        <MypageST.EditProfileZone>
            <MypageST.ProfilePicEdit/>
            <MypageST.EditBtn onClick={openPicModal}>프로필 사진 변경</MypageST.EditBtn>
        </MypageST.EditProfileZone>
        {/* 정보란 */}
        <MypageST.InfoText>닉네임</MypageST.InfoText>
        <MypageST.NickEdit>
            <MypageST.NickInput/>
            <MypageST.EditBtn>중복 확인</MypageST.EditBtn>
        </MypageST.NickEdit>
        <MypageST.InfoText>이메일</MypageST.InfoText>
        <LoginST.InputBox/>
    </SignST.ContentZone>
    </Layout>
    </>
    )
}