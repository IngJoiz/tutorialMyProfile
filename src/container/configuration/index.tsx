import React from 'react';
import { Language } from '../../constants/languages';
import { Container, FabStyled } from './styled';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4Icon from '@material-ui/icons/Brightness4';

interface IConfigurationProps {
  onChangeLanguage: (language: Language) => void;
  onChangeTheme: (isDark: boolean) => void;
  isDarkTheme: boolean;
}

const Configuration = ({
  isDarkTheme,
  onChangeLanguage,
  onChangeTheme,
}: IConfigurationProps) => {
  return (
    <Container>
      <FabStyled
        size='medium'
        color='primary'
        onClick={() => onChangeLanguage(Language.FR)}
      >
        Fr
      </FabStyled>
      <FabStyled
        size='medium'
        color='secondary'
        onClick={() => onChangeLanguage(Language.EN)}
      >
        En
      </FabStyled>
      <FabStyled
        size='medium'
        color='primary'
        onClick={() => onChangeLanguage(Language.ES)}
      >
        Es
      </FabStyled>
      <FabStyled
        size='medium'
        color='primary'
        onClick={() => onChangeLanguage(Language.PR)}
      >
        Pr
      </FabStyled>
      {isDarkTheme && (
        <FabStyled size='medium' onClick={() => onChangeTheme(false)}>
          <Brightness4Icon />
        </FabStyled>
      )}
      {!isDarkTheme && (
        <FabStyled size='medium' onClick={() => onChangeTheme(true)}>
          <Brightness7Icon />
        </FabStyled>
      )}
    </Container>
  );
};
export default Configuration;
