//function Numbers(props){
function Numbers({numbers}){ //1,2,3,4,5
   const listOfItems = numbers?.map((number,index) => {
      return(
           <li key={index}>
               {number}
           </li>
      )
    })
      return(
        <ul>
            {listOfItems}
        </ul>
      )
}
export default Numbers