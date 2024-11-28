import Link from "next/link";
import { links } from "@/lib/data";

import ShinyButton from "./ShinyButton";


import Image from "next/image";






const Header = () => {
  return (
    <header className="backdrop-blur-md z-40 sticky top-0 py-4 border-b border-white/15 overflow-hidden">
      <div className="section-container">
        <div className="flex justify-between items-center p-2.5 rounded-xl">
          <div>
            
            <Image src={"/zap.png"} width={110} height={110} alt="logo" />
            
          </div>
          <div>
            <nav className="flex gap-8 text-white/70 text-sm max-sm:hidden">
              {links.map((link) => (
                <Link
                  href={link.href}
                  key={link.label}
                  className="sm:hover:text-white transition duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex gap-4 items-center">
            <a href="https://wa.me/5567996169420?text=ol%C3%A1%20Gostaria%20de%20saber%20mais%20sobre%20a%20inteligencia%20articial"><ShinyButton>Saber mais </ShinyButton></a>
            <span className="sm:hidden">
            
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
