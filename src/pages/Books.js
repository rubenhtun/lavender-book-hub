import { useEffect, useState } from "react";
import "./Books.css"; // Import the CSS file

const Books = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  // Define the API URL
  const openLibraryApiUrl =
    "https://openlibrary.org/people/mekBot/books/want-to-read.json";

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true); // Start loading
        const response = await fetch(openLibraryApiUrl);
        if (!response.ok) throw new Error("Failed to fetch books");
        const data = await response.json();
        console.log(data.reading_log_entries);
        setBooks(data.reading_log_entries || []); // Use empty array if no entries
      } catch (error) {
        console.error("Error fetching books:", error);
        setBooks([]);
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchBooks(); // Call the function
  }, []);

  return (
    <div className="library-container">
      <header className="library-header">
        <h1>Personal Library Collection</h1>
        <p>Curated volumes for the discerning reader</p>
        <div className="header-divider"></div>
      </header>

      {loading ? (
        <div className="loading-container">
          <p>Retrieving volumes from the archives...</p>
          <div className="loading-spinner"></div>
        </div>
      ) : books.length > 0 ? (
        <div className="books-grid">
          {books.map((entry) => (
            <div key={entry.work.key} className="book-card">
              <div className="book-cover">
                <img
                  src={`https://covers.openlibrary.org/b/id/${entry.work.cover_id}-M.jpg`}
                  alt={entry.work.title}
                />
              </div>

              <h3 className="book-title">{entry.work.title}</h3>

              <div className="book-details">
                <p className="book-author">
                  By {entry.work.author_names?.join(", ") || "Unknown"}
                </p>
                <p className="book-editions">
                  Total Editions: {entry.work.edition_key.length}
                </p>
                <p className="book-year">
                  First Published: {entry.work.first_publish_year}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-books">No books found in the archives.</p>
      )}
    </div>
  );
};

export default Books;
