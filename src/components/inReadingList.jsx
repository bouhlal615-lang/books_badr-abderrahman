
import { useSelector } from "react-redux";
import BookCard from "./BookCard";

export default function InReadingList() {
  const books = useSelector((state) => state.books);
  const list = books.filter((b) => b.inReadingList);

  if (list.length === 0) {
    return (
      <div className="alert alert-info">
        Votre liste de lecture est vide.
      </div>
    );
  }

  return list.map((b) => (
    <BookCard key={b.id} book={b} />
  ));
}
