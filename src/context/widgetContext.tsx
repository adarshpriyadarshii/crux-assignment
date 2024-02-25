import React, { createContext, useContext, useState } from "react";

export type Widget = {
  color: number;
  type: number;
  graphType: number;
  name: string;
};

type DataContextType = {
  widgets: Widget[];
  setWidgets: React.Dispatch<React.SetStateAction<Widget[]>>;
};

type DataProviderProps = {
  children: React.ReactNode;
};

const DataContext = createContext<DataContextType>({
  widgets: [],
  setWidgets: () => {},
});

export const DataProvider = ({ children }: DataProviderProps) => {
  const [widgets, setWidgets] = useState<Widget[]>([]);

  return (
    <DataContext.Provider value={{ widgets, setWidgets }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
