import React from "react";


import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram, FaSquareWhatsapp, FaXTwitter } from "react-icons/fa6";

import {
  IoCallOutline,
  IoLocationOutline,
  IoMailOutline,
} from "react-icons/io5";
import { Link } from "react-router";
import Logo from "../Logo/Logo";

const Footer = () => {
  return (
    <div className="bg-[#EEEEEE] dark:bg-[#1E2939] ">
      <footer className="w-11/12 mx-auto md:px-6 px-2 py-14 md:py-20 font-secondary">
        <div className="footer sm:footer-horizontal gap-10">
          {/* Logo + About */}
          <aside>
            <Link to="/" className="cursor-pointer flex gap-2 items-center">
              <Logo></Logo>
              <div>
                <h4 className="text-[18px] font-semibold text-primary font-primary ">
                  Book2Door
                </h4>
                <p className="text-sm text-gray-400">
                  Delivering Knowledge to Your Doorstep
                </p>
               
              </div>
            </Link>
            <p className="text-base pt-3">
              <span className="font-semibold">10,000+</span> users worldwide trust Book2Door <br />
              for reliable library-to-home book delivery.
            </p>
          </aside>

          {/* Contact */}
          <nav>
            <h6 className="footer-title ">Contact Us</h6>
            <a className="link link-hover flex items-center gap-2 ">
              <IoLocationOutline /> 69/A, Baridhara, Dhaka
            </a>
            <a className="link link-hover flex items-center gap-2 ">
              <IoCallOutline /> +880-3334 2433
            </a>
            <a className="link link-hover flex items-center gap-2  ">
              <IoMailOutline /> book2door@gmail.com
            </a>
          </nav>

          {/* Links */}
          <nav>
            <h6 className="footer-title  ">Legal</h6>
            <Link to='/about-us' className="link link-hover  ">About us</Link>
            <a className="link link-hover  ">Cookie Policy</a>
            <a className="link link-hover  ">Privacy Policy</a>
            <a className="link link-hover  ">Terms & Conditions</a>
          </nav>

          {/* Social + Subscribe */}
          <nav>
            <h6 className="footer-title  ">Social Links</h6>
            <div className="flex items-center gap-3  ">
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="link link-hover"
              >
                <FaSquareInstagram size={30} />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="link link-hover"
              >
                <FaFacebookSquare size={30} />
              </a>
              <a
                href="https://www.linkedin.com/in/shahriar-rahman-refat/"
                target="_blank"
                rel="noopener noreferrer"
                className="link link-hover"
              >
                <FaLinkedin size={30} />
              </a>
              <a
                href="https://www.x.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="link link-hover"
              >
                <FaXTwitter size={30} />
              </a>
            </div>

            {/* Subscription */}
            <div className="pt-5 space-y-3">
              <h6 className="footer-title  ">Subscribe to Our Newsletter</h6>
              <p>
                Subscribe and stay up to date <br /> with our news and upcoming
                events.
              </p>
              <div className="join">
                <input
                  type="email"
                  placeholder="mail@gmail.com"
                  className="input input-bordered join-item rounded-l-full bg-white border-primary  "
                />
                <button className="join-item bg-primary text-white font-medium px-6 rounded-r-full hover:bg-white border border-primary hover:text-black transition">
                  Subscribe
                </button>
              </div>
            </div>
          </nav>
        </div>
      </footer>

      {/* Bottom section */}
      <div className="text-center py-5 border-t border-gray-300 text-sm   ">
        <p>
          © {new Date().getFullYear()} — All rights reserved by{" "}
          <span className="font-semibold  text-primary">Book2Door</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;