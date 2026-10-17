
import { useSelector } from "react-redux";

const SECTIONS = [
  { key: "all", label: "Tous les livres" },
  { key: "liked", label: "Favoris" },
  { key: "reading", label: "Ma liste de lecture" },
];

export default function Navbar({ section, setSection }) {
  const books = useSelector((state) => state.books);

  const counts = {
    liked: books.filter((b) => b.liked).length,
    reading: books.filter((b) => b.inReadingList).length,
  };

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
      <div className="container">
        <span className="navbar-brand fw-bold">
          📚 BookBox
        </span>

        <ul className="navbar-nav ms-auto flex-row gap-2">
          {SECTIONS.map((s) => (
            <li className="nav-item" key={s.key}>
              <button
                className={`btn btn-sm ${
                  section === s.key
                    ? "btn-light"
                    : "btn-outline-light"
                }`}
                onClick={() => setSection(s.key)}
              >
                {s.label}

                {counts[s.key] !== undefined && (
                  <span className="badge bg-secondary ms-2">
                    {counts[s.key]}
                  </span>
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
