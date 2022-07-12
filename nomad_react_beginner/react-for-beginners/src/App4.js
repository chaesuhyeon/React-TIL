import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(()=>{
    fetch("http://api.coinpaprika.com/v1/tickers")
    .then((response) => response.json()) // response를 받아서 response.json을 return
    .then((json) =>{ setCoins(json); // then을 사용하여 이 json을 가지고 배열에 넣어줌
                     setLoading(false);
                    });
  }, []);

  return ( 
  <div>
    <h1>The Coins! { loading ? "" : `(${coins.length})` }</h1>
    {loading ? <strong>Loading...</strong> :
         <select>
         {coins.map((coin) => 
         <option>{coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD</option>)}
       </select>
     }
  </div>
  
  );
}

export default App;
