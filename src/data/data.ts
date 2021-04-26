export const vacationMonths: number[] = [5, 6, 7, 8, 9];
export const vacationYear: number = 2021;
export const accumulatedVacationHours = 160;
export const vacationDayInHours = 7.7;
export const lastUpdatedDate = '2021-04-18T00:00:00.000Z';
export const vacationHolidayDates: string[] = [
  '2021-05-01T00:00:00.000Z',
  '2021-05-13T00:00:00.000Z',
  '2021-05-24T00:00:00.000Z',
  '2021-06-03T00:00:00.000Z',
  '2021-08-15T00:00:00.000Z',
];
export const vacationDayDates: string[] = [
  `2021-05-07T00:00:00.000Z`,
  `2021-05-14T00:00:00.000Z`,
  `2021-05-25T00:00:00.000Z`,
  `2021-06-04T00:00:00.000Z`,
  `2021-06-07T00:00:00.000Z`,
  `2021-06-08T00:00:00.000Z`,
  `2021-06-09T00:00:00.000Z`,
  `2021-06-10T00:00:00.000Z`,
  `2021-06-11T00:00:00.000Z`,
  `2021-06-14T00:00:00.000Z`,
  `2021-06-25T00:00:00.000Z`,
  `2021-07-02T00:00:00.000Z`,
  `2021-07-09T00:00:00.000Z`,
  `2021-07-16T00:00:00.000Z`,
  `2021-07-19T00:00:00.000Z`,
  `2021-07-20T00:00:00.000Z`,
  `2021-07-21T00:00:00.000Z`,
  `2021-07-22T00:00:00.000Z`,
  `2021-07-23T00:00:00.000Z`,
  `2021-07-26T00:00:00.000Z`,
  `2021-08-02T00:00:00.000Z`,
  `2021-08-13T00:00:00.000Z`,
  `2021-08-16T00:00:00.000Z`,
  `2021-08-27T00:00:00.000Z`,
  `2021-09-03T00:00:00.000Z`,
];
// TODO: check dates
export const exportCalendarLink = `https://calendar.google.com/calendar/u/1?cid=cGdjZzVudTRqbWw0aHI2amtybmJkb3BrajRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ`;

export const smartLinks: ISmartLink[] = [
  {
    linkSrc: 'https://www.allinahealth.org/healthysetgo/thrive/importance-of-taking-vacation#:~:text=A%20number%20of%20studies%20have,more%20motivation%20to%20achieve%20goals.',
    linkTitle: 'Importance of taking vacation',
    attribution: 'allinahealth.org',
    author: 'Shannon Torberg, PsyD, LP'
  },
  {
    linkSrc: 'https://medium.com/@openwork/why-employers-are-rushing-to-offer-unlimited-vacation-3e834965c5a5',
    linkTitle: 'Why Employers are Rushing to Offer Unlimited Vacation',
    attribution: 'medium.com',
    author: 'openwork'
  },
  {
    linkSrc: 'https://www.apadivisions.org/division-28/publications/newsletters/psychopharmacology/2017/07/vacation',
    linkTitle: 'Four reasons to take a vacation',
    attribution: 'apadivisions.org',
    author: 'Andrea Robinson, PhD'
  },
  {
    linkSrc: 'https://www.verywellmind.com/take-vacations-for-stress-relief-overall-health-3145274',
    linkTitle: 'How Vacations Can Affect Your Stress Levels',
    attribution: 'verywellmind.com',
    author: 'Elizabeth Scott, MS'
  },
  {
    linkSrc: 'https://hbr.org/2016/07/the-data-driven-case-for-vacation',
    linkTitle: 'The Data-Driven Case for Vacation',
    attribution: 'hbr.org',
    author: 'Shawn Achor and Michelle Gielan'
  }
];

export interface ISmartLink {
  linkTitle: string;
  linkSrc: string;
  attribution: string;
  author: string;
}