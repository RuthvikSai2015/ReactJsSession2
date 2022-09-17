import {useAuthState} from 'react-firebase-hooks/auth'
import {auth} from '../../Firebase';
function Home(){
    const {user,loading,error} = useAuthState(auth);
    return (
        <h1>Home Component Welcome {user?.email}</h1>
    )
}
export default Home;