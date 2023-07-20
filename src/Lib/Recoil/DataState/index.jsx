import { atom, selector } from "recoil";
import Data from "../../../Data/Data.json";

const dataImages = atom({
  key: "dataImages",
  default: Data,
});

const dataImagesValue = selector({
  key: "datåImagesValue",
  get: ({ get }) => {
    const data = get(dataImages);

    return data;
  },
});

export { dataImages, dataImagesValue };
