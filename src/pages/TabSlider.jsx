import React, { useState } from 'react';
import styles from '../styles/TabSlider.module.css';

const TabSlider = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 0, label: 'Tab 1', content: 'Content for Tab 1' },
    { id: 1, label: 'Tab 2', content: 'Content for Tab 2' },
    { id: 2, label: 'Tab 3', content: 'Content for Tab 3' },
  ];

  return (
    <div className={styles.container}>
      <h1>Tab Slider</h1>
      <div className={styles.tabContainer}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`${styles.tab} ${activeTab === tab.id ? styles.active : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className={styles.content}>
        {tabs[activeTab].content}
      </div>
    </div>
  );
};

export default TabSlider; 