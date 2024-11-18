import * as S from './Footer.style';

export default function Footer() {
  return (
    <S.FooterWrapper>
      <S.Footer>
        <S.Logo>
          <img src="/images/logo/logo-white-footer.svg" alt="APPS 로고" />
        </S.Logo>

        <S.TeamSection>
          <S.TeamCategory>
            <S.CategoryTitle>DEVELOPER</S.CategoryTitle>
            <S.TeamMemberContainer>
              <S.TeamMember>김준희 (소프트웨어학부 22)</S.TeamMember>
              <S.TeamMember>류미성 (소프트웨어학부 21)</S.TeamMember>
              <S.TeamMember>이다빈 (소프트웨어학부 24)</S.TeamMember>
              <S.TeamMember>하지민 (수학과, 소프트웨어학부 22)</S.TeamMember>
            </S.TeamMemberContainer>
          </S.TeamCategory>

          <S.TeamCategory>
            <S.CategoryTitle>DESIGNER</S.CategoryTitle>
            <S.TeamMemberContainer>
              <S.TeamMember>김수진 (공예과 21)</S.TeamMember>
              <S.TeamMember>문서영 (산업디자인과 22)</S.TeamMember>
            </S.TeamMemberContainer>
          </S.TeamCategory>
        </S.TeamSection>

        <S.InfoSection>
          <S.Address>
            숙명여자대학교 | 04310 서울특별시 용산구 청파로47길 100 (청파동2가)
          </S.Address>
          <S.Copyright>Copyright APPS. All Rights Reserved.</S.Copyright>
        </S.InfoSection>
      </S.Footer>
    </S.FooterWrapper>
  );
}
