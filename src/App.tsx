import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Header, Weather, Forecast } from './components';
import bgImage from 'assets/bg-image.jpg';
import { useWeather } from 'hooks/useWeather';

const Wrapper = styled.div`
  ${tw`
    relative
    min-h-screen
    bg-no-repeat
    bg-cover
    bg-bgImagePosition
    z-10
    h-auto
    after:content['']
    after:absolute
    after:w-full
    after:h-full
    after:bg-primary-color
    after:left-0
    after:top-0
    after:opacity-70
    after:z-[-1]
  `}
`;
const Container = styled.div`
  ${tw`
    flex
    flex-col
    justify-center
    items-center
    gap-10
    mt-10
    py-4
  `}
`;

const NotFoundMessage = styled.h1`
  ${tw`
    text-4xl
    font-bold
    text-center
    text-red-200
  `}
`;

const LoadingMessage = styled.h1`
  ${tw`
    text-4xl
    font-bold
    text-center
    text-green-300
  `}
`;

const App: React.FC = () => {
  const { data, setLocation, isLoading } = useWeather();
  const temperature = data?.current?.feelslike_c || 0;
  const country = data?.location?.country || '';
  const city = data?.location?.name || '';
  const forecast = data?.forecast;

  return (
    <Wrapper style={{ backgroundImage: `url(${bgImage})` }}>
      <Header handleSearch={(e) => setLocation(e)} />

      <Container>
        {isLoading ? (
          <LoadingMessage>Loading</LoadingMessage>
        ) : (
          <>
            {data?.error ? (
              <NotFoundMessage>Not Found</NotFoundMessage>
            ) : (
              <>
                <Weather temperature={temperature} country={country} city={city} />
                <Forecast forecast={forecast} />
              </>
            )}
          </>
        )}
      </Container>
    </Wrapper>
  );
};

export default App;
