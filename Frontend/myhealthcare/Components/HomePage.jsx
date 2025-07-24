import ConsultationSection from "./ConsultationSection";
import Footer from "./Footer";
import Header from "./Header";
import HeroSection from "./HeroSection";
import SpecialistSection from "./SpecialistSection";
import TestimonialsSection from "./TestimonialsSection";

export default function HomePage() {

    return (
        <>
            <Header />
            <HeroSection/>
            <ConsultationSection/>
            <SpecialistSection/>
            <TestimonialsSection/>
            <Footer/>
        </>
    )
}