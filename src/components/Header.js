import Image from "next/image";
import Link from "next/link";
import TodayDate from "./TodayDate";
import Navbar from "./Navbar";
import AuthButtons from "./AuthButtons";

export default function Header() {
  return (
    <header className="bg-white">
      <div className="relative mx-auto max-w-6xl px-4 py-3">
        <Link href="/" className="mx-auto flex w-fit items-center gap-2">
          <Image
            src="/logo.png"
            alt="Bangla News logo"
            width={44}
            height={44}
            className="rounded-lg"
            priority
          />
          <div>
            <span className="block text-2xl font-bold leading-tight text-red-700 md:text-3xl">
              Bangla News 24
            </span>
            <TodayDate />
          </div>
        </Link>

        <div className="mt-3 flex justify-center md:absolute md:right-4 md:top-4 md:mt-0">
          <AuthButtons />
        </div>
      </div>

      <Navbar />
    </header>
  );
}
