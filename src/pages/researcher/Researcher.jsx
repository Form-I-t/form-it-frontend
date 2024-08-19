import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import * as ResrchST from './ResrchStyle';
import styles from './IntroSwiper.module.css';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';

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
                    폼잇은요 ...
                </ResrchST.IntroTitle>

                <Swiper
                    effect={'cards'}
                    grabCursor={true}
                    modules={[EffectCards]}
                    className={styles.swiper}
                >
                    <SwiperSlide className={styles.swiperSlide}>Slide 1</SwiperSlide>
                    <SwiperSlide className={styles.swiperSlide}>Slide 2</SwiperSlide>
                    <SwiperSlide className={styles.swiperSlide}>Slide 3</SwiperSlide>
                </Swiper>

                {/* <ResrchST.IntroText>
                    비용 안내
                    <ResrchST.SmallText>
                        저희가 서비스해 드린 만큼만 받겠습니다. <br/>
                        설문조사 기간이 마감되거나, 설문조사 강제종료 시 <br/>
                        응답자 수가 미달된 만큼 무조건 환급해드립니다.                        
                    </ResrchST.SmallText>
                </ResrchST.IntroText> */}

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