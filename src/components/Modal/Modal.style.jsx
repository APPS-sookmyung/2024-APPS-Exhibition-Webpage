import styled from 'styled-components';
import { BREAKPOINTS } from '../../styles/mediaQueries.style';

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  overflow: auto;
`;

export const Modal = styled.div`
  background: rgba(0, 0, 0, 0.8);
  max-width: 1100px;
  max-height: 680px;
  padding: 60px 70px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow-y: auto;
  border: 1px solid #8f8f8f;
  border-radius: 20px;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    padding: 30px 40px;
    width: 100vw;
    height: 100vh;
    max-width: none;
    max-height: none;
  }

  @media (max-width: ${BREAKPOINTS[0]}px) {
    padding: 20px 30px;
    width: 100vw;
    height: 100vh;
    max-width: none;
    max-height: none;
  }
`;

export const CloseButton = styled.button`
  z-index: 200;
  display: flex;
  justify-content: flex-end;
  padding-bottom: 10px;
  width: 100%;

  img {
    width: 28px;
    height: 28px;
  }
`;

export const MemberCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  max-width: 294px;
  aspect-ratio: 294 / 142;
  padding: 27px 23px;
  border-radius: 20px;
  gap: 24px;
  background-color: #ff5400;
  box-sizing: border-box;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    gap: 22px;
    padding: 18px 16px;
  }

  @media (max-width: ${BREAKPOINTS[0]}px) {
    gap: 20px;
    padding: 16px 14px;
  }
`;

export const MemberImage = styled.img`
  width: 88px;
  height: 88px;
  border-radius: 100%;
  background-color: #373737;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    width: 78px;
    height: 78px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    width: 68px;
    height: 68px;
  }
`;

export const MemberDetailWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    gap: 15px;
  }

  @media (max-width: ${BREAKPOINTS[0]}px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const MemberInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  align-items: flex-start;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    gap: 5px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    gap: 4px;
  }
`;

export const NameAndPositionWrapper = styled.div`
  display: inline-block;
  word-break: keep-all;
  width: 100%;
  max-width: 100%;
  gap: 7px;
  display: flex;
`;

export const MemberName = styled.h2`
  color: #fff;
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  max-width: 100%;
  word-break: keep-all;
  overflow-wrap: break-word;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    font-size: 18px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    font-size: 16px;
  }
`;

export const MemberPositionInfo = styled.p`
  color: #fff;
  margin: 0;
  font-size: 16px;
  max-width: 100%;
  word-break: keep-all;
  overflow-wrap: break-word;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    font-size: 15px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    font-size: 14px;
  }
`;

export const MemberInfo = styled.h3`
  color: var(--orange_sub, #ffe0b8);
  margin: 0;
  font-size: 16px;
  word-break: keep-all;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    font-size: 15px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    font-size: 14px;
  }
`;

export const MemberDetailSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    gap: 15px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    gap: 10px;
  }
`;

export const TechStackSection = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

export const TechItem = styled.div`
  display: inline-block;
  padding: 5px 16px;
  background-color: #fff;
  color: #ff5400;
  border-radius: 20px;
  font-size: 14px;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    font-size: 13px;
  }

  @media (max-width: ${BREAKPOINTS[0]}px) {
    font-size: 12px;
  }
`;

export const SNSSection = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    gap: 14px;
    img {
      width: 45px;
      height: 45px;
    }
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    gap: 12px;
    img {
      width: 40px;
      height: 40px;
    }
  }
`;

export const Divider = styled.div`
  margin: 40px 0;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  max-width: 100%;

  svg {
    max-width: 100%;
    height: auto;
    object-fit: contain;
  }

  @media (max-width: ${BREAKPOINTS[1]}px) {
    margin: 20px 0;
  }

  @media (max-width: ${BREAKPOINTS[0]}px) {
    margin: 10px 0;
  }
`;

export const QASection = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    gap: 12px;
  }

  @media (max-width: ${BREAKPOINTS[0]}px) {
    gap: 8px;
  }
`;

export const QuestionWrapper = styled.div`
  display: flex;
  gap: 33px;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    gap: 20px;
  }

  @media (max-width: ${BREAKPOINTS[0]}px) {
    gap: 12px;
    flex-direction: column;
  }
`;

export const QuestionLabel = styled.strong`
  color: var(--orange, #ff5400);
  font-size: 20px;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    font-size: 18px;
  }

  @media (max-width: ${BREAKPOINTS[0]}px) {
    font-size: 16px;
  }
`;

export const QuestionItem = styled.div`
  gap: 46px;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    gap: 24px;
  }

  @media (max-width: ${BREAKPOINTS[0]}px) {
    gap: 16px;
  }
`;

export const Question = styled.p`
  color: #fff;
  font-size: 20px;
  padding-bottom: 4px;
  word-break: keep-all;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    font-size: 18px;
    padding-bottom: 2px;
    font-size:;
  }

  @media (max-width: ${BREAKPOINTS[0]}px) {
    font-size: 16px;
    padding-bottom: 1px;
  }
`;

export const Answer = styled.div`
  color: #fff;
  font-size: 14px;
  margin: 0;
  word-break: keep-all;
  line-height: 1.5;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    font-size: 12px;
    line-height: 1.4;
  }

  @media (max-width: ${BREAKPOINTS[0]}px) {
    font-size: 11px;
    line-height: 1.3;
  }
`;

export const SNSLinkWrapper = styled.div`
  display: flex;
  gap: 12px;
`;

export const SNSLink = styled.a`
  color: #fff;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: ${BREAKPOINTS[1]}px) {
    font-size: 13px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    font-size: 12px;
  }
`;
