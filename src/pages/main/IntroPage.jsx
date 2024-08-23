import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import * as ResrchST from './../researcher/ResrchStyle';
import styles from './../researcher/IntroSwiper.module.css';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';

import Page1 from '../../components/imgs/home/intro/intro1.png';
import Page2 from '../../components/imgs/home/intro/intro2.png';
import Page3 from '../../components/imgs/home/intro/intro3.png';
import Page4 from '../../components/imgs/home/intro/intro4.png';
import Page5 from '../../components/imgs/home/intro/intro5.png';

import Layout from '../../components/layout/Layout';
import { PageContext } from '../../components/context/PageContext';

export default function IntroPage() {

    const { setPage } = useContext(PageContext);
    const navigate = useNavigate();

    useEffect(() => {
        setPage('IntroPage');
    }, []);

    return (
        <>
        <Layout>
            <ResrchST.ResrchContent>
                <ResrchST.IntroTitle>
                    폼잇은요 !
                </ResrchST.IntroTitle>

                <Swiper
                    effect={'cards'}
                    grabCursor={true}
                    modules={[EffectCards]}
                    className={styles.swiper}
                >
                    <SwiperSlide className={styles.swiperSlide}>
                        <ResrchST.IntroImgSrc src={Page1}/>
                    </SwiperSlide>
                    <SwiperSlide className={styles.swiperSlide}>
                        <ResrchST.IntroImgSrc src={Page2}/>
                    </SwiperSlide>
                    <SwiperSlide className={styles.swiperSlide}>
                        <ResrchST.IntroImgSrc src={Page3}/>
                    </SwiperSlide>
                    <SwiperSlide className={styles.swiperSlide}>
                        <ResrchST.IntroImgSrc src={Page4}/>
                    </SwiperSlide>
                    <SwiperSlide className={styles.swiperSlide}>
                        <ResrchST.IntroImgSrc src={Page5}/>
                    </SwiperSlide>
                </Swiper>

                <ResrchST.Footer>
                <ResrchST.SuccessBtn onClick={()=>{navigate('/respondent')}}>
                    설문 참여하기
                </ResrchST.SuccessBtn>
                </ResrchST.Footer>

            </ResrchST.ResrchContent>
        </Layout>
        </>
    );
}