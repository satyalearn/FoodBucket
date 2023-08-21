import { useEffect, useState } from "react";

const UseOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(navigator.onLine);

  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });

    window.addEventListener("online", (e) => {
      setOnlineStatus(true);
    });
  }, []);

  return onlineStatus;
};

export default UseOnlineStatus;
