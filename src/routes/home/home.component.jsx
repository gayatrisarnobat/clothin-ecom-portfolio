import CategoryList from '../../components/category-list/category-list.component';
const categories = require('../../data/categories.json');

const Home = () => {
  return <CategoryList categories={categories} />;
};

export default Home;
