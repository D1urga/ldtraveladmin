"use client";
import styles from "./page.module.css";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";
import axios from "axios";
export default function Home() {
  const [checked, setChecked] = useState(false);
  const [fivestar, setFiveStar] = useState(false);
  const [fourstar, setFourStar] = useState(false);
  const [threestar, setThreeStar] = useState(false);
  const [breakfast, setBreakfast] = useState(false);
  const [transfers, setTransfers] = useState(false);
  const [sightseeing, setSightseeing] = useState(false);
  const [watersports, setWatersports] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const fivechange = (event) => {
    setFiveStar(event.target.checked);
  };
  const fourchange = (event) => {
    setFourStar(event.target.checked);
  };
  const threechange = (event) => {
    setThreeStar(event.target.checked);
  };
  const breakfastchange = (event) => {
    setBreakfast(event.target.checked);
  };
  const transferschange = (event) => {
    setTransfers(event.target.checked);
  };
  const sightseeingchange = (event) => {
    setSightseeing(event.target.checked);
  };
  const watersportschange = (event) => {
    setWatersports(event.target.checked);
  };
  var list1 = [fivestar, fourstar, threestar];
  var list2 = [breakfast, transfers, sightseeing, watersports];
  const [isposting, setisposting] = useState(false);
  const [formData, setFormData] = useState({
    packageName: "hdhdfds",
    originalCost: "rwere",
    discountCost: "tewt",
    description: "rwerwrwerw",
    distance: "rwerwerwrwe",
    ittitle: "rwerwrwerw",
    itdes: "rwerwerwrwe",
    duration: "weter",
    cityTags: "hjadsvbas",
  });
  const [imgurl, setimgurl] = useState(null);
  const [image, setImage] = useState(null);
  const handleContentchange = (e) => {
    setimgurl(e.target.files[0]);
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmitRegister = async (event) => {
    event.preventDefault();
    // setCurrentValue1(false);
    // setIsuploading(false);
    setisposting(true);

    const formData1 = new FormData();
    formData1.append("img", imgurl);
    formData1.append("packageName", formData.packageName);
    formData1.append("description", formData.description);
    formData1.append("cityTags", formData.cityTags);
    formData1.append("originalCost", formData.originalCost);
    formData1.append("discountCost", formData.discountCost);
    formData1.append("duration", formData.duration);
    formData1.append("distance", formData.distance);
    formData1.append("ittitle", formData.ittitle);
    formData1.append("itdes", formData.itdes);
    formData1.append("fivestar", String(fivestar));
    formData1.append("fourstar", String(fourstar));
    formData1.append("threestar", String(threestar));
    formData1.append("breakfast", String(breakfast));
    formData1.append("transfers", String(transfers));
    formData1.append("sightseeing", String(sightseeing));
    formData1.append("watersports", String(watersports));

    const response = await axios({
      method: "post",
      url: `https://theldtourandtravelbackend-1.onrender.com/api/v1/destinations/postDestination`,
      data: formData1,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    // setIsuploading(true);
    // setCurrentValue1(true);
    setisposting(false);
    alert("posted");
  };

  return (
    <div className={styles.main}>
      <form onSubmit={handleSubmitRegister}>
        {" "}
        <div className={styles.outer_div}>
          <p className={styles.p1}>Adding Package</p>
          <div className={styles.buttons}>
            <button className={styles.btn1} type="submit">
              Save Package
            </button>
            <button className={styles.btn2}>Delete</button>
          </div>
          <div className={styles.form}>
            <div className={styles.div1}>
              <div className={styles.content}>
                <p className={styles.p2}>Package name</p>
                <input
                  className={styles.input}
                  placeholder="Enter package name"
                  name="packageName"
                  value={formData.packageName}
                  onChange={handleInputChange}
                ></input>
                <p className={styles.p2}>Time period</p>
                <input
                  className={styles.input}
                  placeholder="Enter time period"
                  name="duration"
                  value={formData.duration}
                  onChange={handleInputChange}
                ></input>
                <div className={styles.costs}>
                  <div>
                    <p className={styles.p2}>Original cost</p>
                    <input
                      className={styles.input1}
                      placeholder="Enter original cost"
                      name="originalCost"
                      value={formData.originalCost}
                      onChange={handleInputChange}
                    ></input>
                  </div>
                  <div>
                    <p className={styles.p2}>Discount cost</p>
                    <input
                      className={styles.input1}
                      placeholder="Enter discount cost"
                      originalCost
                      name="discountCost"
                      value={formData.discountCost}
                      onChange={handleInputChange}
                    ></input>
                  </div>
                </div>
                <p className={styles.p2}>City tags in order</p>
                <input
                  className={styles.input}
                  placeholder="Enter city tags"
                  name="cityTags"
                  value={formData.cityTags}
                  onChange={handleInputChange}
                ></input>
                <p className={styles.p2}>Hotel options</p>
                <div className={styles.hotels}>
                  <Checkbox
                    checked={fivestar}
                    onChange={fivechange}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                  <p className={styles.p3}>5 Star</p>{" "}
                  <Checkbox
                    checked={fourstar}
                    onChange={fourchange}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                  <p className={styles.p3}>4 Star</p>{" "}
                  <Checkbox
                    checked={threestar}
                    onChange={threechange}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                  <p className={styles.p3}>3 Star</p>
                </div>
                <p className={styles.p2}>Included service</p>
                <div className={styles.services}>
                  <Checkbox
                    checked={breakfast}
                    onChange={breakfastchange}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                  <p className={styles.p3}>Breakfast</p>{" "}
                  <Checkbox
                    checked={transfers}
                    onChange={transferschange}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                  <p className={styles.p3}>Transfers</p>{" "}
                  <Checkbox
                    checked={sightseeing}
                    onChange={sightseeingchange}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                  <p className={styles.p3}>Sightseeing</p>
                  <Checkbox
                    checked={watersports}
                    onChange={watersportschange}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                  <p className={styles.p3}>Watersports</p>
                </div>
                <p className={styles.p2}>Overview</p>
                <input
                  className={styles.input}
                  placeholder="Enter Overview"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                ></input>
                <p className={styles.p2}>Itinerary plan</p>
                <p className={styles.p2}>Title</p>
                <input
                  className={styles.input}
                  placeholder="Enter title"
                  name="ittitle"
                  value={formData.ittitle}
                  onChange={handleInputChange}
                ></input>
                <br />
                <p className={styles.p2}>Description</p>
                <textarea
                  className={styles.input3}
                  placeholder="Enter description"
                  name="itdes"
                  value={formData.itdes}
                  onChange={handleInputChange}
                ></textarea>
              </div>
            </div>
            <div className={styles.div2}>
              <p className={styles.p2}>Image</p>
              <input
                className={styles.file}
                type="file"
                name="imgurl"
                id="imgurl"
                onChange={handleContentchange}
              ></input>
              <div className={styles.img}>
                <img src={image} className={styles.myimg}></img>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
