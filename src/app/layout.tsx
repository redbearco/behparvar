import type { Metadata } from "next";
import "../../styles/globals.scss";
import Providers from "../../redux/providers/Providers";
import Fav from '../../public/images/favicon.ico'

export const metadata: Metadata = {
  title: "بهپرور",
  description: "شرکت بهپرور",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <Providers>
          <div className="">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
