import { useClock } from 'hooks/useClock';
import React, { useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const HeaderWrapper = styled.header`
  ${tw`
    w-full
    py-4
    bg-primary-color
    bg-opacity-70
  `}
`;

const HeaderContainer = styled.div`
  ${tw`
    container
    mx-auto
    flex
    flex-col
    justify-between
    items-center
    gap-4
    md:flex-row
    md:gap-10
  `}
`;
const HeaderTitle = styled.h1`
  ${tw`
    text-2xl
    text-accent-color
    font-bold
  `}
`;
const SearchContainer = styled.div`
  ${tw`
    flex-1
    
  `}
`;
const SearchField = styled.input`
  ${tw`
    py-2
    px-4
    w-full
    text-xl
    outline-none
    bg-transparent
    text-gray-300
    border-b-2
    border-secondary-color
    placeholder:text-xl
  `}
`;
const DateContainer = styled.div`
  ${tw`
    text-gray-300
    flex
    justify-center
    items-center
    flex-col
    md:flex-col
    md:justify-start
    md:items-start
  `}
`;
const DayText = styled.p``;
const TimeText = styled.p``;

type Props = {
  handleSearch: (q: string) => void;
};

const Header: React.FC<Props> = ({ handleSearch }: Props) => {
  const [q, setQ] = useState('');
  const handleKeySearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch(q);
    }
  };
  const { day, time } = useClock();
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <HeaderTitle>Winter Weather</HeaderTitle>
        <SearchContainer>
          <SearchField
            type='input'
            placeholder='Enter Zip Code or City'
            onKeyUp={handleKeySearch}
            onChange={(e) => setQ(e.target.value)}
          />
        </SearchContainer>
        <DateContainer>
          <DayText>{day}</DayText>
          <TimeText>{time}</TimeText>
        </DateContainer>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
