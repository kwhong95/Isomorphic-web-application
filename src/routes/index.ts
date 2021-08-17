import Home from "./Home";
import PageNotFound from "./PageNotFound";

interface IRoutes {
  path: string;
  exact: boolean;
  component: any;
  name: string;
}

const routes: IRoutes[] = [
  {
    path: '/',
    exact: true,
    component: Home,
    name: "Home Page"
  },
  {
    path: '*',
    exact: false,
    component: PageNotFound,
    name: "Page Not Found(404)"
  }
]

export default routes;
