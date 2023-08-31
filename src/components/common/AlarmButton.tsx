import React from 'react'
import alarm from "../../assets/icon/alarm.png";
import NotiAlarm from '../../assets/icon/notialram.png'
import { styled } from 'styled-components';

const AlarmButton = () => {

    // const fetchSSE = () => {
    //     const eventSource = new EventSource(url);
    
    //     eventSource.onopen = () => {
    //       // 연결 시 할 일
    //     };
    
    //     eventSource.onmessage = async (e) => {
    //       const res = await e.data;
    //       const parsedData = JSON.parse(res);
    
    //       // 받아오는 data로 할 일
    //     };
    
    //     eventSource.onerror = (e: any) => {
    //       // 종료 또는 에러 발생 시 할 일
    //       eventSource.close();
    
    //       if (e.error) {
    //         // 에러 발생 시 할 일
    //       }
    
    //       if (e.target.readyState === EventSource.CLOSED) {
    //         // 종료 시 할 일
    //       }
    //     };
    //  };

  return (
    <AlarmWrapper>
        <Alarm src={NotiAlarm} />
        {/* <Alarm src={alarm} /> */}
    </AlarmWrapper>
  )
};

const AlarmWrapper = styled.div`
    width: 24px;
    height: 24px;
    margin-right: 20px;
    position: relative;
    cursor: pointer;
`;

const Alarm = styled.img`
    width: 24px;
    height: 24px;
    object-fit: contain;
`;

export default AlarmButton;