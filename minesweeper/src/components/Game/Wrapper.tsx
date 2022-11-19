import React, { FC, ReactNode } from 'react';
import styled from '@emotion/styled';

interface Props {
  children?: ReactNode;
}
export const Wrapper: FC<Props> = ({ children }) => <Frame>{children}</Frame>;

const Frame = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;