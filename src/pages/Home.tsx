import { Container, Paper } from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return (
    <Container component={Paper}>
      <h1>{t('app.text1')}</h1>
    </Container>
  );
};

export default Home;
