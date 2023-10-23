import React from 'react';
import MainBanner from './mainBanner';
import QueryContainer from './queryContainer';

import man from '../media/men_1.jpg';
import call from '../media/call.svg';
const about_text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

export default function Homepage() {
    const CALL_styles = {
        marginTop: 0,
        color: "red",
        direction: "rtl",
    }

  return (
    <div className='main-page'>
        <MainBanner/>
        <div id='about'>
            <QueryContainer image={man} image_alt={"a man"} title={"about us"} text={about_text}/>
        </div>
        <div id='contact'>
            <QueryContainer style={CALL_styles} image={call} image_alt={"contact_us_svg"} title={"contact us"} text={about_text}/>
        </div>
        {/* <div>
            <form action=""></form>
        </div> */}
        <footer>
            <h6>Proudly developed by amir moazzam | All right reserved 2023</h6>
        </footer>
    </div>
  )
}