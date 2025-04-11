import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const openLibraryApiUrl = "http://openlibrary.org/search.json?title=";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch books when searchTerm changes
  useEffect(() => {
    const fetchBooks = async () => {
      if (!searchTerm) return; // Skip if search term is empty
      setLoading(true);
      try {
        const response = await fetch(
          `${openLibraryApiUrl}${searchTerm.replace(/\s+/g, "+")}`
        );
        if (!response.ok) throw new Error("Failed to fetch books");
        const data = await response.json();
        setBooks(data.docs || []); // Set books from API, default to empty array if no results
        console.log(data.docs);
      } catch (error) {
        console.error("Error fetching books:", error);
        setBooks([]);
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, [searchTerm]); // Re-run when searchTerm changes

  // Handle search input change
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="home">
      {/* Hero/Banner Section with Search Form */}
      <section className="hero">
        <h1>Welcome to Lavender Book Hub</h1>
        <p>Your cozy corner for discovering amazing books.</p>
        <div className="search-form">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search for a book title..."
            className="search-input"
          />
          <button
            onClick={() => setSearchTerm(searchTerm)}
            className="search-button"
          >
            Search
          </button>
        </div>
        <Link to="/books" className="cta-button">
          Explore Books
        </Link>
      </section>

      {/* Featured Books Section */}
      <section className="featured-books">
        <h2>{searchTerm ? "Search Results" : "Featured Books"}</h2>
        {loading ? (
          <p>Loading books...</p>
        ) : books.length > 0 ? (
          <div className="books-grid">
            {books.slice(0, 3).map((book, index) => (
              <div className="book-card" key={book.key || index}>
                <img
                  src={
                    book.cover_i
                      ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
                      : "/assets/images/default-book.jpg" // Fallback image
                  }
                  alt={book.title}
                  className="book-image"
                />
                <h3>{book.title}</h3>
                <p>Author: {book.author_name?.join(", ") || "Unknown"}</p>
                <p>Year: {book.first_publish_year || "N/A"}</p>
                <p>TotalEditions: {book.edition_count}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No books found. Try a different search!</p>
        )}
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Join Our Community</h2>
        <p>Sign up for updates, book recommendations, and more!</p>
        <Link to="/contact" className="cta-button secondary">
          Get Started
        </Link>
      </section>
    </div>
  );
};

export default Home;
