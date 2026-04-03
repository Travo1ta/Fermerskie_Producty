import styled from "styled-components";
import fermerBackground from "../../../assets/fermer-background.svg";

export const StyledSection = styled.section`
  display: flex;
  position: relative;
  justify-content: center;
  padding: 80px ${(props) => props.theme.pagePadding};
  background-color: #D8ECFE;
  z-index: 1;
  box-sizing: border-box;
  overflow: hidden;

  &::after {
    position: absolute;
    bottom: 0;
    right: 325px;
    display: block;
    content: "";
    width: 400px;
    height: 390px;
    background-image: url(${fermerBackground});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: bottom right;
    opacity: 0.5;
    z-index: 0;
  }

  &::before {
    content: '';
    position: absolute;
    width: 400px;
    height: 400px;
    top: 50%;
    right: 210px;
    background: #C4E2FF;
    border-radius: 50%;
    opacity: 0.6;
    transform: translateY(-50%);
    z-index: 0;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  z-index: 2;
  text-align: center;
`;

export const Text = styled.p`
  margin: 0;
  padding: 0;
  margin-top: ${(props) => props.theme.indent};
  font-size: 18px;
  line-height: 1.5;
  color: ${(props) => props.theme.colorBlackForText};
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;