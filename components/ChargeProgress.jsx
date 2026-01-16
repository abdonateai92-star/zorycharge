import { useEffect, useState } from "react";

export default function ChargeProgress({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(interval);
          onComplete();
          return 100;
        }
        return p + 1;
      });
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center">
      <p className="text-3xl font-bold text-blue-600">{progress}%</p>
      <p className="text-blue-500">جاري الشحن...</p>
    </div>
  );
}