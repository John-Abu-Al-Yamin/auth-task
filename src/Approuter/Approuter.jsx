import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppFrom from "../AppFrom";
import TaxFormPage from "../TaxFormPage";
import ToasterCompents from "../components/toaster/ToasterCompents";
import App from "../App";
import AppHookForm from "../HookForm/AppHookForm";

const router = createBrowserRouter([
    {
        path: "/",
        element: <AppHookForm />,

    },
    {
        path: "/list-form",
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
