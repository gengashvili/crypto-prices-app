import { DataType } from "./CryptoItemsList";

export const handleSortClick = (data:DataType,sortOrder:any,setData:any,setSortOrder:any) => {
    data.sort((a, b) => {
      if (sortOrder === 'up') {
        return a.current_price - b.current_price;
      } else {
        return b.current_price - a.current_price;
      }
    });
    setData(sortedData);
    setSortOrder(sortOrder === 'up' ? 'down' : 'up');
  };