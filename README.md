# project-covid19-mask

## StoreListPage 컴포넌트 작성
[ ] 마스크 재고현황 목록을 조회하는 API를 연동하여 판매점 목록을 불러오고, 화면에 렌더링하도록 컴포넌트의 구조를 설계하고 코딩합니다.
[ ] 데이터가 로딩 중임을 알리는 UI적 요소가 있어야 합니다.
[ ] 데이터 로딩에 실패한 경우, 실패했다는 것을 알리는 UI적 요소도 있어야 합니다.

## StoreList 컴포넌트 작성
[ ] StoreListPage 컴포넌트에서 재고현황 목록은 별도 컴포넌트로 코딩합니다.

## GeoListPage 컴포넌트 작성
[ ] 위치기반 조회 페이지입니다. 우선 빈 컴포넌트로 코딩합니다.

## URL 처리하기
[ ] 아래 URL을 만족하는 react-router 구조를 잡고, 동작하도록 만듭니다.
  - /address URL로 온 경우 StoreListPage 가 렌더링 되도록 합니다.
  - /geo URL로 온 경우 GeoListPage 가 렌더링 되도록 합니다.