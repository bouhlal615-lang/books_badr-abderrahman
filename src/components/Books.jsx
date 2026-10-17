
import { useDispatch, useSelector } from "react-redux";

import BookCard from "./BookCard";

export default function Books() {
  const dispatch = useDispatch();
  const { books, genre } = useSelector((state) => state);

  const genres = ["Tous", ...new Set(books.map((b) => b.genre))];

  const visible =
    genre === "Tous"
      ? books
      : books.filter((b) => b.genre === genre);

  return (
    <>
      <div className="d-flex align-items-center gap-2 mb-3">
        <label htmlFor="genre" className="fw-semibold">
          Catégorie :
        </label>

        <select
          id="genre"
          className="form-select w-auto"
          value={genre}
          onChange={(e) => dispatch(filter(e.target.value))}
        >
          {genres.map((g) => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </select>
      </div>

      {visible.length === 0 ? (
        <div className="alert alert-info">
          Aucun livre à afficher.
        </div>
      ) : (
        visible.map((b) => (
          <BookCard key={b.id} book={b} />
        ))
      )}
    </>
  );
}
