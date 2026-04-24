"use client";

import { ReactNode } from "react";
import styles from "./IPhoneMockup.module.css";

interface IPhoneMockupProps {
  children: ReactNode;
}

export default function IPhoneMockup({ children }: IPhoneMockupProps) {
  return (
    <div className={styles.mockupContainer}>
      {/* Scene establishes perspective for 3D tilt */}
      <div className={styles.phoneScene}>
        {/* Float wrapper isolates the float animation from hover tilt */}
        <div className={styles.floatWrapper}>
          <div className={styles.iphone}>
            {/* Dynamic Island with front camera */}
            <div className={styles.dynamicIsland}>
              <div className={styles.cameraLens} />
            </div>

            {/* Screen */}
            <div className={styles.screen}>
              {/* Glass reflection overlay */}
              <div className={styles.screenGlare} />
              {children}
            </div>

            {/* Left side: Action button + volume */}
            <div className={styles.actionButton} />
            <div className={styles.volumeUp} />
            <div className={styles.volumeDown} />

            {/* Right side: Power */}
            <div className={styles.powerButton} />
          </div>
        </div>
      </div>
    </div>
  );
}
