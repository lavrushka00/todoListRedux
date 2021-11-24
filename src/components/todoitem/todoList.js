import React from "react";
import TodoItem from "./totItem";

import {connect} from 'react-redux'

const mapStateToProps = (state) => {
    return {items: state.itemReducer}
}

function todoList(props){
    return(
        
        <div className="list">
            
        <ul > 
            
            {props.items.map((item) => 
            <TodoItem content = {item} key = {item.id}/>
            )}
            
        </ul>
      </div>
    )
}

export default connect(mapStateToProps)(todoList);