import React from 'react'
import { NavigationDots, SocialMedia } from '../../components';

// HOC= just means Higher Order Component dont stress G
// components that share the same core functionality such as navigationDot, social media links ect.
const AppWrap = ( Componet, idName, classNames ) => function HOC() {
  return (
    //   id= so we can scroll to it 
    <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia />
        <div className="app__wrapper app__flex">
            <Componet />
            <div className="copyright">
                <p className="p-text">@2022 RUZAIGH </p>
                <p className="p-text">All rights reserved </p>
            </div>
        </div>
        {/* active is inside this component and and we pass the idName to tell us what section we are on */}
        <NavigationDots active={idName}/>
    </div>
  );
};

export default AppWrap