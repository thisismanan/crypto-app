import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import Coin from '../components/Coin'

const Coins = () => {
  const [coins, setCoins] = useState([]);

  const fetchData = useCallback(async()=> {
    const data = await axios.get('https://api.coinstats.app/public/v1/coins?skip=0');
    setCoins(data.data.coins)
  }, [])

  useEffect(() => {
    fetchData()
  }, []);

  return <>
  <Coin data={coins}/>
  </>;
};

export default Coins;
