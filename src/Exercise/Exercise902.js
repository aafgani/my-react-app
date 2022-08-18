import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Link,
} from "react-router-dom";

const Search = () => {
  const query = new URLSearchParams(useLocation().search);
  const term = query.get("q");
  const returned = doSearch(term);
  return (
    <div className="Search">
      <h1>Search Page</h1>
      <hr />
      Found results for {term}:
      <ul>
        {returned.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </div>
  );
};

const Items = [
  "Lorem Ipsum",
  "Ipsum Dipsum",
  "Foo Bar",
  "A little black cat",
  "A lazy fox",
  "A jumping dog",
];

const doSearch = (term) => {
  if (!term) {
    return Items;
  }
  return Items.filter(
    (item) => item.toLowerCase().indexOf(term.toLowerCase()) !== -1
  );
};

const Navbar = () => (
  <div className="Navbar">
    <Link to="/">Home</Link>
    &nbsp;
    <Link to="/about">About</Link>
    &nbsp;
    <Link to="/search">Search</Link>
    &nbsp;
    <Link to="/bio">Bio</Link>
    &nbsp;
    <Link to="/contact">Contact</Link>
  </div>
);

const Bio = () => (
  <div className="Bio">
    <h2>Bio</h2>
    <hr />
    <p>I'm a pretty cool person.</p>
  </div>
);

const Contact = () => (
  <div className="Contact">
    <h2>Contact Me</h2>
    <hr />
    <p>Send me an email at test@test.com.</p>
  </div>
);

const About = () => (
  <div className="About">
    <h1>About Page</h1>
    <hr />
    <p>Information about your app or who you are would go here.</p>
  </div>
);

// const About = () => {
//     return (
//       <Router>
//         <div className="About">
//           <h1>About Page</h1>
//           <hr />
//           <p>Information about your app or who you are would go here.</p>
//         </div>
//       </Router>
//     );
//   };

const Homepage = () => (
  <div className="Homepage">
    <h1>Homepage</h1>
    <hr />
    <p>This is our homepage.</p>
  </div>
);

const PageNotFound = () => (
  <div>
    <h1>404 - Component Not Found</h1>
    <a href="/">Return Home</a>
  </div>
);

const Exercise902 = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/search" element={<Search />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="*" element={<PageNotFound />}></Route>
    </Routes>
  </Router>
);
export default Exercise902;
