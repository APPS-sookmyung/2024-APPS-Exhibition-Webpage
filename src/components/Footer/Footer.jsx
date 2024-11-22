import * as S from './Footer.style';

const CATEGORY_TITLES = {
  DEVELOPER: 'DEVELOPER',
  DESIGNER: 'DESIGNER',
};

const TEAM_MEMBERS = {
  DEVELOPER: [
    '김준희 (소프트웨어학부 22)',
    '류미성 (소프트웨어학부 21)',
    '이다빈 (소프트웨어학부 24)',
    '하지민 (소프트웨어학부 22)',
  ],
  DESIGNER: ['김수진 (공예과 21)', '문서영 (산업디자인과 22)'],
};

const TeamCategory = ({ title, members }) => (
  <S.TeamInfo>
    <S.CategoryTitle>{title}</S.CategoryTitle>
    <S.TeamMemberContainer>
      {members.map((member, index) => (
        <S.TeamMember key={index}>{member}</S.TeamMember>
      ))}
    </S.TeamMemberContainer>
  </S.TeamInfo>
);

export default function Footer() {
  return (
    <S.FooterWrapper>
      <S.Footer>
        <S.Logo>
          <img src="/images/logo/logo-white.svg" alt="APPS 로고" />
        </S.Logo>

        <S.TeamSection>
          {Object.keys(CATEGORY_TITLES).map((key) => (
            <TeamCategory
              key={key}
              title={CATEGORY_TITLES[key]}
              members={TEAM_MEMBERS[key]}
            />
          ))}
        </S.TeamSection>

        <S.AddressSection>
          <S.Address>
            숙명여자대학교 | 04310 서울특별시 용산구 청파로47길 100 (청파동2가)
          </S.Address>
          <S.Copyright>Copyright APPS. All Rights Reserved.</S.Copyright>
        </S.AddressSection>
      </S.Footer>
    </S.FooterWrapper>
  );
}
