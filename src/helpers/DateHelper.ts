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
        dayName: momentOfDay.format('dddd').toLowerCase(),
        isHoliday: this.isHoliday(momentOfDay),
        isVacationDay: this.isVacationDay(momentOfDay),
        isWeekend: this.isWeekend(momentOfDay),
        isWorkDay: this.isWorkDay(momentOfDay)
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

  isWeekend(date: Moment.Moment): boolean {
    return date.format('dddd') === 'Samstag' || date.format('dddd') === 'Sonntag';
  }

  isWorkDay(date: Moment.Moment): boolean {
    return !this.isWeekend(date) && !this.isHoliday(date) && !this.isVacationDay(date);
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

  getVacationDayCount(month: number, year: number): number {
    const daysOfMonth = this.getMonth(month, year);
    return daysOfMonth.filter(day => day.isVacationDay).length;
  }

  getWorkDayCount(month: number, year: number): number {
    const daysOfMonth = this.getMonth(month, year);
    return daysOfMonth.filter(day => day.isWorkDay).length;
  }

  getOtherCount(month: number, year: number): number {
    const daysOfMonth = this.getMonth(month, year);
    const workDays = this.getWorkDayCount(month, year);
    const vacationDays = this.getVacationDayCount(month, year);
    return daysOfMonth.length - workDays - vacationDays;
  }
}

export interface IDaysOfMonth {
  momentOfDay: Moment.Moment;
  dayName: string;
  day: number;
  isHoliday: boolean;
  isVacationDay: boolean;
  isWeekend: boolean;
  isWorkDay: boolean;
}
