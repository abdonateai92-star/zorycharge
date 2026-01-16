import { useEffect, useState } from "react";
const DAY = 86400000;

export default function useCountdown(lastChargeAt) {
  const [remaining, setRemaining] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!lastChargeAt) return setRemaining(0);
      const diff = DAY - (Date.now() - lastChargeAt);
      setRemaining(diff > 0 ? diff : 0);
    }, 1000);
    return () => clearInterval(timer);
  }, [lastChargeAt]);

  return remaining;
}