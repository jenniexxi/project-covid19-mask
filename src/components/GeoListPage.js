import React from 'react';
import {useState, useEffect} from 'react';
import styled from 'styled-components';
import StoreList from './StoreList';

const DistanceInput = styled.input`
  width: 250px;
  height: 36px;
  border: 1px solid #e8e8e8;
  border-radius: 3px;
  font-size: 16px;
` 

const BtnSearch = styled.button`
  width: 60px;
  height: 36px;
  background: #fff;
  border: 1px solid #e8e8e8;
  border-radius: 3px;
`

function GeoListPage() {

  const [items, setItem] = useState([]);
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const geoApiUrl = "https://8oi9s0nnth.apigw.ntruss.com/corona19-masks/v2/storesByGeo/json?";
  const [search, setSearch] = useState();
  const [distance, setDistance] = useState(200);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        // alert(position.coords.latitude + ' ' + position.coords.longitude);
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
        const fullNameUrl = geoApiUrl + "lat=" + position.coords.latitude + "&lng=" + position.coords.longitude + "&m=" + distance;
        fetch(fullNameUrl)
          .then(response => response.json())
          .then(data => {
            setItem(data.stores);
          })
      }, function(error) {
        console.error(error);
      }, {
        enableHighAccuracy: false,
        maximumAge: 0,
        timeout: Infinity
      });
    } else {
      alert('gps를 지원하지 않습니다.');
    }
  }, [distance]);

  const handleChangeSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  }

  const handleChangeSubmit = (e) => {
    e.preventDefault();
    if(!search){
      alert("변경거리를 입력해주세요.");
      return;
    }
    setDistance(search);
    setSearch("");
  }

  const handleChangeDistance = (e) => {
    e.preventDefault();
    // setSearch(e.target.value);
    setDistance(e.target.value);
  }

  return (
    <>
      <div>
        <form onSubmit={handleChangeSubmit}>
          <select
            onChange={handleChangeDistance}
            value={distance}
            >
            <option value="100">100</option>
            <option value="200">200</option>
            <option value="300">300</option>
            <option value="400">400</option>
            <option value="500">500</option>
            <option value="600">600</option>
            <option value="700">700</option>
            <option value="800">800</option>
            <option value="900">900</option>
            <option value="1000">1000</option>
          </select>
          
          <DistanceInput
            type="text"
            placeholder="반경 거리(m)를 입력하세요."
            value={search}
            onChange={handleChangeSearch}
          />
          
          <BtnSearch type="button" onClick={handleChangeSubmit}>검색</BtnSearch>
        </form>
      </div>
      <div>✓반경거리의 기본값은 200m로 설정되어 있습니다.</div>
      <div>✓현재 반경거리는 {distance}m로 설정되었습니다.</div>
      <div>
        <div>위도 : {latitude}</div>
        <div>경도 : {longitude}</div>
      </div>
      <StoreList items={items} />
    </>
  )
}

export default GeoListPage;
