import React, { createContext, useContext } from 'react';
import { MonthData } from 'types/time';

interface Props {
  monthData?: MonthData;
  setMonthData: React.Dispatch<React.SetStateAction<MonthData | undefined>>;
}
const date = new Date();
export const MonthContext = createContext<Props>({
  monthData: { year: date.getFullYear(), month: date.getMonth() + 1 },
  setMonthData: () => {},
});

export function useMonthContext() {
  return useContext(MonthContext);
}
