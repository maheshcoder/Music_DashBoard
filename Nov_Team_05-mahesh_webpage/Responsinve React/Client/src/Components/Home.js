  import React from 'react';
  import './Home.css';

  function Home() {
    return (
      <div>
        <header>
          <nav>
            <div className="logo">Muuzic</div>
            <div className="search-bar">
              <input type="text" placeholder="Search..." />
              <i className="fas fa-search"></i>
            </div>
          </nav>
        </header>
        <main>
          {/* Your main content goes here */}
        </main>
        <footer>
        <p>&copy; 2023 Muuzic. All rights reserved.</p>
      </footer>
      </div>
    );
  }

  export default Home;
