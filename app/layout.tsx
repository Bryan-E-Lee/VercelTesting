import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { ReactChildren } from '@/library/utilities';

export default function RootLayout({children}: ReactChildren) {
  return (
      <html lang="en">
          <body className={`${inter.className} antialiased`}>
              {children}
          </body>
      </html>
  );
}
