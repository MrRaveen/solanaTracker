import Link from "next/link";
import "./globals.css";
import { Suspense } from "react";
import Loading from "./loading";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <head></head>
      <body>
        <nav>
          <div className="flex justify-center items-center text-lg font-bold bg-slate-900 text-white mt-4 ml-4 mr-4 rounded-3xl">
            <Link href="/" className="m-8">Home</Link>
            <Link href="/wallet" className="m-8">Wallet</Link>
            <Link href="/phantom" className="m-8">Phantom Wallet</Link>
          </div>
        </nav>
        <Suspense fallback={<Loading></Loading>}>{children}</Suspense>
      </body>
    </html>
  );
}
