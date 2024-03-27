"use client";

import Link from "next/link.js";
import { usePathname } from "next/navigation";
import { useRef } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const navbarCollapseRef = useRef();
  const formRef = useRef(null);

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

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);

    try {
      const response = await fetch('/api/reservations', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        console.log('Form submitted successfully');
        // Optionally, you can reset the form after successful submission
        formRef.current.reset();
      } else {
        console.error('Failed to submit form:', response.statusText);
        // Handle errors here
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle errors here
    }
  };

  return (
    <>
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

          <div
            className="collapse navbar-collapse"
            id="navbarNav"
            ref={navbarCollapseRef}
          >
            <ul className="navbar-nav mx-auto">
              {links.map((l) => (
                <li className="nav-item" key={l.name}>
                  <Link
                    className={`nav-link ${l.url === pathname ? "active" : ""}`}
                    href={l.url}
                    onClick={() => {
                      navbarCollapseRef.current.collapse("hide");
                    }}
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
      <div
        className="modal fade"
        id="BookingModal"
        tabIndex="-1"
        aria-labelledby="BookingModal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="mb-0">Reserve a table</h3>

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body d-flex flex-column justify-content-center">
              <div className="booking">
                <form
                  className="booking-form row"
                  role="form"
                  onSubmit={onSubmit}
                  ref={formRef}
                >
                  <div className="col-lg-6 col-12">
                    <label htmlFor="name" className="form-label">
                      Full Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="form-control"
                      placeholder="Your Name"
                      required
                    />
                  </div>

                  <div className="col-lg-6 col-12">
                    <label htmlFor="email" className="form-label">
                      Email Address
                    </label>

                    <input
                      type="email"
                      name="email"
                      id="email"
                      pattern="[^ @]*@[^ @]*"
                      className="form-control"
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  <div className="col-lg-6 col-12">
                    <label htmlFor="phone" className="form-label">
                      Phone Number
                    </label>

                    <input
                      type="telephone"
                      name="phone"
                      id="phone"
                      pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                      className="form-control"
                      placeholder="123-456-7890"
                    />
                  </div>

                  <div className="col-lg-6 col-12">
                    <label htmlFor="people" className="form-label">
                      Number of persons
                    </label>

                    <input
                      type="text"
                      name="people"
                      id="people"
                      className="form-control"
                      placeholder="12 persons"
                    />
                  </div>

                  <div className="col-lg-6 col-12">
                    <label htmlFor="date" className="form-label">
                      Date
                    </label>

                    <input
                      type="date"
                      name="date"
                      id="date"
                      value=""
                      className="form-control"
                    />
                  </div>

                  <div className="col-lg-6 col-12">
                    <label htmlFor="time" className="form-label">
                      Time
                    </label>

                    <select
                      className="form-select form-control"
                      name="time"
                      id="time"
                    >
                      <option value="5" selected>
                        5:00 PM
                      </option>
                      <option value="6">6:00 PM</option>
                      <option value="7">7:00 PM</option>
                      <option value="8">8:00 PM</option>
                      <option value="9">9:00 PM</option>
                    </select>
                  </div>

                  <div className="col-12">
                    <label htmlFor="message" className="form-label">
                      Special Request
                    </label>

                    <textarea
                      className="form-control"
                      rows="4"
                      id="message"
                      name="message"
                      placeholder=""
                    ></textarea>
                  </div>

                  <div className="col-lg-4 col-12 ms-auto">
                    <button type="submit" className="form-control">
                      Submit Request
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="modal-footer"></div>
          </div>
        </div>
      </div>
    </>
  );
}
