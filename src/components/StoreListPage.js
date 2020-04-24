import React from 'react';
import {useState, useEffect} from 'react';
import StoreList from './StoreList';
import styled from 'styled-components';
import 'normalize.css';

const AddrInput = styled.input`
  width: 250px;
  height: 36px;
  border: 1px solid #e8e8e8;
  border-radius: 3px;
  font-size: 16px;
  padding: 0;
`

const BtnSearch = styled.button`
  width: 60px;
  height: 36px;
  background: #fff;
  border: 1px solid #e8e8e8;
  border-radius: 3px;
`

function StoreListPage() {
  
  const [items, setItem] = useState([]);
  const [search, setSearch] = useState([]);
  const [addrValue, setAddrValue] = useState("");
  const [count, setCount] = useState([]);
  const [town, setTown] = useState([]);
  const apiUrl = "https://8oi9s0nnth.apigw.ntruss.com/corona19-masks/v1/storesByAddr/json?address=";
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if(addrValue === "") {
      return
    };
    setLoading(true);
    setTimeout(function() {
      const fullNameUrl = apiUrl + addrValue
      fetch(fullNameUrl)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          setItem(data.stores);
          setCount(data.count);
          setTown(data.address);
        })
        setLoading(false);
      }, 1000);
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
          <AddrInput
            type="text"
            placeholder="도, 시, 구까지 적어주세요."
            value={search}
            onChange={handleChangeSearch}
          />
          <BtnSearch type="button" onClick={handleChangeSubmit}>검색</BtnSearch>
        </form>
      </div>
      <div>검색한 주소 : {town}</div>
      <div>총 카운트 : {count}</div>
      {loading ? "loaindg..." : 
        items.length > 0 ? 
        <StoreList items={items} /> : // 이게 props로 넘겨주기
        addrValue === "" ? "" : "검색 결과가 없습니다."
      }
    </>
  );
}

export default StoreListPage;
