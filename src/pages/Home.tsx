import { Container, Paper } from '@material-ui/core';
import React from 'react';
import BasicInformation from '../container/basicInformation';
import styled from 'styled-components';
import About from '../container/about';

const DivStyled = styled('div')`
  padding-top: 150px;
`;

const Home = () => {
  return (
    <Container component={Paper}>
      <div id='information'>
        <BasicInformation />
      </div>
      <DivStyled id='about' data-aos='slide-up'>
        <About />
      </DivStyled>
    </Container>
  );
};

export default Home;
