import type {Metadata} from 'next';
import { Epilogue, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const epilogue = Epilogue({
  subsets: ['latin'],
  variable: '--font-headline',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'GLYPHY - High-Fidelity Font & Symbol Generator',
  description: 'Instantly copy and paste thousands of unique symbols for social media, gaming, and creative projects.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${epilogue.variable} ${jakarta.variable}`}>
      <body className="bg-surface text-on-surface font-body antialiased selection:bg-primary-container selection:text-on-primary-container" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
