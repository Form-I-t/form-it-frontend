import styled, {keyframes} from 'styled-components';

export const ContentZone = styled.div`
  position: relative;
  max-width: 764px;
  width: 100%;
  top: 100px;
`;

export const GuideZone = styled.div`
  position: relative;
  left: 10%;
  margin-top: 100px;

  z-index: 900;
  color: var(--white-default);
`;

export const GuideText = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  margin-bottom: 4px;

  font-size: var(--font-medium);
  font-weight: var(--weight-thin);
  white-space: nowrap;
`;

export const NickText = styled.div`
  font-size: 28px;
  font-weight: var(--weight-semi-bold);
  color: var(--main-green);
  white-space: nowrap;
`;

export const NumberZone = styled.div`
  font-size: var(--font-small);
  font-weight: var(--weight-thin);
  display: flex;
  align-items: center;
  margin-top: 16px;
  margin-bottom: 8px;
`;

export const NumberText = styled.div`
  font-size: var(--font-regular);
  font-weight: var(--weight-semi-bold);
`;

export const PointText = styled.div`
  font-size: 28px;
  font-weight: var(--weight-semi-bold);
  color: var(--main-green);

  display: flex;
  align-items: center;
`;

export const GuideButton = styled.div`
  position: relative;

  width: fit-content;
  height: fit-content;
  margin-top: 28px;

  border-radius: 6px;
  background: var(--main-green);

  color: var(--main-black);
  font-weight: var(--weight-semi-bold);
  text-align: center;
  padding: 8px 12px;

  cursor: pointer;
`;

export const OptionBox = styled.div`
  position: relative;
  width: 80%;
  height: fit-content;
  margin: auto;

  display : flex;
  justify-content: space-between;
`;

export const Option = styled.div`
  width: 47%;
  height: 235px;

  margin-top: 50px;
  margin-bottom: 60px;
  padding: 20px;

  border-radius: 8px;
  background: var(--level-one-ol);

  font-size: var(--font-small);
  color: var(--grey-normal);
`;

export const OptionText = styled.div`
  margin-top: 12px;

  font-size: var(--font-medium);
  color: var(--main-white);
  font-weight: var(--weight-regular);
`;

export const HighLight = styled.div`
  color: var(--main-green);
  float: left;
`;

export const BubbleZone = styled.div`
  position: relative;
  width: 80%;
  height: 84px;
  padding: 16px;
  margin: auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: 8px;
  background: var(--level-one-ol);

  color: var(--grey-normal);
  font-size: var(--font-small);
  font-weight: var(--weight-semi-bold);
`;

export const BubbleIcon = styled.img`
  position: absolute;
  width: 100px;
  bottom: 0;
`;

export const SmallText = styled.div`
  color: var(--grey-normal);
  font-size: var(--font-small);
  margin-bottom: 4px;
`;

export const BubbleText = styled.div`
  color: var(--main-white);
  font-size: var(--font-regular);
`;

export const BubblePoint = styled.div`
  position: relative;
  width: 20px;
  height: 0px;
  left: 280px;
  bottom: 1px;
  border-left: 36px solid var(--level-one-ol);
  border-top: 0px solid transparent;
  border-bottom: 36px solid transparent;
`;

export const ImgFadeIn = keyframes`
  0% {
    opacity: 0;
    left: 100%;
  }
  50% {
    left: 45%;
  }
  100% {
    opacity: 1;
    left: 50%;
  }
`;

export const HomeImg = styled.img`
  position: absolute;
  top: 2%;
  left: 50%;
  width: 150px;
  transform: rotate(-20deg);
  animation: ${ImgFadeIn} 0.5s ease-in;
`;

export const OptionImg = styled.img`
  margin: auto;
  display: flex;
  width: 100px;
  overflow: hidden;
`;

export const FlexZone = styled.div`
  position: absolute;
  display: flex;
  align-items: center;

  gap: 16px;
  right: 16px;
`