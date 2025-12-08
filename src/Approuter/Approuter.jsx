import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppFrom from "../AppFrom";
import TaxFormPage from "../TaxFormPage";
import ToasterCompents from "../components/toaster/ToasterCompents";
import App from "../App";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,

    },
    {
        path: "/management-form",
        element: <TaxFormPage />,
    }
]);
 

export default function AppRoutes() {
  return <RouterProvider router={router} />;
}
