import { useNavigate } from 'react-router-dom';
import './category-item.styles';
import {
  BackgroundImage,
  CategoryBodyContainer,
  CategoryItemContainer,
} from './category-item.styles';

const CategoryItem = ({ category }) => {
  const { title, imageUrl, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <CategoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <CategoryBodyContainer>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </CategoryBodyContainer>
    </CategoryItemContainer>
  );
};

export default CategoryItem;
