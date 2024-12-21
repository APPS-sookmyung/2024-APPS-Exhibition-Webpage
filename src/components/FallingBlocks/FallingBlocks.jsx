import * as S from './FallingBlocks.style';
import { useState, useEffect } from 'react';

export default function FallingBlocks({ delay, fromY, toY, time, colors }) {
  const [yPos, setYPos] = useState(fromY);
  const [isFalling, setIsFalling] = useState(false);

  useEffect(() => {
    const startFalling = setTimeout(() => {
      setIsFalling(true);
    }, delay);

    return () => clearTimeout(startFalling);
  }, [delay]);

  useEffect(() => {
    if (!isFalling) return;

    const animateFalling = () => {
      setYPos((prevY) => {
        if (prevY >= toY) {
          setIsFalling(false);
          return toY;
        }
        return prevY + 2;
      });
    };
    const interval = setInterval(animateFalling, time);
    return () => clearInterval(interval);
  }, [isFalling, toY, time]);

  return (
    <S.FallingBlocksLine yPos={yPos}>
      {colors.map((left) => (
        <S.StyledSquares>
          {left.map((c) => (
            <>
              {c === 'square2' ? (
                <S.StyledSquare2></S.StyledSquare2>
              ) : (
                <S.StyledSquare color={c}></S.StyledSquare>
              )}
            </>
          ))}
        </S.StyledSquares>
      ))}
    </S.FallingBlocksLine>
  );
}
