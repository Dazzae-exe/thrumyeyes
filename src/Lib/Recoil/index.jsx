import { atom, selector } from "recoil";

// atoms

const imageSelected = atom({
  key: "imageSelected",
  default: 0,
});


// selectors

const imageSelectedValue = selector({
  key: "imageSelectedValue",
  get: ({ get }) => {
    const arrId = get(imageSelected);

    return arrId;
  },
});

export { imageSelected, imageSelectedValue };
