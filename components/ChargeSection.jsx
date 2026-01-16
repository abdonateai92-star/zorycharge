import { useState } from "react";
import ChargeProgress from "./ChargeProgress";
import useCountdown from "./useCountdown";

export default function ChargeSection() {
  const [lastChargeAt, setLastChargeAt] = useState(null);
  const [charging, setCharging] = useState(false);
  const remaining = useCountdown(lastChargeAt);

  return (
    <div className="bg-blue-50 p-6 rounded-xl text-center">
      {!charging && remaining === 0 && (
        <button
          onClick={() => {
            alert("شاهد إعلان قصير للمتابعة");
            setCharging(true);
          }}
          className="w-full py-3 bg-blue-500 text-white rounded-lg font-bold">
          ابدأ الشحن
        </button>
      )}

      {charging && (
        <ChargeProgress onComplete={() => {
          setCharging(false);
          setLastChargeAt(Date.now());
        }} />
      )}

      {!charging && remaining > 0 && (
        <p className="text-blue-600 font-bold">
          انتظر {Math.floor(remaining / 1000)} ثانية
        </p>
      )}
    </div>
  );
}