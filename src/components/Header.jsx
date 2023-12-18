"use client";
import Link from "next/link";
import { motion as m  } from "framer-motion";

function Header() {
  return (
    <>
      <header className="sticky-top">
        <nav className="navbar navbar-expand-lg bg-primary navbar-primary">
          <div className="container">
            <m.div initial={{ x: "-300%" }} animate={{x:"0%"}} transition={{delay:0.3, duration: 0.75,}}  >
            <Link
              className="navbar-brand fw-bold text-white text-uppercase"
              href="/"
              >
              Kite Computers
            </Link>
              </m.div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <m.ul initial={{y:"-100%"}} animate={{y:"0%"}} transition={{ delay:0.7, duration: 0.75 }} className="navbar-nav me-auto ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link
                    className="nav-link text-white"
                    aria-current="page"
                    href="/"
                  >
                    Home
                  </Link> 
                </li>
                <li className="nav-item dropdown">
                    <Link
                    className="nav-link dropdown-toggle text-white"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Courses
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link
                        className="dropdown-item "
                        href="/courses?mode=offline"
                      >
                        Offline Courses
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        href="/courses?mode=online"
                      >
                        Online Courses
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle text-white"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Students
                  </Link> 
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" href="/admission">
                        Admission Process
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="/auth/signup">
                        Take Admission
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="/auth/signin">
                        Student Sign In
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        href="/auth/sendverifyemail"
                      >
                        Verify Email
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle text-white"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Franchisees
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link
                        className="dropdown-item"
                        href="/franchisee/franchisees"
                      >
                        All Franchisees
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="/franchisee">
                        Apply Process & More
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="/auth/signup">
                        Apply For Franchisee
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="/auth/signin">
                        Franchisee Sign In
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        href="/auth/sendverifyemail"
                      >
                        Verify Email
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle text-white"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Certificates
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" href="/certificate">
                        Certificates
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="/certificate/get">
                        Get Certificate
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        href="/certificate/verify"
                      >
                        Verify Certificate
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-white"
                    aria-current="page"
                    href="#"
                  >
                    Store
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle text-white"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    More
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" href="/about">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="/contact">
                        Contact Us
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="/privacy&policy">
                        Privacy & Policy
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="/disclaimer">
                        Disclaimer
                      </Link>
                    </li>
                  </ul>
                </li>
              </m.ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
