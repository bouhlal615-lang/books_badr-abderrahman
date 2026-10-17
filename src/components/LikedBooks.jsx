
import { useSelector } from "react-redux";
import BookCard from "./BookCard";

export default function LikedBooks() {
  const books = useSelector((state) => state.books);
  const liked = books.filter((b) => b.liked);

  if (liked.length === 0) {
    return (
      <div className="alert alert-info">
        Vous n'avez aucun livre favori.
      </div>
    );
  }

  return liked.map((b) => (
    <BookCard key={b.id} book={b} />
  ));
}
