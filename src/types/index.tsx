type EHeaderIconSource = 'chevron-left' | 'shopping-search';

type CategoriesResponse = Array<CategoryResponse>;
type CategoryResponse = {
  id: number;
  categoryLabel: "accessories" | "dresses" | "hats" | "jackets" | "shoes";
  categoryDetails: {
    title: string;
    price: number;
    description: string;
    imagePath: string;
  };
};

type Products = Array<Product>;
type Product = {
  id: number;
  categoryLabel: string;
  title: string;
  price: number;
  description: string;
  imagePath: string;
  rating?: Rating;
  uId: string;
};

type Rating = {
  rate: number;
  count: number;
};

