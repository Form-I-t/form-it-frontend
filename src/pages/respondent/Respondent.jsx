import React, { useContext, useEffect } from 'react';
import axios from 'axios';

//import * as ResrchST from '../researcher/ResrchStyle';
import * as RespndST from './RespndStyle';
import * as LoginST from '../login/LoginStyle';

import Layout from '../../components/layout/Layout';
import { PageContext } from '../../components/context/PageContext';

export default function Respondent() {

    const { setPage } = useContext(PageContext);

    // 호스트가 localhost에서 클라이언트 서버를 열면 값이 없지만
    //다른 호스트를 사용시에는 netlify.toml에 설정해둔 proxy값을 할당 받는다.
    const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy';

    const url = 'https://docs.google.com/forms/d/e/1FAIpQLSegTnZ2ohndq9ypOEPCeV6JSG3BfggA41Yx7uR6tWTlClkY9Q/viewform';

    async function Crawling(url) {
        
        //프록시 서버를 위한 url 중복부분 자르기
        let realUrl = url.substring(30)
        //크롤링할 구글폼 불러오기
        const {data} = await axios.get(`${PROXY}${realUrl}`);

        // HTML 문자열을 파싱하여 DOM 객체 생성
        const parser = new DOMParser();
        const htmlDOM = parser.parseFromString(data, 'text/html');

        //HTML 내 tagArea 가져오기
        let tagArea = document.getElementById('tagArea');

        //선지 구분용 count
        var choiceCount = 1;
        var checkCount = 1;

        // 설문 소개 데이터 추출
        const intros = htmlDOM.querySelectorAll(".Dq4amc");
        // 상세 설문 데이터 추출
        const elements = htmlDOM.querySelectorAll(".Qr7Oae");

        intros.forEach (function(el) {
            
            let question_html = '';

            //질문 제목 가져오기
            if(el.querySelector(".F9yp7e.ikZYwf.LgNcQe")!=null) {

                const title = el.querySelector(".F9yp7e.ikZYwf.LgNcQe");
                question_html = document.createElement('p');
                question_html.setAttribute('class','title');
                tagArea.appendChild(question_html);

                //서버에 넘길 텍스트🔫
                question_html.innerHTML = title.textContent;
                console.log("!!설문지 제목!!", question_html.innerHTML);
            }
            if(el.querySelector(".cBGGJ.OIC90c")!=null) {

                const sub_title = el.querySelector(".cBGGJ.OIC90c");
                question_html = document.createElement('p');
                question_html.setAttribute('class','sub_title');
                tagArea.appendChild(question_html);

                //서버에 넘길 텍스트🔫
                question_html.innerHTML = sub_title.textContent;
                console.log("!!설문지 설명!!", question_html.innerHTML);
            }
        });

        elements.forEach (function(el) {
            
            let img_html = '';
            let question_html = '';

            //질문 제목 가져오기
            if(el.querySelector(".z12JJ")!=null) {

                const question = el.querySelector(".z12JJ");
                //⭐️p태그로 question_html에 저장
                question_html = document.createElement('p');
                //⭐️question 클래스로 저장
                question_html.setAttribute('class','question');
                //⭐️tagArea에 요소 저장
                tagArea.appendChild(question_html);

                //서버에 넘길 텍스트🔫
                question_html.innerHTML=question.textContent;
                console.log("!!제목!!", question_html.innerHTML);

                //질문에 이미지 추가했을때
                if(el.querySelector(".y6GzNb")!=null) {

                    const q_img = el.querySelector(".y6GzNb").querySelector('img');
                    img_html = document.createElement('img');
                    img_html.setAttribute('src', q_img.src);
                    question_html.appendChild(img_html);
                    question_html.appendChild(document.createElement('br'));
    
                    //서버에 넘길 텍스트🔫
                    console.log("질문 이미지 url", q_img.src);
                }
            } else {
                //질문 아닌 제목 가져오기
                const n_question = el.querySelector(".M7eMe");
                question_html = document.createElement('p');
                question_html.setAttribute('class','question');
                tagArea.appendChild(question_html);

                //서버에 넘길 텍스트🔫
                question_html.innerHTML = n_question.textContent;
                console.log("!!질문 아닌 제목!!", question_html.innerHTML)
            }

            //답변 형식
            if(el.querySelector(".oyXaNc")!=null) {
                //객관식 - 라디오버튼
                var count = 1;
                
                el.querySelector(".oyXaNc").querySelectorAll(".OvPDhc").forEach(function(choice){
                    let choice_html = document.createElement('input');

                    choice_html.setAttribute('type', 'radio');
                    choice_html.setAttribute('id', 'choice' + count);
                    choice_html.setAttribute('name', 'choice' + choiceCount);
                    choice_html.setAttribute('value', count);

                    question_html.appendChild(choice_html);

                    let choice_label = document.createElement('label');
                    choice_label.setAttribute('for', 'choice' + count);
                    question_html.appendChild(choice_label);

                    question_html.appendChild(document.createElement('br'));
                    count++;
                    
                    //서버에 넘길 텍스트🔫
                    choice_label.innerHTML = choice.textContent;
                    console.log("라디오 옵션", choice_label.innerHTML);
                })
                choiceCount++;
            } else if(el.querySelector(".Y6Myld")!=null) {
                //객관식 - 체크박스
                var count = 1;

                el.querySelector(".Y6Myld").querySelectorAll(".n5vBHf").forEach(function(check){
                    let check_html = document.createElement('input');

                    check_html.setAttribute('type','checkbox');
                    check_html.setAttribute('id','check' + count);
                    check_html.setAttribute('name','check' + checkCount);
                    check_html.setAttribute('value',count);

                    question_html.appendChild(check_html);

                    let check_label = document.createElement('label');
                    check_label.setAttribute('for', 'choice' + count);
                    question_html.appendChild(check_label);

                    question_html.appendChild(document.createElement('br'));
                    count++;

                    //서버에 넘길 텍스트🔫
                    check_label.innerHTML = check.textContent;
                    console.log("체크박스 옵션", check_label.innerHTML);
                })
                checkCount++;
            } else if(el.querySelector(".vQES8d")!=null) {
                //객관식 - 드롭박스
                let select_html = document.createElement('select');
                question_html.appendChild(select_html);

                var count = 1;

                el.querySelector(".vQES8d").querySelectorAll(".vRMGwf").forEach(function(select){
                    let option_html = document.createElement('option');

                    option_html.setAttribute('value',count);
                    select_html.appendChild(option_html);

                    question_html.appendChild(document.createElement('br'));
                    count++;

                    //서버에 넘길 텍스트🔫
                    option_html.innerHTML = select.textContent;
                    console.log("드롭박스 옵션", option_html.innerHTML)
                })
            } else if(el.querySelector(".AgroKb")!=null) {
                //단답형, 장문형 - input 타입 text
                let input_html = document.createElement('input');
                input_html.setAttribute('type','text');
                question_html.appendChild(input_html);

                //서버에 input 타입 text 만들으라고 명령
                console.log("[ input 창 ]");
            } else if(el.querySelector(".A6uyJd")!=null) {
                //날짜 - input 타입 date
                let dateInput_html = document.createElement('input');
                dateInput_html.setAttribute('type','date');
                question_html.appendChild(dateInput_html);

                //서버에 input 타입 date 만들으라고 명령
                console.log("[ dateInput 창 ]");
            } else if(el.querySelector(".ocBCTb")!=null) {
                //시간 - input 타입 time
                let timeInput_html = document.createElement('input');
                timeInput_html.setAttribute('type','time');
                question_html.appendChild(timeInput_html);

                //서버에 input 타입 time 만들으라고 명령
                console.log("[ timeInput 창 ]");
            } else if(el.querySelector(".y6GzNb")!=null) {
                //설명 이미지 추가했을때
                const d_img = el.querySelector(".y6GzNb").querySelector('img');
                img_html = document.createElement('img');
                img_html.setAttribute('src', d_img.src);
                question_html.appendChild(img_html);

                //서버에 넘길 텍스트🔫
                console.log("설명 이미지 url", d_img.src);
            } else if(el.querySelector(".gCouxf")!=null) {
                //설명 동영상 추가했을때 (쿠키 관련 경고)
                const d_iframe = el.querySelector(".gCouxf").querySelector('iframe');
                let iframe_html = document.createElement('iframe');
                iframe_html.setAttribute('src', d_iframe.src);
                question_html.appendChild(iframe_html);

                //서버에 넘길 텍스트🔫
                console.log("설명 동영상 url", d_iframe.src);
            } else if(el.querySelector(".spb5Rd.OIC90c")!=null) {
                //설명 가져오기
                const description = el.querySelector(".spb5Rd.OIC90c");
                let description_html = document.createElement('p');
                description_html.setAttribute('class','description');
                question_html.appendChild(description_html);

                //서버에 넘길 텍스트🔫
                description_html.innerHTML=description.textContent;
                console.log("설명 텍스트", description_html.innerHTML)
            } else if(el.querySelector(".V4d7Ke.OIC90c")!=null) {
                //그리드 문항
                let gride_html = document.createElement('p');
                gride_html.setAttribute('class','gride');
                question_html.appendChild(gride_html);
                gride_html.innerHTML = "그리드 문항은 아직 지원되지 않습니다."
            } else if(el.querySelector(".Zki2Ve")!=null) {
                //선형 배율 문항
                let linear_html = document.createElement('p');
                linear_html.setAttribute('class','linear');
                question_html.appendChild(linear_html);
                linear_html.innerHTML = "선형 배율 문항은 아직 지원되지 않습니다."
            }
        });
    }

    useEffect(() => {
        setPage('Respondent');
    }, []);

    return (
        <>
        <Layout>
            <LoginST.ContentZone>

                    <RespndST.CrowlingBtn onClick={()=>Crawling(url)}>
                        크롤링하기
                    </RespndST.CrowlingBtn>

                    <RespndST.CrowlingZone id = "tagArea">
                    </RespndST.CrowlingZone>

                    <div style={{ height: '60px'}}/>
            </LoginST.ContentZone>
        </Layout>
        </>
    );
}