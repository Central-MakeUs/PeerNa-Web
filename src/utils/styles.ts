export const getRgbaColorWithOpacity = (color: string, opacity: number) => {
  // color를 rgba 형태로 변환
  const rgbColor = [
    parseInt(color.slice(1, 3), 16),
    parseInt(color.slice(3, 5), 16),
    parseInt(color.slice(5, 7), 16),
  ];

  // 최종 스타일 객체 반환, tailwindcss에서는 rgba 사용 불가
  return {
    backgroundColor: `rgba(${rgbColor.join(', ')}, ${opacity})`,
  };
};
