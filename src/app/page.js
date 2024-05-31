"use client";
import styles from "./page.module.css";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";

export default function Home() {
  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <div className={styles.main}>
      <div className={styles.outer_div}>
        <p className={styles.p1}>Adding Package</p>
        <div className={styles.buttons}>
          <button className={styles.btn1}>Save Package</button>
          <button className={styles.btn2}>Delete</button>
        </div>
        <div className={styles.form}>
          <div className={styles.div1}>
            <div className={styles.content}>
              <p className={styles.p2}>Package name</p>
              <input
                className={styles.input}
                placeholder="Enter package name"
              ></input>
              <p className={styles.p2}>Time period</p>
              <input
                className={styles.input}
                placeholder="Enter time period"
              ></input>
              <div className={styles.costs}>
                <div>
                  <p className={styles.p2}>Original cost</p>
                  <input
                    className={styles.input1}
                    placeholder="Enter original cost"
                  ></input>
                </div>
                <div>
                  <p className={styles.p2}>Discount cost</p>
                  <input
                    className={styles.input1}
                    placeholder="Enter discount cost"
                  ></input>
                </div>
              </div>
              <p className={styles.p2}>City tags in order</p>
              <input
                className={styles.input}
                placeholder="Enter city tags"
              ></input>
              <p className={styles.p2}>Hotel options</p>
              <div className={styles.hotels}>
                <Checkbox
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "controlled" }}
                />
                <p className={styles.p3}>5 Star</p>{" "}
                <Checkbox
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "controlled" }}
                />
                <p className={styles.p3}>4 Star</p>{" "}
                <Checkbox
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "controlled" }}
                />
                <p className={styles.p3}>3 Star</p>
              </div>
              <p className={styles.p2}>Included service</p>
              <div className={styles.services}>
                <Checkbox
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "controlled" }}
                />
                <p className={styles.p3}>Breakfast</p>{" "}
                <Checkbox
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "controlled" }}
                />
                <p className={styles.p3}>Transfers</p>{" "}
                <Checkbox
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "controlled" }}
                />
                <p className={styles.p3}>Sightseeing</p>
                <Checkbox
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "controlled" }}
                />
                <p className={styles.p3}>Watersports</p>
              </div>
              <p className={styles.p2}>Overview</p>
              <input
                className={styles.input}
                placeholder="Enter Overview"
              ></input>
              <p className={styles.p2}>Itinerary plan</p>
              <p className={styles.p2}>Title</p>
              <input className={styles.input} placeholder="Enter title"></input>
              <br />
              <p className={styles.p2}>Description</p>
              <textarea
                className={styles.input3}
                placeholder="Enter description"
              ></textarea>
            </div>
          </div>
          <div className={styles.div2}>
            <p className={styles.p2}>Image</p>
            <input type="file" className={styles.file}></input>
            <div className={styles.img}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
