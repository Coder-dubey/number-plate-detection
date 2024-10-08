import React from "react";
import './Home.css'; // Ensure this file includes the new styles

function Home() {
  return (
    <div className="home-container">
      <header className="header">
        <h1>Welcome to the Number Plate Detection Project</h1>
        <p>This project aims to detect vehicle number plates using image processing techniques.</p>
      </header>

      <section className="group-section">
        <h2>Group Members</h2>
        <ul className="group-list">
          <li className="member">Ayush Kumar Dubey (21052316)</li>
          <li className="member">Soumyajit Maity (2105325)</li>
          <li className="member">Parthiv Patnaik (2105388)</li>
          <li className="member">Saswata Dey (22057084)</li>
        </ul>
      </section>

      <footer className="footer">
        <p>&copy; 2024 Number Plate Detection Project. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
