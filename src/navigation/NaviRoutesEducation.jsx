import { createBrowserRouter } from "react-router-dom";
import Home from "../education/pages/Home";
import Edificios from "../education/pages/Edificios";
import Periodos from "../security/pages/Periodos";
import Etiquetas from "../security/pages/Etiquetas";
import Error from "../share/pages/Error";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Home/>,
        errorElement:<Error/>,
        children:[
            {
                path:"/edificios",
                element:<Edificios/>
            },
            {
                path:"/periodos",
                element:<Periodos/>
            },
            {
                path:"/etiquetas",
                element:<Etiquetas/>
            }
        ]
    }

]);

export default router;