import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CategoryPage from './pages/CategoryPage'

const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/work/:slug', element: <CategoryPage /> },
])

export default function App() {
  return <RouterProvider router={router} />
}
