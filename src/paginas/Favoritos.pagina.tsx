import { FC } from "react";
import { removeAllCharactersFromFavorites } from "../redux/actions/characters.actions";
import { useSelector } from "../redux/store";
import { useDispatch } from "react-redux";
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";

/**
 * Esta es la pagina de favoritos. Aquí se deberan ver todos los personajes marcados como favoritos
 *
 * Uso:
 * ``` <PaginaFavoritos /> ```
 *
 * @returns la pagina de favoritos
 */
const PaginaFavoritos: FC = () => {
  const dispatch = useDispatch();
  const { favorites } = useSelector((state) => state.characters);

  return (
    <div className="container">
      <div className="actions">
        <h3>Personajes Favoritos</h3>
        <button
          className="danger"
          onClick={() => dispatch(removeAllCharactersFromFavorites())}
        >
          Test Button
        </button>
      </div>
      {favorites.length ? <GrillaPersonajes /> : <h3>No has añadido a favoritos</h3>}
    </div>
  );
};

export default PaginaFavoritos;
