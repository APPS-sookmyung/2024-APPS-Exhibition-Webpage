import { css } from 'styled-components';

export const dolcevitaFont = css`
  @font-face {
    font-family: 'Dolce Vita Heavy';
    font-style: normal;
    font-weight: normal;
    src:
      local('Dolce Vita Heavy A Few Extra Pounds'),
      url('/fonts/woff/dolce-vita-heavy-bold.woff') format('woff');
  }

  @font-face {
    font-family: 'Dolce Vita';
    font-style: normal;
    font-weight: normal;
    src:
      local('Dolce Vita Quite Regular'),
      url('/fonts/woff/dolce-vita.woff') format('woff');
  }

  @font-face {
    font-family: 'Dolce Vita Light';
    font-style: normal;
    font-weight: normal;
    src:
      local('Dolce Vita Light Super Light'),
      url('/fonts/woff/dolce-vita-light.woff') format('woff');
  }
`;
