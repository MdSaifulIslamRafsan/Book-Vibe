import { Outlet } from "react-router-dom";
import Header from "../../Component/Header/Header";
import Footer from './../../Component/Footer/Footer';


const Root = () => {
    return (
        <>
        <header className="h-20">
            <Header></Header>
        </header>
        <main className="max-w-[1440px] mx-auto lg:w-10/12">
            <Outlet></Outlet>
        </main>
        <Footer></Footer>
        
        </>
    );
};

export default Root;