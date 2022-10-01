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
  const [campaignReadyValue, setCampaignReadyValue] = useState(0);

  return (
    <storeContext.Provider
      value={{
        locationType,
        campaignReadyValue,
        setLocationType,
        setCampaignReadyValue,
      }}
    >
      {children}
    </storeContext.Provider>
  );
};

export default StoreProvider;
