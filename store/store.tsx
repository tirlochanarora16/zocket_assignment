import React, { useContext, useState, useEffect } from "react";

interface IProps {
  children: React.ReactNode;
}

const storeContext = React.createContext({});

export const useStore = () => {
  return useContext(storeContext);
};

const StoreProvider: React.FC<IProps> = ({ children }) => {
  const [goal, setGoal] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(0);
  const [products, setProducts] = useState([]);
  const [campaignGoal, setCampaignGoal] = useState("Google");
  const [locationType, setLocationType] = useState<string>("location");
  const [campaignReadyValue, setCampaignReadyValue] = useState(0);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [campaignBudget, setCampaignBudget] = useState(100);
  const [locationName, setLocationName] = useState("");
  const [locationRadius, setLocationRadius] = useState(0);

  useEffect(() => {
    if (goal == 0 || goal == 6 || goal == 8) {
      setCampaignGoal("Google");
    } else if (goal == 1 || goal == 2 || goal == 3) {
      setCampaignGoal("Facebook");
    } else if (goal == 4 || goal == 7) {
      setCampaignGoal("Youtube");
    } else {
      setCampaignGoal("Instagram");
    }
  }, [goal]);

  return (
    <storeContext.Provider
      value={{
        locationType,
        campaignReadyValue,
        goal,
        selectedProduct,
        products,
        startDate,
        endDate,
        campaignBudget,
        locationName,
        locationRadius,
        setLocationType,
        setCampaignReadyValue,
        setGoal,
        setSelectedProduct,
        setProducts,
        setStartDate,
        setEndDate,
        setCampaignBudget,
        setLocationName,
        setLocationRadius,
      }}
    >
      {children}
    </storeContext.Provider>
  );
};

export default StoreProvider;
