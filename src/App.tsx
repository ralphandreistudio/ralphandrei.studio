import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './components/RootLayout'
import HomePage from './pages/HomePage'
import CategoryPage from './pages/CategoryPage'

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/work/:slug', element: <CategoryPage /> },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
