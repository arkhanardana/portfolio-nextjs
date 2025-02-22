import Link from "next/link";
import { Instagram, Github, Linkedin } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const logo = {
    url: "/favicon.png",
  };

  return (
    <footer className="text-white bg-black mt-16">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image src={logo.url} alt="logo-gw" width={50} height={50} loading="lazy" />
              <span className="text-xl font-bold">Arkhan Ardana</span>
            </Link>
            <p className="text-gray-400">arkhanardanaok123@gmail.com</p>
          </div>
          <nav className="space-y-4 md:col-span-2">
            <ul className="grid grid-cols-2 gap-2">
              {["Home", "About", "Skills", "Project", "Contact"].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase()}`} className="transition-colors hover:text-gray-600">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Reach Me</h3>
            <div className="flex space-x-4">
              <Link
                href="https://instagram.com/arkhanardna"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-gray-600"
              >
                <Instagram size={24} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://github.com/arkhanardana"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-gray-600"
              >
                <Github size={24} />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/arkhan-ardana-86a705270/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-gray-600"
              >
                <Linkedin size={24} />
                <span className="sr-only">Linkedin</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="pt-8 mt-8 text-center text-gray-600 border-t border-gray-800">
          <p>&copy; {new Date().getFullYear()} Arkhan Ardana. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
