import CategoryList from './components/category-list/category-list.component';
const categories = require('./data/categories.json');

const App = () => {
  return <CategoryList categories={categories} />;
};

export default App;
