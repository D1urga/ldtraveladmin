"use client";
import React, { useState, useEffect } from "react";
import styles from "./allpackages.module.css";
import { FaInstagram, FaTrash } from "react-icons/fa";
import { format } from "date-fns";
export default function AllPackages() {
  const [data, setData] = useState(null);
  const [data1, setData1] = useState(null);
  const [isLoading1, setIsLoading1] = useState(false);
  const fetchInfo = async () => {
    setIsLoading1(true);
    const res = await fetch(
      `https://theldtourandtravelbackend.onrender.com/api/v1/destinations/getDestination`,
      {
        credentials: "include",
      }
    );
    const d = await res.json();
    setIsLoading1(false);
    return setData(d.data.reverse());
  };

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const deletePost = async ({ postId }) => {
    setIsLoading(true);
    const confirmed = window.confirm(
      "Are you sure you want to delete this post?"
    );

    if (!confirmed) {
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch(
        `https://theldtourandtravelbackend.onrender.com/api/v1/destinations/deleteDestination/${postId}`,
        {
          method: "DELETE",
        }
      );
      setData1(response);
      const data = await response.json();
      alert(data.message);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, [data1]);
  return (
    <div className={styles.outer_div}>
      {!isLoading1 ? (
        <div className={styles.grid}>
          {data &&
            data.map((data, index) => (
              <div className={styles.package} key={index}>
                <img src={data.imgurl} className={styles.img}></img>
                <p className={styles.p1}>{data.packageName}</p>
                <p className={styles.p2}>{data.cityTags}</p>

                <div className={styles.delete}>
                  <p className={styles.p3}>
                    {format(new Date(data.createdAt), "PPpp")}
                  </p>
                  <button
                    onClick={() => {
                      deletePost({ postId: data._id });
                    }}
                    disabled={isLoading}
                    className={styles.btn}
                  >
                    <FaTrash className={styles.icon} />
                  </button>
                </div>
              </div>
            ))}
        </div>
      ) : (
        <div className={styles.del}>
          <p>Loading please wait ..</p>
        </div>
      )}
      {isLoading ? (
        <div className={styles.del}>
          <p>Deleting please wait ..</p>
        </div>
      ) : null}
    </div>
  );
}
