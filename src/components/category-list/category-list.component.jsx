import CategoryItem from '../category-item/category-item.component';
import './category-list.styles.scss';
const categories = require('../../data/categories.json');

const CategoryList = () => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default CategoryList;
