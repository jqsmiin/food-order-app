import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function useAuthStatus() {
  const { user } = useSelector((state) => state.auth);
  const [loggedIn, setLoggedIn] = useState(false);
  const [checkingStatus, setCheckingStatus] = useState(true);

  useEffect(() => {
    if (user !== null) {
      setLoggedIn(true);
    }
    setCheckingStatus(false);
  }, [user]);

  return { loggedIn, checkingStatus };
}

export default useAuthStatus;
