import ContactForm from "../../components/ContactForm";
import Hero from "./components/hero";
import HomeNewsSection from "./components/HomeNewsTab";
import FeaturedEvents from "./components/FeaturedEvents";

function HomePage(){    
    return (
        <>
            <Hero/>            
            <FeaturedEvents/>
            <HomeNewsSection/>
            <ContactForm/>
        </>
    )
}


export default HomePage;