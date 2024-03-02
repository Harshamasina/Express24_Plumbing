import HomeContent from "../components/HomeContent";
import HomeSlider from "../components/HomeSlider";
import ContactRibbon from '../components/ContactRibbon';
import Testimonials from '../components/Testimonials';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Express 24 Plumbing and Electrical</title>
                <meta name="description" content="We can repair your sewer line without having to break your floor dig up your yard or anything like that. We can take your Sewer from needing repair to looking like brand new pipe underground with our high-tech specialized equipment." />
                <meta name='keywords' content='Express 24 Plumbing and Electrical, Express 24 Home Page' />
            </Helmet>
            <HomeSlider />
            <HomeContent />
            <ContactRibbon />
            <Testimonials />
        </>
    );
};

export default Home;