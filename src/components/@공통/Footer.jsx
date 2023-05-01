import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container flex flex-col md:flex-row items-center justify-between my-8">
        <div>
          <p className="text-sm md:text-base">
            ©Yuseon Kim 2023. ALL RIGHTS RESERVED.
          </p>
        </div>
        <div className="border rounded-full bg-white border-black border-2 py-1 md:px-3 px-2 flex items-center justify-center md:m-0 my-1">
          <Link
            href="https://github.com/robin3565"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center"
          >
            <Image
              width="30"
              height="30"
              className="rounded-full"
              src="/img/github.png"
            />
            <span className="mx-1 md:text-xl text-base font-semibold">
              Github
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
