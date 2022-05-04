import React from 'react';

// "active is going to tell us which section we are on currently on "
  const NavigationDots = ({ active }) => (
    <div className="app__navigation">
      {['home', 'about', 'work', 'skills', 'testimonial', 'contact'].map((item, index) => (
        <a
          href={`#${item}`}
          key={item + index}
          className="app__navigation-dot"
          style={active === item ? { backgroundColor: '#313BAC' } : {}}
        />
      ))}
    </div>
  );

export default NavigationDots;