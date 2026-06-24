import NewsroomHomepageLayout from "@/components/layout/newsroom/Homepage";
import Carousel from "@/components/layoutContent/Carousel";
import NewsroomHeader from "@/components/layoutContent/newsroom/Header";

export default function NewsroomPage() {
  return (
    <div className="max-w-[97%] mx-auto">
      <NewsroomHomepageLayout
      firstRow={<NewsroomHeader />}
      secondRowBig={<Carousel />} />
    </div>
  );
}
