const initialState = [
  { content: "прочитать книгу", status: true, id: 1 },
  { content: "сходить в в магазин", status: false, id: 2 },
  { content: "покормить кота", status: false, id: 3 },
  { content: "спогулять", status: false, id: 5 },
  { content: "сделать уроки", status: false, id: 6 },
];

const itemReducer = (state = initialState, action) => {
  if (action.type === "CHECKED") {

    return state.map(item => {
      if(item.id === action.payload) {
        return {
          ...item,  
          status: !item.status  
        }
      }    
      return item;
    });
  }
  
  if (action.type === "ADD") {
    return [
      ...state,
      { content: action.payload.content, status: false, id: action.payload.id },
    ];
  }

  if (action.type === "DELETE"){

    return state.filter(item => item.id !== action.payload)
    
  }

  if (action.type === "CHANGE_ITEM"){
    return state.map(item => {
      if(item.id === action.payload.id){
        return {
          ...item,
          content: action.payload.content
        }
      }
      return item
    })
  }

  return state;
};

export default itemReducer;
