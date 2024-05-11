import React, { useContext, useEffect } from 'react';
import axios from 'axios';

import * as ResrchST from '../researcher/ResrchStyle';

import Layout from '../../components/layout/Layout';
import { PageContext } from '../../components/context/PageContext';

export default function Respondent() {

    const { setPage } = useContext(PageContext);

    // 호스트가 localhost에서 클라이언트 서버를 열면 값이 없지만
    //다른 호스트를 사용시에는 netlify.toml에 설정해둔 proxy값을 할당 받는다.
    const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy';

    useEffect(() => {
        setPage('Respondent');
    }, []);

    const url = 'https://docs.google.com/forms/d/e/1FAIpQLSfagMTJW24NzYyBL-_NUmuEYJAqiteLhcgNRqCW7qg-VZgzmQ/viewform';

    async function crawl(url) {
        let realUrl = url.substring(29)
        const {data} = await axios.get(`${PROXY}${realUrl}`);

        // HTML 문자열을 파싱하여 DOM 객체 생성
        const parser = new DOMParser();
        const htmlDOM = parser.parseFromString(data, 'text/html');
        
        // 각 데이터 추출
        const elements = htmlDOM.querySelectorAll(".Qr7Oae");
        
        //HTML 내 tagArea 가져오기
        let tagArea=document.getElementById('tagArea');
        var choiceCount=1; // 객관식 radio button 구분용 count
        var checkCount=1; // 체크박스 구분용 count

        elements.forEach (function (el) {
            let question_html='';
            if(el.querySelector(".z12JJ")!=null){
                //질문 내용 가져오기
                const question = el.querySelector(".z12JJ");
                question_html = document.createElement('p');

                question_html.setAttribute('class','question');
                question_html.innerHTML=question.textContent;

                tagArea.appendChild(question_html);
                question_html.appendChild(document.createElement('br'));
            }
            
            else{
                const question = el.querySelector(".M7eMe");
                question_html = document.createElement('p');

                question_html.setAttribute('class','question');
                question_html.innerHTML=question.textContent;

                tagArea.appendChild(question_html);
                question_html.appendChild(document.createElement('br'));
            }

            //객관식일 경우
            if(el.querySelector(".oyXaNc")!=null){
                var count=1;
                //각 요소 가져오기
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
                })
                choiceCount++;
            }

            //단답형/장문형일 경우
            else if(el.querySelector(".AgroKb")!=null){
                //textInput 생성
                let input_html=document.createElement('input');
                input_html.setAttribute('type','text');

                question_html.appendChild(input_html);
            }

            //체크박스일 경우
            else if(el.querySelector(".Y6Myld")!=null){
                //각 요소 가져오기
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
                })
                checkCount++;
            }

            //드롭다운일 경우
            else if(el.querySelector(".vQES8d")!=null){
                let select_html=document.createElement('select');
                question_html.appendChild(select_html);
                var count=1;
                //각 요소 가져오기
                el.querySelector(".vQES8d").querySelectorAll(".vRMGwf").forEach(function(select){
                    let option_html=document.createElement('option');

                    option_html.setAttribute('value',count);
                    option_html.innerHTML=select.textContent;

                    select_html.appendChild(option_html);

                    question_html.appendChild(document.createElement('br'));
                    count++;
                    // console.log("▽ "+choice.textContent);
                })
            }

            //사진일 경우
            else if(el.querySelector(".y6GzNb")!=null){
                let img_html=document.createElement('img');
                question_html.appendChild(img_html);
                const imgEl = el.querySelector(".y6GzNb").querySelector('img');
                let img = '';
                if (imgEl) {
                    img = imgEl.src;
                }
                img_html.setAttribute('src',img);
            }

            console.log('');
            // console.log (element.textContent+'\n');
        });
        // console.log(`Title: ${title}\n`);
    }

    // 실행
    crawl(url)
        .then(() => {
            console.log('데이터 수집 완료');
        })
        .catch(err => console.error(err));

    return (
        <>
        <Layout>
            <ResrchST.ResrchContent>

                <ResrchST.IntroTitle>
                    참여자페이지
                </ResrchST.IntroTitle>
                <div id = "tagArea"></div>
                <script src="crawling_html.js"></script>

            </ResrchST.ResrchContent>
        </Layout>
        </>
    );
}