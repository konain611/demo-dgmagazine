import HomepageLayout from "@/components/layout/Homepage";
import SubNavbar from "@/components/menus/Subnavbar";
import Carousel from "@/components/layoutContent/Carousel";
import NewsLetter from "@/components/layoutContent/NewsLetter";
import LatestEdition from "@/components/layoutContent/LatestEdition";
import BreakingNews from "@/components/layoutContent/BreakingNews";
import FeaturedResearch from "@/components/layoutContent/FeaturedResearch";
import ThreatIntelligence from "@/components/layoutContent/ThreatIntelligence";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
   <div >
   <SubNavbar />
   <HomepageLayout
    firstRowLeft={<Carousel />}
    secondRowFirst={<BreakingNews />}
    secondRowSecond={<FeaturedResearch />}
    secondRowThirdTop={<ThreatIntelligence />}
    secondRowFourthTop={<LatestEdition />}
    secondRowFourthBottom={<NewsLetter />}
   />
   <Footer />
   </div>
  );
}
