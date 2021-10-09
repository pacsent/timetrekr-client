import React, { createContext, useContext } from 'react';
import { MonthViewData } from 'types/time';

interface Props {
  jsonData?: MonthViewData;
  setJsonData: React.Dispatch<React.SetStateAction<MonthViewData | undefined>>;
}

export const AppContext = createContext<Props>({
  jsonData: {},
  setJsonData: () => {},
});

export function useAppContext() {
  return useContext(AppContext);
}
