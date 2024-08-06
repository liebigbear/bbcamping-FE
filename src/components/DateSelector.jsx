// src/components/DateSelector.js
import React, { useState, useEffect } from 'react';
import '../styles/components/DateSelector.css';

const months = [
  '1월', '2월', '3월', '4월', '5월', '6월',
  '7월', '8월', '9월', '10월', '11월', '12월'
];

// 각 월의 일수를 반환하는 함수
const getDaysInMonth = (month) => {
  switch (month) {
    case 2: // February
      return 29; // 윤년을 고려하지 않음
    case 4: case 6: case 9: case 11: // April, June, September, November
      return 30;
    default:
      return 31;
  }
};

function DateSelector({ onDateSelect }) {
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null);
  const [days, setDays] = useState([]);

  useEffect(() => {
    if (selectedMonth !== null) {
      // 선택된 월에 따라 일수를 계산하여 days 상태를 업데이트
      const daysInMonth = getDaysInMonth(selectedMonth); 
      setDays(Array.from({ length: daysInMonth }, (_, i) => i + 1));

      // 월이 변경될 때마다 기본적으로 1일을 선택하지 않음
      setSelectedDay(null);
    }
  }, [selectedMonth]);

  // 날짜 선택 핸들러
  const handleDateSelect = (day) => {
    setSelectedDay(day);
    onDateSelect(selectedMonth, day); // 부모 컴포넌트로 선택한 날짜 전달
  };

  return (
    <div className="date-picker">
      <div className="wheel">
        <ul className="list">
          {months.map((month, index) => (
            <li
              key={month}
              className={index + 1 === selectedMonth ? 'selected' : ''}
              onClick={() => setSelectedMonth(index + 1)} // 인덱스에 +1
            >
              {month}
            </li>
          ))}
        </ul>
      </div>

      <div className="wheel">
        <ul className="list">
          {days.map(day => (
            <li
              key={day}
              className={day === selectedDay ? 'selected' : ''}
              onClick={() => handleDateSelect(day)}
            >
              {day}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DateSelector;
