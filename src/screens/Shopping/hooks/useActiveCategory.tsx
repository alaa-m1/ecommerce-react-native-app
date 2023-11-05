import {useRecoilState} from 'recoil';
import {activeCategoryState} from '~/states';

export const useActiveCategory = () => {
  return useRecoilState(activeCategoryState);
};
