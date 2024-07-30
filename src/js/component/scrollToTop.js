import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import '../index.css'

export const ScrollToTop = ({ children }) => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return children;
};


