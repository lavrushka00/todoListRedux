import React, {useState} from "react";
import { connect } from "react-redux";




const mapStateToProps = (state) => {
    console.log(state)
    return {
        isChange: state.isChange.isChange,
        changeItem: state.isChange.changeItem
        
    }
}

const Close = (props) => {
    props.dispatch({type: 'CLOSE_CHANGE'})
}


function ChangeIitem(props){
    const [change, setChange] = useState(props.changeItem.content)  

    const Change = (props) => {
        let newItem = {content: change, status: props.changeItem.status, id: props.changeItem.id}
        props.dispatch({type: "CHANGE_ITEM", payload : newItem})

        props.dispatch({type: "CLOSE_CHANGE"})

        if(change === ""){
            props.dispatch({ type: "DELETE", payload: props.changeItem.id})
        }
    }

    return (
        <div className="chengeItem">
        <div className="addcont">
         
          <textarea onChange={(e) =>setChange(e.target.value)} className="chengeContent" name="" id="" cols="30" rows="10" placeholder="Введите текст задачи" defaultValue={props.changeItem.content}></textarea>
          <div>
            <button className="btn-Close" onClick={() => Close(props)}>Закрыть</button>
            <button className="btn-Add" onClick ={() => Change(props)}>Сохранить</button>
          </div>
        </div>
      </div>
    )
}


export default connect(mapStateToProps)(ChangeIitem);