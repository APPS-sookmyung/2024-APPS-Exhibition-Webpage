import React, { useState, useEffect } from 'react';
import * as S from './ReviewCard.style';
import DeveloperCard from '../DeveloperCard';

export default function ReviewCard({
  index,
  image,
  name,
  part,
  position,
  isLeader,
  review,
}) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 300);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMobile ? (
    // 화면이 480px 이하일 때의 렌더링
    <S.ReviewContainer>
      <S.ReviewBox part={part}>
        <DeveloperCard
          index={index}
          image={image}
          name={name}
          part={part}
          position={position}
        />
        <p>{review}</p>
      </S.ReviewBox>
    </S.ReviewContainer>
  ) : (
    // 화면이 480px 초과일 때의 렌더링
    <S.ReviewContainer>
      <DeveloperCard
        index={index}
        image={image}
        name={name}
        part={part}
        position={position}
      />
      <S.ReviewBox part={part}>
        <p>{review}</p>
      </S.ReviewBox>
    </S.ReviewContainer>
  );
}
