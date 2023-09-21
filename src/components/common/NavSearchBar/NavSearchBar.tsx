import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import './NavSearchBar.css'

interface NavSearchBarProps {
  clickSearch: boolean;
  setClickSearch: React.Dispatch<React.SetStateAction<boolean>>;
  searchInput: string;
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
}

const NavSearchBar : React.FC<NavSearchBarProps> = ({ clickSearch, setClickSearch, searchInput, setSearchInput }) => {

  const navigate = useNavigate();

  const searchHandleSubmit = (e: any) => {
    e.preventDefault();
    navigate(`search/${searchInput}`);
    setSearchInput("");
  };

  return (
    <form className='InputContainer' typeof="onSubmit" onSubmit={searchHandleSubmit}>
      <SearchInput
        type="search"
        placeholder="Search"
        value={searchInput}
        onChange={(e) => {
          setSearchInput(e.target.value);
        }}
      />
    </form>
  )
};

const SearchInput = styled.input`
  border: 1px solid #efefef;
  border-radius: 10px;
  background-color: #efefef;
  width: 320px;
  height: 40px;
  font-size: 16px;
  padding-left: 10px;
  margin-left: 10px;
`;

export default NavSearchBar;