import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { getSettings } from "@/lib/storyblock";
import RichText from "@/utils/rich_text";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  const settings = await getSettings({});
  const { footer_info2 } = settings;

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
        <Footer footerInfo={footer_info2} />
      </body>
    </html>
  );
}

function Navigation() {
  const links = [
    { href: "/", name: "Home" },
    { href: "/page1", name: "Page1" },
    { href: "/page2", name: "Page2" },
    { href: "/page3", name: "Page3" },
  ];
  return (
    <nav className="flex flex-row gap-5 justify-center py-20">
      {links.map((link, i) => (
        <Link className="hover:underline" key={link.name + i} href={link.href}>
          {link.name}
        </Link>
      ))}
    </nav>
  );
}

function Footer({ footerInfo }) {
  return (
    <footer>
      <div className="max-w-screen-lg mx-auto text-sm">
        <RichText className="flex flex-col gap-1" document={footerInfo} />
      </div>
    </footer>
  );
}
