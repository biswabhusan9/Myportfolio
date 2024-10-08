import './App.css';
import Banner from './components/banner/Banner';
import Contact from './components/contact/Contact';
import Features from './components/features/Features';
import Footer from './components/footer/Footer';
import FooterBottom from './components/footer/FooterBottom';
import Navbar from './components/navbar/Navbar';
import Projects from './components/projects/Projects';
import Resume from './components/resume/Resume';
import Testimonial from './components/testimonial/Testimonial';

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-white px-4">
      <Navbar/>
      <div className='max-w-screen-xl mx-auto'>
      {/* <Navbar/> */}
      <Banner/>
      <Features/>
      <Projects/>
      <Resume/>
      <Contact/>
      <Footer/>
      <FooterBottom/>
      {/* <Testimonial/> */}
      </div>
    </div>
  );
}

export default App;
