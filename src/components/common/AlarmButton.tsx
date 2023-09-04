import React, { useEffect, useRef, useState } from 'react'
import alarm from "../../assets/icon/alarm.png";
import NotiAlarm from '../../assets/icon/notialram.png'
import { styled } from 'styled-components';
import AlarmModal from './AlarmModal';

const AlarmButton = () => {

  const [alarmModalOpen, setAlarmModalOpen] = useState<boolean>(false);

  const onClickOpenModalHandler = () => {
    setAlarmModalOpen(!alarmModalOpen);
  };

  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (divRef.current && !divRef.current.contains(event.target)) {
        setAlarmModalOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

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
    <AlarmWrapper ref={divRef} onClick={onClickOpenModalHandler}>
        {/* <Alarm src={NotiAlarm} /> */}
        <Alarm src={alarm} />
        {(alarmModalOpen)
          && <AlarmModalWrapper>
            <AlarmModal setAlarmModalOpen={setAlarmModalOpen} />
          </AlarmModalWrapper>}
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

const AlarmModalWrapper = styled.div`
  top: 50px;
  left: -185px;
  position: absolute;
`;

export default AlarmButton;