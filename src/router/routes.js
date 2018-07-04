export default [ 
    {
        path: "/master-catalog",
        name: "master",
        component: () => import("../pages/mastercatalog")
    },
    {
        path: "/user-catalog",
        name: "user",
        component: () => import("../pages/usercatalog")
    },
    {
        path: "/search",
        name: "search",
        component: () => import("../pages/search")
    },
    {
        path: "/result-form",
        name: "result",
        component: () => import("../pages/resultform")
    },
    {
        path: "/",
        name: "author",
        component: () => import("../pages/author")
    }
  ];
  