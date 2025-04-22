import React, { useRef, useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'HOME', route: '/' },
  { label: 'CAPTURE or UPLOAD PCB', route: '/capture' },
  { label: 'FEEDBACK', route: '/feedback' },
  { label: 'SIMULATE CONTINUITY', route: '/simulate' },
];

const NavBar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const navRefs = useRef<HTMLDivElement[]>([]);
  const pillRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const currentIndex = navItems.findIndex(item => item.route === location.pathname);
    setActiveIndex(currentIndex === -1 ? 0 : currentIndex);
  }, [location]);

  useEffect(() => {
    const activeEl = navRefs.current[activeIndex];
    const pillEl = pillRef.current;
    if (activeEl && pillEl) {
      const { offsetLeft, offsetWidth } = activeEl;
      pillEl.style.transform = `translateX(${offsetLeft}px)`;
      pillEl.style.width = `${offsetWidth}px`;
    }
  }, [activeIndex]);

  const styles: { [key: string]: React.CSSProperties } = {
    navBarContainer: {
      marginTop: '10px',
      width: 'fit-content',
      marginLeft: 'auto',
      marginRight: '20px',
      backgroundColor: '#424242',
      borderRadius: '100px',
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      padding: '15px 20px',
      position: 'relative',
      overflow: 'hidden',
    },
    navBar: {
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
    },
    navItem: {
      padding: '10px 20px',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'color 0.3s ease',
      color: 'white',
      zIndex: 1,
    },
    activePill: {
      position: 'absolute',
      height: '100%',
      backgroundColor: 'white',
      borderRadius: '50px',
      top: 0,
      left: 0,
      transition: 'transform 0.3s ease, width 0.3s ease',
      zIndex: 0,
    },
  };

  return (
    <div style={styles.navBarContainer}>
      <nav style={styles.navBar}>
        <div ref={pillRef} style={styles.activePill}></div>
        {navItems.map((item, index) => (
          <div
            key={index}
            style={{
              ...styles.navItem,
              color: activeIndex === index ? 'black' : 'white',
            }}
            ref={(el) => {
              if (el) navRefs.current[index] = el;
            }}
            onClick={() => {
              setActiveIndex(index);
              navigate(item.route);
            }}
          >
            {item.label}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default NavBar;
