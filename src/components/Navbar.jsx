"use client";

import Link from "next/link.js";
import { usePathname, useSearchParams } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Story",
      url: "/about",
    },
    {
      name: "Menu",
      url: "/menu",
    },
    {
      name: "Our updates",
      url: "/news",
    },
    {
      name: "Contact",
      url: "/contact",
    },
  ];

  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-lg">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <Link className="navbar-brand" href="/">
          Crispy Kitchen
        </Link>

        <div className="d-lg-none">
          <button
            type="button"
            className="custom-btn btn btn-danger"
            data-bs-toggle="modal"
            data-bs-target="#BookingModal"
          >
            Reservation
          </button>
        </div>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            {links.map((l) => (
              <li className="nav-item" key={l.name}>
                <Link
                  className={`nav-link ${l.url === pathname ? "active" : ""}`}
                  href={l.url}
                >
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="d-none d-lg-block">
          <button
            type="button"
            className="custom-btn btn btn-danger"
            data-bs-toggle="modal"
            data-bs-target="#BookingModal"
          >
            Reservation
          </button>
        </div>
      </div>
    </nav>
  );
}
