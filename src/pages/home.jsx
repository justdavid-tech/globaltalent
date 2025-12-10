import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Programs from "../components/programs";
import WhyLearnSection from "../components/whylearn";
import StepsGuideSection from "../components/stepsguide";
import FAQ from "../components/faq";

function Home() {
    return (
        <>
        <Navbar />
        <Hero />
        <Programs />
        <WhyLearnSection />
        <StepsGuideSection />
        <FAQ />
        </>
    )
}

export default Home
