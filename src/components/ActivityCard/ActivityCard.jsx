import { useState } from 'react';
import * as S from './ActivityCard.style';

export default function ActivityCard({
  activityName,
  activityIntro,
  activityImg,
}) {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const linearGradient =
    'linear-gradient(180deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.00) 27.33%), ';

  return (
    <S.ActivityCard
      onMouseOut={handleMouseOut}
      onMouseOver={handleMouseOver}
      style={{
        backgroundImage: linearGradient + `url(${activityImg})`,
      }}
    >
      <S.ActivityBackBlur>
        <S.ActivityTextWrapper>
          <S.ActivityNameWrapper>
            <S.ActivityName>{activityName}</S.ActivityName>
          </S.ActivityNameWrapper>
          <S.ActivityIntroWrapper>
            {isHovering ? (
              <S.ActivityIntro>{activityIntro}</S.ActivityIntro>
            ) : (
              ''
            )}
          </S.ActivityIntroWrapper>
        </S.ActivityTextWrapper>
      </S.ActivityBackBlur>
    </S.ActivityCard>
  );
}
