import { createBrowserRouter} from "react-router-dom";
import Home from "../Views/Home";
import App from "../App";
import Projects from "../Views/Projects";
import Certificates from "../Views/Certificates";
import AboutMe from "../Views/AboutMe";
import GetInTouch from "../Views/GetInTouch";
import Experience from "../Views/Experience";
import Education from "../Views/Education";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path: "/projects",
                element: <Projects />,
            },
            {
                path: "/certificates",
                element: <Certificates />,
            },
            {
                path: "/about",
                element: <AboutMe />,
            },
            {
                path: "/Home",
                element: <Home />,
            },
            {
                path: "/contact",
                element: <GetInTouch />,
            },
            {
                path: "/experience",
                element: <Experience />,
            },
            {
                path:"/education",
                element:<Education/>
            }
        ]
    },

    
]);

export default router;