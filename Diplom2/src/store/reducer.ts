import { Actions } from "./actions";

export interface State {
  isOpenNavModal: boolean;
}

interface Action {
  type: string;
  payload: any;
}

const initialState: State = {
  isOpenNavModal: false,
};

export function Reducer(state: State = initialState, action: Action): State {
  switch (action.type) {
    case Actions.SHOW_NAV_MODAL:
      return { ...state, isOpenNavModal: true };
    case Actions.HIDE_NAV_MODAL:
      return { ...state, isOpenNavModal: false };
    default:
      return state;
  }
}
