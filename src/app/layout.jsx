import "../styles/globals.css";
import "../styles/bootstrap.min.css";
import "../styles/bootstrap-icons.css";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

export const metadata = {
  title: "My Page Title",
  charSet: "utf-8",
  viewport: "width=device-width, initial-scale=1",
  links: [
    {
      href: "https://fonts.googleapis.com",
    },
    {
      href: "https://fonts.gstatic.com",
      crossOrigin: true,
    },
    {
      href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap",
      rel: "stylesheet",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
