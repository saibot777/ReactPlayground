import { AnyAction, Reducer } from "redux";

import {
  Field,
  CellState,
  generateFieldWithDefaultState,
  fieldGenerator,
} from "@/core/Field";
import { LevelNames, GameSettings } from "@/modules/GameSettings";
import { openCell as openCellHandler } from "@/core/openCell";
import { OPEN_CELL } from "./actions";

export interface State {
  level: LevelNames;
  time: number;
  bombs: number;
  isGameOver: boolean;
  isGameStarted: boolean;
  isWin: boolean;
  settings: [number, number];
  playerField: Field;
  gameField: Field;
  flagCounter: number;
}

export const getInitialState = (): State => {
  const level = "beginner";
  const settings = GameSettings[level];
  const [size, bombs] = settings;

  return {
    level,
    time: 0,
    bombs,
    isGameOver: false,
    isGameStarted: false,
    isWin: false,
    settings,
    flagCounter: 0,
    playerField: generateFieldWithDefaultState(size, CellState.hidden),
    gameField: fieldGenerator(size, bombs / (size * size)),
  };
};

export const reducer: Reducer<State> = (
  state = getInitialState(),
  action: AnyAction
) => {
  const { playerField, gameField } = state;

  switch (action.type) {
    case OPEN_CELL: {
      const {
        payload: { coords },
      } = action;

      try {
        const [newPlayerField, isSolved] = openCellHandler(
          coords,
          playerField,
          gameField
        );

        return {
          ...state,
          isGameStarted: true,
          isGameOver: isSolved,
          isWin: isSolved,
          playerField: newPlayerField,
        };
      } catch (error) {
        return {
          ...state,
          isGameStarted: false,
          isGameOver: true,
          isWin: false,
          playerField: gameField,
        };
      }
    }
    default:
      return state;
  }
};
