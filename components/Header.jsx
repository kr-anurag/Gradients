import { RiTwitterLine } from "react-icons/ri";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { motion } from "framer-motion";
import { GoSignIn } from "react-icons/go";

export default function Header() {
  return (
    <div className="w-screen header p-6 flex flex-row justify-between items-center h-[6em]">
      {/* logo/name */}

      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <p className="w-40 py-2 grid place-items-center bg-[#ffbf24] rounded font-delius font-semibold text-xl cursor-pointer logo md:text-2xl md:p-3 md:w-44">
          gradient deck
        </p>
      </motion.div>

      {/* twitter link */}
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <p className="w-32 p-3 md:w-34  bg-[#fafafa] cursor-pointer shadow rounded hover:drop-shadow-xl md:w-34 ">
          <a
            href="https://twitter.com/kr_anurag_"
            className="flex flex-row items-center justify-center"
          >
            <RiTwitterLine size="35" />
            <span className="font-poppins font-medium text-xl">Anurag</span>
          </a>
        </p>
      </motion.div>

      {/* auth component */}

      <SignedOut>
        <div className="grid place-items-center p-1 bg-[#020202] text-white font-poppins font-medium rounded hover:drop-shadow-xl md:p-2 sm:w-24 lg:w-28 lg:p-3">
          <a href="/sign-in" className="flex flex-row items-center">
            <GoSignIn />
            <span className="hidden sm:inline sm:pl-1 lg:pl-2 xl:pl-3">
              Sign In
            </span>
          </a>
        </div>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
}
