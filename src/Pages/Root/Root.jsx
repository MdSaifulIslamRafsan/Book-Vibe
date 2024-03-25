import { Outlet } from "react-router-dom";
import Header from "../../Component/Header/Header";


const Root = () => {
    return (
        <>
        <header className="">
            <Header></Header>
        </header>
        <main className="max-w-[1440px] mx-auto lg:w-10/12">
            <Outlet></Outlet>
        </main>
        
        </>
    );
};

export default Root;