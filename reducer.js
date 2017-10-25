const initialState = {color:'pink'}
const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'LIGHT_GREEN':
            return {...state, color:'lightgreen'}
        case 'PINK':
            return {...state, color:'pink'}
        case 'ORANGE':
            return {...state, color:'orange'}
        case 'GREEN_YELLOW':
            return {...state, color:'greenyellow'}
        default:
            return initialState
    }
}

export default reducer