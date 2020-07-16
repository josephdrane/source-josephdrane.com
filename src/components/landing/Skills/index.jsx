import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/skills.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

export const Skills = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id="about">
      <SkillsWrapper as={Container}>
        <Thumbnail>
          <img src={dev} alt="I’m John and I’m a Backend & Devops engineer!" />
        </Thumbnail>
        <Details theme={theme}>
          <h1>More about me</h1>
          <p>
            Self-motivated, purposeful team player with leadership experience at scaling businesses by collaborating with key stakeholders through effective communication, persuasive presentations and technical design backed by data analysis and business process research.
          </p>
          <ul>
            <li>10+ years infrastructure design, build, deploy, support, optimize and scale.</li>
            <li>5+ years cloud infrastructure design, automation and leading DevOps transformations.</li>
            <li>2+ years software development with Python backend automation services, and React front end development. Design, build, deploy, scale and support.</li>
          </ul>
          <Button as={AnchorLink} href="#contact">
            work with me
          </Button>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};
