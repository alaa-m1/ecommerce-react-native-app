import {useMemo} from 'react';
import {categoriesRes} from '~/shared/constants';
import {mapCategory} from '~/utils/mappingFunctions/mapCategory';
import {useActiveCategory} from './useActiveCategory';
import _ from 'lodash';

export const useCategories = () => {
  const categories = mapCategory(categoriesRes);
  const [activeCategory] = useActiveCategory();
  const mainCategoriesLabels = useMemo(
    () =>
      categories.reduce<Array<string>>((res, category) => {
        if (!res.includes(category.categoryLabel)) {
          res.push(category.categoryLabel);
        }
        return res;
      }, []),
    [categories],
  );
  const activeCategoryItems = useMemo(
    () =>
      _.isEmpty(activeCategory)
        ? categories
        : categories.filter(
            (cat, index) => cat.categoryLabel === activeCategory,
          ),
    [categories, activeCategory],
  );
  return {categories, mainCategoriesLabels, activeCategoryItems};
};
