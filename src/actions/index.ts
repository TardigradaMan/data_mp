
/**
 * Generates mock data for a given number of days and rate.
 * @param days - The number of days for which to generate data.
 * @param rate - The rate at which to generate random data.
 * @returns A promise containing the generated data.
 */
export const getMockData = (days= 15, rate = 1000) => {
  const oneDay = 24 * 3600 * 1000;
  let startDay = Number(new Date()) - oneDay * days;
  const date: Array<string> = [];
  const data: Array<number> = [];



  for (let i = 1; i < days; i++) {
    const now = new Date(startDay += oneDay);
    const formatDate = String(now.getDate()).padStart(2, '0');
    const formatMonth = String(now.getMonth() + 1).padStart(2, '0');
    date.push([  formatDate, formatMonth].join('.'));
    data.push(Math.round((Math.random() * rate)));
  }

  return new Promise<{data: ACCOUNT.ChartDay, error?: Error}>((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.3) {
        reject(new Error('Fake Error.Failed to generate mock data'));
      }

      resolve({
        data: {
          date,
          data
        }
      });
      }, 2000)
  })
}

export const getMockDataByMonth = (monthsCount = 4, rate = 10000) => {
  const data: Array<number> = [];
  const months = ['Ноябрь', 'Декабрь', 'Январь', 'Февраль', ]

  for (let i = 0; i < monthsCount; i++) {
    data.push(Math.round((Math.random() * rate)));
  }

  return new Promise<{data: ACCOUNT.ChartDay}>((resolve) => {
    setTimeout(() => {
      resolve({
        data: {
          date: [...months],
          data
        }
      })    }, 2000)
  })}
