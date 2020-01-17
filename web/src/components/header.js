import { Link } from 'gatsby';
import React from 'react';
import Icon from './icon';
import { cn } from '../lib/helpers';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import styles from './header.module.css';
import BackgroundImage from 'gatsby-background-image';

const dynamicStyle = props =>
  css`
    min-height: 200px;
    height: calc(100vh / 3 * 2);
  `;

const BackgroundDiv = styled(BackgroundImage)`
  ${dynamicStyle};
`;

const Header = ({ onHideNav, onShowNav, showNav, siteTitle, background }) => (
  <>
    <BackgroundDiv tag="div" fluid={background}>
      &nbsp;
    </BackgroundDiv>
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.branding}>
          <Link to="/">{siteTitle}</Link>
        </div>

        <button className={styles.toggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
          <Icon symbol="hamburger" />
        </button>

        <nav className={cn(styles.nav, showNav && styles.showNav)}>
          <ul>
            <li>
              <Link to="/archive/">Archive</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </>
);

export default Header;
