import * as LayoutST from './LayoutStyle'
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageContext } from '../../components/context/PageContext'

export default function Layout(props) {

    const navigate = useNavigate();
    const { page } = useContext(PageContext);

    const [isShake, setIsShake] = useState(false);

    const isUserHandler = () => {
        if(props.isLogin === false) {
            setIsShake(true);
            setTimeout(() => {
                setIsShake(false);
            }, 3000)
        } else {
            navigate('/mypage');
        } 
    }

    return (
        <LayoutST.Content>
            <LayoutST.Header>
                {/* 뒤로가기 */}
                { (page === 'MainPage') ||
                  (page === 'SignUpSuccess') ||
                  (page === 'stepComplete') ? (
                    <></>
                ) : (
                <LayoutST.BackBtn onClick={() => {navigate(-1)}}>
                    <svg
                        width="18"
                        height="16"
                        viewBox="0 0 14 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.35303 12.7688C0.718261 12.1341 0.718261 11.1032 1.35303 10.4685L11.103 0.718456C11.7378 0.0836902 12.7687 0.0836901 13.4034 0.718456C14.0382 1.35322 14.0382 2.38408 13.4034 3.01885L4.80107 11.6212L13.3983 20.2235C14.0331 20.8583 14.0331 21.8892 13.3983 22.5239C12.7636 23.1587 11.7327 23.1587 11.0979 22.5239L1.34795 12.7739L1.35303 12.7688Z" fill="var(--main-white)"/>
                    </svg>
                </LayoutST.BackBtn>
                )}
                
                {/* 기프티콘샵, 마이페이지 */}
                <LayoutST.GiftMy>
                    {page === 'MainPage' ? ( <>
                    <svg 
                        width="30" 
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{
                            position: 'absolute',
                            bottom: '10px',
                            marginRight: '66px',
                            cursor: 'pointer',
                            }}
                        onClick={() => {navigate('/shop')}}>
                        <path d="M25.5473 10.3717L24.3223 5.27333C24.0657 4.22333 23.1557 3.5 22.094 3.5H5.88899C4.83899 3.5 3.91732 4.235 3.67232 5.27333L2.44732 10.3717C2.16732 11.5617 2.42399 12.775 3.17066 13.7317C3.26399 13.86 3.39232 13.9533 3.49732 14.07V22.1667C3.49732 23.45 4.54732 24.5 5.83066 24.5H22.164C23.4473 24.5 24.4973 23.45 24.4973 22.1667V14.07C24.6023 13.965 24.7307 13.86 24.824 13.7433C25.5707 12.7867 25.839 11.5617 25.5473 10.3717ZM22.059 5.82167L23.284 10.92C23.4007 11.41 23.2957 11.9 22.9923 12.285C22.829 12.495 22.479 12.8333 21.8957 12.8333C21.184 12.8333 20.5657 12.2617 20.484 11.5033L19.8073 5.83333L22.059 5.82167ZM15.164 5.83333H17.4507L18.0807 11.1067C18.139 11.5617 17.999 12.0167 17.6957 12.355C17.439 12.6583 17.0657 12.8333 16.5873 12.8333C15.8057 12.8333 15.164 12.145 15.164 11.305V5.83333ZM9.90232 11.1067L10.544 5.83333H12.8307V11.305C12.8307 12.145 12.189 12.8333 11.3257 12.8333C10.929 12.8333 10.5673 12.6583 10.2873 12.355C9.99566 12.0167 9.85566 11.5617 9.90232 11.1067ZM4.71066 10.92L5.88899 5.83333H8.18732L7.51066 11.5033C7.41732 12.2617 6.81066 12.8333 6.09899 12.8333C5.52732 12.8333 5.16566 12.495 5.01399 12.285C4.69899 11.9117 4.59399 11.41 4.71066 10.92ZM5.83066 22.1667V15.1317C5.92399 15.1433 6.00566 15.1667 6.09899 15.1667C7.11399 15.1667 8.03566 14.7467 8.71232 14.0583C9.41232 14.7583 10.3457 15.1667 11.4073 15.1667C12.4223 15.1667 13.3323 14.7467 14.009 14.0817C14.6973 14.7467 15.6307 15.1667 16.6807 15.1667C17.6607 15.1667 18.594 14.7583 19.294 14.0583C19.9707 14.7467 20.8923 15.1667 21.9073 15.1667C22.0007 15.1667 22.0823 15.1433 22.1757 15.1317V22.1667H5.83066Z" fill="#E0E0E0"/>
                    </svg>
                    <svg
                        width="20"
                        height="23"
                        viewBox="0 0 20 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{
                            position: 'absolute',
                            bottom: '12px',
                            marginRight: '24px',
                            cursor: 'pointer',
                            }}
                        onClick={isUserHandler}>
                        <path d="M1.95027 22C0.952267 17.9474 -0.714144 13.1579 5.87267 10.2105C1.68106 3.43158 6.37182 1.24561 9.24116 1C11.9857 1.12281 16.8759 3.13684 14.4807 10.2105C20.4687 13.7474 19.1658 17.2105 18.043 22" stroke="#E0E0E0" strokeWidth="2"/>
                    </svg> </> ) : (<></>)}
                </LayoutST.GiftMy>
                {isShake === true ?
                    <LayoutST.ShakeBox>
                        로그인 후 이용 가능합니다 :)
                    </LayoutST.ShakeBox> :
                    <></>}

            </LayoutST.Header>
            {props.children}
        </LayoutST.Content>
    )
}