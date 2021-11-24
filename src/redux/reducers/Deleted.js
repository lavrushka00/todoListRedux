const initialState = {
    isEdit : false
};


const Edit = (state = initialState, action) => {
    if(action.type === 'EDIT')
    {
        return {
            isEdit: !state.isEdit
        }
    }

    return state;
}

export default Edit;