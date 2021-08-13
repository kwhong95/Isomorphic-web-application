import Home from "./Home";

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
]

export default routes;
