import baseStyled,{ThemedStyledInterface} from 'styled-components';

const colors = {
    blue: '#2E5BFF',
    lightblue: 'rgba(46,92,255,0.2)',
    green: '#33AC2E',
    red: '#D63649',
    yellow: '#F7C137',
    teal: '#00C1D4',
    purple: '#8C54FF',
    black: '#2E384D',
    black2: '#69707F',
    black3: '#8798AD',
    white: '#FFFFFF',
    gray: '#BFC5D2',
    gray2: '#F4F6FC',
    gray3: '#EEF3F5',
    caption: '#B0BAC9',
    input: 'rgba(224, 231, 255, 0.20)',
    border: '#D6DDF6',
    card: 'rgba(46,91,255,0.08)',
    shadow: 'rgba(46,91,255,0.07)',
  };
  
  
  
  const theme =  {
    colors
  };

  export default theme;
  export type Theme = typeof theme;
  export const styled = baseStyled as ThemedStyledInterface<Theme>;