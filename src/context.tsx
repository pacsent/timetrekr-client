import React, { createContext, useContext } from 'react';
import { MonthViewData, YearMonth } from 'types/time';
import { getYearMonth } from 'utils/functions';

interface Props {
  jsonData?: MonthViewData;
  setJsonData: React.Dispatch<React.SetStateAction<MonthViewData | undefined>>;
}

const date = new Date();
export const AppContext = createContext<Props>({
  jsonData: { year: date.getFullYear(), month: date.getMonth() + 1 },
  setJsonData: () => {},
});

export function useAppContext() {
  return useContext(AppContext);
}
