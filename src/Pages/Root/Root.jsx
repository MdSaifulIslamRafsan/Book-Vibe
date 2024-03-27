import { Outlet, useNavigation } from "react-router-dom";
import Header from "../../Component/Header/Header";
import Footer from './../../Component/Footer/Footer';


const Root = () => {
    const navigation = useNavigation();

    return (
        <>
        <header className="h-20">
            <Header></Header>
        </header>
        {
            navigation.state === "loading" ? <div className="flex justify-center items-center h-screen">
                <div className="w-16  h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
            </div>  :  <main className="max-w-[1440px] mx-auto lg:w-10/12">
            <Outlet></Outlet>
        </main>
        }
        <Footer></Footer>
        
        </>
    );
};

export default Root;