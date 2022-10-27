import styled from 'styled-components';
import { color, space, layout, border, typography, grid } from 'styled-system';

export const Box = styled.div(
  {
    boxShadow:
      'rgba(32, 32, 239, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
  },
  color,
  space,
  layout,
  border,
  typography,
  grid
);
