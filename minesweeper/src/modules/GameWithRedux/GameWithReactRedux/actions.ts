import { AnyAction } from "redux";
import { Coords } from "@/core/Field";

// Actions
export const OPEN_CELL = "modules/GameWithRedux/OPEN_CELL";

// Action Creators
export const openCell = (coords: Coords): AnyAction => ({
  type: OPEN_CELL,
  payload: { coords },
});
