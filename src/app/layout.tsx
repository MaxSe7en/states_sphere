import "@/styles/globals.css";

export const metadata = {
  title: "BillTracker + Events",
  description: "Track bills and community events",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="h-screen bg-rose-50 flex overflow-hidden">
        {children}
      </body>
    </html>
  );
}
