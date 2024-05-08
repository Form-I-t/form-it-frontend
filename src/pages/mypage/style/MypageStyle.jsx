import styled from 'styled-components';

export const ProfileZone = styled.div`
  margin: 40px 0 32px 0;

  display: flex;
  font-size: var(--font-large);
`;

export const ProfilePic = styled.div`
  width: 80px;
  height: 80px;
  margin-left: 16px;
  
  border-radius: 10px;
  background-color: var(--level-one);
`;

export const NickText = styled.div`
  font-weight: var(--weight-semi-bold);
`;

export const PicRight = styled.div`
  margin-left: 24px;
  display: flex;
  align-items: center;
`;

export const EditBtn = styled.div` 
  padding: 16px 28px;
  margin-bottom: 20px;
  border-radius: 10px;
  background-color: var(--level-one);

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BtnZone = styled.div`
  margin-bottom: 48px;
  height: 76px;
  display: flex;

  font-size: var(--font-regular);
  text-align: center;
  background-color: var(--level-one);
  border-radius: 10px;
`;

export const PointBtn = styled.div`
  width: 40%;

  color: var(--main-black);
  background-color: var(--level-two);
  border-radius: 10px 0 0 10px;
`;

export const PointColorBtn = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 14px;
  background-color: var(--main-green);
  border-radius: 10px;
`;

export const CouponBtn = styled.div`
  width: 30%;
  padding-top: 14px;

  background-color: var(--level-two);
  border-radius: 0 10px 10px 0;
`;

export const GiticonBtn = styled.div`
  width: 30%;
  padding-top: 14px;
`;

export const NumberText = styled.div`
  margin-top: 4px;
  font-size: var(--font-medium);
  font-weight: var(--weight-semi-bold);
  white-space: nowrap;
`;

export const CriticBtn = styled.div`
  margin-bottom: 20px;
  padding: 20px 28px;

  border-radius: 12px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  color: var(--main-black);
  font-weight: var(--weight-regular);
  background-color: var(--main-green);
`;

export const AdminBtn = styled.div`
  margin-bottom: 20px;
  padding: 20px 28px;

  border-radius: 12px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  color: var(--main-black);
  font-weight: var(--weight-regular);
  background-color: var(--main-pink);
`;

export const AdminCriticBtn = styled.div`
  margin-bottom: 4px;
  padding: 20px 28px;

  border-radius: 12px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  color: var(--main-black);
  font-weight: var(--weight-semi-bold);
  background-color: var(--main-pink);
`;

export const Gap8 = styled.div`
  gap: 8px;
  display: flex;
  align-items: center;
`;

export const HelpBtn = styled.div`
  margin-bottom: 8px;
  padding: 20px 28px;

  border-radius: 12px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: var(--level-one);
`;

export const EditProfileZone = styled.div`
  padding-top: 70px;
  padding-bottom: 28px;
`;

export const EditSetting = styled.img`
  position: relative;
  float: right;

  width: 30px;
  height: 30px;
`;

export const ProfilePicEdit = styled.div`
  width: 80px;
  height: 80px;

  margin: auto;
  margin-bottom: 12px;

  border-radius: 40px;
  background-color: lightgray;
`;

export const InfoText = styled.div`
  color: var(--grey-dark);
  font-size: var(--font-regular);
`;

export const NickEdit = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const NickInput = styled.input`
  position: relative;
  width: 75%;
  height: 52px;
  margin-top: 16px;
  margin-bottom: 16px;
  
  font-size: var(--font-regular);
  font-weight: var(--weight-regular);
  color: var(--grey-dark);
  padding-left: 16px;

  border-radius: 12px;
  background-color: var(--grey-blur-light);
`;

export const KaKaoBtn = styled.div`
  width: 100%;
  height: 56px;
  margin-bottom: 12px;

  background-color: #FEE500;
  border-radius: 12px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const QnaTitleZone = styled.div`
  width: 100%;
  height: 50px;
  margin-top: 8px;
  padding: 8px;

  border-bottom: 1px solid var(--grey-blur-light);

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const QnaImg = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 20px;
  background-color: var(--grey-light);
`;

export const QnaTitle = styled.div`
  position: absolute;
  left: 64px;
  color: var(--grey-dark);
  font-size: var(--font-regular);
`;

export const AnswerZone = styled.div`
  width: 100%;
  height: 70px;
  margin-top: 8px;
  padding: 16px;
  border-radius: 12px;

  background-color: var(--grey-blur-light);
  color: var(--grey-dark);
  font-size: var(--font-small);
`;

export const NoticeBox = styled.div`
  width: 100%;
  height: fit-content;
  padding: 16px;
  margin-bottom: 16px;

  color: var(--blue-normal);
  font-size: var(--font-small);

  border-radius: 12px;
  box-shadow: 0px 0px 8px 0px rgba(187, 187, 187, 0.50);
`;

export const NoticeTop = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const NoticeCate = styled.div`
  font-weight: var(--weight-bold);
`;

export const NoticeBottom = styled.div`
  margin-top: 8px;
  padding: 0 8px 0 8px;
`;

export const NoticeTitle = styled.div`
  margin-bottom: 8px;
  font-weight: var(--weight-bold);
  font-size: var(--font-regular)
`;