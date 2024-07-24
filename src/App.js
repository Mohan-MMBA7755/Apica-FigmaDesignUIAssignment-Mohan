import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import './index.css';
import './components/Sidebar/sidebar.css'
import DashboardMain from './components/DashboardMain';
import Orders from './components/Orders';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';

const App = ()=>{

  return (
    <RouterProvider router={appRouter}/>
  );
}

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<DashboardMain/>
      },
      {
        path:"/Orders",
        element:<Orders/>
      }
    ]
}
]);

export default App;


