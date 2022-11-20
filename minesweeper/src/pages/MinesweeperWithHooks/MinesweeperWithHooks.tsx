import React, { FC } from 'react';

import { useParams, useSearchParams } from 'react-router-dom';

import { Top } from '@/components/Top';
import { GameLayout } from '@/components/Game';

import { GameWithHooks } from '@/modules/GameWithHooks';

export const MinesweeperWithHooks: FC = () => {
  return (
    <GameLayout
      top={
        <Top feature="Flag" firstAction="ctrl" secondAction="click">
            Minesweeper with ReactHooks special for you
        </Top>
      }
    >
      <GameWithHooks />
    </GameLayout>
  );
};