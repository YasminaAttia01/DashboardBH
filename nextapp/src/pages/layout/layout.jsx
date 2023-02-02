import NavBar from "./NavBar";
import BlogList from "..";

export default function Layout({children}){
    return (
    <>
    <NavBar/>
    <div fluid> {children}</div>
    </>)
}