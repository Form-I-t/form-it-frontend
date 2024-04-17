import styled from 'styled-components';

export const MainBg = styled.div`
  position: absolute;
  align-items: center;

  background-color: var(--main-black);
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
`;

export const ContentZone = styled.div`
  position: relative;

  width: calc(100% - 48px);
  height: calc(100% - 100px);
  margin-top: 100px;
`;

export const LogoZone = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;

  color: var(--main-white);
  font-size: var(--font-small);
  font-weight: var(--weight-regular);
  word-spacing: 4px;
`;

export const LogoImage = styled.img`
  display: flex;
  justify-content: center;
  margin: auto;
  margin-top: 100px;

  width: 230px;
  height: 50px;
`;

export const InputZone = styled.div`
  margin-top: 56px;
  margin-bottom: 16px;
`;

export const InputBox = styled.input`
  position: relative;
  width: 100%;
  height: 52px;
  margin-top: 16px;
  
  font-size: var(--font-regular);
  font-weight: var(--weight-regular);
  color: var(--main-white);
  padding-left: 24px;

  border-radius: 12px;
  background-color: var(--level-one);
  border: 2px solid var(--level-one-ol);
`;

export const CautionText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  color: var(--main-pink);
  font-size: var(--font-small);
  font-weight: var(--weight-regular);
`;

export const NoCaution = styled.div`
  width: 18px;
  height: 18px;
  visibility: hidden;
`;

export const LoginBtn = styled.div`
  width: 60%;
  height: 52px;
  margin: auto;
  margin-top: 60px;

  font-size: var(--font-regular);
  font-weight: var(--weight-semi-bold);
  color: var(--main-green);

  border-radius: 12px;
  border: 2px solid var(--main-green);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SignUpBtn = styled.div`
  width: 60%;
  height: 52px;
  margin: auto;
  margin-top: 12px;

  font-size: var(--font-regular);
  font-weight: var(--weight-semi-bold);
  background-color: var(--main-green);

  border-radius: 12px;

  display: flex;
  align-items: center;
  justify-content: center;
`;