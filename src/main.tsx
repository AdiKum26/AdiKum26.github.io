import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Handle GitHub Pages routing
// https://github.com/rafgraph/spa-github-pages
(function() {
  const basePath = '/adityakumar.github.io';
  const { pathname, search } = window.location;
  const pathIsIndex = pathname === basePath + '/index.html' || pathname === '/index.html';
  const hasQuery = search.includes('?/');
  
  if (pathIsIndex || hasQuery) {
    let newPathname = basePath + '/';
    if (hasQuery) {
      const match = search.match(/\?\/+(.*)/);
      if (match) {
        const path = match[1].split('&')[0].replace(/~and~/g, '&');
        newPathname = basePath + (path.startsWith('/') ? path : '/' + path);
      }
    }
    
    window.history.replaceState(null, '', newPathname + window.location.hash);
  }
})();

createRoot(document.getElementById("root")!).render(<App />);
