import React from "react";
import { connect } from "react-redux";



const mapStateToProps = (state) => {
  
  


  return {
    isDraw: state.isDraw.isDraw,
    isEdit: state.isEdit.isEdit,
  };
};

const check = (props) => {
  props.dispatch({ type: "CHECKED", payload: props.content.id});
  
};

const deleteItem = (props) => {
  props.dispatch({ type: "DELETE", payload: props.content.id})
}

const openChange = (props) => {
  //console.log(props.content)
  props.dispatch({ type: "OPEN_CHANGE", payload : props.content})
}


function TodoItem(props) {
 
  return (
    <>
    
      <li >
        
        {props.isEdit ? (
          <><img onClick={() => deleteItem(props)} height={22} width={22} src="/img/DELETE.svg" alt="" />
            {props.content.status ? <span onClick={() =>openChange(props)} style = {{opacity : 0.5}}>{props.content.content}</span> : <span onClick={() =>openChange(props)} >{props.content.content}</span>}
          </>
          
        ) : props.content.status ? (
          <><img onClick={() => check(props)} height={22} width={22} src="/img/ENABLED.svg" alt="" />
          <span style = {{opacity : 0.5}}>{props.content.content}</span>
          </>
          
        ) : (
          <><img onClick={() => check(props)} height={22} width={22} src="/img/NONE.svg" alt="" />
          <span>{props.content.content}</span></>
          
        )}

        
            

      </li>
    </>
  );
}


export default connect(mapStateToProps)(TodoItem);
