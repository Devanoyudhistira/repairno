import { Inter } from "next/font/google"
import "./globals.css";
import Footnav from "@/components/footnav";
import { ThemeProvider } from "@/components/themeprovider";
const inter = Inter()
export const metadata = {
  title: "App to manage your repair item from your phone",
  description: "this is just a portfolio by devano yudhistira",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.className} h-full antialiased`}>
      <body className="min-h-full overflow-x-hidden flex flex-col pb-20 ">
        <ThemeProvider attribute="class"
          defaultTheme="light"
          enableSystem
          enableTransitionOnChange >
          {children}
          <Footnav />
        </ThemeProvider>
      </body>
    </html>
  );
}
