import { RouteObject, useRoutes } from 'react-router-dom'
import Layout from '../components/Layout'
import DWj from '../pages/Dwj'

export default function RouterConfig() {
  const routes: RouteObject[] = [
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: 'dwj',
          element: <DWj />
        }
      ]
    }
  ]
  return useRoutes(routes)
}