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
  position: relative;
  background: #fff;
  border-radius: 15px;
  padding: 35px 30px;
  max-width: 170px;
  font-size: 18px;
  font-weight: 500;
  color: #000;
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
