import React, { useState } from 'react';

const Menu = () => {
  // Estado para realizar un seguimiento del tab activo
  const [activeTab, setActiveTab] = useState(0);

  // Función para manejar el cambio de tab
  const handleTabClick = (index) => {
    // Verificar si el tab clickeado es el mismo que el tab activo actualmente
    if (index === activeTab) {
      return; // No hacer nada si el tab clickeado ya está activo
    }
    // Establecer el tab activo como el tab clickeado
    setActiveTab(index);
  };

  return (
    <div role="tablist" className="tabs tabs-boxed rounded bg-base-200 pt-2">
      <a
        role="tab"
        className={`tab ${activeTab === 0 ? 'tab-active' : ''}`}
        onClick={() => handleTabClick(0)}
      >
        Todo
      </a>
      <a
        role="tab"
        className={`tab ${activeTab === 1 ? 'tab-active' : ''}`}
        onClick={() => handleTabClick(1)}
      >
        Trabajar
      </a>
      <a
        role="tab"
        className={`tab ${activeTab === 2 ? 'tab-active' : ''}`}
        onClick={() => handleTabClick(2)}
      >
        Emplear
      </a>
      <a
        role="tab"
        className={`tab ${activeTab === 3 ? 'tab-active' : ''}`}
        onClick={() => handleTabClick(3)}
      >
        Compras
      </a>
    </div>
  );
};

export default Menu;
