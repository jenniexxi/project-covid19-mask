import React from 'react';
import {useState, useEffect} from 'react';
import styled from 'styled-components';
import StoreList from './StoreList';
import { RenderAfterNavermapsLoaded, NaverMap, Marker } from 'react-naver-maps';

const DistanceInput = styled.input`
  width: 250px;
  height: 36px;
  border: 1px solid #e8e8e8;
  border-radius: 3px;
  font-size: 16px;
  margin: 0 10px;
  padding-left: 10px;
` 

const BtnSearch = styled.button`
  width: 60px;
  height: 36px;
  background: #fff;
  border: 1px solid #e8e8e8;
  border-radius: 3px;
`
const DistanceBox = styled.div`
  overflow: hidden;
  padding: 10px 30px;
`

const From = styled.form`
  float: left;
`

const Select = styled.select`
  border: 1px solid #e8e8e8;
  border-radius: 3px;
  width: 80px;
  height: 36px;
  padding-left: 7px;
  font-size: 16px;
`

const DistanceInfo = styled.div`
  float: right;
  font-size: 14px;
  line-height: 18px;
`

const ValueBox = styled.div`
  padding: 3px 30px 10px 30px;
`

function GeoListPage() {

  const [items, setItem] = useState([]);
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const geoApiUrl = "https://8oi9s0nnth.apigw.ntruss.com/corona19-masks/v2/storesByGeo/json?";
  const [search, setSearch] = useState();
  const [distance, setDistance] = useState(200);

  let naverMapRef = null;

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
            console.log(data.stores);
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

  const NaverMapAPI = ({latitude, longitude, stores}) => {
    
    const navermaps = window.naver.maps;

    return (
      <NaverMap
        mapDivId={'maps-getting-started-uncontrolled'} // default: react-naver-map
        style={{
          width: '100%', // 네이버지도 가로 길이
          height: '100vh' // 네이버지도 세로 길이
        }}
        defaultCenter={{ lat: latitude, lng: longitude }} // 지도 초기 위치
        defaultZoom={16} // 지도 초기 확대 배율
        naverRef={ref=> {naverMapRef = ref}}
      >
        {stores ?
          stores.map((item) => {return <Marker
            key={item.code}
            position={new navermaps.LatLng(item.lat, item.lng)}
            animation={2}
            title={item.name}
          />})
           : ""
        }
        <Marker
          key={1}
          position={new navermaps.LatLng(latitude, longitude)}
          animation={0}
          title={"현재위치"}
        />
      </NaverMap>
    );
  }

  return (
    <>
      <div>
        <DistanceBox>
          <From onSubmit={handleChangeSubmit}>
            <Select
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
            </Select>
            
            <DistanceInput
              type="text"
              placeholder="반경 거리(m)를 입력하세요."
              value={search}
              onChange={handleChangeSearch}
            />
            
            <BtnSearch type="button" onClick={handleChangeSubmit}>검색</BtnSearch>
          </From>
          <DistanceInfo>
            <div>✓반경거리의 기본값은 200m로 설정되어 있습니다.</div>
            <div>✓현재 반경거리는 {distance}m로 설정되었습니다.</div>
          </DistanceInfo>
        </DistanceBox>
        <ValueBox>
          <div>위도 : {latitude}</div>
          <div>경도 : {longitude}</div>
        </ValueBox>
        {/* <StoreList items={items} /> // 목록, 반경거리에 따른 목록  */}
      </div>

      <RenderAfterNavermapsLoaded
        ncpClientId={'u7417cjkyg'} // 자신의 네이버 계정에서 발급받은 Client ID
        error={<p>Maps Load Error</p>}
        loading={<p>Maps Loading...</p>}
      >
        <NaverMapAPI 
          latitude={latitude}
          longitude={longitude}
          stores={items}
        />
      </RenderAfterNavermapsLoaded>
    </>
  )
}

export default GeoListPage;
