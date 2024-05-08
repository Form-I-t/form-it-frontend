import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import GlobalRoute from './GlobalRoute';
// import PublicRoute from './PublicRoute';
// import PrivateRoute from './PrivateRoute';

import MainPage from '../../pages/main/MainPage'
import SignUp from '../../pages/signup/SignUp';
import Login from '../../pages/login/Login'
import SignUpSuccess from '../../pages/signup/SignUpSuccess';
import Mypage from '../../pages/mypage/Mypage';
import MypageEdit from '../../pages/mypage/profile/MypageEdit';
import Mypoint from '../../pages/mypage/collect/Mypoint';
import Mygifticon from '../../pages/mypage/collect/Mygifticon';
import InquiryPage from '../../pages/mypage/admin/InquiryPage';
import NoticePage from '../../pages/mypage/admin/NoticePage';
import Shop from '../../pages/shop/Shop';
import Researcher from '../../pages/researcher/Researcher';
import Step1 from '../../pages/researcher/Step1';
import Step2 from '../../pages/researcher/Step2';
import Step3 from '../../pages/researcher/Step3';
import StepComplete from '../../pages/researcher/StepComplete';
import Respondent from '../../pages/respondent/Respondent';

const Router = () => {
    return (
        <>
        <BrowserRouter>
            <Routes>
                {/* <Route element={<PrivateRoute/>}>
                </Route>

                <Route element={<PublicRoute/>}>
                </Route> */}

                {/* <Route element={<GlobalRoute/>}>
                </Route> */}

                <Route path='/' element={<MainPage/>}/>
                <Route path='*' element={<MainPage/>}/>
                <Route path='/signup' element={<SignUp/>}/>
                <Route path='/signupSuccess' element={<SignUpSuccess/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/mypage' element={<Mypage/>}/>
                <Route path='/mypageEdit' element={<MypageEdit/>}/>
                <Route path='/mypoint' element={<Mypoint/>}/>
                <Route path='/mygifticon' element={<Mygifticon/>}/>
                <Route path='/inquiryPage' element={<InquiryPage/>}/>
                <Route path='/noticePage' element={<NoticePage/>}/>
                <Route path='/shop' element={<Shop/>}/>
                <Route path='/researcher' element={<Researcher/>}/>
                <Route path='/step1' element={<Step1/>}/>
                <Route path='/step2' element={<Step2/>}/>
                <Route path='/step3' element={<Step3/>}/>
                <Route path='/stepComplete' element={<StepComplete/>}/>
                <Route path='/respondent' element={<Respondent/>}/>
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default Router;