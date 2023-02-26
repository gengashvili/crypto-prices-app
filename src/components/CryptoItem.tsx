import { DataType } from "./CryptoItemsList";

function CryptoItem({ ...crypto }: DataType) {
  return (
    <tr>
      <td>{crypto.market_cap_rank}</td>
      <td className="tr">
        <img src={crypto.image} alt="crypto logo" />
        <b>{crypto.name} </b>
        <span>{crypto.symbol.toUpperCase()}</span>
      </td>
      <td>
        $
        {crypto.current_price >= 1
          ? crypto.current_price.toFixed(2)
          : crypto.current_price}
      </td>
      <td
        className={
          crypto.price_change_percentage_24h >= 0 ? "positive" : "negative"
        }
      >
        {crypto.price_change_percentage_24h.toFixed(1)}%
      </td>
      <td>${crypto.total_volume.toLocaleString()}</td>
      <td>${crypto.market_cap.toLocaleString()}</td>
      <td
        className={
          crypto.market_cap_change_percentage_24h >= 0 ? "positive" : "negative"
        }
      >
        {crypto.market_cap_change_percentage_24h.toFixed(1)}%
      </td>
    </tr>
  );
}
export default CryptoItem;
