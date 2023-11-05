import {atom} from 'recoil';

export const userInfoState = atom({
  key: 'userInfoStateKey', 
  default: {},
});
export const activeCategoryState = atom({
  key: 'activeCategoryStateKey', 
  default: "",
});
