import { SET_THEME } from './action'

const InitialState = {
    theme : 'light'
}

const Reducer = (state = InitialState, action) => {
    switch (action.type) {
        case SET_THEME:
            return {
                ...state,
                theme : action.theme
            }
    
        default:
            return state
    }
}

export default Reducer