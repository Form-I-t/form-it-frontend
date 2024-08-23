import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import * as ResrchST from './ResrchStyle';
import styles from './IntroSwiper.module.css';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';

import Page1 from '../../components/imgs/researcher/slide/resrch1.png';
import Page2 from '../../components/imgs/researcher/slide/resrch2.png';
import Page3 from '../../components/imgs/researcher/slide/resrch3.png';
import Page4 from '../../components/imgs/researcher/slide/resrch4.png';
import Page5 from '../../components/imgs/researcher/slide/resrch5.png';

import Layout from '../../components/layout/Layout';
import { PageContext } from '../../components/context/PageContext';

export default function Researcher() {

    const { setPage } = useContext(PageContext);
    const navigate = useNavigate();

    useEffect(() => {
        setPage('Researcher');
    }, []);

    return (
        <>
        <Layout>
            <ResrchST.ResrchContent>
                <ResrchST.IntroTitle>
                    조사자 안내
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
                <ResrchST.SuccessBtn onClick={()=>{navigate('/step1')}}>
                    접수 시작하기
                </ResrchST.SuccessBtn>
                </ResrchST.Footer>

            </ResrchST.ResrchContent>
        </Layout>
        </>
    );
}