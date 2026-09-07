// import About from '../landing/sections/about/About';
import AboutOverview from './sections/overview/AboutOverview';
import AllInOne from './sections/allinone/AllInOne';
import BlogsPage from '../../pages/blogs/BlogsPage';
import SDLCSection from "./sections/SDLCSection/SDLCSection";

export default function AboutCompanyPage() {
  return (
    <main>
      {/* <About /> */}
      <AboutOverview />
      <AllInOne /> 
      <SDLCSection />
      <BlogsPage />
    </main>
  );
}