"use client";

import Link from "next/link";
import { space } from "../fonts";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import Burger from "./burger";
import manateeCommune from "../../public/manatee commune logo 2024.svg";
import Image from "next/image";

const routes = ["live", "releases", "person"];

const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: {
    opacity: 1,
  },
};

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: 1,
    },
  },
};

function Routes() {
  return (
    <>
      {routes.map((route, i) => (
        <Link href={`/${route}`} key={i}>
          <div className="--hover-social pl-10">{route}</div>
        </Link>
      ))}
    </>
  );
}

function RoutesMobile() {
  const [open, cycleOpen] = useCycle(false, true);
  const handleOnClick = () => {
    cycleOpen();
  };
  return (
    <div className="z-10 md:hidden">
      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ width: 0 }}
            animate={{ width: 300 }}
            exit={{
              width: 0,
            }}
          >
            <motion.div
              className="fixed left-0 top-0 bg-white w-full h-screen p-10 text-5xl uppercase"
              initial="closed"
              animate="open"
              exit="closed"
              variants={sideVariants}
            >
              <div className="flex flex-col h-full justify-end">
                {routes.map((route, i) => (
                  <motion.div key={route} variants={itemVariants}>
                    <Link href={`/${route}`} key={i} onClick={handleOnClick}>
                      <div className="--hover-social mb-24">{route}</div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
      {/* <div className="btn-container">
          <button onClick={cycleOpen}>{open ? "Close" : "Open"}</button>
        </div> */}
      <Burger onClick={cycleOpen} open={open} />
    </div>
  );
}

export default function Nav() {
  return (
    <div className="flex justify-center w-full">
      <div className="w-full flex items-end justify-between relative">
        <div className={`${space.className} text-5xl --hover-social`}>
          <Link href="/">
            <Image src={manateeCommune} alt="svg" width="200" />
          </Link>
        </div>
        <div className="uppercase hidden md:flex">
          <Routes />
        </div>
        <RoutesMobile />
      </div>
    </div>
  );
}
