import "./App.css";
import React, { useEffect } from "react";
import ViewportProvider from "./viewport";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import HomeScreen from "./pages/home";
import Navbar from "./components/nav/Navbar";
import AboutScreen from "./pages/about";
import ContactScreen from "./pages/contact";
import InfluencerScreen from "./pages/influencers";
import PageNotFound from "./PageNotFound";
import Aos from "aos";
import Faq from "./pages/faq";
import GoogleForm from "./pages/gForm/GoogleForm";
import MyFooter from "./components/footer";
import ScrollTop from "./components/ScrollTop";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // const unsubscribe = onAuthStateChanged(auth, async (user) => {
    //   if (user) {
    //     const idToken = await user.getIdTokenResult();
    //     if (await checkPhoneNumber(user.phoneNumber.slice(3))) {
    //       dispatch(getAsyncUser(idToken.token));
    //     } else {
    //       dispatch(noUser());
    //       message.error("Server Error.");
    //     }
    //   } else {
    //     dispatch(noUser());
    //     navigate("/login");
    //   }
    // });
    // return () => unsubscribe();
    Aos.init();
  }, [dispatch]);

  return (
    <ViewportProvider>
      <ScrollTop />
      <div className="flexCenter" style={{ width: "100%" }}>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/about" element={<AboutScreen />} />
        <Route path="/contact" element={<ContactScreen />} />
        <Route path="/influencer" element={<InfluencerScreen />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/register/influencer" element={<GoogleForm />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <MyFooter />
    </ViewportProvider>
  );
};

export default App;
