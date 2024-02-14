export const formatNumber = (number: number, locale = 'ru'): string => {
  return new Intl.NumberFormat(locale, { maximumFractionDigits: 20 }).format(number);
};
