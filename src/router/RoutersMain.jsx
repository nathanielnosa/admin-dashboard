import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements

} from "react-router-dom";
import App from "../App";
import ChartMain from "../components/ChartMain";


const RoutersMain = () => {
  const routers = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route index element={<ChartMain />} />
      </Route>
    )
  )
  return (
    <RouterProvider router={routers} />
  )
}

export default RoutersMain