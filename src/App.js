import BannerContainer from "./components/BannerContainer";
import Header from "./components/header/Header";
import ImageContainer from "./components/ImageContainer";
import MainSection from "./components/main-section/MainSection";
import Footer from "./components/footer/Footer";
import ReportAbuse from "./components/ReportAbuse";

function App() {
  return (
    <div className="body">
      <Header />
      <BannerContainer />
      <ImageContainer
        imageUrl1="https://img001.prntscr.com/file/img001/7tp6IIKDTNmn-_GrrrObgw.png"
        imageUrl2="https://prnt.sc/ND4cHrbyG7GN"
        imageUrl1_alt="Lightshot screenshot"
        imageUrl1_id="screenshot-image"
      />
      <MainSection />
      <Footer />
      <ReportAbuse />
    </div>
  );
}

export default App;
