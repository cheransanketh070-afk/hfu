import type { Metadata } from 'next';
import './globals.css';
import { SiteHeader, SiteFooter } from './components';

export const metadata: Metadata = {
  title: 'HFU Enterprise | Same-Day Courier & Logistics',
  description: 'Fast, secure and flexible courier and logistics solutions across the UK and internationally.',
  keywords: ['HFU Enterprise','same day courier','Manchester logistics','pallet delivery','dedicated delivery','UK courier'],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><SiteHeader />{children}<SiteFooter /></body></html>;
}
