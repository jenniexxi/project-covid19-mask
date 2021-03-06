# project-covid19-mask

## StoreListPage 컴포넌트 작성
[ x ] 마스크 재고현황 목록을 조회하는 API를 연동하여 판매점 목록을 불러오고, 화면에 렌더링하도록 컴포넌트의 구조를 설계하고 코딩합니다.  
[ x ] 데이터가 로딩 중임을 알리는 UI적 요소가 있어야 합니다.  
[ x ] 데이터 로딩에 실패한 경우, 실패했다는 것을 알리는 UI적 요소도 있어야 합니다.

## StoreList 컴포넌트 작성
[ x ] StoreListPage 컴포넌트에서 재고현황 목록은 별도 컴포넌트로 코딩합니다.

## GeoListPage 컴포넌트 작성
[ x ] 위치기반 조회 페이지입니다. 우선 빈 컴포넌트로 코딩합니다.  
[ x ] 컴포넌트가 최초 렌더링될 때, 사용자의 위치를 가져와서 화면에 표시합니다.  
[ x ] 마스크 재고 위치 기반 API를 사용하여 사용자 위치 주변의 재고현황 목록을 가져옵니다.  
[ x ] 가져온 목록은 StoreList 컴포넌트를 사용하여 화면에 렌더링합니다.

## URL 처리하기
[ x ] 아래 URL을 만족하는 react-router 구조를 잡고, 동작하도록 만듭니다.  
  - / URL로 온 경우 StoreListPage 가 렌더링 되도록 합니다.
  - /geo URL로 온 경우 GeoListPage 가 렌더링 되도록 합니다.

## GeoListPage 컴포넌트 추가 작성
[ x ] 반경 거리(m)를 입력할 수 있는 INPUT과 검색 버튼을 추가합니다.
[ x ] 반경 거리의 기본값은 200 입니다.
[ x ] 검색 버튼을 클릭하면, 입력된 반경 거리 기준으로 API를 호출해서 재고 현황 목록을 렌더링합니다.

## 참고
- 브라우저 위치 정보 : html5 geolocation api 검색
- 마스크 재고 위치기반 API 샘플
https://8oi9s0nnth.apigw.ntruss.com/corona19-masks/v2/storesByGeo/json?lat=37.4923615&lng=127.02928809999999&m=200