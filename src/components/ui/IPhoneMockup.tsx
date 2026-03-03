"use client";

import { ReactNode } from "react";
import styles from "./IPhoneMockup.module.css";

interface IPhoneMockupProps {
  children: ReactNode;
}

export default function IPhoneMockup({ children }: IPhoneMockupProps) {
  return (
    <div className={styles.mockupContainer}>
      <div className={styles.iphone}>
        {/* Dynamic Island */}
        <div className={styles.dynamicIsland} />

        {/* Screen content */}
        <div className={styles.screen}>
          {children}
        </div>

        {/* Side buttons */}
        <div className={styles.volumeUp} />
        <div className={styles.volumeDown} />
        <div className={styles.powerButton} />
      </div>
    </div>
  );
}
