import "./todo.scss";

import TodoList from "./components/todoitem/todoList";
import AddForm from "./components/add/addForm";
import ChangeIitem from "./components/chengeItem/changeItem";

import { connect } from "react-redux";


import React from "react";


const mapStateToProps = (state) => {
  
  return {
    isDraw: state.isDraw.isDraw,
    isEdit: state.isEdit.isEdit,
    isChange: state.isChange.isChange
  };
};

const open = (props) => {
  props.dispatch({ type: "ON"});

  
};

const Edit =(props) => {
  props.dispatch({type: "EDIT"})

  if(props.isChange === true) {
    props.dispatch({type: "CLOSE_CHANGE"})
  }
}

function App(props) {
  

  return (
    <div className="container">
      <div className="header">
        <div>
          <span className="title">Сегодня</span>
          <button onClick={() =>Edit(props)}>{props.isEdit ? 'отмена' : 'править'}</button>
        </div>
      </div>

      <div className="main">
     <TodoList /> 

        <div className="footer">
          <div onClick={() => open(props)}>
            <img width={19} height={19} src="/img/add.svg" alt="" />
          </div>
        </div>
      </div>

      {props.isDraw && <AddForm />}
      {props.isChange && <ChangeIitem />}
    </div>
  );
}

export default connect(mapStateToProps)(App);
