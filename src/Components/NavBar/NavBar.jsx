import React from "react";
import { Link } from "react-router-dom";
import Cartwidget from "../CartWidget/Cartwidget";

export default function Item() {
  return (
    <div>
      <div className="flex flex-wrap place-items-center mb-6">
        <section className="relative mx-auto">
          <nav className="flex justify-between bg-gray-900 text-white w-screen">
            <div className="px-5 xl:px-12 py-6 flex w-full items-center">
              <Link to={"/"}>
                <img
                  className="h-16"
                  src={
                    "https://cdn.vectorstock.com/i/1000x1000/16/38/logo-for-guitar-shop-vector-20731638.webp"
                  }
                  alt="logo"
                />
              </Link>

              <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
                <Link to={"/"} className="hover:text-gray-200">
                  Home
                </Link>
                <Link to={"/category/acoustic"} className="hover:text-gray-200">
                  Acoustic
                </Link>
                <Link to={"/category/electric"} className="hover:text-gray-200">
                  Electric
                </Link>
                <Link to={"/cart"} className="hover:text-gray-200">
                  Cart
                </Link>
                <Link to={"/checkout"} className="hover:text-gray-200">
                  Checkout
                </Link>
              </ul>
            </div>
            <div className="self-center">
              <Cartwidget />
            </div>

            <Link className="navbar-burger self-center mr-12 xl:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 hover:text-gray-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </Link>
          </nav>
        </section>
      </div>
    </div>
  );
}
