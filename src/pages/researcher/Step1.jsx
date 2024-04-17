import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import * as ResrchST from './ResrchStyle';
import * as SignST from '../signup/SignUpStyle';
import * as MainST from '../main/MainPageStyle';
import * as LoginST from '../login/LoginStyle';

import Layout from '../../components/layout/Layout';
import FormIcon from '../../components/imgs/researcher/FormIcon.png';
import CancelModal from './CancelModal';
import CautionModal from '../../components/modal/CautionModal';

import { PageContext } from '../../components/context/PageContext';
import { useInput } from '../../hooks/useInput';
import { SET_SURVEY, __postStep1 } from '../../redux/modules/SurveySlice';

export default function Step1() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { setPage } = useContext(PageContext);
    const [isModal, setIsModal] = useState(false);
    const [isBlank, setIsBlank] = useState(false);
    const [modalMsg, setModalMsg] = useState('입력사항을 확인해주세요.');
    const [ {formUrl}, onInputChange, resetInput ] = useInput({formUrl: ""});

    const nextHandler = async() => {
        let Url = formUrl.replace(/ /g,"");
        if (Url === "") {
            setModalMsg('입력사항을 확인해주세요.');
            setIsBlank(true);
        } else {
            __postStep1(Url)
            .then(res => {
                if (parseInt(Number(res.status) / 100) === 2) {
                    dispatch(SET_SURVEY(res.data));
                    navigate('/step2');
                } else {
                    //예외처리
                    resetInput();
                }
            }).catch((error) => {
                //예외처리
                resetInput();
            })
        }
    }

    useEffect(() => {
        setPage('step1');
    }, []);

    return (
        <>
        <Layout>
        {/* 모달 */}
        {isModal === true ?
        <CancelModal setIsModal={setIsModal}/> : <></>}
        {/* 빈칸경고모달 */}
        {isBlank === true ?
        <CautionModal setIsBlank={setIsBlank} modalMsg={modalMsg}/> : <></>}
            <SignST.ContentZone>
                <ResrchST.PgZone>
                    <ResrchST.PgBar3/>
                </ResrchST.PgZone>

                <MainST.GuideText>
                    설문받을&nbsp;<MainST.NickText>Google Form</MainST.NickText>의
                </MainST.GuideText>
                <MainST.GuideText>
                    <MainST.NickText>URL</MainST.NickText>을 입력해주세요.
                </MainST.GuideText>

                <ResrchST.FormIcon src={FormIcon}/>
                <LoginST.InputBox
                    name = "formUrl"
                    type = 'text'
                    value = {formUrl}
                    onChange = {onInputChange}
                    placeholder = 'URL을 복붙해주세요 !'>
                </LoginST.InputBox>

                <ResrchST.ButtonZone>
                    <ResrchST.CancelBtn onClick={()=>{setIsModal(true)}}>
                        돌아가기
                    </ResrchST.CancelBtn>
                    <ResrchST.NextBtn onClick={nextHandler}>
                        다음으로
                    </ResrchST.NextBtn>
                </ResrchST.ButtonZone>
            </SignST.ContentZone>
        </Layout>
        </>
    );
}