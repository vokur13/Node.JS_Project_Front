import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  getFavoriteRecipes,
  getTotalFavoriteRecipes,
} from 'redux/ownRecipes/ownRecipesSelectors';
import { getFavorite } from 'redux/ownRecipes/ownRecipesOperations';

import { Container } from 'components/Container/Container';
import { Title } from 'components/Title/Title';
import { RecipeBlock } from 'components/RecipeBlock/RecipeBlock';
import { PaginationComp } from 'components/PaginationComp/Pagination';

import img from '../../images/default.jpg';

import { ContentWrapper, Wrapper } from './Favorites.styled';

const Favorites = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(getFavoriteRecipes);
  const total = useSelector(getTotalFavoriteRecipes);
  const perPage = 4;
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getFavorite({ page: page, per_page: perPage }));
  }, [dispatch, page]);

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <Wrapper>
      <Container>
        <Title>Favorites</Title>
        <ContentWrapper>
          {favorites &&
            favorites.length > 0 &&
            favorites.map(item => {
              return (
                <li key={item.idMeal}>
                  <NavLink to={`/recipe/${item.idMeal}`}>
                    <RecipeBlock
                      location="favorite"
                      id={item.idMeal}
                      img={item.strMealThumb ?? img}
                      title={item.strMeal ?? 'No name'}
                      text={
                        <span>{item.strInstructions ?? 'No description'}</span>
                      }
                      time={item.cookingTime ?? '__ min'}
                    />
                  </NavLink>
                </li>
              );
            })}
        </ContentWrapper>
        {favorites && favorites.length > 0 && (
          <PaginationComp
            count={Math.ceil(total / perPage)}
            page={page}
            handleChange={handleChange}
          />
        )}
      </Container>
    </Wrapper>
  );
};

export default Favorites;
