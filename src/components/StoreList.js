import React from 'react';

function StoreList({items}) {
  // items 를 props {객체}에 받아오기
  // StoreLsit의 역할에 따라 presenter라고 생각하면됨
  // StoreLsit를 가져다 쓰는 애들은 다 container

  return (
    <>
      <ul>
        {items.map((item) => {return <li key={item.code}>{item.name}, 주소: {item.addr}, 남은 개수 : {item.remain_stat}</li>})}
      </ul>
    </>
  )
}

export default StoreList;