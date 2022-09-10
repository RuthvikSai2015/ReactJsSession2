import {createContext, useContext} from 'react';

export const ThemeContext = createContext();
function ReactContextApi({theme}){
    return (
        <>
          <ThemeContext.Provider value="dark">
            <Header/>
          </ThemeContext.Provider>
        </>
    )
}
// function Header(){
//     return (
//         <ThemeContext.Consumer>
//             {
//                 value => <h1>{value}</h1>
//             }
//         </ThemeContext.Consumer>
//     )
// }
function Header(){
    const value = useContext(ThemeContext);
    return <h1>{value}</h1>
}
export default ReactContextApi;