import React from 'react';
import styled from 'styled-components';

const Aboutontainer = styled.div`
  padding: 0 30px;
`

const AboutDesc = styled.div`
  background: #dff9fb;
  width: 100%;
  padding: 13px 20px 10px 20px;
  color: #30336b;
  line-height: 20px;
`

const PrayDesc = styled.div`
  color: #eb4d4b;
  font-size: 22px;
  margin: 60px auto 0 auto;
  text-align: center;
`

const ThanksDesc = styled.div`
  position: absolute;
  left: 30px;
  bottom: 90px;
`

const ThanksTo = styled.div`
  color: #535c68;
  font-weight: bold;
  margin-bottom: 10px;
`

const ThanksInfo = styled.div`
  color: #535c68;
  line-height: 22px;
`

function About() {
  return (
    <Aboutontainer>
      <AboutDesc>
        본 프로그램의 데이터는 건강보험심사평가원과 NIA에서 제공하는 오픈데이터 API를 사용하고 있습니다.<br/>
        데이터 개방 관련 문의는 maskdata@nia.or.kr 를 이용하여 주시기 바랍니다. 감사합니다.
      </AboutDesc>
      <PrayDesc>
        💓 코로나19 극복을 기원합니다! 💓
      </PrayDesc>
      <ThanksDesc>
        <ThanksTo>감사의 말씀!</ThanksTo>
        <ThanksInfo>
        - 데이터는 NIA의 공공데이터포털에서 지원해주셨습니다.<br/>
        - 클라우드는 파스-타 얼라이언스에서 지원해주셨습니다.<br/>
        - <a href="https://www.ncloud.com" target="_blank" rel="noopener noreferrer">네이버 클라우드 플랫폼</a>에서 서버 및 지도 API 를 무상 지원합니다.
        </ThanksInfo>
      </ThanksDesc>
    </Aboutontainer>
  );
}

export default About;
