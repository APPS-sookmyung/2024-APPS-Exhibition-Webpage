import { MEMBER_FEEDBACK } from '../../database';
import * as S from './MemberFeedbackCardList.style';

export default function MemberFeedbackCardList() {
  return (
    <S.MemberFeedbackCardList>
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
    </S.MemberFeedbackCardList>
  );
}
