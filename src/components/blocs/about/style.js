import styled from "styled-components";
import fermerBackground from "../../../assets/fermer-background.svg";

export const StyledSection = styled.section`
  display: flex;
  position: relative;
  padding-left: ${(props) => props.theme.pagePadding};
  padding-top: 159px;
  padding-bottom: 159px;
  padding-right: 603px;
  background-color: #D8ECFE;
  align-items: center;
  z-index: 1;
  box-sizing: border-box;

  &::after {
    position: absolute;
    bottom: 0;
    right: 40px;
    display: block;
    content: "";
    width: 446px;
    height: 563px;
    margin: auto;
    background-image: url(${fermerBackground});
    background-repeat: no-repeat;
  }

  &::before {
    content: '';
    position: absolute;
    width: 446px;
    height: 447px;
    top: 76px;
    left: 724px;
    background: #C4E2FF;
    border-radius: 50%;
    opacity: 1;
    z-index: 0;
  }
`;

export const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  position: relative;
  min-width: 650px;
  z-index: 3;
`;

export const Text = styled.p`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  margin-top: ${(props) => props.theme.indent};
  padding-right: 122px;
  margin-bottom: 40px;
  color: ${(props) => props.theme.colorBlackForText};
`;