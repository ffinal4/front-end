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
              }; 
            };
          } catch (error) {
          };
        };
        eventSource.addEventListener('sse', (e : any) => {
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
            }, 2000);
            setIsAlarms(true);
          };
        });
    
        eventSource.onerror = (e: any) => {
          // 종료 또는 에러 발생 시 할 일
          eventSource.close();
          let retryCount = 0;
          if (retryCount < 5) {
            retryCount++;
            setTimeout(() => {
              connectToSSE();// 다시 연결 시도
            }, 2000);
          } else {
          }
        };
      };
      connectToSSE();
      } else {
        return;
      };
     }, []);

  return (
    <AlarmWrapper>
        {isAlarms
          ? <Alarm
            src={NotiAlarm}
            ref={divRef}
            onClick={onClickOpenModalHandler}
          />
          : <Alarm
            src={alarm}
            ref={divRef}
            onClick={onClickOpenModalHandler}
          />}
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

    @media screen and (max-width: 375px) {
      width: 14px;
      height: 14px;
      margin-right: 5px;
      margin-bottom: 5px;
    }
`;

const Alarm = styled.div<{ src : string }>`
    width: 24px;
    height: 24px;
    background-image: url(${(props) => props.src});
    background-size: cover;
    cursor: pointer;

    @media screen and (max-width: 375px) {
      width: 14px;
      height: 14px;
    }
`;

const AlarmModalWrapper = styled.div`
  top: 50px;
  left: -185px;
  position: absolute;

  @media screen and (max-width: 375px) {
    left: -215px;
  }
`;

const NotificationAlert = styled.div`
  width: 400px;
  height: 40px;
  display: flex;
  opacity: 0;
  justify-content: center;
  align-items: center;
  position: absolute;
  background-color: #a5a7ca;
  border-radius: 10px;
  top: 105px;
  right: 200px;
  z-index: 999;
`;

const NotificationText = styled.div`
  color: #fcfcfc;
`;

export default AlarmButton;