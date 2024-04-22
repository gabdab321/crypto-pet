import MainPage from "../pages/MainPage";
import CoinPage from "../pages/CoinPage";

interface IRoute {
    path: string
    element: JSX.Element
}

const routes: IRoute[] = [
    {path: "/", element: <MainPage/>},
    {path: "/coin/:id", element: <CoinPage/>}
]

export default routes