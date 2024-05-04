import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import * as ResrchST from './ResrchStyle';
import * as SignST from '../signup/SignUpStyle';
import * as MainST from '../main/MainPageStyle';

import Layout from '../../components/layout/Layout';
import CancelModal from '../../components/modal/CheckModal';
import CautionModal from '../../components/modal/CautionModal';
import SVG from '../../components/imgs/SVG';
import SanUp from '../../components/imgs/bank/SanUp.png';
import SaeMaUl from '../../components/imgs/bank/SaeMaUl.png';
import WooRi from '../../components/imgs/bank/WooRi.png';

import { PageContext } from '../../components/context/PageContext';
import { useInput } from '../../hooks/useInput';
import { __postStep3, SET_SURVEY } from '../../redux/modules/SurveySlice';

export default function Step3() {

    const { setPage } = useContext(PageContext);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [isModal, setIsModal] = useState(false);
    const [isBlank, setIsBlank] = useState(false);
    const [modalMsg, setModalMsg] = useState('입력사항을 확인해주세요 !');
    const [bankName, setBankName] = useState('은행 선택');
    const [DdOpen, setDdOpen] = useState(false);
    const [isCopied, setIsCopied] = useState(false);
    const [confirmMsg, setConfirmMsg] = useState(false);
    const [btnActiv, setBtnActiv] = useState(false);

    const surveyId = useSelector((state) => state.survey.id);
    const price = useSelector((state) => state.survey.price);

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

    //체크박스 인식
    const confirmHandler = () => {
        //체크박스 element 찾기
        const checkbox = document.getElementById('confirmChk');
        //checked 속성 인식하는 변수
        const is_checked = checkbox.checked;
        //접수버튼 활성화
        is_checked === true ? setBtnActiv(true) : setBtnActiv(false);
    }

    const nextHandler = async() => {
        if (btnActiv === false) {
            setModalMsg('입력사항을 확인해주세요 !');
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

                <ResrchST.Copied $isCopied={isCopied}>
                    계좌번호가 복사되었어요 !
                </ResrchST.Copied>

                <ResrchST.AccountZone onClick={CopyHandler}>
                    <ResrchST.FlexZone2>
                        <SVG name='카카오뱅크'/>
                        카카오뱅크 79799514279 배진성
                    </ResrchST.FlexZone2>
                    <SVG name='Copy'/>
                </ResrchST.AccountZone>

                <ResrchST.FinalPrice>
                        결제 금액
                        <div style={{ height: '4px'}}/>
                    <ResrchST.PriceText>
                        {/* 오류 방지 주석 */}
                        {price.toLocaleString('ko-KR')} 원
                    </ResrchST.PriceText>
                </ResrchST.FinalPrice>

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
                                <ResrchST.BankIcon src={WooRi}/>
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
                                <ResrchST.BankIcon src={SaeMaUl}/>
                                새마을금고 </ResrchST.Li2>
                            <ResrchST.Li2 onClick={()=>{setBankName('산업')}}>
                                <ResrchST.BankIcon src={SanUp}/>
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
                            {bankName === '산업' ?
                                <ResrchST.BankIcon src={SanUp}/> :
                                bankName === '새마을금고' ?
                                <ResrchST.BankIcon src={SaeMaUl}/> :
                                bankName === '우리' ?
                                <ResrchST.BankIcon src={WooRi}/> :
                                <SVG name={bankName}/>
                            } {bankName}
                            </ResrchST.FlexZone2>
                            <SVG name='Open' size='12'/>
                        </ResrchST.DropDownOpen2>
                        :
                        <ResrchST.DropDown2>
                            <ResrchST.FlexZone2>
                            {bankName === '산업' ?
                                <ResrchST.BankIcon src={SanUp}/> :
                                bankName === '새마을금고' ?
                                <ResrchST.BankIcon src={SaeMaUl}/> :
                                bankName === '우리' ?
                                <ResrchST.BankIcon src={WooRi}/> :
                                <SVG name={bankName}/>
                            } {bankName}
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
                    환불 시 위 계좌를 사용합니다.
                </ResrchST.Warning>

                {confirmMsg === true ?
                    <ResrchST.ConfirmZone>
                        확인 후 게시까지 1~2일 소요됩니다 :)
                        <input id="confirmChk" type="checkbox" onClick={confirmHandler}/>
                    </ResrchST.ConfirmZone>
                    : ''
                }


                <ResrchST.ButtonZone>
                    <ResrchST.CancelBtn onClick={()=>{setIsModal(true)}}>
                        돌아가기
                    </ResrchST.CancelBtn>
                    <ResrchST.NextBtn $btnActiv={btnActiv} onClick={nextHandler}>
                        접수하기
                    </ResrchST.NextBtn>
                </ResrchST.ButtonZone>
            </SignST.ContentZone>
        </Layout>
        </>
    );
}