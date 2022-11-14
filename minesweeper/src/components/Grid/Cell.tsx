import React, { FC } from "react";
import styled from '@emotion/styled';
import { Cell as CellType, CellState } from '@/helpers/Field';
export interface CellProps {
    children: CellType;
}
export const Cell: FC<CellProps> = ({ children }) => {
    switch(children) {
        case CellState.empty:
            return <EmptyFrame />
        case CellState.hidden:
            return <ClosedFrame />
        default:
            return <ClosedFrame />;
    }
};

const ClosedFrame = styled.div`
    display: flex;
    align-item: center;
    justify-content: center;
    user-select: none;
    cursor: pointer;
    width: 1.8vw;
    height: 1.8vw;
    background-color: #d1d1d1;
    border: 0.5vh solid transparent;
    border-color: white #9e9e9e #9e9e9e white;
    &:hover {
        filter: brightness(1.1);
    }
`;

const EmptyFrame = styled(ClosedFrame)`
    border-color: #dddddd;
    cursor: default;
`;