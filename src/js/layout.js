import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import Details from "./views/details"; // Import Details
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

const Layout = () => {
    const basename = process.env.BASENAME || "";

    return (
        <div>
            <HashRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/demo" element={<Demo />} />
                        <Route path="/details/:type/:id" element={<Details />} /> {/* Update Route */}
                        <Route path="*" element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </HashRouter>
        </div>
    );
};

export default injectContext(Layout);





// import React from "react";
// import { HashRouter, Routes, Route } from "react-router-dom";
// import { ScrollToTop } from "./component/scrollToTop";

// import { Home } from "./views/home";
// import { Demo } from "./views/demo";
// import { Details } from "./views/details";
// import injectContext from "./store/appContext";

// import { Navbar } from "./component/navbar";
// import { Footer } from "./component/footer";

// const Layout = () => {
//     const basename = process.env.BASENAME || "";

//     return (
//         <div>
//             <HashRouter basename={basename}>
//                 <ScrollToTop>
//                     <Navbar />
//                     <Routes>
//                         <Route path="/" element={<Home />} />
//                         <Route path="/demo" element={<Demo />} />
//                         <Route path="/details/:type/:id" element={<Details />} />
//                         <Route path="*" element={<h1>Not found!</h1>} />
//                     </Routes>
//                     <Footer />
//                 </ScrollToTop>
//             </HashRouter>
//         </div>
//     );
// };

// export default injectContext(Layout);
