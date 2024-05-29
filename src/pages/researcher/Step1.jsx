import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import * as ResrchST from './ResrchStyle';
import * as SignST from '../signup/SignUpStyle';
import * as MainST from '../main/MainPageStyle';
import * as LoginST from '../login/LoginStyle';
import SVG from '../../components/imgs/SVG';

import Layout from '../../components/layout/Layout';
import FormIcon from '../../components/imgs/researcher/FormIcon.png';
import CheckModal from '../../components/modal/CheckModal';
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
    const [ { formUrl, resrcher, respndnt},
            onInputChange,
            resetInput ] = useInput(
                {   formUrl: "",
                    resrcher: "",
                    respndnt: "",
                });
    const [btnActiv, setBtnActiv] = useState(false);

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
    };

    useEffect(() => {
        if ((formUrl && resrcher) !== "") {
            setTimeout(() => {
                setBtnActiv(true);
            }, 500)
        } else {
            setBtnActiv(false);
        }
    }, [formUrl, resrcher])

    useEffect(() => {
        setPage('step1');
    }, []);

    return (
        <>
        <Layout>
        {/* 모달 */}
        {isModal === true ?
        <CheckModal setIsModal={setIsModal}/> : <></>}
        {/* 빈칸경고모달 */}
        {isBlank === true ?
        <CautionModal setIsBlank={setIsBlank} modalMsg={modalMsg}/> : <></>}
            <SignST.ContentZone>
                <ResrchST.PgZone>
                    <ResrchST.PgBar3/>
                </ResrchST.PgZone>

                <MainST.GuideText>
                    설문받을&nbsp;<MainST.NickText>구글 폼</MainST.NickText>의
                </MainST.GuideText>
                <MainST.GuideText>
                    기본 정보를 입력해주세요.
                </MainST.GuideText>

                <ResrchST.FormIcon src={FormIcon}/>
                <LoginST.RequInputBox
                    name = "formUrl"
                    type = 'text'
                    value = {formUrl}
                    onChange = {onInputChange}
                    placeholder = '링크 URL'>
                </LoginST.RequInputBox>
                <LoginST.RequInputBox
                    name = "resrcher"
                    type = 'text'
                    value = {resrcher}
                    onChange = {onInputChange}
                    placeholder = '조사 단체 or 조사자'>
                </LoginST.RequInputBox>
                <LoginST.InputBox
                    name = "respndnt"
                    type = 'text'
                    value = {respndnt}
                    onChange = {onInputChange}
                    placeholder = '특정 조사 대상'>
                </LoginST.InputBox>

                <ResrchST.CantBox>
                    <b>지원되지 않아요!</b>
                    <ResrchST.FlexZone>
                    <SVG name='Cant'/> 선형배율, 그리드 문항
                    </ResrchST.FlexZone>
                    <ResrchST.FlexZone>
                    <SVG name='Cant'/> 섹션으로 나뉘어진 설문
                    </ResrchST.FlexZone>
                </ResrchST.CantBox>

                <ResrchST.ButtonZone>
                    <ResrchST.CancelBtn onClick={()=>{setIsModal(true)}}>
                        돌아가기
                    </ResrchST.CancelBtn>
                    <ResrchST.NextBtn $btnActiv={btnActiv} onClick={nextHandler}>
                        다음으로
                    </ResrchST.NextBtn>
                </ResrchST.ButtonZone>
            </SignST.ContentZone>
        </Layout>
        </>
    );
}