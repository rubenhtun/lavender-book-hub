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
      if (!searchTerm) return;
      setLoading(true);
      try {
        const response = await fetch(
          `${openLibraryApiUrl}${searchTerm.replace(/\s+/g, "+")}`
        );
        if (!response.ok) throw new Error("Failed to fetch books");
        const data = await response.json();
        setBooks(data.docs || []);
        console.log(data.docs);
      } catch (error) {
        console.error("Error fetching books:", error);
        setBooks([]);
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, [searchTerm]);

  // Handle search input change
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="home-page">
      {/* Hero/Banner Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">Dive into the World of Lavender</h1>

            <p className="hero-subtitle">
              Your cozy corner for discovering amazing books. Find your next
              great read today!
            </p>

            <div className="search-bar">
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
          </div>

          <div className="hero-image-wrapper">
            <img
              className="hero-image"
              src="/assets/images/lavender-book-library-hero-banner.png"
              alt="Lavender Book Hub Banner"
            />
          </div>
        </div>
      </section>

      {/* Featured Books Section */}
      <section className="featured-books">
        <h2>{searchTerm ? "Search Results" : "Featured Books"}</h2>
        {loading ? (
          <p>Loading books...</p>
        ) : books.length > 0 ? (
          <div className="books-grid">
            {books.map((book) => (
              <div className="book-card-wrapper" key={book.key}>
                <div className="book-card">
                  <div className="book-cover">
                    <img
                      src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                      alt={book.title}
                      className="book-image"
                    />
                  </div>
                  <div className="book-info">
                    <h3>
                      {book.title.length > 20
                        ? `${book.title.slice(0, 20)}...`
                        : book.title}
                    </h3>
                    <p>Author: {book.author_name?.[0] || "Unknown"}</p>
                    <p>Total Editions: {book.edition_count}</p>
                    <p>Year: {book.first_publish_year || "N/A"}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No books found. Try a different search!</p>
        )}
      </section>
    </div>
  );
};

export default Home;
