import { useEffect, useState } from "react";
import "./Books.css";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  // Define the API URL
  const openLibraryApiUrl =
    "https://openlibrary.org/people/mekBot/books/want-to-read.json";

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true);
        const response = await fetch(openLibraryApiUrl);
        if (!response.ok) throw new Error("Failed to fetch books");
        const data = await response.json();
        setBooks(data.reading_log_entries || []);
      } catch (error) {
        console.error("Error fetching books:", error);
        setBooks([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div className="library-container">
      {loading ? (
        <div className="loading-spinner"></div>
      ) : books.length > 0 ? (
        <div className="books-grid">
          {books.map((entry) => (
            <div key={entry.work.key} className="book-card-wrapper">
              <div className="book-card">
                <div className="book-cover">
                  <img
                    src={`https://covers.openlibrary.org/b/id/${entry.work.cover_id}-M.jpg`}
                    alt={entry.work.title}
                    className="book-image"
                  />
                </div>
                <div className="book-info">
                  <h3>
                    {entry.work.length > 20
                      ? `${entry.work.slice(0, 20)}...`
                      : entry.work.title}
                  </h3>
                  <p className="book-author">
                    By {entry.work.author_names?.join(", ") || "Unknown"}
                  </p>
                  <p>Total Editions: {entry.work.edition_key.length}</p>
                  <p>First Published: {entry.work.first_publish_year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No books found in the archives.</p>
      )}
    </div>
  );
};

export default Books;
