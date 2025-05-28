import {Outlet} from "react-router-dom";
import Header from "./header/Header";

const MainLayout = () => {
    return (
        <div className={"flex flex-col w-full h-auto bg-primary"}>
            <Header/>
            <main className="pt-16">
                <Outlet/>
            </main>
        </div>
    )
}

export default MainLayout;