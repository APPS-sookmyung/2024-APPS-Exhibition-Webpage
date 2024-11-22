import styled from 'styled-components';

export const MemberFeedbackCardList = styled.div`
  display: flex;
  gap: 40px;
  margin: 20px;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const BalloonCard = styled.div`
  display: flex;
  position: relative;
  border-radius: 15px;
  background: #fff;
  padding: 35px 30px;
  width: 292px;
  height: 172px;
  color: #000;
  font-size: 18px;
  font-weight: 500;
  box-sizing: border-box;
`;

export const BalloonCardContentBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const BalloonCardContent = styled.p`
  margin: 0;
  color: #000;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.9px;
`;

export const BalloonCardReviewMember = styled.span`
  color: #808080;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.7px;
`;

export const BalloonTail = styled.div`
  position: absolute;
  bottom: -20px;
  left: 50px;
  width: 30px;
  height: 20px;
  background: #fff;
  clip-path: polygon(50% 100%, 0% 0%, 100% 0%);
`;

export const Character = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
