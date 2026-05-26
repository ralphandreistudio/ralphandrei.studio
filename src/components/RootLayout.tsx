import { Outlet, useLocation } from 'react-router-dom'
import BackToTop from './BackToTop'
import PageTransition from './PageTransition'

export default function RootLayout() {
  const location = useLocation()

  return (
    <>
      <PageTransition key={location.pathname}>
        <Outlet />
      </PageTransition>
      <BackToTop />
    </>
  )
}
