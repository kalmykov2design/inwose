import React from "react";

interface WeekCalendarProps {

}

function daysInMonth(month: number, year: number) {
  return new Date(year, month, 0).getDate();
}

export function WeekCalendar(props: WeekCalendarProps) {
  const date = new Date()
  const today = date.getDate()
  const weekDay = date.getDay()
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const days: number[] = []

  console.log(today);

  const firstDay = today - weekDay + 1;
  const lastDay = today + (7 - weekDay);

  for (let i = firstDay; i <= lastDay; i++) {
    // Добавляем дни предыдущего месяца
    if (i < 1) {
      days.push(daysInMonth(month - 1, year) + i);
    }
    // Добавляем дни следующего месяца
    else if (i > daysInMonth(month, year)) {
      days.push(i - daysInMonth(month, year));
    }
    // Добавляем дни текущего месяца
    else {
      days.push(i);
    }
  }

  return (
    <div className="container mx-[auto] pt-4">
      <div className="flex items-center justify-between">
        {days.map(day => (
          <span 
            className={`${day === today ? "rounded-full bg-red-500 text-white" : ""} week-calendar__item`} 
            key={`day-${day}`}>
              {day}
            </span>
        ))}
      </div>
    </div>
  )
};