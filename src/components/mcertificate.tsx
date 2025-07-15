import React, { useState } from 'react';

const AnimatedTabs: React.FC = () => {
  const initialTabs = [
    { title: 'SIH', value: 'sih', content: '', image: '/sih.png' },
    { title: 'GOOGLE', value: 'google', content: '', image: '/google.png' },
  ];

  const [tabs, setTabs] = useState(initialTabs);
  const [active, setActive] = useState(initialTabs[0]);

  const moveSelectedTabToTop = (idx: number) => {
    const newTabs = [...tabs];
    const selectedTab = newTabs.splice(idx, 1)[0];
    newTabs.unshift(selectedTab);
    setTabs(newTabs);
    setActive(selectedTab);
  };

  return (
    <div style={{  padding: '20px', fontFamily: 'Arial, sans-serif', minHeight: '100vh' }}>
      {/* Tabs Buttons */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginBottom: '20px' }}>
        {tabs.map((tab, idx) => (
          <button
            key={tab.value}
            onClick={() => moveSelectedTabToTop(idx)}
            style={{
              padding: '10px 20px',
              borderRadius: '20px',
              background: active.value === tab.value ? '#00b4d8' : 'transparent',
              color: '#fff',
              border: 'none',
              cursor: 'pointer',
              transition: 'background 0.3s ease',
              fontWeight: 'bold',
            }}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Stacked Image Cards */}
      <div style={{ position: 'relative', height: '480px', maxWidth: '1400px', margin: '0 auto' }}>
        {tabs.map((tab, idx) => {
          const isVisible = idx < 4;
          return (
            <div
              key={tab.value}
              style={{
                position: 'absolute',
                top: `${idx * 40}px`,
                left: 0,
                right: 0,
                height: '400px',
                backgroundImage: `url('${tab.image}')`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                borderRadius: '20px',
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.5)',
                overflow: 'hidden',
                transform: `scale(${1 - idx * 0.03})`,
                zIndex: tabs.length - idx,
                opacity: isVisible ? 1 : 0,
                transition: 'all 0.5s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2.5rem',
                fontWeight: 'bold',
                color: '#fff',
                textShadow: '0 2px 8px #000',
              }}
            >
              {tab.content}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AnimatedTabs;
