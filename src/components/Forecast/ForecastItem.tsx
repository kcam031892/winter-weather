import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

import { IForecastDay } from 'interface/Weather';
import { format } from 'date-fns';

const ForecastItemWrapper = styled.div`
  ${tw`
    bg-primary-color
    bg-opacity-40
    py-6
    px-12
    border-[1px]
    border-[#DEDEDE]
    shadow-lg
    rounded-md
    flex
    flex-col
    items-center
    md:px-6
  `}
`;

const DetailContainer = styled.div`
  ${tw`
    flex
    items-center
    flex-col
    gap-2
    mt-2
    md:flex-row
    md:gap-4
  `}
`;
const DateContainer = styled.div`
  ${tw`
    text-gray-300
    order-2
    flex
    justify-center
    items-center
    flex-col
    md:order-1
    md:block
  `}
`;
const DayText = styled.h1`
  ${tw`
    text-xl
    font-bold
  `}
`;
const DateText = styled.h3`
  ${tw`
    text-base

  `}
`;
const TemperatureText = styled.h1`
  ${tw`
    text-4xl
    text-accent-color
    order-1
    md:order-2
  `}
`;

const Image = styled.img`
  ${tw`
    h-24
    w-24
  `}
`;

type Props = {
  forecastDetail: IForecastDay;
};
const ForecastItem: React.FC<Props> = ({ forecastDetail }: Props) => {
  const date = new Date(forecastDetail?.date);

  return (
    <ForecastItemWrapper>
      <Image src={forecastDetail?.day?.condition?.icon} />
      <DetailContainer>
        <DateContainer>
          <DayText>{date ? format(date, 'iiii') : 'N/A'}</DayText>
          <DateText>{date ? format(date, 'LLLL dd') : 'N/A'}</DateText>
        </DateContainer>
        <TemperatureText>{forecastDetail.day?.maxtemp_c} &#8451;</TemperatureText>
      </DetailContainer>
    </ForecastItemWrapper>
  );
};

export default ForecastItem;
