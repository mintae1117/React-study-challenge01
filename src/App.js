import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Notfound from "./routes/Notfound";

function App(){
  const router = createBrowserRouter([
    {
    path: "/",
    element: <Home />,
    errorElement: <Notfound/>,
    },
    {
    path: "/character/:id",
    element: <Detail />,
    errorElement: <Notfound/>,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;