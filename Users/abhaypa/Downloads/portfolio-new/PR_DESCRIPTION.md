# Fix Portfolio Website Rendering Issues

## Problem
The portfolio website was not rendering correctly on GitHub Pages and locally. The main issues were:

1. Corrupted index.html file containing Vite configuration code
2. Incorrect file extensions (.js instead of .jsx) for React components
3. Improper Vite configuration for GitHub Pages deployment
4. Missing dependencies in package.json

## Solution
This PR completely rebuilds the portfolio website with a clean structure and proper configuration:

### Major Changes:
- **File Structure**: Converted all React component files from `.js` to `.jsx` for better compatibility
- **Build Configuration**: Updated Vite configuration to properly handle JSX and GitHub Pages deployment
- **Dependencies**: Added missing dependencies (react-router-dom, bootstrap, bootstrap-icons)
- **GitHub Pages Setup**: Improved GitHub Actions workflow for reliable deployment
- **Asset Paths**: Fixed all asset paths to work correctly with the GitHub Pages base URL

### Technical Details:
1. **Clean HTML Structure**: Created a minimal, standards-compliant index.html
2. **Proper Routing**: Configured HashRouter for GitHub Pages compatibility
3. **CSS/JS Loading**: Ensured Bootstrap JS is properly loaded for mobile menu
4. **Build Process**: Added proper build commands that include .nojekyll and 404.html
5. **GitHub Actions**: Updated to use a more reliable deployment action

## Testing
The site has been tested locally and renders correctly with:
- Working navigation between pages
- Proper display of all professional information
- Responsive design that works on mobile devices
- Correct asset loading with the proper base path

## Screenshots
[Screenshots would be included in an actual PR]

## Next Steps
After merging this PR, the site should be accessible at https://abhayanil.github.io/portfolio/ with all content displaying properly.