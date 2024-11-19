import styled from 'styled-components';

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
  z-index: 9999;
`;

export const Modal = styled.div`
  background: rgba(0, 0, 0, 0.7);
  width: 1100px;
  height: 680px;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
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
`;

export const MemberCard = styled.div`
  position: absolute;
  top: 97px;
  left: 70px;
  display: flex;
  align-items: center;
  width: 294px;
  height: 142px;
  border-radius: 20px;
  background-color: #ff5400;
`;

export const MemberImage = styled.img`
  width: 88px;
  height: 88px;
  flex-shrink: 0;
  border-radius: 100%;
  background-color: #373737;
  margin-left: 23px;
`;

export const MemberDetailWrapper = styled.div`
  display: flex;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-left: 24px;
  align-items: flex-start;
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
`;

export const MemberPositionInfo = styled.p`
  color: #fff;
  margin: 0;
  font-size: 16px;
  letter-spacing: -0.8px;
`;

export const MemberInfo = styled.h3`
  color: var(--orange_sub, #ffe0b8);
  margin: 0;
  font-size: 16px;
  letter-spacing: -0.8px;
`;

export const MemberDetailSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const TechStackSection = styled.div`
  position: absolute;
  top: 97px;
  left: 394px;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 0;
`;

export const TechItem = styled.div`
  display: inline-block;
  padding: 5px 16px;
  background-color: #fff;
  color: #ff5400;
  border-radius: 20px;
  font-size: 14px;
`;

export const SNSSection = styled.div`
  position: absolute;
  top: 187px;
  left: 394px;
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
`;
export const Divider = styled.div`
  position: absolute;
  top: 268px;
  left: 70px;
  background: none;
  border: 1px;
  margin: 0;
`;

export const QASection = styled.div`
  position: absolute;
  top: 316px;
  left: 71px;
  text-align: left;
`;

export const QuestionWrapper = styled.div`
  margin-bottom: 46px;
  display: flex;
  gap: 33px;
`;

export const QuestionLabel = styled.strong`
  color: var(--orange, #ff5400);
  font-size: 20px;
  letter-spacing: -1px;
`;

export const QuestionItem = styled.div`
  gap: 46px;
`;

export const Question = styled.p`
  color: #fff;
  font-size: 20px;
  letter-spacing: -1px;
  margin: 0 0 4px;
`;

export const Answer = styled.div`
  color: #fff;
  font-size: 14px;
  letter-spacing: -0.7px;
  margin: 0;
`;
