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
        let realUrl = url.substring(30)
        const {data} = await axios.get(`${PROXY}${realUrl}`);

        // HTML 문자열을 파싱하여 DOM 객체 생성
        const parser = new DOMParser();
        const htmlDOM = parser.parseFromString(data, 'text/html');

        // 각 데이터 추출
        const elements = htmlDOM.querySelectorAll(".Qr7Oae");
        
        //HTML 내 tagArea 가져오기
        let tagArea = document.getElementById('tagArea');

        var choiceCount = 1; // 객관식 radio button 구분용 count
        var checkCount = 1; // 체크박스 구분용 count

        elements.forEach (function(el) {
            
            let question_html='';

            if(el.querySelector(".z12JJ")!=null) {
                //질문 내용 가져오기
                const question = el.querySelector(".z12JJ");
                //p태그로 question_html에 저장
                question_html = document.createElement('p');
                //question 클래스로 저장
                question_html.setAttribute('class','question');
                //순수 텍스트
                question_html.innerHTML=question.textContent;
                question_html.appendChild(document.createElement('br'));
                //tagArea에 요소 저장
                tagArea.appendChild(question_html);

                //⭐️콘솔⭐️
                console.log("!!제목!!", question_html.innerHTML);

                if(el.querySelector(".y6GzNb")!=null) {
                    //질문에 이미지 추가했을때
                    let img_html=document.createElement('img');
                    question_html.appendChild(img_html);
                    question_html.appendChild(document.createElement('br'));
    
                    const imgEl = el.querySelector(".y6GzNb").querySelector('img');
                    let img = '';
    
                    if (imgEl) { img = imgEl.src; }
                    img_html.setAttribute('src',img);
    
                    //⭐️⭐️⭐️질문 이미지 url 텍스트
                    console.log("질문 이미지 url", img)
                }
            } else {
                //질문 제목
                const question = el.querySelector(".M7eMe");
                question_html = document.createElement('p');

                question_html.setAttribute('class','question');
                question_html.innerHTML=question.textContent;

                tagArea.appendChild(question_html);
                question_html.appendChild(document.createElement('br'));

                console.log("질문 아닌 ", question_html.innerHTML)
            }

            //답변 형식
            if(el.querySelector(".oyXaNc")!=null) {
                var count=1;
                //객관식 각 요소 가져와서 radio button 생성
                el.querySelector(".oyXaNc").querySelectorAll(".OvPDhc").forEach(function(choice){
                    let choice_html=document.createElement('input');

                    choice_html.setAttribute('type','radio');
                    choice_html.setAttribute('id','choice'+count);
                    choice_html.setAttribute('name','choice'+choiceCount);
                    choice_html.setAttribute('value',count);
                    choice_html.innerHTML=choice.textContent;

                    question_html.appendChild(choice_html);

                    let choice_label=document.createElement('label');
                    choice_label.setAttribute('for','choice'+count);
                    choice_label.innerHTML=choice.textContent;

                    question_html.appendChild(choice_label);
                    question_html.appendChild(document.createElement('br'));
                    count++;
                    
                    //⭐️⭐️⭐️텍스트로 뽑힘
                    console.log("라디오 옵션", choice_label.innerHTML)
                })
                choiceCount++;
            } else if(el.querySelector(".AgroKb")!=null) {
                //단답형/장문형일 경우 - text Input 생성
                let input_html=document.createElement('input');
                input_html.setAttribute('type','text');
                question_html.appendChild(input_html);

                //⭐️⭐️⭐️텍스트로 뽑힘
                console.log("[ input 창 ]");

            } else if(el.querySelector(".Y6Myld")!=null) {
                //체크박스일 경우 - 각 요소 가져와서 checkbox 생성
                var count=1;
                el.querySelector(".Y6Myld").querySelectorAll(".n5vBHf").forEach(function(check){
                    let check_html=document.createElement('input');

                    check_html.setAttribute('type','checkbox');
                    check_html.setAttribute('id','check'+count);
                    check_html.setAttribute('name','check'+checkCount);
                    check_html.setAttribute('value',count);
                    check_html.innerHTML=check.textContent;

                    question_html.appendChild(check_html);

                    let check_label=document.createElement('label');
                    check_label.setAttribute('for','choice'+count);
                    check_label.innerHTML=check.textContent;

                    question_html.appendChild(check_label);
                    question_html.appendChild(document.createElement('br'));

                    count++;

                    //⭐️⭐️⭐️선택항목 텍스트로 뽑힘
                    console.log("체크박스 옵션", check_label.innerHTML)
                })
                checkCount++;
            } else if(el.querySelector(".vQES8d")!=null) {
                //드롭다운일 경우 - 각 요소 가져와서 option 생성
                let select_html=document.createElement('select');
                question_html.appendChild(select_html);
                var count=1;
                el.querySelector(".vQES8d").querySelectorAll(".vRMGwf").forEach(function(select){
                    let option_html=document.createElement('option');

                    option_html.setAttribute('value',count);
                    option_html.innerHTML=select.textContent;

                    select_html.appendChild(option_html);

                    question_html.appendChild(document.createElement('br'));
                    count++;

                    //⭐️⭐️⭐️선택항목 텍스트로 뽑힘
                    console.log("드롭박스 옵션", option_html.innerHTML)
                })
            } else if(el.querySelector(".y6GzNb")!=null) {
                //이미지 추가했을때
                let img_html=document.createElement('img');
                question_html.appendChild(img_html);

                const imgEl = el.querySelector(".y6GzNb").querySelector('img');
                let img = '';

                if (imgEl) { img = imgEl.src; }
                img_html.setAttribute('src',img);

                //⭐️⭐️⭐️이미지 url 텍스트
                console.log("이미지 url", img)
            }  else if(el.querySelector(".gCouxf")!=null) {
                //동영상 추가했을때
                //쿠키관련 경고 발생,,,
                let img_html=document.createElement('iframe');
                question_html.appendChild(img_html);

                const imgEl = el.querySelector(".gCouxf").querySelector('iframe');
                let img = '';

                if (imgEl) { img = imgEl.src; }
                img_html.setAttribute('src',img);

                //⭐️⭐️⭐️동영상 url 텍스트
                console.log("동영상 url", img)
            } else if(el.querySelector(".spb5Rd.OIC90c")!=null) {
                //설명 - 설명 가져오기
                const question = el.querySelector(".spb5Rd.OIC90c");
                question_html = document.createElement('p');

                question_html.setAttribute('class','question');
                question_html.innerHTML=question.textContent;

                tagArea.appendChild(question_html);
                question_html.appendChild(document.createElement('br'));

                console.log("텍스트들 ", question_html.innerHTML)
            } else if(el.querySelector(".V4d7Ke.OIC90c")!=null) {
                //설명 - 설명 가져오기
                const question = el.querySelector(".V4d7Ke.OIC90c");
                question_html = document.createElement('p');

                question_html.setAttribute('class','question');
                question_html.innerHTML=question.textContent;

                tagArea.appendChild(question_html);

                console.log("그리드 - 지원안하는 기능입니다.", question_html.innerHTML)
            } else if(el.querySelector(".Zki2Ve")!=null) {
                //설명 - 설명 가져오기
                const question = el.querySelector(".Zki2Ve");
                question_html = document.createElement('p');

                question_html.setAttribute('class','question');
                question_html.innerHTML=question.textContent;

                tagArea.appendChild(question_html);

                console.log("선형 배율 - 지원안하는 기능입니다.", question_html.innerHTML)
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

                    <RespndST.CrowlingZone id = "tagArea"/>

                    <div style={{ height: '60px'}}/>
            </LoginST.ContentZone>
        </Layout>
        </>
    );
}