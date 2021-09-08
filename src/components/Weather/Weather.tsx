import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const WeatherWrapper = styled.div`
  ${tw`
    flex
    flex-col
    justify-between
    items-center
    gap-2
    md:flex-row
    md:gap-20
  `}
`;

const TemperatureContainer = styled.div``;
const TemperatureText = styled.h1`
  ${tw`
    text-8xl
    text-gray-300
    font-bold
  `}
`;
const LocationContainer = styled.div`
  ${tw`
    text-gray-300
    flex
    flex-col
    justify-center
    items-center
    gap-2
  `}
`;
const CountryText = styled.h1`
  ${tw`
    text-4xl
    font-semibold
    tracking-widest
    text-center
  `}
`;
const CityText = styled.h3`
  ${tw`
    text-xl
  `}
`;
type Props = {
  temperature: number;
  country: string;
  city: string;
};
const Weather: React.FC<Props> = ({ temperature, country, city }: Props) => {
  return (
    <WeatherWrapper>
      <TemperatureContainer>
        <TemperatureText>{temperature} &#8451;</TemperatureText>
      </TemperatureContainer>
      <LocationContainer>
        <CountryText>{country}</CountryText>
        <CityText>{city}</CityText>
      </LocationContainer>
    </WeatherWrapper>
  );
};

export default Weather;
