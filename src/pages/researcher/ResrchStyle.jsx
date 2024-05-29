import styled, { keyframes } from 'styled-components';


export const ResrchContent = styled.div`
  position: relative;
  text-align: center;
  
  width: 100%;
  height: calc(100vh - 100px);
  margin-top: 100px;
  
  color: var(--main-white);
`;

export const Footer = styled.div`
  position: absolute;
  bottom: 20px;
  width: 100%;
`;

export const SuccessBtn = styled.div`
  position: relative;
  width: calc(100% - 64px);
  height: 60px;
  margin: auto;

  font-size: var(--font-medium);
  font-weight: var(--weight-bold);
  color: var(--main-black);

  border-radius: 12px;
  background-color: var(--main-green);

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`;

export const IntroTitle = styled.div`
  margin-top : 28px;
  margin-bottom: 50px;

  font-size: var(--font-huge);
  font-weight: var(--weight-semi-bold);
`;

export const IntroText = styled.div`
  font-size: var(--font-medium);
  font-weight: var(--weight-semi-bold);
  margin-top: 30px;
`;

export const SmallText = styled.div`
  margin-top: 20px;

  font-size: var(--font-regular);
  font-weight: var(--weight-thin);
`;

//폼 아이콘 들어오면 삭제예정 !!!!
export const FormIcon = styled.img`
  width: 45px;
  margin: auto;
  display: flex;
  margin-top: 50px;
  margin-bottom: 50px;
`;

export const CantBox = styled.div`
  width: fit-content;
  padding: 14px 18px;
  margin: auto;
  margin-top: 40px;

  align-items: center;
  justify-content: center;
  text-align: center;

  background-color: var(--level-one);
  font-size: var(--font-small);

  border: 1px solid var(--main-green);
  border-radius: 12px;
`;

export const ButtonZone = styled.div`
  position: absolute;
  width: 100%;
  height: 60px;
  bottom: 20px;

  display: flex;
  justify-content: space-between;

  font-size: var(--font-medium);
  font-weight: var(--weight-bold);
`;

export const CancelBtn = styled.div`
  width: 47%;

  color: var(--grey-normal);
  border-radius: 12px;
  background-color: var(--level-one);

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`;

export const NextBtn = styled.div`
  width: 47%;

  color: ${(props) => (props.$btnActiv === true ? 'var(--main-black)' : 'var(--grey-normal)')};
  border-radius: 12px;
  background-color: ${(props) => (props.$btnActiv === true ? 'var(--main-green)' : 'var(--level-one)')};

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`;

export const DateInput = styled.input`
  width: 146px;
  height: 29px;
  padding: 4px 8px 4px 12px;

  font-size: var(--font-regular);
  font-weight: var(--weight-semi-bold);

  color: var(--main-white);

  border-radius: 6px;
  background-color: var(--level-two);

  white-space: nowrap;
`;

export const FlexZone = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
  white-space: nowrap;
`

export const FlexZone2 = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  white-space: nowrap;
`

export const PgZone = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  top: 12px;
  margin-bottom: 60px;
  height: 4px;
`

export const PgBar1 = styled.div`
  width: 33.3%;
  height: 100%;
  background-color: #105C3C;
`;

export const PgBar2 = styled.div`
  width: 33.3%;
  height: 100%;
  background-color: #0C8A52;
`;

export const PgBar3 = styled.div`
  width: 33.3%;
  height: 100%;
  background-color: var(--main-green);
`;

export const DropDown = styled.div`
  width: 74px;
  height: 29px;
  padding: 4px 8px 4px 12px;
  
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: 6px;
  background-color: var(--level-two);
`;

export const DropDown2 = styled.div`
  width: 140px;
  height: 36px;
  padding: 0 14px;
  
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: 12px;
  background-color: var(--level-one);
  font-weight: var(--weight-regular);
`;

export const DropDownOpen = styled.div`
  width: 74px;
  height: 29px;
  padding: 4px 8px 4px 12px;
  
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: 6px 6px 0 0;
  background-color: var(--level-two);
`;

export const DropDownOpen2 = styled.div`
  width: 140px;
  height: 36px;
  padding: 0 14px;
  
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: 0 0 12px 12px;
  background-color: var(--level-one);
`;

export const SelectZone = styled.div`
  font-weight: var(--weight-semi-bold);
  color: var(--main-white);
`;

export const Ul = styled.div`
  position: absolute;
  width: 74px;
  height: 227px;

  overflow: scroll;

  background-color: var(--level-two);
  color: var(--main-white);
  font-weight: var(--weight-regular);
  border-radius: 0 0 6px 6px;

  cursor: pointer;
`;

export const Ul2 = styled.ul`
  position: absolute;
  width: 140px;
  height: 340px;
  top: 74px;

  overflow: scroll;
  
  background-color: var(--level-one);
  font-weight: var(--weight-regular);
  border-radius: 12px 12px 0 0;

  cursor: pointer;
`;

export const Li = styled.div`
  height: 34px;
  padding: 8px 8px 8px 12px;
  border-bottom: 0.1px solid var(--level-one);
`;

export const Li2 = styled.div`
  width: 130px;
  height: 34px;
  border-bottom: 0.1px solid var(--level-three);
  margin: auto;
  margin-left: 12px;
  gap: 8px;

  display: flex;
  align-items: center;
  white-space: nowrap;
`;

export const FormBox = styled.div`
  padding: 14px;
  margin-top: 20px;
  gap: 24px;

  display: flex;
  align-items: center;

  border-radius: 16px;
  background-color: var(--level-one);
  white-space: nowrap;
`;

export const OnOffIcon = styled.img`
  width: 50px;
  height: 50px;
`;

export const Warning = styled.div`
  margin: 10px 0 0 4px;
  font-weight: var(--weight-regular);
  font-size: var(--font-micro);
  color: var(--main-green);
  align-items: center;
  display: flex;
`;

export const Copied = styled.div`
  margin: 40px 0 8px 0;
  display: flex;
  justify-content: end;

  font-weight: var(--weight-regular);
  font-size: var(--font-micro);
  color: var(--main-green);
  visibility: ${(props) => (props.$isCopied === true ? 'visible' : 'hidden')};
`;

export const CalculationBtn = styled.div`
  margin-top: 32px;
  padding: 16px 24px;
  border-radius: 16px;

  background-color: var(--main-green);
  color: var(--main-black);
  font-weight: var(--weight-semi-bold);
  font-size: 18px;
`;

export const PaymentImg = styled.img`
  position: absolute;
  display: flex;
  right: 20px;
  width: 140px;
`;

export const PriceText = styled.div`
  font-size: 28px;
  white-space: nowrap;
  font-weight: var(--weight-semi-bold);
`;

export const FinalPrice = styled.div`
  margin: 12px 0 36px 0;
  padding: 14px 0 14px 20px;

  border-radius: 12px;
  background-color: var(--main-green);
  color: var(--main-black);

  font-size: var(--font-medium);
  font-weight: var(--weight-regular);
`;

export const AccountZone = styled.div`
  padding: 12px 20px 12px 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: 12px;
  background-color: var(--level-one);
  white-space: nowrap;
  font-weight: var(--weight-regular);
`;

export const TitleText = styled.div`
  margin: 16px 0 14px 0;
  font-size: var(--font-medium);
  font-weight: var(--weight-regular);
`;

export const InputBox = styled.input`
  position: relative;
  width: 100%;
  height: 36px;
  padding-left: 20px;
  
  font-size: var(--font-regular);
  color: var(--main-white);

  border-radius: 12px;
  background-color: var(--level-one);
`;

export const DepositZone = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
`;

export const BankIcon = styled.img`
  width: 16px;
  height: 16px;
`;

export const boxFade = keyframes`
  0% {
    opacity: 0;
    bottom: 0px;
  }
  50% {
    opacity: 0.5;
    bottom: 50px;
  }
  100% {
    opacity: 1;
    bottom: 100px;
  }
`;

export const ConfirmZone = styled.div`
  position: absolute;
  width: 100%;
  height: 105px;
  bottom: 100px;
  padding: 16px;

  display: flex;
  align-items: center;

  border-radius: 16px;
  background-color: var(--main-white);
  line-height: 1.3 ;
  animation: ${boxFade} 0.3s linear;
`;

export const ConfirmImg = styled.img`
  width: 70px;
  height: 80px;
`;

export const ConfirmText = styled.div`
  margin-left: 12px;
  color: var(--main-black);
  font-weight: var(--weight-thin);
  font-size: var(--font-small);
`;

export const ConfirmLarge = styled.div`
  font-size: var(--font-regular);
  margin-bottom: 6px;
`;