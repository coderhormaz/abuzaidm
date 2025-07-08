import React, { useState } from 'react';

const AnimatedTabs: React.FC = () => {
  const initialTabs = [
    { title: 'Product', value: 'product', content: 'Product Tab' },
    { title: 'Services', value: 'services', content: 'Services Tab' },
    { title: 'Playground', value: 'playground', content: 'Playground Tab' },
    { title: 'Content', value: 'content', content: 'Content Tab' },
    { title: 'Random', value: 'random', content: 'Random Tab' },
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
    <div style={{ background: '#000', padding: '20px', fontFamily: 'Arial, sans-serif', minHeight: '100vh' }}>
      {/* Tabs Buttons */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginBottom: '20px' }}>
        {tabs.map((tab, idx) => (
          <button
            key={tab.value}
            onClick={() => moveSelectedTabToTop(idx)}
            style={{
              padding: '10px 20px',
              borderRadius: '20px',
              background: active.value === tab.value ? '#7b2cbf' : 'transparent',
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
      <div style={{ position: 'relative', height: '320px', maxWidth: '1000px', margin: '0 auto' }}>
        {tabs.map((tab, idx) => {
          const isVisible = idx < 4;
          return (
            <div
              key={tab.value}
              style={{
                position: 'absolute',
                top: `${idx * 30}px`,
                left: 0,
                right: 0,
                height: '280px',
                backgroundImage: `url('/your-image-path.png')`, // <-- Replace with your actual image
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '20px',
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.5)',
                overflow: 'hidden',
                transform: `scale(${1 - idx * 0.03})`,
                zIndex: tabs.length - idx,
                opacity: isVisible ? 1 : 0,
                transition: 'all 0.5s ease',
              }}
            >
              {/* Purple overlay */}
              <div
                style={{
                  background: 'linear-gradient(to bottom right, #7b2cbf, #5a189a)',
                  opacity: 0.9,
                  height: '100%',
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2rem',
                  fontWeight: 'bold',
                  color: '#fff',
                  borderRadius: '20px',
                }}
              >
                {tab.content}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AnimatedTabs;
