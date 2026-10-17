import { useDispatch } from "react-redux";
import { toggleLike,addToReadingList,removeFromReadingList,removeBook,} from "../features/BookReducer";

export default function BookCard({ book }) {
  const dispatch = useDispatch();

  return (
    <div className="card book-card mb-3 shadow-sm">
      <div className="row g-0">
        
        <div className="col-4 col-md-3">
          <img
            src={book.cover}
            alt={book.title}
            className="img-fluid rounded-start book-cover"
          />
        </div>

        
        <div className="col-8 col-md-9">
          <div className="card-body d-flex flex-column h-100">
            <h5 className="card-title">{book.title}</h5>
            <p className="card-text mb-1">
              <strong>Auteur :</strong> {book.author}
            </p>
            <p className="card-text mb-1">
              <strong>Année :</strong> {book.year}
            </p>
            <p className="card-text">
              <span className="badge bg-info text-dark">{book.genre}</span>
            </p>

            <div className="mt-auto d-flex flex-wrap gap-2">
              <button
                className={`btn btn-sm ${book.liked ? "btn-danger" : "btn-outline-danger"}`}
                onClick={() => dispatch(toggleLike(book.id))}
              >
                {book.liked ? "♥ Retirer des favoris" : "♡ Ajouter aux favoris"}
              </button>

              {book.inReadingList ? (
                <button
                  className="btn btn-sm btn-warning"
                  onClick={() =>
                    dispatch(removeFromReadingList(book.id))
                  }
                >
                  Retirer de ma liste
                </button>
              ) : (
                <button
                  className="btn btn-sm btn-outline-primary"
                  onClick={() =>
                    dispatch(addToReadingList(book.id))
                  }
                >
                  + Liste de lecture
                </button>
              )}

              <button
                className="btn btn-sm btn-outline-secondary ms-auto"
                onClick={() => dispatch(removeBook(book.id))}
              >
                🗑 Supprimer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
