import React from 'react';
import styled from 'styled-components';

const StoreListUl = styled.ul`
  list-style: none;
  padding: 0;
`
const ListItem = styled.li`
  margin-bottom: 5px
`

function StoreList({items}) {
  // items 를 props {객체}에 받아오기
  // StoreLsit의 역할에 따라 presenter라고 생각하면됨
  // StoreLsit를 가져다 쓰는 애들은 다 container

  return (
    <>
      <StoreListUl>
        {items ?
          items.map((item) => {return <ListItem key={item.code}>{item.name}, 주소: {item.addr}, 남은 개수 : {item.remain_stat}</ListItem>})
           : "검색 결과가 없습니다."
        }
      </StoreListUl>
    </>
  )
}

export default StoreList;