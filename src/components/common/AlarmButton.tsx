import React, { useEffect, useRef, useState } from 'react'
import alarm from "../../assets/icon/alarm.png";
import NotiAlarm from '../../assets/icon/notialram.png'
import { styled } from 'styled-components';
import AlarmModal from './AlarmModal';
import { EventSourcePolyfill } from 'event-source-polyfill';
import { getNotificationsApi } from '../../api/users';
import { useRecoilState } from 'recoil';
import { alarmConnect, alarmData } from '../../store/Alarm';

const AlarmButton = () => {

  const [alarmModalOpen, setAlarmModalOpen] = useState<boolean>(false);
  const [isAlarms, setIsAlarms] = useRecoilState(alarmConnect);
  const [alarms, setAlarms] = useRecoilState(alarmData);

  const onClickOpenModalHandler = () => {
    setAlarmModalOpen(!alarmModalOpen);
    setIsAlarms(false);
  };

  const divRef = useRef<HTMLDivElement>(null);
  const alarmRef = useRef<HTMLDivElement>(null);

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

    useEffect(() => {
      const authToken = localStorage.getItem("accessToken");

      if (authToken) {
        const connectToSSE = () => {
          const eventSource = new EventSourcePolyfill("https://peeppo.store/api/subscribe", {
          headers: {
            AccessToken: `${authToken}`,
          },
        });
        eventSource.onopen = async () => {
          // 연결 시 할 일
          try {
            const res = await getNotificationsApi();
            if (res.status === 200) {
              setAlarms(res?.data.info);
              if (alarmData) {
                console.log("알림데이터", alarms);
              }; 
            };
          } catch (error) {
            console.log("에러", error);
          };
        };
        eventSource.addEventListener('sse', (e : any) => {
          // const { data: receivedConnectData } = e;
          if (e.data !== "connected!") {
            
            if (alarmRef.current) {
              alarmRef.current.style.opacity = "1";
              alarmRef.current.style.transition = "all 0.2s ease-in-out";
              alarmRef.current.style.transform = "translateY(5px)";
            }
            setTimeout(() => {
              if (alarmRef.current) {
                alarmRef.current.style.opacity = "0"
                alarmRef.current.style.transition = "all 0.2s ease-in-out";
              alarmRef.current.style.transform = "translateY(-5px)";
              };
            }, 3000);
            setIsAlarms(true);
          };
          console.log('connect event data: ', e);  // "connected!"
        });

        // eventSource.onmessage = (e) => {
        //   // 메세지 날라올 시 할 일
        //   console.log("메세지", e);
        // };
        // eventSource.addEventListener('sse', (e) => {
        //   console.log('connect event data: ', e);  // "connected!"
        // });
    
        eventSource.onerror = (e: any) => {
          // 종료 또는 에러 발생 시 할 일
          eventSource.close();
          console.log("에러발생", e);
          let retryCount = 0;
          if (retryCount < 5) {
            retryCount++;
            setTimeout(() => {
              connectToSSE();// 다시 연결 시도
            }, 2000);
          } else {
            console.log('Max retry count reached. Stopping retries.');
          }
        };
      };
      connectToSSE();
      };
     }, []);

  return (
    <AlarmWrapper ref={divRef} onClick={onClickOpenModalHandler}>
        {isAlarms
          ? <Alarm src={NotiAlarm} />
          : <Alarm src={alarm} />}
        <NotificationAlert ref={alarmRef}>
          <NotificationText>새로운 알림이 도착했습니다.</NotificationText>
        </NotificationAlert>
        {(alarmModalOpen)
          && <AlarmModalWrapper>
            <AlarmModal setAlarmModalOpen={setAlarmModalOpen} alarms={alarms} />
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

const NotificationAlert = styled.div`
  width: 400px;
  height: 30px;
  display: flex;
  opacity: 0;
  justify-content: center;
  align-items: center;
  position: absolute;
  background-color: #e9a270;
  border-radius: 5px;
  top: 100px;
  right: 300px;
  z-index: 999;
`;

const NotificationText = styled.div`
  color: #fcfcfc;
`;

export default AlarmButton;