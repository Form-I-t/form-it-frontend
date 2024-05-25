import React, { useContext, useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import * as ResrchST from './ResrchStyle';
import * as SignST from '../signup/SignUpStyle';
import * as MainST from '../main/MainPageStyle';

import Layout from '../../components/layout/Layout';
import CheckModal from '../../components/modal/CheckModal';
import SVG from '../../components/imgs/SVG';
import CautionModal from '../../components/modal/CautionModal';
import BlackIcon from '../../components/imgs/researcher/blackIcon.png';
import ColorIcon from '../../components/imgs/researcher/colorIcon.png';

import { PageContext } from '../../components/context/PageContext';
import { useInput } from '../../hooks/useInput';
import { __postStep2, SET_SURVEY } from '../../redux/modules/SurveySlice';

export default function Step2() {

    const { setPage } = useContext(PageContext);
    const navigate = useNavigate();
    const bottomRef = useRef();
    const dispatch = useDispatch();

    const [isModal, setIsModal] = useState(false);
    const [isBlank, setIsBlank] = useState(false);
    const [modalMsg, setModalMsg] = useState('입력사항을 확인해주세요.');
    const [pemOpen, setPemOpen] = useState(false);
    const [pomOpen, setPomOpen] = useState(false);

    const surveyId = useSelector((state) => state.survey.id);
    const [people, setPeople] = useState(0);
    const [point, setPoint] = useState(0);
    const [finalPrice, setFinalPrice] = useState(0);

    const [inputPe, setInputPe] = useState(false);
    const [inputPo, setInputPo] = useState(false);
    const [inputSd, setInputSd] = useState(false);
    const [btnActiv, setBtnActiv] = useState(false);

    const [ { startDate, endDate },
            onInputChange,
            resetInput
          ] = useInput(
            {   startDate: "",
                endDate: "",
            });

    //인원 드롭다운
    const PemHandler = () => {
        if(pemOpen === false) {
            setPemOpen(true);
        } else {
            setPemOpen(false);
        } 
    }

    //포인트 드롭다운
    const PomHandler = () => {
        if(pomOpen === false) {
            setPomOpen(true);
        } else {
            setPomOpen(false);
        } 
    }

    //맨 밑으로 스크롤
    const scrollToBottom = () => {
        bottomRef.current?.scrollIntoView({ behavior : 'smooth'});
    }

    const nextHandler = async() => {
        if ( (startDate === "") || (endDate === "") || (finalPrice === 0)) {
            setModalMsg('입력사항을 확인해주세요.');
            setIsBlank(true);
        } else {
            __postStep2({surveyId, people, point, startDate, endDate, finalPrice})
            .then(res => {
                if (parseInt(Number(res.status) / 100) === 2) {
                    dispatch(SET_SURVEY(res.data));
                    navigate('/step3');
                } else {
                    //예외처리
                    resetInput();
                }
            }).catch((error) =>  {
                //예외처리
                resetInput();
            })
        }
    }

    useEffect(() => {
        setPage('step2');
    }, []);

    useEffect(() => {
        if (people !== 0) {setInputPe(true)};
        if (point !== 0) {setInputPo(true)};
        if ((startDate && endDate) !== '') {setInputSd(true)};

        //결제 금액 계산
        if ( (startDate === "") || (endDate === "") ) {
            setFinalPrice(0);
        } else {
            //맨 아래로 스크롤
            scrollToBottom(); 
            //일 수 계산
            const getDateDiff = () => {
                const date1 = new Date(startDate);
                const date2 = new Date(endDate);
                const diffDate = date1.getTime() - date2.getTime();
                return Math.abs(diffDate / (1000 * 60 * 60 * 24)); // 밀리세컨 * 초 * 분 * 시 = 일
            }
            var decimal = getDateDiff(startDate, endDate) / 7;

            //주 수 계산
            if (decimal <= 1) { var week = 1; }
            else if (decimal <= 2) { week = 2; }
            else if (decimal <= 3) { week = 3; }
            else if (decimal <= 4) { week = 4; }
            else if (decimal <= 5) { week = 5; }
            else if (decimal <= 6) { week = 6; }
            else if (decimal <= 7) { week = 7; }
            else if (decimal <= 8) { week = 8; }
            else if (decimal <= 9) { week = 9; }
            else if (decimal <= 10) { week = 10; }
            else if (decimal <= 11) { week = 11; }
            else if (decimal <= 12) { week = 12; }
            else if (decimal <= 13) { week = 13; }
            else if (decimal <= 14) { week = 14; }
            else if (decimal <= 15) { week = 15; }
            else if (decimal <= 16) { week = 16; }
            else { week = NaN; };

            //금액 산정
            if (week <= 2) {
                var price = (Number(people) * Number(point)) + 1000;
            } else {
                price = (Number(people) * Number(point)) + 1000 + (week - 2) * 1000;
            }

            //최종 금액 오류 방지
            if (isNaN(price)) {
                setFinalPrice(0);
            } else {
                setFinalPrice(price);
                //다음버튼 활성화
                setBtnActiv(true);
            }
        }
    }, [people, point, startDate, endDate]);

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
                    <ResrchST.PgBar2/><ResrchST.PgBar3/>
                </ResrchST.PgZone>
                
                <MainST.GuideText>
                    <MainST.NickText>게시 조건</MainST.NickText>을 설정해주세요.
                </MainST.GuideText>
                <div style={{ height: '24px'}}/>
                <ResrchST.FormBox>
                    {inputPe === false ?
                        <ResrchST.OnOffIcon src={BlackIcon}/>:
                        <ResrchST.OnOffIcon src={ColorIcon}/>}
                    <ResrchST.SelectZone onClick={PemHandler}>
                        희망 응답자 수
                        <ResrchST.FlexZone>
                            {pemOpen === true ?
                            <ResrchST.DropDownOpen>
                                {people} <SVG name='Close' size='12'/>
                            </ResrchST.DropDownOpen>
                            :
                            <ResrchST.DropDown>
                                {people} <SVG name='Open' size='12'/>
                            </ResrchST.DropDown>
                            }
                            명
                        </ResrchST.FlexZone>
                        {pemOpen === true ?
                            <ResrchST.Ul>
                                <ResrchST.Li onClick={()=>{setPeople(10)}}> 10 </ResrchST.Li>
                                <ResrchST.Li onClick={()=>{setPeople(15)}}> 15 </ResrchST.Li>
                                <ResrchST.Li onClick={()=>{setPeople(20)}}> 20 </ResrchST.Li>
                                <ResrchST.Li onClick={()=>{setPeople(25)}}> 25 </ResrchST.Li>
                                <ResrchST.Li onClick={()=>{setPeople(30)}}> 30 </ResrchST.Li>
                                <ResrchST.Li onClick={()=>{setPeople(35)}}> 35 </ResrchST.Li>
                                <ResrchST.Li onClick={()=>{setPeople(40)}}> 40 </ResrchST.Li>
                                <ResrchST.Li onClick={()=>{setPeople(45)}}> 45 </ResrchST.Li>
                                <ResrchST.Li onClick={()=>{setPeople(50)}}> 50 </ResrchST.Li>
                                <ResrchST.Li onClick={()=>{setPeople(55)}}> 55 </ResrchST.Li>
                                <ResrchST.Li onClick={()=>{setPeople(60)}}> 60 </ResrchST.Li>
                                <ResrchST.Li onClick={()=>{setPeople(65)}}> 65 </ResrchST.Li>
                                <ResrchST.Li onClick={()=>{setPeople(70)}}> 70 </ResrchST.Li>
                                <ResrchST.Li onClick={()=>{setPeople(75)}}> 75 </ResrchST.Li>
                                <ResrchST.Li onClick={()=>{setPeople(80)}}> 80 </ResrchST.Li>
                                <ResrchST.Li onClick={()=>{setPeople(85)}}> 85 </ResrchST.Li>
                                <ResrchST.Li onClick={()=>{setPeople(90)}}> 90 </ResrchST.Li>
                                <ResrchST.Li onClick={()=>{setPeople(95)}}> 95 </ResrchST.Li>
                                <ResrchST.Li onClick={()=>{setPeople(100)}}> 100 </ResrchST.Li>
                            </ResrchST.Ul> : ''
                        }
                    </ResrchST.SelectZone>
                </ResrchST.FormBox>

                <ResrchST.FormBox>
                    {inputPo === false ?
                        <ResrchST.OnOffIcon src={BlackIcon}/>:
                        <ResrchST.OnOffIcon src={ColorIcon}/>}
                    <ResrchST.SelectZone onClick={PomHandler}>
                        한 명당
                        <ResrchST.FlexZone>
                        {pomOpen === true ?
                        <ResrchST.DropDownOpen onClick={()=>{setPomOpen(true);}}>
                            {point}
                            <SVG name='Close' size='12'/>
                        </ResrchST.DropDownOpen>
                        :
                        <ResrchST.DropDown onClick={()=>{setPomOpen(true);}}>
                            {point}
                            <SVG name='Open' size='12'/>
                        </ResrchST.DropDown>
                        }
                        포인트 씩 제공
                        </ResrchST.FlexZone>
                        {pomOpen === true ?
                            <ResrchST.Ul>
                                <ResrchST.Li onClick={()=>{setPoint(100)}}> 100 </ResrchST.Li>
                                <ResrchST.Li onClick={()=>{setPoint(150)}}> 150 </ResrchST.Li>
                                <ResrchST.Li onClick={()=>{setPoint(200)}}> 200 </ResrchST.Li>
                                <ResrchST.Li onClick={()=>{setPoint(250)}}> 250 </ResrchST.Li>
                                <ResrchST.Li onClick={()=>{setPoint(300)}}> 300 </ResrchST.Li>
                                <ResrchST.Li onClick={()=>{setPoint(350)}}> 350 </ResrchST.Li>
                                <ResrchST.Li onClick={()=>{setPoint(400)}}> 400 </ResrchST.Li>
                                <ResrchST.Li onClick={()=>{setPoint(450)}}> 450 </ResrchST.Li>
                                <ResrchST.Li onClick={()=>{setPoint(500)}}> 500 </ResrchST.Li>
                                <ResrchST.Li onClick={()=>{setPoint(550)}}> 550 </ResrchST.Li>
                                <ResrchST.Li onClick={()=>{setPoint(600)}}> 600 </ResrchST.Li>
                                <ResrchST.Li onClick={()=>{setPoint(650)}}> 650 </ResrchST.Li>
                                <ResrchST.Li onClick={()=>{setPoint(700)}}> 700 </ResrchST.Li>
                                <ResrchST.Li onClick={()=>{setPoint(750)}}> 750 </ResrchST.Li>
                                <ResrchST.Li onClick={()=>{setPoint(800)}}> 800 </ResrchST.Li>
                                <ResrchST.Li onClick={()=>{setPoint(850)}}> 850 </ResrchST.Li>
                                <ResrchST.Li onClick={()=>{setPoint(900)}}> 900 </ResrchST.Li>
                                <ResrchST.Li onClick={()=>{setPoint(950)}}> 950 </ResrchST.Li>
                                <ResrchST.Li onClick={()=>{setPoint(1000)}}> 1000 </ResrchST.Li>
                            </ResrchST.Ul> : ''
                        }
                    </ResrchST.SelectZone>
                </ResrchST.FormBox>

                <ResrchST.FormBox>
                    {inputSd === false ?
                    <ResrchST.OnOffIcon src={BlackIcon}/>:
                    <ResrchST.OnOffIcon src={ColorIcon}/>}

                    <ResrchST.SelectZone>
                        설문 기간
                        <ResrchST.FlexZone>
                            <ResrchST.DateInput
                                name="startDate"
                                type="date"
                                min="2024-03-01"
                                onChange = {onInputChange}
                                value={startDate}/>
                            부터
                        </ResrchST.FlexZone>
                        <ResrchST.FlexZone>
                            <ResrchST.DateInput
                                name="endDate"
                                type="date"
                                min="2024-03-01"
                                onChange = {onInputChange}
                                value={endDate}/>
                            까지
                        </ResrchST.FlexZone>

                    <ResrchST.Warning>
                        <SVG name='Check' size='15'/>
                        접수 후 게시까지 최대 24시간 소요됩니다.
                    </ResrchST.Warning>

                    </ResrchST.SelectZone>


                </ResrchST.FormBox>

                <ResrchST.CalculationBtn ref={bottomRef}>
                    결제 금액은
                    <ResrchST.FlexZone>
                        <ResrchST.PriceText>
                        {finalPrice === (0 || NaN) ? 0 : finalPrice.toLocaleString('ko-KR')}
                        </ResrchST.PriceText>
                        원 입니다.
                    </ResrchST.FlexZone>
                </ResrchST.CalculationBtn>

                <ResrchST.ButtonZone>
                    <ResrchST.CancelBtn
                        onClick={()=>{setIsModal(true)}}>
                        돌아가기
                    </ResrchST.CancelBtn>
                    <ResrchST.NextBtn
                        onClick={nextHandler}
                        $btnActiv={btnActiv}>
                        다음으로
                    </ResrchST.NextBtn>
                </ResrchST.ButtonZone>
            </SignST.ContentZone>
        </Layout>
        </>
    );
}