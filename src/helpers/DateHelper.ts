import { vacationHolidayDates, vacationDayDates } from '@/data/data';
import Moment from 'moment';

export class DateHelper {
  getMonth(month: number, year: number): IDaysOfMonth[] {
    const daysOfMonth: IDaysOfMonth[] = [];
    const daysInMonth = Moment(`${month}-${year}`, 'M-YYYY').daysInMonth();
    for(let i = 1; i < daysInMonth + 1; i++) {
      const momentOfDay = Moment(`${i}-${month}-${year}`, 'D-M-YYYY');
      daysOfMonth.push({
        day: i,
        momentOfDay,
        dayName: momentOfDay.format('dddd').toLowerCase()
      });
    }
    return daysOfMonth;
  }

  isHoliday(date: Moment.Moment): boolean {
    return vacationHolidayDates.some(holiday => {
      return date.isSame(holiday, 'day');
    });
  }

  isVacationDay(date: Moment.Moment): boolean {
    return vacationDayDates.some(vacationDay => {
      return date.isSame(vacationDay, 'day');
    });
  }

  getMonthName(month: number): string {
    return Moment(`${month}`, 'M').format('MMMM');
  }

  formatDate(date: string, format: string): string {
    return Moment(date).format(format);
  }

  formatHours(hours: number): string {
    return hours.toString().replace('.', ',');
  }
}

export interface IDaysOfMonth {
  momentOfDay: Moment.Moment;
  dayName: string;
  day: number;
}