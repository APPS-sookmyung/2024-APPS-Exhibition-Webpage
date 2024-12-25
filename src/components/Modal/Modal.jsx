import { useEffect } from 'react';
import * as S from './Modal.style';

export default function Modal({ member, closeModal }) {
  const QUESTIONS = [
    '자기소개 부탁드립니다!',
    'APPS 활동 중 가장 기억에 남았던 순간은?',
    'APPS 이전과 이후, 나의 변화 이야기를 들려주세요!',
  ];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        e.target.classList.contains('modal-close') ||
        e.target.classList.contains('modal')
      ) {
        closeModal();
        document.body.style.overflow = 'auto';
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [closeModal]);

  return (
    <S.ModalWrapper>
      <S.Modal>
        <S.CloseButton onClick={closeModal}>
          <img src="../../images/icons/x_orange.svg" alt="닫기" />
        </S.CloseButton>
        <S.MemberDetailWrapper>
          <S.MemberCard>
            <S.MemberImage
              src={`/images/memberProfiles/${member.image}`}
              alt={member.name}
            />
            <S.MemberInfoWrapper>
              <S.NameAndPositionWrapper>
                <S.MemberName>{member.name}</S.MemberName>
                <S.MemberPositionInfo>{member.position}</S.MemberPositionInfo>
              </S.NameAndPositionWrapper>
              <S.MemberInfo>{member.title}</S.MemberInfo>
            </S.MemberInfoWrapper>
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
                      <img src="../../images/socials/github.svg" alt="깃허브" />
                    </a>
                  )}
                  {member.snsLinks.githubblog && (
                    <a
                      href={member.snsLinks.githubblog}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="../../images/socials/github.svg"
                        alt="깃허브블로그"
                      />
                    </a>
                  )}
                  {member.snsLinks.linkedin && (
                    <a
                      href={member.snsLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="../../images/socials/linkedin.svg"
                        alt="링크드인"
                      />
                    </a>
                  )}
                  {member.snsLinks.tstory && (
                    <a
                      href={member.snsLinks.tstory}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="../../images/socials/tstory.svg"
                        alt="티스토리"
                      />
                    </a>
                  )}
                  {member.snsLinks.velog && (
                    <a
                      href={member.snsLinks.velog}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src="../../images/socials/velog.svg" alt="벨로그" />
                    </a>
                  )}
                  {member.snsLinks.hashnode && (
                    <a
                      href={member.snsLinks.hashnode}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="../../images/socials/hashnode.svg"
                        alt="해시노드"
                      />
                    </a>
                  )}
                </>
              )}
            </S.SNSSection>
          </S.MemberDetailSection>
        </S.MemberDetailWrapper>
        <S.Divider>
          <img src="../../images/icons/divider.svg" alt="라인" />
        </S.Divider>
        <S.QASection>
          {QUESTIONS.map((question, index) => (
            <S.QuestionWrapper key={index}>
              <S.QuestionLabel>Q{index + 1}</S.QuestionLabel>
              <S.QuestionItem>
                <S.Question>{question}</S.Question>
                <S.Answer>
                  {member.answers[index].split('\n').map((line, lineIndex) => (
                    <p key={lineIndex}>{line}</p>
                  ))}
                </S.Answer>
              </S.QuestionItem>
            </S.QuestionWrapper>
          ))}
        </S.QASection>
      </S.Modal>
    </S.ModalWrapper>
  );
}
