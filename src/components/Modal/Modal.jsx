import * as S from './Modal.style';
import { ReactComponent as GitHubIcon } from '../../images/socials/github.svg';
import { ReactComponent as LinkedInIcon } from '../../images/socials/linkedin.svg';
import { ReactComponent as TstoryIcon } from '../../images/socials/tstory.svg';
import { ReactComponent as VelogIcon } from '../../images/socials/velog.svg';
import { ReactComponent as Divider } from '../../images/icons/divider.svg';
import { ReactComponent as CloseIcon } from '../../images/icons/x_orange.svg';

export default function Modal({ member, closeModal }) {
  const questions = [
    '자기소개 부탁드립니다!',
    'APPS 활동 중 가장 기억에 남았던 순간은?',
    'APPS 이전과 이후, 나의 변화 이야기를 들려주세요!',
  ];

  return (
    <S.ModalWrapper>
      <S.Modal>
        <S.MemberDetailWrapper>
          <S.MemberCard>
            <S.MemberImage
              src={require(`../../images/memberProfiles/${member.image}`)}
              alt={member.name}
            />
            <S.InfoWrapper>
              <S.NameAndPositionWrapper>
                <S.MemberName>{member.name}</S.MemberName>
                <S.MemberPositionInfo>{member.position}</S.MemberPositionInfo>
              </S.NameAndPositionWrapper>
              <S.MemberInfo>{member.title}</S.MemberInfo>
            </S.InfoWrapper>
          </S.MemberCard>

          <S.MemberDetailSection>
            <S.TechStackSection>
              {member.techStack?.map((tech, index) => (
                <S.TechItem key={index}>{tech}</S.TechItem>
              ))}
            </S.TechStackSection>

            <S.SNSSection>
              {member.snsLinks && (
                <>
                  {member.snsLinks.github && (
                    <a
                      href={member.snsLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GitHubIcon />
                    </a>
                  )}
                  {member.snsLinks.linkedin && (
                    <a
                      href={member.snsLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LinkedInIcon />
                    </a>
                  )}
                  {member.snsLinks.tstory && (
                    <a
                      href={member.snsLinks.tstory}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <TstoryIcon />
                    </a>
                  )}
                  {member.snsLinks.velog && (
                    <a
                      href={member.snsLinks.velog}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <VelogIcon />
                    </a>
                  )}
                </>
              )}
            </S.SNSSection>
          </S.MemberDetailSection>
        </S.MemberDetailWrapper>

        <Divider />

        <S.QASection>
          {questions.map((question, index) => (
            <S.QuestionWrapper key={index}>
              <S.QuestionLabel>Q{index + 1}</S.QuestionLabel>
              <S.Question>{question}</S.Question>
              <S.Answer>{member.answers[index]}</S.Answer>
            </S.QuestionWrapper>
          ))}
        </S.QASection>

        <S.CloseButton onClick={closeModal}>
          <CloseIcon />
        </S.CloseButton>
      </S.Modal>
    </S.ModalWrapper>
  );
}
