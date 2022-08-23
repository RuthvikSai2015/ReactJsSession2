import React from 'react'
//Trace Component
export default function TraceComponent({componentname="trace",title,name,showTitle,number}) {
  //  const {componentname,title,name} = props;
 //   console.log("props-----------",props);
   let value = 10+number;
   console.log("numer-------",value);
  return (
    <>
      <h1> Trace Component => {componentname}</h1>
      <span> Title => {title} </span><br/>
      <span> Name => {name}</span>
    </>
  )
}
