"use client";
import React, { useState } from "react";
import styles from "./styles/adminnavbar.module.css";
import Link from "next/link";
import {
  FaBars,
  FaHandshake,
  FaInstagram,
  FaPhone,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";

export default function AdminNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.main}>
      <div className={styles.outer_div}>
        <div className={styles.upper_div}>
          {/* <div className={styles.contact}>
            {" "}
            <FaPhoneAlt className={styles.icon} />
            <div>
              <p>Call us for details</p>
              <p>1800-123-5555</p>
            </div>
          </div> */}
          <div className={styles.title}>
            <img src="/logo.png" className={styles.logo}></img>
            <p>The Ldtravel</p>
          </div>
          {/* <div className={styles.join}>
            {" "}
            <FaHandshake className={styles.icon} />
            <div>
              <p>Travel Agent?</p>
              <p>Join</p>
            </div>
          </div> */}
        </div>
        {/* <div className={styles.devider}></div> */}
        <div
          className={styles.lower_div}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <FaBars className={styles.menu} />
          <div className={isOpen ? styles.nav : styles.nav1}>
            {/* <div className={styles.icons}>
              <FaInstagram className={styles.icon2} />
              <FaTwitter className={styles.icon2} />
            </div> */}
            <ul className={styles.list}>
              <li>
                <Link className={styles.links} href="">
                  Add trips
                </Link>
              </li>
              <li>
                <Link className={styles.links} href="">
                  messages
                </Link>
              </li>{" "}
              {/* <li>
                <Link className={styles.links} href="">
                  Destination
                </Link>
              </li>{" "}
              <li>
                <Link className={styles.links} href="">
                  About us
                </Link>
              </li>{" "}
              <li>
                <Link className={styles.links} href="">
                  Contact us
                </Link>
              </li>{" "} */}
            </ul>
            {/* <button className={styles.btn}>Book Now</button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
