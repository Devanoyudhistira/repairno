import { Inter } from "next/font/google"
import "./globals.css";
import Footnav from "@/components/footnav";
import { ThemeProvider } from "@/components/themeprovider";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import Sidebarnav from "@/components/admin/sidebarnav";
const inter = Inter()
export const metadata = {
  title: "App to manage your repair item from your phone",
  description: "this is just a portfolio by devano yudhistira",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.className} h-full `}>
      <body className="min-h-full overflow-x-hidden flex flex-col">
        <ThemeProvider attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange  >
          <SidebarProvider>        
            <SidebarInset>
              <div className="flex bg-background">
                <main className="" >
                  {children}
                </main>
              </div>
            </SidebarInset>
          </SidebarProvider>
          <Footnav />
        </ThemeProvider>
      </body>
    </html >
  );
}
