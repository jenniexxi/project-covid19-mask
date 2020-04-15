import React from 'react';
import {useState, useEffect} from 'react';

function Search() {
  
  const [items, setItem] = useState([]);
  const [search, setSearch] = useState([]);
  const [addrValue, setAddrValue] = useState([]);
  const [count, setCount] = useState([]);
  const [town, setTown] = useState([]);
  const apiUrl = "https://8oi9s0nnth.apigw.ntruss.com/corona19-masks/v1/storesByAddr/json?address=";

  useEffect(() => {
      const fullNameUrl = apiUrl + addrValue
      fetch(fullNameUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setItem(data.stores);
            setCount(data.count);
            setTown(data.address);
        })
  }, [addrValue]);

  const handleChangeSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  }

  const handleChangeSubmit = (e) => {
    e.preventDefault();
    setAddrValue(search);
    setSearch("");
  }

  return (
    <>
      <div>
          <form onSubmit={handleChangeSubmit}>
              <input
                type="text"
                placeholder="Write adrress"
                value={search}
                onChange={handleChangeSearch}
              />
          </form>
      </div>
      <div>검색한 주소 : {town}</div>
      <div>총 카운트 : {count}</div>
      <ul>
        {items.map((item) => {return <li key={item.code}>{item.name}, 주소: {item.addr}, 남은 개수 : {item.remain_stat}</li>})}
      </ul>
    </>
  );
}

export default Search;
