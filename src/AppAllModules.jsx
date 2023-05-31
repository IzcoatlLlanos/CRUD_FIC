import { RouterProvider } from "react-router-dom";
import  Router from "./navigation/NaviRoutesEducation";
import Footer from "./share/pages/Footer";

export default function AppAllModules() {
    return (
        <>
            <div id='div-app'>
                {/* <h1>Main App - All Modules</h1> */}
                <RouterProvider router={Router} />
                <div id='div-footer'>
                    <Footer />
                </div>
            </div>
        </>
    );
}