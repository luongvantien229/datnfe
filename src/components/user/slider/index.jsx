import SliderArena from "./SliderArea";
import BannerImageTop from "./BannerImage";

const Slider = () => {
  return (
    <div className="slider-banner-area padding-10-row-col">
      <div className="custom-container">
        <div className="row">
          <div className="custom-common-column custom-column-width-100 custom-padding-5">
            <div className="slider-area">
                <SliderArena />
            </div>
          </div>
          {/* <div className="custom-common-column custom-column-width-33 custom-padding-5">
            <div className="banner-area banner-area-mt">
              <div className="row">
              <BannerImageTop isBottom={true} />
              <BannerImageTop isBottom={false} /> 
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Slider;
