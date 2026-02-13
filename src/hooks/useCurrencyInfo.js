import { useEffect, useState } from "react";
import axios from "axios";

export default function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  const [options, setOptions] = useState([]);
  useEffect(() => {
    const fetchCurrencyInfo = async () => {
      const res = await axios.get(
        `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`,
      );
      setData(res.data[currency]);
      setOptions(Object.keys(res.data[currency]));
    };

    fetchCurrencyInfo();
  }, [currency]);
  return [data, options];
}
