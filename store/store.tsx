import React, { useContext, useState } from "react";

interface IProps {
  children: React.ReactNode;
}

const storeContext = React.createContext({});

export const useStore = () => {
  return useContext(storeContext);
};

const StoreProvider: React.FC<IProps> = ({ children }) => {
  const [locationType, setLocationType] = useState<string>("location");

  return (
    <storeContext.Provider value={{ locationType, setLocationType }}>
      {children}
    </storeContext.Provider>
  );
};

export default StoreProvider;
