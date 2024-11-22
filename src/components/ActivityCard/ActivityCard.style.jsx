import styled from 'styled-components';

export const ActivityCard = styled.div`
  width: 470px;
  height: 300px;
  flex-shrink: 0;
  border-radius: 20px;
  background-color: lightgray;
  background-position: 50%;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const ActivityTextWrapper = styled.div`
  z-index: 2;
  position: absolute;
  width: 470px;
  justify-content: center;
`;

export const ActivityName = styled.h2`
  margin: 30px 0 0 30px;
  display: inline-flex;
  padding: 13px 43px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 30px;
  background: var(--orange, #ff5400);
  color: #fff;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -1px;
`;

export const ActivityIntroWrapper = styled.div`
  width: 100%;
  height: 184px;
  display: flex;
  justify-content: center;
  align-items: end;
`;

export const ActivityIntro = styled.p`
  color: #fff;
  width: 410px;
  font-size: 16px;
  letter-spacing: -0.7px;
  margin: 0;
  word-break: keep-all;
`;

export const ActivityBackBlur = styled.div`
  position: absolute;
  width: 470px;
  height: 300px;
  flex-shrink: 0;
  border-radius: 20px;
  border: 1px solid #fff;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(15px);
  transition:
    background 0.3s ease,
    border 0.3s ease;
`;
