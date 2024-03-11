import InstagramContext from "./InstagramContext";
import { useState } from "react";

const InstagramContextProvider = ({ children }) => {
  const [totalLikes, setTotalLikes] = useState(0);
  const incrementTotalLikes = () => {
    setTotalLikes((totalLikes) => totalLikes + 1);
  }

  const contextValues = { totalLikes, incrementTotalLikes };

  return (
    <InstagramContext.Provider value={contextValues} >
      {children}
    </InstagramContext.Provider>
  )
}

export default InstagramContextProvider;