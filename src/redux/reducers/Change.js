const initialState = {
    isChange : false,
    changeItem : {}
}


const Change = (state = initialState, action) => {
    if (action.type === 'CLOSE_CHANGE'){
        return {
            isChange: false,
        }
    }
    if (action.type === 'OPEN_CHANGE'){
        return {
            isChange: true,
            changeItem: action.payload
        }
    }

    return state;
}

export default Change;