import styled from 'styled-components';

export const Content = styled.div`
  background-color: var(--main-black);
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  overflow: scroll;

  min-height: 100vh;
  box-shadow: 0px 0px 20px rgba(187, 187, 187, 0.32);
  @media screen and (min-width: 764px) {
    width: var(--responsive-width);
    left: calc(((100vw - 764px) / 2) * 1);
  }

  @media screen and (max-width: 763px) {
    width: 100vw;
  }
`

export const Header = styled.div`
  position: fixed;
  height: 100px;
  z-index: 900;
  justify-content: end;
  background-color: var(--main-black);

  @media screen and (min-width: 764px) {
    width: var(--responsive-width);
    left: calc(((100vw - 764px) / 2) * 1);
  }

  @media screen and (max-width: 763px) {
    width: 100vw;
  }
`

export const GiftMy = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: end;
`

export const BackBtn = styled.div`
  position: absolute;
  bottom: 12px;
  margin-left: 20px;
  cursor: pointer;
  z-index: 900;
`