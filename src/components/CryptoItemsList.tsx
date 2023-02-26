import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CryptoItem from "./CryptoItem";
// import {handleSortClick} from './HandleClicksFunctions'

type CryptoItemsListProps = {
  darkMode: boolean;
};
export type DataType = {
  ath: number;
  ath_change_percentage: number;
  ath_date: string;
  atl: number;
  atl_change_percentage: number;
  atl_date: string;
  circulating_supply: number;
  current_price: number;
  fully_diluted_valuation: number;
  high_24h: number;
  id: string;
  image: string;
  last_updated: string;
  low_24h: number;
  market_cap: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  market_cap_rank: number;
  max_supply: number;
  name: string;
  price_change_24h: number;
  price_change_percentage_24h: number;
  roi: null;
  symbol: string;
  total_supply: number;
  total_volume: number;
};

function CryptoItemsList({ darkMode }: CryptoItemsListProps) {
  const [data, setData] = useState<DataType[]>([]);
  const [sortBy, setSortBy] = useState("up");

  useEffect(() => {
    const API = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`;
    axios
      .get(API)
      .then((resnonse) => setData(resnonse.data))
      .catch((error) => console.log(error));
  }, []);

  const handleIdClick = () => {
    data.sort((a, b) => {
      if (sortBy === "up") {
        return a.market_cap_rank - b.market_cap_rank;
      } else {
        return b.market_cap_rank - a.market_cap_rank;
      }
    });
    setSortBy(sortBy === "up" ? "down" : "up");
  };
  const handlePriceClick = () => {
    data.sort((a, b) => {
      if (sortBy === "up") {
        return a.current_price - b.current_price;
      } else {
        return b.current_price - a.current_price;
      }
    });
    setSortBy(sortBy === "up" ? "down" : "up");
  };
  const handlePrice24hClick = () => {
    data.sort((a, b) => {
      if (sortBy === "up") {
        return a.price_change_percentage_24h - b.price_change_percentage_24h;
      } else {
        return b.price_change_percentage_24h - a.price_change_percentage_24h;
      }
    });
    setSortBy(sortBy === "up" ? "down" : "up");
  };
  const handlVolumeClick = () => {
    data.sort((a, b) => {
      if (sortBy === "up") {
        return a.total_volume - b.total_volume;
      } else {
        return b.total_volume - a.total_volume;
      }
    });
    setSortBy(sortBy === "up" ? "down" : "up");
  };
  const handlMktCapClick = () => {
    data.sort((a, b) => {
      if (sortBy === "up") {
        return a.market_cap - b.market_cap;
      } else {
        return b.market_cap - a.market_cap;
      }
    });
    setSortBy(sortBy === "up" ? "down" : "up");
  };
  const handlMktCap24hClick = () => {
    data.sort((a, b) => {
      if (sortBy === "up") {
        return (
          a.market_cap_change_percentage_24h -
          b.market_cap_change_percentage_24h
        );
      } else {
        return (
          b.market_cap_change_percentage_24h -
          a.market_cap_change_percentage_24h
        );
      }
    });
    setSortBy(sortBy === "up" ? "down" : "up");
  };
  const handleCoinClick = () => {
    data.sort((a, b) => {
        if (sortBy === "up") {
            return a.name.localeCompare(b.name)
          } else {
            return b.name.localeCompare(a.name)
          }
    })
    setSortBy(sortBy === "up" ? "down" : "up");
  }

  return (
    <div>
      <List darkMode={darkMode}>
        <tbody>
          <tr>
            <th title='sort by market cap rank' onClick={handleIdClick}>#</th>
            <th title='sort by name' onClick={handleCoinClick}>Coin</th>
            <th title='sort by price' onClick={handlePriceClick}>Price</th>
            <th title='sort by price change in 24h' onClick={handlePrice24hClick}>24h</th>
            <th title='sort by volume' onClick={handlVolumeClick}>24h Volume</th>
            <th title='sort by market capitalization' onClick={handlMktCapClick}>market cap</th>
            <th title='sort by market cap change in 24h' onClick={handlMktCap24hClick}>24h</th>
          </tr>
          {data?.map((crypto) => {
            return <CryptoItem key={crypto.id} {...crypto} />;
          })}
        </tbody>
      </List>
    </div>
  );
}

const List = styled.table<CryptoItemsListProps>`
  width: 100%;
  margin: 40px auto;
  border-collapse: collapse;
  font-size: 14px;
  img {
    width: 20px;
  }
  .tr {
    display: flex;
    justify-content: start;
    align-items: center;
    height: 40px;
    b {
      margin: 0 5px;
    }
    span {
      font-size: 12px;
      font-weight: 100;
      @media (min-width: 780px) {
        font-size: 18px;
      }
    }
  }
  tr {
    border-bottom: 1px solid
      ${({ darkMode }) => (darkMode ? "#A3A3A3" : "#111111")};
    height: 40px;
  }
  th {
    text-align: left;
    font-weight: 900;
    cursor: pointer;
  }
  td,
  th {
    color: ${({ darkMode }) => (darkMode ? "#A3A3A3" : "#111111")};
  }
  .negative {
    color: #e06c75;
  }
  .positive {
    color: #4eaf0a;
  }
  @media (min-width: 780px) {
    width: 90%;
    font-size: 24px;
    img {
      width: 30px;
    }
  }
  @media (min-width: 1024px) {
    width: 80%;
  }
`;
export default CryptoItemsList;
