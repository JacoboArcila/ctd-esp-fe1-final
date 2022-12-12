import "./filtros.css";
import { FC } from "react";
import { searchCharactersThunk } from "../../redux/actions/characters.actions";
import { useSelector } from "../../redux/store";
import { useDispatch } from "react-redux";

const Filtros: FC = () => {
  const { search } = useSelector((state) => state.characters);
  const dispatch = useDispatch();

  return (
    <div className="filtros">
      <label htmlFor="nombre">Filtrar por nombre:</label>
      <input
        type="text"
        placeholder="Rick..."
        name="nombre"
        value={search}
        onChange={(e) => dispatch(searchCharactersThunk(e.target.value))}
      />
    </div>
  );
};

export default Filtros;
