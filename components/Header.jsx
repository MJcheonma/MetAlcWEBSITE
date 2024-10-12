import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router"; // Import useRouter

import Socials from "../components/Socials";

const Header = () => {
  const router = useRouter(); // Get the router object
  const isArtworkPage = router.asPath === '/artwork' || router.asPath === 'https://community.metalcproductions.com/artwork'; // Check if the current page is /artwork or the full URL

  return (
    <header className="absolute z-30 w-full items-center px-16 xl-px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          <Socials justifyCenter={isArtworkPage} />
        </div>
      </div>
    </header>
  );
};

export default Header;