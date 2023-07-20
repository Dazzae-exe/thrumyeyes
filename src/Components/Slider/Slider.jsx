import { useRecoilState, useRecoilValue } from "recoil";
import "../../assets/styles/Slider/_Slider.scss";
import { dataImagesValue } from "../../Lib/Recoil/DataState";
import { imageSelected } from "../../Lib/Recoil";

function Slider() {
  const dataValue = useRecoilValue(dataImagesValue);
  const [imageId, setImageId] = useRecoilState(imageSelected);

  const imageHandler = (title) => {
    const searchId = dataValue.opts.findIndex((data) => data.title === title);
    setImageId(searchId);

    console.log(imageId);
    return imageId;
  };

  return (
    <aside className="Slider-Container">
      <ul className="Slider-List">
        {dataValue.opts.map((slider) => (
          <li
            className="Slider-ListItem"
            key={slider.title}
            onClick={() => imageHandler(slider.title)}
          >
            <img src={slider.imgUrl} alt="image portfolio" />
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Slider;
