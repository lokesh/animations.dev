import React, { useState } from 'react';
import styles from '../styles/TabSlider.module.css';
import { LuCircleCheck, LuUtensilsCrossed, LuBrush, LuSettings } from 'react-icons/lu';

const TabSlider = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 0, label: 'Habits', content: 'Content for Tab 1', icon: <LuCircleCheck /> },
    { id: 1, label: 'Meals', content: 'Content for Tab 2', icon: <LuUtensilsCrossed /> },
    { id: 2, label: 'Chores', content: 'Content for Tab 3', icon: <LuBrush /> },
    { id: 3, label: 'Settings', content: 'Content for Tab 4', icon: <LuSettings /> },
  ];


  return (
    <div className={styles.container}>
      <div 
        className={`${styles.tabContainer} ${styles.tabContainerActive} ${styles[`tab${activeTab}`]}`}
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`${styles.tab} ${activeTab === tab.id ? styles.active : ''}`}
            onClick={() => setActiveTab(tab.id)}
            tabIndex="-1"
          >
            <span className={styles.icon} tabIndex="-1">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>
      <div className={styles.tabContainer}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`${styles.tab} ${activeTab === tab.id ? styles.active : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <span className={styles.icon} tabIndex="-1">{tab.icon}</span>
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