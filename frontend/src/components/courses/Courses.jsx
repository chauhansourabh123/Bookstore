import Course from "../Course"
import Footer from "../Footer"
import Navbar from "../Navbar"

const Courses = () =>{
    return (
        <>
        <Navbar btnName="Logout" />
        <Course />
        <Footer />
        </>
    )
}

export default Courses;