import styled from 'styled-components'

import { device } from '../../styles/breakpoints'

export const PostContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  max-width: calc(864px + 1rem);

  padding: 1rem;
  margin: 0 auto;

  .wmde-markdown {
    background: transparent;

    padding: 0 2rem 2.5rem;

    font-family: 'Nunito', sans-serif;

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      border-bottom-color: ${(props) => props.theme['base-border']};
    }

    a {
      color: ${(props) => props.theme['brand-blue']};
    }

    hr {
      background: ${(props) => props.theme['base-border']};
    }

    img {
      background: transparent;
    }

    pre {
      background: ${(props) => props.theme['base-post']};

      padding: 1rem;
      border-radius: 2px;
    }
  }

  @media ${device.sm} {
    .wmde-markdown {
      padding: 0 1rem 1.25rem;
    }
  }
`
