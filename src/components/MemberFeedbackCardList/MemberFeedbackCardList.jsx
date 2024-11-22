import { MEMBER_FEEDBACK, MEMBER_FEEDBACK_CHARACTER } from '../../database';
import * as S from './MemberFeedbackCardList.style';

export default function MemberFeedbackCardList() {
  return (
    <S.MemberFeedbackCardList>
      {MEMBER_FEEDBACK.map((feedback, index) => (
        <S.CardWrapper key={index}>
          <S.BalloonCard>
            <S.BalloonCardContentBody>
              <S.BalloonCardContent>{feedback.reviewText}</S.BalloonCardContent>
              <S.BalloonCardReviewMember>
                {feedback.reviewMember}
              </S.BalloonCardReviewMember>
            </S.BalloonCardContentBody>
            <S.BalloonTail />
          </S.BalloonCard>

          <S.Character>
            <img
              src={MEMBER_FEEDBACK_CHARACTER[index]?.image}
              alt="캐릭터 이미지"
            />
          </S.Character>
        </S.CardWrapper>
      ))}
    </S.MemberFeedbackCardList>
  );
}
