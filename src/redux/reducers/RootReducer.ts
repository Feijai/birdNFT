import { combineReducers } from 'redux'
import ModalReducer from './ModalReducer'


const RootReducer = combineReducers({
    modalReducer:ModalReducer
})

export default RootReducer
