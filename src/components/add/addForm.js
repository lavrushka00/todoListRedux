import React  from "react";
import { useState } from "react";
import {connect} from 'react-redux'

const mapStateToProps =( state) => { 
  return {
    isDraw: state.isDraw.isDraw
  }
}
const close = (props) => {
  props.dispatch({type:"OFF",})
}


function AddForm(props) {
  const [text, setText] = useState('')
  const addItem = (props) => {
    if (text !== ''){
      const item = {
        content: props.text,
        status: false,
        id: Date.now()
      }
      props.props.dispatch({type: "ADD", payload: item})
    
      setText('')
    }
  }
  
    return(
      
        <div className="add">
        <div className='addcont'>
         
          <textarea value={text} onChange={(e) => setText(e.target.value)}  name="" id="" cols="30" rows="10" placeholder="Введите текст задачи" ></textarea>
          <div>
            <button onClick={() => close(props)} className='btn-Close'>Закрыть</button>
            <button onClick={() => addItem({props ,text})}className='btn-Add'>Добавить</button>
          </div>
        </div>

    </div>
    )

  
}

export default connect(mapStateToProps)(AddForm);