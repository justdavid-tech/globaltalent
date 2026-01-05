import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Programs from "../components/programs";
import WhyLearnSection from "../components/whylearn";
import StepsGuideSection from "../components/stepsguide";
import FAQ from "../components/faq";
import Footer from "../components/footer";

function Home() {
    return (
        <>
        <Navbar />
        <Hero />
        <Programs />
        <WhyLearnSection />
        <StepsGuideSection />
        <FAQ />
        <Footer />
        </>
    )
}

export default Home
