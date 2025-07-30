import Header from "../../../reusable-components/Header/Header";
import Footer from "../../../reusable-components/Footer/Footer";
import styles from "./Join.module.css";
import React from "react";

import { FaChurch, FaPrayingHands, FaUsers } from 'react-icons/fa';

function Join() {
  return (
    <>
      <div className={styles.joinContainer}>
        <Header className={styles.header} />
        <h2 className={styles.introHeader}>Small Christian Communities</h2>

        <div className={styles.scc}>
          <h3> What's an SCC?</h3>
          <p>
            A Small Christian Community (SCC) is the Church within the
            neighbourhood, comprising a manageable group of families, which help
            to promote communion, co-responsibility, and gives every member a
            sense of belonging to the Church.
          </p>
        </div>


        <div className={styles.pageContainer}>
          <div className={styles.membershipContainer}>
            {/* First Row - Header */}
            <div className={styles.headerRow}>
              <h1 className={styles.title}>SCC Membership</h1>
              <h2 className={styles.subtitle}>Why should you be a member</h2>
              <p className={styles.description}>
                All parishioners, unless they're currently students who already
                attend their own bible study groups, are encouraged to identify
                with one Small Christian Community (SCC) and join. It is the
                proper way of being an authentic part of a community of believers.
              </p>
            </div>

            {/* Second Row - Three Columns */}
            <div className={styles.massesRow}>
              {/* First Mass Column */}
              <div className={`${styles.massColumn} ${styles.firstMass}`}>
                <FaChurch className={styles.massIcon} />
                <h3>St. Augustine 1st Mass</h3>
                <p>
                  The first mass is a Kiswahili mass mainly attended by adults.
                  It starts at 7 am and goes up to around 9 am. Many families and
                  elder parishioners prefer this mass as it is early and gives
                  them time to continue with their day.
                </p>
              </div>

              {/* Second Mass Column */}
              <div className={`${styles.massColumn} ${styles.secondMass}`}>
                <FaChurch className={styles.massIcon} />
                <h3>St. Augustine 2nd Mass</h3>
                <p>
                  The second mass is an English mass mainly attended by university students.
                  It starts at 9 am and ends around 11 am. There are also a few jumuiya of non-students
                  who join this mass. All students are welcome to participate as there is a student
                  jumuiya for them to grow their faith together.
                </p>
              </div>

              {/* Third Mass Column */}
              <div className={`${styles.massColumn} ${styles.thirdMass}`}>
                <FaChurch className={styles.massIcon} />
                <h3>St. Augustine 3rd Mass</h3>
                <p>
                  The third mass is a Kiswahili mass for adults and the wider community.
                  It starts at 11 am and goes up to about 1 pm. Many working adults and families
                  who prefer a later time come for this mass to worship and share in community life.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section: Join Form */}
        <div className={styles.formContainer}>
          <h1 className={styles.mainTitle}>Joining Jumuiya/SCC</h1>

          <div className={styles.formContent}>
            {/* First Row - Two Columns */}
            <div className={styles.formRow}>
              <div className={styles.formColumn}>
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" placeholder="Enter your full name" />
              </div>

              <div className={styles.formColumn}>
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" placeholder="Enter your phone number" />
              </div>
            </div>

            {/* Second Row - Two Columns */}
            <div className={styles.formRow}>
              <div className={styles.formColumn}>
                <label htmlFor="email">Your E-mail</label>
                <input type="email" id="email" placeholder="Enter your email address" />
              </div>

              <div className={styles.formColumn}>
                <label>Choose Gender</label>
                <div className={styles.radioGroup}>
                  <label>
                    <input type="radio" name="gender" value="male" /> Male
                  </label>
                  <label>
                    <input type="radio" name="gender" value="female" /> Female
                  </label>
                  <label>
                    <input type="radio" name="gender" value="other" /> Other
                  </label>
                </div>
              </div>
            </div>

            {/* Full Width Row */}
            <div className={styles.fullWidthRow}>
              <label htmlFor="location">Your Residential Location</label>
              <input
                type="text"
                id="location"
                placeholder="Enter your residential area"
              />
            </div>

            {/* Submit Button Row */}
            <div className={styles.buttonRow}>
              <button type="submit" className={styles.submitButton}>
                Join SCC
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Join;
