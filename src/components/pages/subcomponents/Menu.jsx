// Menu.jsx
import React from 'react';
import { useActiveTab } from '../../../context/ActiveTabContext';

const Menu = () => {
  const { activeTab, setActiveTab } = useActiveTab();

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div role="tablist" className="tabs tabs-boxed rounded bg-base-200 pt-2">
      <button
        role="tab"
        className={`tab ${activeTab === 0 ? 'tab-active' : ''} w-[33vw]`}
        onClick={() => handleTabClick(0)}
      >
        Todo
      </button>
      <button
        role="tab"
        className={`tab ${activeTab === 1 ? 'tab-active' : ''} w-[33vw]`}
        onClick={() => handleTabClick(1)}
      >
        Trabajar
      </button>
      <button
        role="tab"
        className={`tab ${activeTab === 2 ? 'tab-active' : ''} w-[33vw]`}
        onClick={() => handleTabClick(2)}
      >
        Contratar
      </button>
    </div>
  );
};

export default Menu;
