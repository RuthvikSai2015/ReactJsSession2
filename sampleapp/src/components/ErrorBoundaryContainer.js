import { ErrorBoundary } from "react-error-boundary";

function Header() {
    const user = null;
    return <h1> Header Component {user.name}</h1>
}
function Nav() {
    return <h1> Nav Component</h1>
}
function Main() {
    return <h1> Main Component</h1>
}
function Footer() {
    return <h1>Footer Component</h1>
}
// function ErrorFallBackComponent({error}){
//     console.log(error);
//     return<h1>Oops! Something has failed</h1>
// }
function ErrorFallBackComponent(component){
    console.log("Component Name--",component);
    return<h1>Oops! Something has failed</h1>
}
function ErrorBoundaryContainer() {
    return (
        <>
            <ErrorBoundary FallbackComponent={() => ErrorFallBackComponent("Header")}>
                <Header />
            </ErrorBoundary>
            <Nav />
            <Main />
            <Footer />
        </>
    )
}
export default ErrorBoundaryContainer;