import styled from 'styled-components';

export const FooterWrapper = styled.div`
  background-color: #212121;
  width: 100%;
  height: auto;
  margin-top: ${(props) => (props.isAboutPage ? '200px' : '124px')};
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1100px;
  width: 100%;
  height: 236px;
  padding: 0 20px;
  text-align: center;
`;

export const Logo = styled.div`
  color: #fff;
  margin-top: 24px;
`;

export const DeveloperSection = styled.div`
  margin-top: 15px;
  color: #fff;
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 700;
`;

export const DesignerSection = styled.div`
  margin: 18px 0 14px 0;
  color: #fff;
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 700;
  line-height: normal;
`;

export const SectionTitle = styled.h3`
  margin: 0;
  color: #fff;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const TeamMemberContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 8px 0 0 0;
  gap: 30px;
  padding: 0;
`;
export const TeamMember = styled.span`
  color: #fff;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
`;

export const InfoSection = styled.div`
  color: #c3c3c3;
  text-align: center;
  font-family: Pretendard;
  font-size: 9px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 27px;
`;

export const Address = styled.p`
  margin: 0;
`;

export const Copyright = styled.p`
  margin: 0;
  font-size: 10px;
  opacity: 0.7;
`;
