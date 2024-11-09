import React, { useState } from 'react';
import * as S from '../pages/AboutAppsPage/AboutAppsPage.style';

export default function ActiveCard({ activeName, activeIntro, activeImg }) {
  const [isHovering, setisHovering] = useState(false);

  const handleMouseOver = () => {
    setisHovering(true);
  };

  const handleMouseOut = () => {
    setisHovering(false);
  };

  const linearGradient =
    'linear-gradient(180deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.00) 27.33%), ';

  return (
    <S.ActiveCard
      onMouseOut={handleMouseOut}
      onMouseOver={handleMouseOver}
      style={{
        backgroundImage: linearGradient + `url(${activeImg})`,
      }}
    >
      <S.ActiveTextWrapper>
        <S.ActiveName>{activeName}</S.ActiveName>
        <S.ActiveIntroWrapper>
          {isHovering ? <S.ActiveIntro>{activeIntro}</S.ActiveIntro> : ''}
        </S.ActiveIntroWrapper>
      </S.ActiveTextWrapper>
      {isHovering ? <S.ActiveBackBlur></S.ActiveBackBlur> : ''}
    </S.ActiveCard>
  );
}
