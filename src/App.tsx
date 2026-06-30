import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './components/RootLayout'
import HomePage from './pages/HomePage'
import CategoryPage from './pages/CategoryPage'
import StoriesPage from './pages/StoriesPage'
import StoryPage from './pages/StoryPage'

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/work/:slug', element: <CategoryPage /> },
      { path: '/stories', element: <StoriesPage /> },
      { path: '/stories/:slug', element: <StoryPage /> },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
