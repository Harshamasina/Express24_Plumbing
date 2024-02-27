import HomeContent from "../components/HomeContent";
import HomeSlider from "../components/HomeSlider";
import ContactRibbon from '../components/ContactRibbon';
import Testimonials from '../components/Testimonials';

const Home = () => {
    return (
        <>
            <HomeSlider />
            <HomeContent />
            <ContactRibbon />
            <Testimonials />
        </>
    );
};

export default Home;