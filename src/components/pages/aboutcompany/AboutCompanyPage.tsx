import About from '../../sections/about/About';
import AboutOverview from '../../sections/overview/AboutOverview';
import AllInOne from '../../sections/allinone/AllInOne';
import BlogsPage from '../../pages/blogs/BlogsPage';


export default function AboutCompanyPage() {
  return (
    <main>
      <About />
      <AboutOverview />
      <AllInOne />
      <BlogsPage />
    </main>
  );
}