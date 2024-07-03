import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom';
import { SpeedInsights } from '@vercel/speed-insights/react';

export default function Layout() {
  return (
	<>
		<Navbar />
		<Outlet />
		<SpeedInsights />
		<Footer />
	</>
  )
}
