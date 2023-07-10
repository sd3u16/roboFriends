import React, {component} from "react";
import {robots} from "./robots";
import Card from "./Card";

const CardList = ({robots})=>{

   return <div>
        {robots.map(function(d, idx){
            return (<Card  key={idx} id={d.id} email={d.email} name={d.name}/>)
        })}
    </div>


}

export default CardList;
