import React from "react";
const ToDolist=(props)=>{
    return(
        <>
            <div className="todostyle">
                <i class="fa fa-times" aria-hidden="true" onClick={()=>{
                    props.onSelect(props.id);
                }}></i>
                <li>{props.text}</li>
            </div>
        </>
    )
};

export default ToDolist;