import styled from 'styled-components';


export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  background: rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(5px);
  z-index: 900;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalZone = styled.div`
  position: relative;
  width: 280px;
  height: fit-content;
  
  justify-content: center;
  display: flex;
  font-size: var(--font-small);
`;

export const ModalIcon = styled.img`
  position: absolute;
  width: 90px; 
  height: 90px;
  top: -48px;
  z-index: 900;
  transform: rotate(10deg);
`;

//높이 고정!
export const ModalBox = styled.div`
  position: relative;
  width: 100%;
  height: 210px;
  padding: 16px;

  background: var(--level-two);
  border-radius: 16px;

  text-align: center;
  font-size: var(--font-small);
`;

//높이 고정!
export const CauModalBox = styled.div`
  position: relative;
  width: 100%;
  height: 145px;
  padding: 16px;

  background: var(--level-two);
  border-radius: 16px;

  text-align: center;
  font-size: var(--font-small);
`;

export const Modalname = styled.div`
  width: 100%;
  height: fit-content;
  margin-top: 20px;
  padding: 16px;

  color: var(--main-white);
`;

export const Option = styled.div`
  width: 100%;
  height: 40px;
  margin-bottom: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 10px;

  color: var(--main-green);
  font-weight: var(--weight-bold);
  border: 1px solid var(--main-green);
`;

export const CauOption = styled.div`
  width: 100%;
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 10px;

  color: var(--main-black);
  font-weight: var(--weight-bold);
  background-color: var(--main-pink);
`;

export const BetterOption = styled.div`
  width: 100%;
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 10px;

  color: var(--main-black);
  font-weight: var(--weight-bold);
  background-color: var(--main-green);
`;

export const Cancel = styled.div`
  width: 100%;
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--red-caution);
  border-top: 1px solid var(--grey-blur-light);
`;

// ver.2

export const Cancel2Zone = styled.div`
  width: 100%;
  height: 52px;

  display: flex;
  font-weight: var(--weight-semi-bold);
  font-size: var(--font-regular);
`;

export const Cancel2 = styled.div`
  width: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--grey-normal);
  background-color: var(--grey-light);
  border-bottom-right-radius: 16px;
`;

export const Cancel3 = styled.div`
  width: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--grey-normal);
  background-color: var(--grey-light);
  border-bottom-left-radius: 16px;
`;

export const UseBtn = styled.div`
  width: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--white-default);
  background-color: var(--blue-normal);
  border-bottom-left-radius: 16px;
`;

export const BuyBtn = styled.div`
  width: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--white-default);
  background-color: var(--blue-normal);
  border-bottom-right-radius: 16px;
`;

export const Option2 = styled.div`
  width: 100%;
  height: 50px;
  padding: 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  color: var(--grey-normal);
  border-top: 1px solid var(--grey-blur-light);
`;

export const Option2End = styled.div`
  color: var(--grey-normal);
`;

export const Option2Price = styled.div`
  color: var(--grey-dark);
  font-size: var(--font-medium);
  font-weight: var(--weight-regular);
  border-top: 1px solid var(--grey-blur-light);
`;

export const Modalname2 = styled.div`
  width: 100%;
  height: 320px;
  padding: 28px;
  justify-content: center;
  align-items: center;
`;

export const ModalImg = styled.div`
  width: 100%;
  height: 180px;
  margin-bottom: 24px;
  background-color: lightpink;
`;

export const ShopPrice = styled.div`
  width: fit-content;
  padding: 4px 10px 4px 10px;
  margin: auto;

  color: var(--blue-normal);
  font-size: var(--font-small);

  background-color: var(--yellow-money);
  border-radius: 20px;
`;

export const DropDown = styled.div`
  width: 70px;
  height: 35px;
`;

export const DdContent = styled.div`
  width: 70px;
  height: 35px;
  padding: 10px 10px 10px 24px;
  margin-bottom: 2px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: var(--grey-blur-light);
  color: var(--grey-dark);
  border-radius: 6px;
`;

export const Ul = styled.div`
  position: absolute;
  width: 70px;

  background-color: var(--grey-blur-light);
  color: var(--grey-dark);
  border-radius: 6px;
  border-top: none;

  white-space: nowrap;
  overflow: hidden;
  cursor: pointer;
`;

export const Li = styled.div`
  padding: 10px;
`;