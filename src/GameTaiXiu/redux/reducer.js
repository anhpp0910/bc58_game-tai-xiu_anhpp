import { CHON_TAI_XIU, DO_XUC_XAC, TAI, XIU } from "./constant";

const initialState = {
  mangXucXac: [
    {
      img: "../img_xuc_xac/1.png",
      value: 1,
    },
    {
      img: "../img_xuc_xac/2.png",
      value: 2,
    },
    {
      img: "../img_xuc_xac/3.png",
      value: 3,
    },
  ],
  luaChon: "",
  result: "-",
  soLanThang: 0,
  soLanDo: 0,
  cannotPlay: true,
};

export let xucXacReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case DO_XUC_XAC: {
      state.mangXucXac.map((item) => {
        let random = Math.floor(Math.random() * 6) + 1;
        item.img = `../img_xuc_xac/${random}.png`;
        item.value = random;
      });

      let total = state.mangXucXac.reduce((total, cur) => total + cur.value, 0);
      console.log(total);
      if (
        (state.luaChon === XIU && total <= 10) ||
        (state.luaChon === TAI && total >= 11)
      ) {
        state.result = "YOU WIN";
        state.soLanThang++;
      } else state.result = "YOU LOSE";

      state.soLanDo++;
      state.luaChon = "";
      state.cannotPlay = true;

      return { ...state };
    }
    case CHON_TAI_XIU: {
      state.result = "-";
      state.cannotPlay = false;
      state.luaChon = payload;
      return { ...state };
    }

    default:
      return state;
  }
};
