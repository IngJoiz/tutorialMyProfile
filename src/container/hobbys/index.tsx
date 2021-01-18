import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { Container } from './styled';
import { useTranslation } from 'react-i18next';
import { getListVideos } from '../../api/youtube/youtubeApi';
import YouTube from 'react-youtube';

const listVideos = getListVideos();

const Hobbys = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Typography variant='h2' align='center'>
        {t('hobbys.title')}
      </Typography>
      <br />
      <br />
      <Grid container spacing={3}>
        {listVideos.map((v) => (
          <Grid key={v.id} item lg={6} md={6} sm={6} xs={12}>
            <YouTube videoId={v.id} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
export default Hobbys;
