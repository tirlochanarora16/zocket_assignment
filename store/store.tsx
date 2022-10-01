import React, { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

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
  const [sendingData, setSendingData] = useState(false);
  const [showNewCampaign, setShowNewCampaign] = useState(false);

  const router = useRouter();

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

  const createNewCampaign = async () => {
    const product: { _id: string } = products[selectedProduct];
    const campaignStart = new Date(startDate).getTime();
    const campaignEnd = new Date(endDate).getTime();
    try {
      setSendingData(true);

      await axios.post("/api/newCampaign", {
        campaign: product._id,
        dateRange: {
          start: campaignStart,
          end: campaignEnd,
        },
        budget: +campaignBudget,
        location: locationName || locationRadius.toString(),
        platform: campaignGoal,
      });

      setSendingData(false);
      setShowNewCampaign(false);
    } catch (err) {
      console.log(err);
    }
  };

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
        sendingData,
        showNewCampaign,
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
        createNewCampaign,
        setSendingData,
        setShowNewCampaign,
      }}
    >
      {children}
    </storeContext.Provider>
  );
};

export default StoreProvider;
