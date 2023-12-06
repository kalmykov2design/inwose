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

  let count = 0;
  for (let i = today - weekDay + 7; i > today - weekDay; i--) {
    if (i < 1) {
      days.push(daysInMonth(month, year) - count)
      count++
    } else days.push(i)
  }
  console.log(days);
  days.reverse()

  return (
    <div className="container mx-[auto]">
      <div className="flex items-center justify-between">
        {days.map(day => (
          <span key={`day-${day}`}>{day}</span>
        ))}
      </div>
    </div>
  )
};