import React from 'react';
import styled from 'styled-components';
import { theme } from '@/styles/theme';

// Variant 타입
type Variant = 'main' | 'action' | 'link' | 'job';

// VariantStyles 타입 정의
const variantStyles: Record<
  Variant,
  {
    width: string;
    height: string;
    backgroundColor: keyof typeof theme.colors | string;
    color: keyof typeof theme.colors | string;
    border: string;
    padding: string;
    boxShadow: string;
    size: keyof typeof theme.fontSize | string;
    fontWeight?: keyof typeof theme.fontWeight | number;
    transition?: string;
    hoverColor?: keyof typeof theme.colors;
    disabledColor: keyof typeof theme.colors;
  }
> = {
  main: {
    width: 'clamp(200px, 40vw, 300px)',
    height: 'clamp(45px, 6vw, 55px)',
    backgroundColor: 'white',
    color: 'primary',
    border: 'none',
    padding: 'clamp(0.8rem, 2vw, 1.2rem) clamp(1.5rem, 5vw, 4.5rem)',
    boxShadow: '0px 0px 10px rgba(79, 99, 255, 0.4)',
    size: 'xl',
    fontWeight: 'bold',
    transition: 'all 0.3s ease',
    hoverColor: 'primary',
    disabledColor: 'gray300',
  },
  action: {
    width: '50px',
    height: '20px',
    backgroundColor: 'primary',
    color: 'white',
    border: 'none',
    padding: 'clamp(0.5rem, 2vw, 0.75rem) clamp(1rem, 5vw, 1.5rem)',
    boxShadow: '2px 2px 4px rgba(1, 1, 1, 0.4)',
    size: `clamp(${theme.fontSize.xs}, 2.5vw, ${theme.fontSize.ml})`,
    fontWeight: 'medium',
    disabledColor: 'gray300',
  },
  link: {
    width: 'clamp(100px, 40vw, 250px)',
    height: '30px',
    backgroundColor: 'primary',
    color: 'white',
    border: 'none',
    padding: 'clamp(10px, 2vw, 16px) clamp(16px, 5vw, 24px)',
    boxShadow: '2px 2px 4px rgba(1, 1, 1, 0.4)',
    size: `clamp(${theme.fontSize.s}, 1.8vw, ${theme.fontSize.lg})`,
    fontWeight: 'medium',
    disabledColor: 'gray300',
  },
  job: {
    width: 'fit-content',
    height: 'clamp(10px, 1.5vw, 20px)',
    backgroundColor: 'white',
    color: 'black',
    border: 'none',
    padding: '10px 12px',
    boxShadow: '4px 4px 4px rgb(200, 224, 255)',
    size: 'clamp(0.75rem, 1.5vw, 1rem)',
    fontWeight: 'medium',
    transition: 'all 0.3s ease',
    hoverColor: 'primary',
    disabledColor: 'gray300',
  },
};

type ButtonProps = {
  text: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: Variant;
  disabled?: boolean;
  width?: string;
  height?: string;
  color?: keyof typeof theme.colors | string;
  backgroundColor?: keyof typeof theme.colors | string;
  border?: string;
  padding?: string;
  boxShadow?: string;
  size?: keyof typeof theme.fontSize | string;
  fontWeight?: keyof typeof theme.fontWeight | number;
  transition?: string;
  hoverColor?: keyof typeof theme.colors | string;
  disabledColor?: keyof typeof theme.colors | string;
};

const ButtonStyle = styled.button<{
  $width: string;
  $height: string;
  $padding: string;
  $backgroundColor: string;
  $color: string;
  $border: string;
  $boxShadow: string;
  $fontSize: string;
  $fontWeight: number;
  $transition: string;
  $hoverColor?: string;
  $disabledColor: string;
}>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  padding: ${({ $padding }) => $padding};
  background-color: ${({ theme, $backgroundColor }) =>
    theme.colors[$backgroundColor as keyof typeof theme.colors] || $backgroundColor};
  color: ${({ theme, $color }) => theme.colors[$color as keyof typeof theme.colors] || $color};
  border: ${({ $border }) => $border};
  border-radius: 100px;
  box-shadow: ${({ $boxShadow }) => $boxShadow};
  font-size: ${({ $fontSize }) => $fontSize};
  font-weight: ${({ $fontWeight }) => $fontWeight};
  transition: ${({ $transition }) => $transition};

  &:hover:enabled {
    background-color: ${({ theme, $hoverColor, $backgroundColor }) =>
      $hoverColor
        ? theme.colors[$hoverColor as keyof typeof theme.colors] || $hoverColor
        : theme.colors[$backgroundColor as keyof typeof theme.colors] || $backgroundColor};
    color: white;
  }

  &:disabled {
    background-color: ${({ theme, $disabledColor }) =>
      theme.colors[$disabledColor as keyof typeof theme.colors] || $disabledColor};
    color: white;
    cursor: not-allowed;
    box-shadow: none;
  }
`;

export default function Button({
  text,
  onClick,
  variant = 'main',
  disabled = false,
  width,
  height,
  padding,
  backgroundColor,
  color,
  border,
  boxShadow,
  size,
  fontWeight,
  transition,
  hoverColor,
  disabledColor,
}: ButtonProps) {
  const style = variantStyles[variant];

  return (
    <ButtonStyle
      onClick={onClick}
      disabled={disabled}
      $width={width || style.width}
      $height={height || style.height}
      $padding={padding || style.padding}
      $backgroundColor={backgroundColor || style.backgroundColor}
      $color={color || style.color}
      $border={border || style.border}
      $boxShadow={boxShadow || style.boxShadow}
      $fontSize={
        typeof (size || style.size) === 'string' && !(size || style.size in theme.fontSize)
          ? size || style.size
          : theme.fontSize[(size || style.size) as keyof typeof theme.fontSize]
      }
      $fontWeight={
        typeof fontWeight === 'number'
          ? fontWeight
          : fontWeight
            ? theme.fontWeight[fontWeight as keyof typeof theme.fontWeight]
            : theme.fontWeight.medium
      }
      $transition={transition || style.transition || 'all 0.3s ease'}
      $hoverColor={hoverColor || style.hoverColor}
      $disabledColor={disabledColor || style.disabledColor}
    >
      {text}
    </ButtonStyle>
  );
}

// variant 속성 값
// main: 메인 페이지 '지금 시작하기' 버튼
// link: 직업 검사 페이지 - '검사 시작', '결과 보기', 자세히 보기 등 링크 관련 버튼
// action: 직업 검사 페이지 - '다음' 버튼
// job: 직업 결과 페이지 - 각 직업 버튼
// variant만 지정해도 가능할 것 같지만, 혹시라도 스타일을 바꾸려면 각 속성을 props로 넘겨주면 됩니다.

// 사용 예시
{
  /* <Button onClick={() => navigate('/test')} variant="main" text={'지금 시작하기'} /> */
}
