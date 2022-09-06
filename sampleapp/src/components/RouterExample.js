import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


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
            <Link to="/about"> About |</Link>
            <Link to="/posts"> Posts</Link>
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
function Posts() {
    const [content, setContent] = useState([]);
    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setContent(json))

    }, [])
    return (
        <>
            <Outlet />
            <ul>
                {
                    content.map((post) => {
                        return (
                            <li key={post.id}>
                                <Link to={`${post.id}`}>{post.id}</Link>
                            </li>
                        )
                    }
                    )}
            </ul>
        </>
    )
}
function Post() {
    const [content, setContent] = useState({});
    console.log("use params------", useParams());
    const { id } = useParams();
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => response.json())
            .then(json => setContent(json))

    }, [id])
    return (
        <>
            <p>{content.title}</p>
            <p>{content.body}</p>
        </>
    )
}
function RouterExample() {

    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/posts" element={<Posts />}>
                    <Route path=":id" element={<Post />} />
                </Route>
                <Route path="/about" element={<About />} />
                <Route path="*" element={<NotFound />} />

            </Routes>
        </>
    )

}
export default RouterExample;