import styled from 'styled-components';
import { BREAKPOINTS } from '../../styles/mediaQueries.style';

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.div`
  background: rgba(0, 0, 0, 0.7);
  width: 1100px;
  height: 680px;
  position: relative;
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    width: 90%;
    height: 500px;
    padding: 20px;
  }

  @media (max-width: ${BREAKPOINTS[0]}px) {
    width: 90%;
    height: 450px;
    padding: 16px;
    overflow-y: auto;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 60px;
  right: 70px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    top: 40px;
    right: 40px;
    img {
      width: 28px;
      height: 28px;
    }
  }

  @media (max-width: ${BREAKPOINTS[0]}px) {
    top: 20px;
    right: 20px;
    img {
      width: 24px;
      height: 24px;
    }
  }
`;

export const MemberCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 294px;
  height: 142px;
  border-radius: 20px;
  background-color: #ff5400;

  @media (max-width: ${BREAKPOINTS[0]}px) {
    width: 230px;
    height: 120px;
  }
`;

export const MemberImage = styled.img`
  width: 88px;
  height: 88px;
  flex-shrink: 0;
  border-radius: 100%;
  background-color: #373737;
  margin-left: 23px;

  @media (max-width: ${BREAKPOINTS[0]}px) {
    width: 68px;
    height: 68px;
  }
`;

export const MemberDetailWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  top: 97px;
  margin-top: 50px;
  margin-left: 40px;

  @media (max-width: ${BREAKPOINTS[0]}px) {
    gap: 10px;
    margin-top: 40px;
    margin-left: 20px;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-left: 24px;
  align-items: flex-start;

  @media (max-width: ${BREAKPOINTS[0]}px) {
    margin-left: 12px;
  }
`;

export const NameAndPositionWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
`;

export const MemberName = styled.h2`
  color: #fff;
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -1px;

  @media (max-width: ${BREAKPOINTS[0]}px) {
    font-size: 16px;
  }
`;

export const MemberPositionInfo = styled.p`
  color: #fff;
  margin: 0;
  font-size: 16px;
  letter-spacing: -0.8px;

  @media (max-width: ${BREAKPOINTS[0]}px) {
    font-size: 14px;
  }
`;

export const MemberInfo = styled.h3`
  color: var(--orange_sub, #ffe0b8);
  margin: 0;
  font-size: 16px;
  letter-spacing: -0.8px;

  @media (max-width: ${BREAKPOINTS[0]}px) {
    font-size: 14px;
  }
`;

export const MemberDetailSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  top: 98px;
  left: 394px;

  @media (max-width: ${BREAKPOINTS[0]}px) {
    top: 60px;
    left: 240px;
    gap: 10px;
  }
`;

export const TechStackSection = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const TechItem = styled.div`
  display: inline-block;
  padding: 5px 16px;
  background-color: #fff;
  color: #ff5400;
  border-radius: 20px;
  font-size: 14px;

  @media (max-width: ${BREAKPOINTS[0]}px) {
    font-size: 12px;
  }
`;

export const SNSSection = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;

  @media (max-width: ${BREAKPOINTS[0]}px) {
    gap: 12px;
    img {
      width: 40px;
      height: 40px;
    }
  }
`;

export const Divider = styled.div`
  border: 0;
  width: 100%;

  img {
    width: 100%;
    height: auto;
  }

  @media (max-width: ${BREAKPOINTS[1]}px) {
    margin-top: 20px;
    margin-left: 40px;
    width: calc(100% - 80px);
  }

  @media (max-width: ${BREAKPOINTS[0]}px) {
    margin-top: 15px;
    margin-left: 20px;
    width: calc(100% - 40px);
  }
`;

export const QASection = styled.div`
  text-align: left;
  margin-top: 30px;
  margin-left: 70px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    gap: 12px;
    margin-top: 25px;
    margin-left: 40px;
  }

  @media (max-width: ${BREAKPOINTS[0]}px) {
    gap: 8px;
    margin-top: 20px;
    margin-left: 20px;
  }
`;

export const QuestionWrapper = styled.div`
  margin-bottom: 46px;
  display: flex;
  gap: 33px;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    gap: 20px;
    margin-bottom: 32px;
  }

  @media (max-width: ${BREAKPOINTS[0]}px) {
    gap: 12px;
    flex-direction: column;
  }
`;

export const QuestionLabel = styled.strong`
  color: var(--orange, #ff5400);
  font-size: 20px;
  letter-spacing: -1px;

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
  letter-spacing: -1px;
  margin: 0 0 4px;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    font-size: 18px;
  }

  @media (max-width: ${BREAKPOINTS[0]}px) {
    font-size: 16px;
  }
`;

export const Answer = styled.div`
  color: #fff;
  font-size: 14px;
  letter-spacing: -0.7px;
  margin: 0;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    font-size: 12px;
  }

  @media (max-width: ${BREAKPOINTS[0]}px) {
    font-size: 11px;
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

  @media (max-width: ${BREAKPOINTS[0]}px) {
    font-size: 12px;
  }
`;
