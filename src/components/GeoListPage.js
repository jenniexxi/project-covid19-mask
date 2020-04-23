import React from 'react';
import {useState, useEffect} from 'react';
import StoreList from './StoreList';

function GeoListPage() {

  const [items, setItem] = useState([]);
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const geoApiUrl = "https://8oi9s0nnth.apigw.ntruss.com/corona19-masks/v2/storesByGeo/json?m=500";


  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        // alert(position.coords.latitude + ' ' + position.coords.longitude);
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
        const fullNameUrl = geoApiUrl + "&lat=" + position.coords.latitude + "&lng=" + position.coords.longitude
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
  }, []);

  return (
    <>
      <div>
        <div>위도 : {latitude}</div>
        <div>경도 : {longitude}</div>
      </div>
      <StoreList items={items} />
    </>
  )
}

export default GeoListPage;
