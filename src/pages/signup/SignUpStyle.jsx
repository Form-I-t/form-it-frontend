import styled from 'styled-components';

export const ContentZone = styled.div`
  position: relative;
  overflow: scroll;

  width: calc(100% - 64px);
  height: calc(100vh - 100px);
  margin-top: 100px;
  
  color: var(--main-white);
`;

export const SuccessZone = styled.div`
  margin-top: 100px;
  margin-left: 10px;

  color: var(--main-white);
  font-size: var(--font-medium);
`;

export const SuccessText = styled.div`
  color: var(--main-white);
  font-size: 28px;
  margin-top: 4px;
`;

export const SmallText = styled.div`
  color: var(--grey-normal);
  font-size: var(--font-regular);
  line-height: 1.3;
  margin-top: 30px;
`;

export const GuideZone = styled.div`
  width: calc(100% - 16px);
  padding-left: 8px;
  margin-top: 100px;
  margin-bottom: 36px;
`;

export const CheckText = styled.div`
  margin-top: 16px;
  margin-left: 8px;
  display: flex;
  align-items: center;

  color: var(--main-green);
  font-size: var(--font-micro);
  font-weight: var(--weight-regular);
  white-space: nowrap;
`;

export const CautionText = styled.div`
  margin-top: 16px;
  margin-left: 8px;
  display: flex;
  align-items: center;

  color: var(--main-pink);
  font-size: var(--font-micro);
  font-weight: var(--weight-regular);
  white-space: nowrap;
`;

export const SubmitBtn = styled.button`
  position: absolute;
  width: 100%;
  height: 60px;
  bottom: 20px;

  font-size: var(--font-medium);
  font-weight: var(--weight-bold);
  color: var(--main-black);

  border-radius: 12px;
  background-color: var(--main-green);

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  &:disabled {
    color: var(--grey-dark);
    background-color: var(--level-one);
    cursor: default;
  }
`;

export const SuccessBtn = styled.div`
  position: absolute;
  width: calc(100% - 20px);
  height: 60px;
  bottom: 20px;

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