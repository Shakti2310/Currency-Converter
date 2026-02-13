import { useState } from "react";

export default function InputSection({
  isOutput,
  displayAmount,
  setDisplayAmount,
  bgColor,
  txtColor,
  borderColor,
  dropDownImg,
  setSelectedCurrency,
  selectedCurrency,
  currencyOptions,
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-[60%] w-full gap-3 justify-center items-center">
      <input
        className={`text-5xl caret-transparent overflow-scroll w-[45%] font-outfit font-light border-b-3 ${borderColor} outline-none`}
        type="number"
        disabled={isOutput}
        value={displayAmount}
        onChange={(e) => {
          setDisplayAmount(e.target.value);
        }}
      />

      <div
        className={`${bgColor} rounded-xs p-0.5 pr-2 cursor-pointer max-h-25 w-[27%]
                    flex flex-col text-sm
                    items-end min-w-18`}
      >
        <button
          className="flex cursor-pointer "
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <div className="pt-1">
            <img
              className="w-3.5"
              src={`/${dropDownImg}-drop-down.png`}
            />
          </div>
          <span className="w-12 text-end">
            {selectedCurrency.toUpperCase()}
          </span>
        </button>

        {isOpen && (
          <div className="flex overflow-y-scroll overscroll-contain flex-col items-end [scrollbar-width:none]">
            {currencyOptions.map((value) => (
              <div
                key={value}
                className={`${txtColor} uppercase`}
                onClick={() => {
                  setSelectedCurrency(value);
                  setIsOpen((prev) => !prev);
                }}
              >
                {value}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
