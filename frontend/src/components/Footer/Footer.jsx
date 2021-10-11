import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import { FooterSection, FooterText } from './Footer.style';

const GITHUB_URL = 'https://github.com/bithumb-talk';

function Footer() {
  return (
    <FooterSection>
      <div>
        <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
          <GitHubIcon fontSize="large" />
        </a>
      </div>
      <FooterText>© YoungCha. All rights reserved.</FooterText>
    </FooterSection>
  );
}

export default Footer;
