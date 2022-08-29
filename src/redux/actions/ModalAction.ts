import { SET_LOGIN_MODAL } from '../constant'

interface ClickModalButtonAction {
    type: string;
}

export const clickModalButtonAction = () =>
    (dispatch: (arg: ClickModalButtonAction) => (ClickModalButtonAction)) => {
        dispatch({ type: SET_LOGIN_MODAL })
    }