import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";


const inter = Inter({subsets: ["latin"]});

export const metadata = {
  title: "Finance-AI",
  description: "Get your finances mangaged easily using AI",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      
      <body
        className={`${inter.className}`}>{children}
      </body>
      {/*header*/}
      <Header></Header>

      <main className="min-h-screen ">
        {children}
      </main>
      
      {/*footer*/}
      <footer className="bg-blue-50 py-12">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>
            Made by Developer - Yash Pardhi
          </p>
        </div>
      </footer>
      
    </html>
    </ClerkProvider>
  );
}
