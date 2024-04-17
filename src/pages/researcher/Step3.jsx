import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import * as ResrchST from './ResrchStyle';
import * as SignST from '../signup/SignUpStyle';
import * as MainST from '../main/MainPageStyle';

import Layout from '../../components/layout/Layout';
import CancelModal from './CancelModal';
import CautionModal from '../../components/modal/CautionModal';
import SVG from '../../components/imgs/SVG';
import 산업 from '../../components/imgs/bank/산업.png'
import 새마을 from '../../components/imgs/bank/새마을.png'
import 우리 from '../../components/imgs/bank/우리.png'

import { PageContext } from '../../components/context/PageContext';
import { useInput } from '../../hooks/useInput';
import { __postStep3, SET_SURVEY } from '../../redux/modules/SurveySlice';

export default function Step3() {

    const { setPage } = useContext(PageContext);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [isModal, setIsModal] = useState(false);
    const [isBlank, setIsBlank] = useState(false);
    const [modalMsg, setModalMsg] = useState('입력사항을 확인해주세요.');
    const [bankName, setBankName] = useState('은행 선택');
    const [DdOpen, setDdOpen] = useState(false);
    const [isCopied, setIsCopied] = useState(false);
    const [confirmMsg, setConfirmMsg] = useState(false);

    const surveyId = useSelector((state) => state.survey.id);

    const [ { accountOwner, account },
            onInputChange,
            resetInput
          ] = useInput(
            {   accountOwner: "",
                account: "",
            });

    //은행 드롭다운
    const DdHandler = () => {
        if(DdOpen === false) {
            setDdOpen(true);
        } else {
            setDdOpen(false);
        } 
    }

    //계좌번호 복사
    function CopyHandler() {
        const el = document.createElement(`textarea`);
        el.value = "카카오뱅크 79799514279";
        el.setAttribute(`readonly`, ``);
        document.body.appendChild(el);
        el.select();
        document.execCommand(`copy`);
        document.body.removeChild(el);
        setIsCopied(true);
    }


    const nextHandler = async() => {
        if ((accountOwner||account === "") ||
            (bankName === '은행 선택')) {
            setModalMsg('입력사항을 확인해주세요.');
            setIsBlank(true);
        } else {
            __postStep3({ surveyId, accountOwner, account })
            .then(res => {
                if (parseInt(Number(res.status) / 100) === 2) {
                    dispatch(SET_SURVEY(res.data));
                    navigate('/stepComplete');
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

    function confirmHandler() {
  
        // 1. checkbox element를 찾습니다.
        const checkbox = document.getElementById('confirmChk');
      
        // 2. checked 속성을 체크합니다.
        const is_checked = checkbox.checked;
      
        // 3. 결과를 출력합니다.
        document.getElementById('result').innerText = is_checked;
        
      }

    //confirmMsg 체크박스
    useEffect(() => {
        if (((accountOwner && account) !== "") &&
        (bankName !== '은행 선택')) {
            setTimeout(() => {
                setConfirmMsg(true);
            }, 800)
        }
    }, [accountOwner, bankName, account])

    useEffect(() => {
        setPage('step3');
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
                    <ResrchST.PgBar1/><ResrchST.PgBar2/><ResrchST.PgBar3/>
                </ResrchST.PgZone>

                <MainST.GuideText>
                    산정된 결제금액을
                </MainST.GuideText>
                <MainST.GuideText>
                    <MainST.NickText>송금&nbsp;</MainST.NickText>해주세요.
                </MainST.GuideText>

                <ResrchST.FinalPrice>
                        결제 금액
                    <ResrchST.PriceText>
                        18,000 원
                    </ResrchST.PriceText>
                </ResrchST.FinalPrice>

                <ResrchST.AccountZone onClick={CopyHandler}>
                    <ResrchST.FlexZone2>
                        <SVG name='카카오'/>
                        카카오뱅크 79799514279
                    </ResrchST.FlexZone2>
                    <SVG name='Copy'/>
                </ResrchST.AccountZone>
                {isCopied === true ?
                    <ResrchST.Warning>
                        &nbsp;&nbsp;&nbsp;계좌번호가 복사되었어요 !
                    </ResrchST.Warning> : ''
                }

                <ResrchST.TitleText>
                    입금자 정보
                </ResrchST.TitleText>

                <ResrchST.DepositZone>
                    <ResrchST.SelectZone onClick={DdHandler}>
                    {DdOpen === true ?
                        <ResrchST.Ul2>
                            <ResrchST.Li2 onClick={()=>{setBankName('신한')}}>
                                <SVG name='신한'/>
                                신한 </ResrchST.Li2>
                            <ResrchST.Li2 onClick={()=>{setBankName('국민')}}>
                                <SVG name='국민'/>
                                국민 </ResrchST.Li2>
                            <ResrchST.Li2 onClick={()=>{setBankName('기업')}}>
                                <SVG name='기업'/>
                                기업 </ResrchST.Li2>
                            <ResrchST.Li2 onClick={()=>{setBankName('농협')}}>
                                <SVG name='농협'/>
                                농협 </ResrchST.Li2>
                            <ResrchST.Li2 onClick={()=>{setBankName('우리')}}>
                                <ResrchST.BankIcon src={우리}/>
                                우리 </ResrchST.Li2>
                            <ResrchST.Li2 onClick={()=>{setBankName('하나')}}>
                                <SVG name='하나'/>
                                하나 </ResrchST.Li2>
                            <ResrchST.Li2 onClick={()=>{setBankName('카카오뱅크')}}>
                                <SVG name='카카오뱅크'/>
                                카카오뱅크 </ResrchST.Li2>
                            <ResrchST.Li2 onClick={()=>{setBankName('토스')}}>
                                <SVG name='토스'/>
                                토스 </ResrchST.Li2>
                            <ResrchST.Li2 onClick={()=>{setBankName('새마을금고')}}>
                                <ResrchST.BankIcon src={새마을}/>
                                새마을금고 </ResrchST.Li2>
                            <ResrchST.Li2 onClick={()=>{setBankName('산업')}}>
                                <ResrchST.BankIcon src={산업}/>
                                산업 </ResrchST.Li2>
                            <ResrchST.Li2 onClick={()=>{setBankName('수협')}}>
                                <SVG name='수협'/>
                                수협 </ResrchST.Li2>
                            <ResrchST.Li2 onClick={()=>{setBankName('신협')}}>
                                <SVG name='신협'/>
                                신협 </ResrchST.Li2>
                            <ResrchST.Li2 onClick={()=>{setBankName('한국씨티')}}>
                                <SVG name='한국씨티'/>
                                한국씨티 </ResrchST.Li2>
                                <ResrchST.Li2 onClick={()=>{setBankName('제주')}}>
                                <SVG name='신한'/>
                                제주 </ResrchST.Li2>
                            <ResrchST.Li2 onClick={()=>{setBankName('케이')}}>
                                <SVG name='케이'/>
                                케이 </ResrchST.Li2>
                            <ResrchST.Li2 onClick={()=>{setBankName('경남')}}>
                                <SVG name='경남'/>
                                경남 </ResrchST.Li2>
                            <ResrchST.Li2 onClick={()=>{setBankName('광주')}}>
                                <SVG name='광주'/>
                                광주 </ResrchST.Li2>
                            <ResrchST.Li2 onClick={()=>{setBankName('대구')}}>
                                <SVG name='대구'/>
                                대구 </ResrchST.Li2>
                            <ResrchST.Li2 onClick={()=>{setBankName('부산')}}>
                                <SVG name='경남'/>
                                부산 </ResrchST.Li2>
                            <ResrchST.Li2 onClick={()=>{setBankName('전북')}}>
                                <SVG name='광주'/>
                                전북 </ResrchST.Li2>
                            <ResrchST.Li2 onClick={()=>{setBankName('우체국')}}>
                                <SVG name='우체국'/>
                                우체국 </ResrchST.Li2>
                            <ResrchST.Li2 onClick={()=>{setBankName('저축')}}>
                                <SVG name='저축'/>
                                저축 </ResrchST.Li2>
                            <ResrchST.Li2 onClick={()=>{setBankName('지역농축협')}}>
                                <SVG name='지역농축협'/>
                                지역농축협 </ResrchST.Li2>
                        </ResrchST.Ul2> : ''
                    }
                    {DdOpen === true ?
                        <ResrchST.DropDownOpen2>
                            <ResrchST.FlexZone2>
                                <SVG name={bankName}/> {bankName}
                            </ResrchST.FlexZone2>
                            <SVG name='Open' size='12'/>
                        </ResrchST.DropDownOpen2>
                        :
                        <ResrchST.DropDown2>
                            <ResrchST.FlexZone2>
                                <SVG name={bankName}/> {bankName}
                            </ResrchST.FlexZone2>
                            <SVG name='Close' size='12'/>
                        </ResrchST.DropDown2>
                    }
                    </ResrchST.SelectZone>
                    
                    <ResrchST.InputBox
                        name="account"
                        type="text"
                        onChange={onInputChange}
                        value={account}
                        placeholder='계좌번호'/> 
                </ResrchST.DepositZone>

                <ResrchST.FlexZone>
                    <ResrchST.InputBox
                        name="accountOwner"
                        type="text"
                        onChange={onInputChange}
                        value={accountOwner}
                        placeholder='예금주명'/>
                    으로 입금했습니다.
                </ResrchST.FlexZone>

                <ResrchST.Warning>
                    위 계좌로 환불이 진행됩니다.
                </ResrchST.Warning>

                {confirmMsg === true ?
                    <ResrchST.ConfirmZone>
                        설문 접수 전 입금을 완료하셨나요?
                        <pre id='result'>
                        </pre>
                        <input id="confirmChk" type="checkbox" onClick={confirmHandler}/>
                    </ResrchST.ConfirmZone>
                    : ''
                }


                <ResrchST.ButtonZone>
                    <ResrchST.CancelBtn onClick={()=>{setIsModal(true)}}>
                        돌아가기
                    </ResrchST.CancelBtn>
                    <ResrchST.NextBtn onClick={nextHandler}>
                        송금 완료
                    </ResrchST.NextBtn>
                </ResrchST.ButtonZone>
            </SignST.ContentZone>
        </Layout>
        </>
    );
}