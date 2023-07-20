import { useState } from "react";
import { useRecoilValue } from "recoil";
import { imageSelectedValue } from "../../Lib/Recoil";
import { dataImagesValue } from "../../Lib/Recoil/DataState";
import { ArrowDownCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";
import "../../assets/styles/Portfolio/_Portfolio.scss";

function Portfolio() {
  const [fullInfo, setFullInfo] = useState(false);
  const imgSelected = useRecoilValue(imageSelectedValue);
  const sliderImgData = useRecoilValue(dataImagesValue);

  return (
    <div
      className={`Portfolio-Container ${
        fullInfo ? "Portfolio-Container--Full" : ""
      }`}
    >
      <figure className="Portfolio-ImgContainer">
        <img
          src={sliderImgData.opts[imgSelected]?.imgUrl}
          alt="..."
          className="Portfolio-Img"
        />
      </figure>

      <div className="Portfolio-IconInformation">
        {fullInfo ? (
          <XMarkIcon
            width={48}
            height={48}
            onClick={() => setFullInfo(false)}
          />
        ) : (
          <>
            <ArrowDownCircleIcon
              width={48}
              height={48}
              onClick={() => setFullInfo(true)}
            />
            <span>More information</span>
          </>
        )}
      </div>

      <div className="Portfolio-Content">
        <h2>{sliderImgData.opts[imgSelected]?.title}</h2>
        <p>{sliderImgData.opts[imgSelected]?.imgDescription}</p>

        <h3>Camera used</h3>
        <p>{sliderImgData.opts[imgSelected]?.cameraUsed}</p>
      </div>
    </div>
  );
}

export default Portfolio;
