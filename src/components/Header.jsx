import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoMoon, IoMoonOutline } from 'react-icons/io5';
import { Container } from './Container';

const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
  display: flex;
  height: 200px;
`;

const Title = styled(Link).attrs({
  to: '/',
})`
text-decoration: none;
`;

const ModeSwitcher = styled.div`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  cursor: pointer;
  font-weight: var(--fw-bold);
  text-transform: capitalize;
`;

export const Header = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  if (theme === 'light') {
    return (
      <HeaderEl className='light'>
        <Container>
          <Title>
            <div className='logo_name'
              style={{
                color: 'hsl(200, 15%, 8%)'
              }}>
              Countries
            </div>
          </Title>
          <ModeSwitcher
            className='switch'
            onClick={toggleTheme}>
            {theme === 'light' ? (
              <IoMoonOutline size="14px" />
            ) : (
              <IoMoon size="14px" />
            )}{' '}
            <span style={{ paddingLeft: '5px' }}>{theme}</span>
          </ModeSwitcher>
        </Container>
      </HeaderEl>
    );
  } else if (theme === 'dark') {
    return (
      <HeaderEl className='dark'>
        <Container>
          <Title>
            <div className='logo_name'
              style={{
                color: 'hsl(0, 0%, 100%)'
              }}>
              Countries
            </div>
          </Title>
          <ModeSwitcher
            className='switch_dark'
            onClick={toggleTheme}>
            {theme === 'light' ? (
              <IoMoonOutline size="14px" />
            ) : (
              <IoMoon size="14px" />
            )}{ }
            <span style={{ paddingLeft: '5px' }}>{theme}</span>
          </ModeSwitcher>
        </Container>
      </HeaderEl>
    );
  }
};




