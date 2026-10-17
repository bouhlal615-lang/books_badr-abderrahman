
export const initialState = {
  genre: "Tous",
  books: [
    { id: 1, title: "L'Étranger", author: "Albert Camus", year: 1942, genre: "Roman", cover: "/public/images/covers/book1.svg", liked: false, inReadingList: false },
    { id: 2, title: "Le Petit Prince", author: "Antoine de Saint-Exupéry", year: 1943, genre: "Conte", cover: "/public/images/covers/book2.svg", liked: true, inReadingList: false },
    { id: 3, title: "1984", author: "George Orwell", year: 1949, genre: "Science-fiction", cover: "/public/images/covers/book3.svg", liked: false, inReadingList: true },
    { id: 4, title: "Les Misérables", author: "Victor Hugo", year: 1862, genre: "Roman", cover: "/public/images/covers/book4.svg", liked: false, inReadingList: false },
    { id: 5, title: "Dune", author: "Frank Herbert", year: 1965, genre: "Science-fiction", cover: "/public/images/covers/book5.svg", liked: false, inReadingList: false },
    { id: 6, title: "Harry Potter à l'école des sorciers", author: "J.K. Rowling", year: 1997, genre: "Fantasy", cover: "/public/images/covers/book6.svg", liked: false, inReadingList: false },
  ],
};

// Actions
export const toggleLike = (id) => ({
  type: "TOGGLE_LIKE",
  payload: id,
});

export const addToReadingList = (id) => ({
  type: "ADD_TO_READING_LIST",
  payload: id,
});

export const removeFromReadingList = (id) => ({
  type: "REMOVE_FROM_READING_LIST",
  payload: id,
});

export const removeBook = (id) => ({
  type: "REMOVE_BOOK",
  payload: id,
});

export const filter = (genre) => ({
  type: "FILTER_GENRE",
  payload: genre,
});

// Reducer
const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_LIKE":
      return {
        ...state,
        books: state.books.map((b) =>
          b.id === action.payload
            ? { ...b, liked: !b.liked }
            : b
        ),
      };

    case "ADD_TO_READING_LIST":
      return {
        ...state,
        books: state.books.map((b) =>
          b.id === action.payload
            ? { ...b, inReadingList: true }
            : b
        ),
      };

    case "REMOVE_FROM_READING_LIST":
      return {
        ...state,
        books: state.books.map((b) =>
          b.id === action.payload
            ? { ...b, inReadingList: false }
            : b
        ),
      };

    case "REMOVE_BOOK":
      return {
        ...state,
        books: state.books.filter(
          (b) => b.id !== action.payload
        ),
      };

    case "FILTER_GENRE":
      return {
        ...state,
        genre: action.payload,
      };

    default:
      return state;
  }
};

export default bookReducer;
