import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Header } from 'components/theme';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/dev.svg';
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles';

export const Intro = () => {
  const { theme } = useContext(ThemeContext);
  const title = "I’m Joseph Drane and I'm Software Engineer!"
  return (
    <Wrapper>
      <Header />
      <IntroWrapper as={Container}>
        <Details theme={theme}>
          <h1>Hi, I'm Joseph!</h1>
          <h4>I'm a Network / Software Engineer</h4>
          <Button as={AnchorLink} href="#contact">
            work with me
          </Button>
        </Details>
        <Thumbnail>
          <img src={dev} alt={title} />
        </Thumbnail>
      </IntroWrapper>
    </Wrapper>
  );
};
