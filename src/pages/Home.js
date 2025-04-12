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
    </div>
  );
};

export default Home;
