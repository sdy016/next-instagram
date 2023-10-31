import Navbar from '@/components/Navbar';
import './globals.css';
import { Open_Sans } from 'next/font/google';
import AuthContext from '@/context/AuthContext';
import SWRConfigContext from '@/context/SWRConfigContext';
import { Metadata } from 'next';

const sans = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Instagram2',
    template: 'Instagram2 | %s',
  },
  description: 'Instagram2 Photos',
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" className={sans.className}>
      <body className="w-full bg-neutral-50 overflow-auto">
        <AuthContext>
          <header className="sticky top-0 bg-white z-10 border-b">
            <div className="max-w-screen-xl mx-auto">
              <Navbar />
            </div>
          </header>
          <main className="w-full flex justify-center max-w-screen-xl mx-auto">
            <SWRConfigContext>{children}</SWRConfigContext>
          </main>
        </AuthContext>
        <div id="portal" />
      </body>
    </html>
  );
}
