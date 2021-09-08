import { IForecast } from 'interface/Weather';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import ForecastItem from './ForecastItem';

const ForecastWrapper = styled.div`
  ${tw`
    grid
    grid-cols-1
    gap-2
    md:grid-cols-3
    md:gap-4
  `}
`;
type Props = {
  forecast: IForecast | undefined;
};
const Forecast: React.FC<Props> = ({ forecast }: Props) => {
  return (
    <ForecastWrapper>
      {forecast &&
        forecast.forecastday?.map((forecastDetail, index) => (
          <ForecastItem key={index} forecastDetail={forecastDetail} />
        ))}
    </ForecastWrapper>
  );
};

export default Forecast;
