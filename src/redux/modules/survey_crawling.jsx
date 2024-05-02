import axios from "axios";
import getInstance from "../../shared/api/Request";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.withCredentials = true;


// 설문 정보 저장하기 (크롤링 후)
export const saveInfo = async (arg) => {
    const saveInfoRes =
        await getInstance().post(
            `/survey`,
            JSON.stringify({
                'crawlingDto':{
                    'surveyName': arg.surveyName,
                    'requesterOrganization': arg.requesterOrganization,
                    'questionCount': arg.questionCount, // 질문 개수 세서 자동으로 넣을 수 있도록
                    'restrictions': arg.restrictions,
                    'questions': saveQuestions(arg)
                }
            }));
    console.log(saveInfoRes);
    return saveInfoRes.status;
};

// 질문 저장하기 (배열로 리턴)
export const saveQuestions = async (questions) => {
    var saveQuestionsList = [];
    questions.map((question)=>{
        const QuestionRes =
        [JSON.stringify({
            "content": question.questionContent,
            "type": question.type,
            "choices": saveChoice(question.choices)
        })];
        console.log(QuestionRes);
        saveQuestionsList.push(QuestionRes);
    })
    
    return saveQuestionsList;
};

// choice 저장하기 (배열로 리턴)
export const saveChoice = async (choices) => {
    var saveChoicesList = [];
    choices.map((choice)=>{
        const choiceRes =
        JSON.stringify({
        "content": choice.content,
        });
        console.log(choiceRes);
        saveChoicesList.push(choiceRes); 

    });
    
    return saveChoicesList;
};

export const questionSlice = createSlice({
    name: 'questions', //모듈의 이름
    initialState,
    reducers: {
      SET_QUESTIONS: (state, action) => {
        state.id = action.payload.id;
        state.googleFormLink = action.payload.googleFormLink;
        state.participantCount = action.payload.participantCount;
        state.rewardPoints = action.payload.rewardPoints;
        state.deadline = action.payload.deadline;
        state.accountHolderName = action.payload.accountHolderName;
        state.account = action.payload.account;
      },
    //   CLEAR_STEP: (state) => {
    //     state.step = {
    //       data: [],
    //       loading: false,
    //       error: null,
    //     };
    //   },
    },
  });s