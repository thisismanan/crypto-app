import "../App.css";

interface CoinProp {
  data: {
    id: string;
    name: string;
    price: number;
    symbol: string;
    icon: string;
  }[];
}

const Coin = (props: CoinProp) => {
  //   console.log("this from Coin ", props.data);
  return (
    <>
      {props.data.map((item, index) => (
        <div key={index} className="coin-container">
          <div className="item-container">
            <div>
              <img src={item.icon} alt="Item Icon" />
            </div>
            <div>
              <p>{item.name}</p>
            </div>
            <div>
              <p>{item.price}</p>
            </div>
            <div className="bottom-line"></div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Coin;
