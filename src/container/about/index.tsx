import React from 'react';
import { Container } from './styled';
import { IconButton, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid/Grid';
import CircularImage from '../../component/circularImage';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  const onClickIconButton = (url: string) => window.open(url, '_blank');

  return (
    <Container>
      <Grid container>
        <Grid item lg={4} md={4} sm={5} xs={12}>
          <CircularImage image='/images/profile.jpg' size='300px' />
        </Grid>
        <Grid item lg={1} md={1} sm={1} xs={12} />
        <Grid item lg={7} md={7} sm={6} xs={12}>
          <Typography variant='h2' align='center'>
            {t('about.title')}
          </Typography>
          <br />
          <Typography variant='body1' align='center'>
            {t('about.description')}
          </Typography>
          <br />
          <Grid container justify='space-evenly'>
            <IconButton
              color='primary'
              onClick={() =>
                onClickIconButton('https://www.instagram.com/joiz_vega/')
              }
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              color='secondary'
              onClick={() =>
                onClickIconButton(
                  'https://www.linkedin.com/in/jonathan-vega-cely/'
                )
              }
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              color='primary'
              onClick={() => onClickIconButton('https://github.com/IngJoiz/')}
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              color='secondary'
              onClick={() =>
                onClickIconButton(
                  'https://www.youtube.com/channel/UCwRhn4m_pSbhgSFe2lq80qg/'
                )
              }
            >
              <YouTubeIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
export default About;
