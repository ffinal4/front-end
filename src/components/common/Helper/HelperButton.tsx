import React, { useState } from 'react'
import styled from 'styled-components';
import './HelperButton.css'
import Button from '../../../assets/icon/helperbtn.png'
import Close from '../../../assets/icon/remove.png'
import HelperModal from './HelperModal';

const HelperButton = () => {

  const [isHelper, setIsHelper] = useState<boolean>(false);

  return (
    <ButtonOutContainer>
      {isHelper && <CloseBtnContainer />}
      <img className='ButtonContainer' src={isHelper ? Close : Button} onClick={() => setIsHelper(!isHelper)} />
      {isHelper && <HelperModal isHelper={isHelper} setIsHelper={setIsHelper} />}
    </ButtonOutContainer>
  )
};

const ButtonOutContainer = styled.div`
  position: relative;
`;

const CloseBtnContainer = styled.div`
  width: 44px;
  height: 44px;
  object-fit: contain;
  position: fixed;
  bottom: 50px;
  right: 50px;
  z-index: 999;
  border: 4px solid #222020;
  background-color: #fcfcfc;
  border-radius: 100%;
  cursor: pointer;
`;

export default HelperButton;