import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppFrom from "../AppFrom";
import TaxFormPage from "../TaxFormPage";
import ToasterCompents from "../components/toaster/ToasterCompents";

const router = createBrowserRouter([
    {
        path: "/",
        element: <ToasterCompents />,

    },
    {
        path: "/management-form",
        element: <TaxFormPage />,
    }
]);
 

export default function AppRoutes() {
  return <RouterProvider router={router} />;
}
