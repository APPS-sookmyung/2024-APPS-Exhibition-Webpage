import { MEMBER_FEEDBACK } from '../../database/memberFeedback';
import * as S from './MemberFeedbackCards.style';

export default function MemberFeedbackCard() {
  return (
    <S.GridWrapper>
      {MEMBER_FEEDBACK.map((feedback, index) => (
        <S.CardWrapper key={index}>
          <S.BalloonCard>
            {feedback.text}
            <S.BalloonTail />
          </S.BalloonCard>
          <S.Character>
            <img src={feedback.image} alt="캐릭터 이미지" />
          </S.Character>
        </S.CardWrapper>
      ))}
    </S.GridWrapper>
  );
}
