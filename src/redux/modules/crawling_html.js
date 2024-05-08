// var optionAxios = {
//     headers: {
//     //   'Content-Type': 'application/x-www-form-urlencoded',
//       'Access-Control-Allow-Origin': '*',
//       'Access-Control-Allow-Methods': 'GET',
//       'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With'
//     }
// }

// var url = "https://docs.google.com/forms/d/e/1FAIpQLSclatJNoiZUvLfV1VPGRw5qnd5BQQz3vsln48Rr2bHgoJOXRw/viewform";
// const getHtml = async () => {
//   try {
//     return await axios.get(
//         'https://cors-anywhere.herokuapp.com/'+url,optionAxios
// );
//   } catch (error) {
//     console.error(error);
//   }
  
// };


const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const url = "https://docs.google.com/forms/d/e/1FAIpQLSclatJNoiZUvLfV1VPGRw5qnd5BQQz3vsln48Rr2bHgoJOXRw/viewform";

async function crawl(url) {
    // 수집중인 URL
    const decodedUrl = decodeURI(url);
    console.log(`크롤링 ${decodedUrl} ...`);
    // URL에서 데이터를 가져옴
    const response = await fetch(proxyUrl + url, {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
            'Accept-Language': 'ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7'
        }
    });
    // 응답 데이터를 문자열로 변환
    const htmlString = await response.text();
    // HTML 문자열을 파싱하여 DOM 객체 생성
    const parser = new DOMParser();
    const htmlDOM = parser.parseFromString(htmlString, 'text/html');
    
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


    // const crawl = async () => {
    //     const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    //     const url = "https://docs.google.com/forms/d/e/1FAIpQLSclatJNoiZUvLfV1VPGRw5qnd5BQQz3vsln48Rr2bHgoJOXRw/viewform";

    //     // 수집중인 URL
    //     // const decodedUrl = decodeURI(url);
    //     // console.log(`크롤링 ${decodedUrl} ...`);
    //     // URL에서 데이터를 가져옴
    //     const response = await fetch(proxyUrl + url, {
    //         headers: {
    //             'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
    //             'Accept-Language': 'ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7',
    //         }
    //     });
    //     // 응답 데이터를 문자열로 변환
    //     const htmlString = await response.text();
    //     // HTML 문자열을 파싱하여 DOM 객체 생성
    //     const parser = new DOMParser();
    //     const htmlDOM = parser.parseFromString(htmlString, 'text/html');
        
    //     // 각 데이터 추출
    //     const elements = htmlDOM.querySelectorAll(".Qr7Oae");
        
    //     //HTML 내 tagArea 가져오기
    //     let tagArea=document.getElementById('tagArea');
    //     var choiceCount=1; // 객관식 radio button 구분용 count
    //     var checkCount=1; // 체크박스 구분용 count

    //     elements.forEach (function (el) {
    //         let question_html='';
    //         if(el.querySelector(".z12JJ")!=null){
    //             //질문 내용 가져오기
    //             const question = el.querySelector(".z12JJ");
    //             question_html = document.createElement('p');

    //             question_html.setAttribute('class','question');
    //             question_html.innerHTML=question.textContent;

    //             tagArea.appendChild(question_html);
    //             question_html.appendChild(document.createElement('br'));
    //         } else{
    //             const question = el.querySelector(".M7eMe");
    //             question_html = document.createElement('p');

    //             question_html.setAttribute('class','question');
    //             question_html.innerHTML=question.textContent;

    //             tagArea.appendChild(question_html);
    //             question_html.appendChild(document.createElement('br'));
    //         }

    //         //객관식일 경우
    //         if(el.querySelector(".oyXaNc")!=null){
    //             var count=1;
    //             //각 요소 가져오기
    //             el.querySelector(".oyXaNc").querySelectorAll(".OvPDhc").forEach(function(choice){
    //                 let choice_html=document.createElement('input');

    //                 choice_html.setAttribute('type','radio');
    //                 choice_html.setAttribute('id','choice'+count);
    //                 choice_html.setAttribute('name','choice'+choiceCount);
    //                 choice_html.setAttribute('value',count);
    //                 choice_html.innerHTML=choice.textContent;

    //                 question_html.appendChild(choice_html);

    //                 let choice_label=document.createElement('label');
    //                 choice_label.setAttribute('for','choice'+count);
    //                 choice_label.innerHTML=choice.textContent;

    //                 question_html.appendChild(choice_label);
    //                 question_html.appendChild(document.createElement('br'));
    //                 count++;
    //             })
    //             choiceCount++;
    //         }

    //         //단답형/장문형일 경우
    //         else if(el.querySelector(".AgroKb")!=null){
    //             //textInput 생성
    //             let input_html=document.createElement('input');
    //             input_html.setAttribute('type','text');

    //             question_html.appendChild(input_html);
    //         }

    //         //체크박스일 경우
    //         else if(el.querySelector(".Y6Myld")!=null){
    //             //각 요소 가져오기
    //             var count=1;
    //             el.querySelector(".Y6Myld").querySelectorAll(".n5vBHf").forEach(function(check){
    //                 let check_html=document.createElement('input');

    //                 check_html.setAttribute('type','checkbox');
    //                 check_html.setAttribute('id','check'+count);
    //                 check_html.setAttribute('name','check'+checkCount);
    //                 check_html.setAttribute('value',count);
    //                 check_html.innerHTML=check.textContent;

    //                 question_html.appendChild(check_html);

    //                 let check_label=document.createElement('label');
    //                 check_label.setAttribute('for','choice'+count);
    //                 check_label.innerHTML=check.textContent;

    //                 question_html.appendChild(check_label);
    //                 question_html.appendChild(document.createElement('br'));
    //                 count++;
    //             })
    //             checkCount++;
    //         }

    //         //드롭다운일 경우
    //         else if(el.querySelector(".vQES8d")!=null){
    //             let select_html=document.createElement('select');
    //             question_html.appendChild(select_html);
    //             var count=1;
    //             //각 요소 가져오기
    //             el.querySelector(".vQES8d").querySelectorAll(".vRMGwf").forEach(function(select){
    //                 let option_html=document.createElement('option');

    //                 option_html.setAttribute('value',count);
    //                 option_html.innerHTML=select.textContent;

    //                 select_html.appendChild(option_html);

    //                 question_html.appendChild(document.createElement('br'));
    //                 count++;
    //                 // console.log("▽ "+choice.textContent);
    //             })
    //         }

    //         //사진일 경우
    //         else if(el.querySelector(".y6GzNb")!=null){
    //             let img_html=document.createElement('img');
    //             question_html.appendChild(img_html);
    //             const imgEl = el.querySelector(".y6GzNb").querySelector('img');
    //             let img = '';
    //             if (imgEl) {
    //                 img = imgEl.src;
    //             }
    //             img_html.setAttribute('src',img);
    //         }

    //         console.log('gd');
    //         // console.log (element.textContent+'\n');
    //     });
    //     //console.log(`Title: ${title}\n`);
    // }

    // crawl(url)
    // .then(() => {
    //     console.log('데이터 수집 완료');
    // })
    // .catch(err => console.error(err));