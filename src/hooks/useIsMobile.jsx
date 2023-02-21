import React, { useState } from "react";

const mobileSize = 769;

const useIsMobile = () => {      
    const [mobile, setMobile] = useState(null);

    let isMobile;

    window.addEventListener('resize', () => {
        isMobile = window.innerWidth < mobileSize ? true : false;
        setMobile(isMobile)
    })

    return mobile;
}

export default useIsMobile;