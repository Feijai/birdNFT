import {
    SET_LOGIN_MODAL
} from '../constant'
const initialState = {
    modalState: false,
}

const ModalReducer = function (state = initialState, action: { type: string }) {
    switch (action.type) {
        case SET_LOGIN_MODAL: {
            return {
                modalState: !state.modalState
            }
        }

        default: {
            return {
                ...state,
            }
        }
    }
}

export default ModalReducer
