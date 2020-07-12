import React from 'react';
import styled from 'styled-components';
import '../App.css';

const StoreListUl = styled.ul`
  list-style: none;
  padding: 0;
`
const ListItem = styled.li`
  margin: 10px 0 10px 30px;
  font-size: 16px;
`



function StoreList({items}) {
  // items 를 props {객체}에 받아오기
  // StoreLsit의 역할에 따라 presenter라고 생각하면됨
  // StoreLsit를 가져다 쓰는 애들은 다 container

  return (
    <>
      <StoreListUl>
        {items ?
          items.map((item) => {return <ListItem key={item.code}>
            <span className={item.remain_stat}>
              <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation" className="iconSize" fill={
                item.remain_stat === "plenty" ? "#1abc9c" : 
                item.remain_stat === "some" ? "#f1c40f" :
                item.remain_stat === "few" ? "#e74c3c" :
                item.remain_stat === "empty" ? "black" : "black"
              }><path d="M8.53 11h7.02l2.76-5H6.16z" opacity=".3"></path><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-1.45-5c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6z"></path></svg>
              {item.name},
            </span>
            주소: {item.addr}, 
            <span className={item.remain_stat}>
              남은 개수 : {
                item.remain_stat === "plenty" ? "100개 이상" : 
                item.remain_stat === "some" ? "30개 이상 100개 미만" :
                item.remain_stat === "few" ? "20개 이상 30개 미만" :
                item.remain_stat === "empty" ? "판매중지" : "정보없음"
              }
            </span>
          </ListItem>})
           : "검색 결과가 없습니다."
        }
      </StoreListUl>
    </>
  )
}

export default StoreList;