import React from 'react'
import { styled } from 'styled-components';
import DetailContainer from '../components/DetailPage/DetailContainer';

const DetailPage = () => {
  return (
    <PageLayout>
        <FilterContainer>
            <FilterWrapper>
                Filter
                <ChoiceBox />
            </FilterWrapper>
        </FilterContainer>
        <PageContainer>
            <DetailContainer />
        </PageContainer>
    </PageLayout>
  )
}

const PageLayout = styled.div`
    width: 100%;
    height: 1986px;
`;

const FilterContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 0px 56px 20px 0px;
`;

const FilterWrapper = styled.div`
    display: inline-flex;
    padding: 10px 20px;
    align-items: center;
    gap: 77px;
    border-bottom: 1px solid;
`;

const ChoiceBox = styled.div`
    width: 24px;
    height: 24px;
    background-color: #D9D9D9;
    cursor: pointer;
`;

const PageContainer = styled.div`
    border-top: 4px solid;
    width: 100%;
`;

export default DetailPage