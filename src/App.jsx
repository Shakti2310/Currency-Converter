import React, { useEffect, useState } from "react";
import InputSection from "./components/inputSection";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [currencyData, currencyOptions] = useCurrencyInfo(from);
  const [amount, setAmount] = useState("");
  const currentDate = new Date().toLocaleDateString("en-US", {year:"numeric", month:"short", day:"2-digit"});

  const convertedAmount =
    amount === "" || !currencyData?.[to]
      ? ""
      : (Number(amount) * currencyData[to]).toFixed(1);

  const swapCurrency = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
  };

  return (
    <>
      <div className="h-screen bg-linear-to-br -tracking-tighter from-pink-300 to-sky-400 flex justify-center items-center text-white font-ubuntu">
        <div className="h-[65%] relative max-w-xs rounded-md overflow-hidden shadow-2xl">
          <div className="h-[50%] p-2 bg-linear-to-bl from-red-500 via-red-400 to-red-300">
            <div className="h-[40%]">
              <div className="flex justify-between gap-10">
                <div className="text-[10px] pl-2 text-start opacity-80">
                  {currentDate}
                </div>
                <img
                  className="w-6 cursor-pointer inline-block"
                  src="./src/assets/menu.png"
                />
              </div>
              <h2 className="text-[24px] font-medium pt-2 text-center">
                Currency
              </h2>
            </div>
            <InputSection
              isOutput={false}
              displayAmount={amount}
              setDisplayAmount={setAmount}
              bgColor={"bg-white/20"}
              txtColor={"text-white/50"}
              dropDownImg={"white"}
              borderColor={"border-white"}
              selectedCurrency={from}
              setSelectedCurrency={setFrom}
              currencyOptions={currencyOptions}
            />
          </div>
          <div
            className="size-10 flex justify-center items-center rounded-full bg-white absolute top-55 cursor-pointer shadow-xl/50 shadow-slate-500 right-8 "
            onClick={swapCurrency}
          >
            <img className="w-6 hover:animate-spinOnce" src="./src/assets/swap.png" />
          </div>
          <div className="h-[50%] pb-10 bg-white text-red-400 flex justify-center items-center">
            <InputSection
              isOutput={true}
              displayAmount={convertedAmount}
              setDisplayAmount={() => {}}
              bgColor={"bg-red-600/20"}
              txtColor={"text-red-400/50"}
              dropDownImg={"red"}
              borderColor={"border-red-400"}
              selectedCurrency={to}
              setSelectedCurrency={setTo}
              currencyOptions={currencyOptions}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
