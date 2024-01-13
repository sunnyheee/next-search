import "./globals.css";

export const metadata = {
  title: "Search",
  description: "Search",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className=" bg-gray-100">{children}</body>
    </html>
  );
}
