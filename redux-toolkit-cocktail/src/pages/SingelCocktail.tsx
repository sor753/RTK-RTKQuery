import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../redux/store';
import { Link, useParams } from 'react-router-dom';
import { fetchSingleCocktail } from '../redux/features/cocktailSlice';

type ModifiedCocktail = {
  name: string;
  image: string;
  info: string;
  category: string;
  glass: string;
  instructions: string;
  ingredients: (string | undefined)[];
};

const SingelCocktail = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const { drinks, loading } = useSelector((state: RootState) => state.app);
  const [modifiedCocktail, setModifiedCocktail] = useState<ModifiedCocktail>();

  useEffect(() => {
    dispatch(fetchSingleCocktail({ id: id! }));
  }, [dispatch, id]);

  useEffect(() => {
    if (!drinks) {
      return;
    }
    if (drinks.length > 0) {
      const {
        strDrink: name,
        strDrinkThumb: image,
        strAlcoholic: info,
        strCategory: category,
        strGlass: glass,
        strInstructions: instructions,
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
      } = drinks[0];
      const ingredients = [strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5];
      const newCocktail = {
        name,
        image,
        info,
        category,
        glass,
        instructions,
        ingredients,
      };
      setModifiedCocktail(newCocktail);
    } else {
      setModifiedCocktail(undefined);
    }
  }, [id, drinks]);

  if (!modifiedCocktail) {
    return <h2 className="section-title">No cocktail to display</h2>;
  }

  const { name, image, info, category, glass, instructions, ingredients } = modifiedCocktail;

  return (
    <>
      {loading ? (
        <div className="spinner-grow" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <section className="section cocktail-sesction">
          <Link to="/">
            <button className="btn btn-danger" style={{ marginTop: '2rem' }}>
              Back Home
            </button>
          </Link>
          <h2 className="section-title">{name}</h2>
          <div className="drink">
            <img src={image} alt={name} />
            <div className="drink-info">
              <p>
                <span className="drink-data">Name: </span> {name}
              </p>
              <p>
                <span className="drink-data">Category: </span> {category}
              </p>
              <p>
                <span className="drink-data">Info: </span> {info}
              </p>
              <p>
                <span className="drink-data">Glass: </span> {glass}
              </p>
              <p>
                <span className="drink-data">Instructions: </span> {instructions}
              </p>
              <p>
                <span className="drink-data">Ingredients: </span>
                {ingredients.map((item, index) => {
                  return item ? <span key={index}>{item}</span> : null;
                })}
              </p>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default SingelCocktail;
