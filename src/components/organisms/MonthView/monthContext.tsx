import React, { createContext, useContext } from 'react';
import { MonthViewData } from 'types/time';

interface Props {
  monthData?: MonthViewData;
  setMonthData: React.Dispatch<React.SetStateAction<MonthViewData | undefined>>;
}
const date = new Date();
export const MonthContext = createContext<Props>({
  monthData: { year: date.getFullYear(), month: date.getMonth() + 1 },
  setMonthData: () => {},
});

export function useMonthContext() {
  return useContext(MonthContext);
}
