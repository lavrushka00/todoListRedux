const initialState ={
    isDraw: false,
}

const DrawForm = (state = initialState, action) => {
    if (action.type === 'ON'){
        return {
            isDraw: true,
        }
    }
    if (action.type === 'OFF'){
        return {
            isDraw: false,
        }
    }

    return state;
}

export default DrawForm;