import Register from "@pages/auth/Register"
import { NotFound } from "pages/NotFound"

const routes = [
    {
        path: "/",
        redirectTo: "/register"
    },
    // // {
    // //     path: "*",
    // //     redirectTo: "/notices"
    // // },
    {
        path: "/register",
        component: Register
    },
    {
        path: "*",
        component: NotFound
    },
]

export default routes
