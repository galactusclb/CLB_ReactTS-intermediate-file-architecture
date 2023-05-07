import { NotFound } from "@pages/NotFound"
import Dashboard from "@pages/admin/dashboard"

const routes = [
    {
        path: "/dashboard",
        component: Dashboard
    },
    // {
    //     path: "/feedbacks",
    //     component: <FeedbackList />
    // },
    // {
    //     path: "/feedbacks/:id",
    //     component: <FeedbackView />
    // },
    // {
    //     path: "/notices",
    //     component: <NoticeList />
    // },
    // {
    //     path: "/notices/create",
    //     component: <NoticeCreate />
    // },
    // {
    //     path: "/notices/:id",
    //     component: <NoticeView />
    // },
    // // {
    // //     path: "*",
    // //     component: <FeedbackList />
    // // },

    {
        path: "*",
        component: NotFound
    }
]

export default routes
