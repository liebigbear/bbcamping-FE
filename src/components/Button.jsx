// src/components/Buttons.js

export function RegionBtn({ name, onClick, active }) {
  const commonStyle = {
    width: '100px',
    height: '40px',
    borderRadius: '15px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  };

  // 상태에 따른 스타일
  const style = active
    ? {
        background: '#2F3267',
        color: 'white',
        border: 'none',
        fontWeight: 700,
      }
    : {
        background: '#F6F6F6',
        color: '#BCBCBC',
        border: 'none',
        fontWeight: 400,
      };

  // Object.assign()을 사용하여 스타일 객체 병합
  return (
    <button style={{ ...commonStyle, ...style }} onClick={onClick}>
      {name}
    </button>
  );
}

export function SubmitBtn({ onClick, active }) {
  const commonStyle = {
    width: '250px',
    height: '60px',
    borderRadius: '20px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontSize: '18px'
  };

  // 상태에 따른 스타일
  const style = active
    ? {
        background: '#2F3267',
        color: 'white',
        border: 'none',
        fontWeight: 700,
      }
    : {
        background: '#E0E0E0',
        color: '#9E9E9E',
        border: 'none',
        fontWeight: 400,
        cursor: 'not-allowed',
      };

  return (
    <button
      style={{ ...commonStyle, ...style }}
      onClick={onClick}
      disabled={!active} // active가 false일 경우 비활성화
    >
      캠핑장 보러가기
    </button>
  );
}
