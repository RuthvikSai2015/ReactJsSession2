import { Routes, Route, Link, useNavigate } from 'react-router-dom'

function Home() {
    return <h1>Home Component</h1>
}
function About() {
    return <h1>About Component</h1>
}
function NavBar() {
    return (
        <nav>
            <Link to="/">Home |</Link>
            <Link to="/about"> About</Link>
        </nav>
    )
}
function NotFound() {
 const navigate = useNavigate();
  return (
    <>
    <h1>Looks like you are in wrong page please click on Home to return</h1>
    <button onClick={() => navigate("/")}>Home</button>
    {/* <Link to="/">Home |</Link> */}
    </>
  )
}
function RouterExample() {

    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </>
    )

}
export default RouterExample;