# Interactive Portfolio - Zencoder Demo

A modern, responsive portfolio website built with React and Vite, showcasing my skills and projects as a DevRel professional and automation enthusiast.

## Features

- Responsive design using Bootstrap 5
- React Router for navigation
- Interactive UI elements with hover effects
- Form validation and submission handling
- GitHub Pages deployment workflow

## Technologies Used

- React 18
- Vite
- React Router
- Bootstrap 5
- Bootstrap Icons
- GitHub Actions for CI/CD

## Project Structure

```
interactive-portfolio-zencoder-demo/
├── public/               # Static assets
│   ├── assets/           # Images and other media
│   └── index.html        # HTML entry point
├── src/                  # Source code
│   ├── components/       # React components
│   │   ├── ContactForm.js
│   │   ├── Footer.js
│   │   ├── Hero.js
│   │   ├── Navbar.js
│   │   └── Projects.js
│   ├── pages/            # Page components
│   │   ├── About.js
│   │   └── Home.js
│   ├── styles/           # CSS styles
│   │   └── main.css
│   ├── App.js            # Main App component
│   └── index.js          # JavaScript entry point
├── .github/workflows/    # GitHub Actions workflows
│   └── deploy.yml        # Deployment workflow
├── package.json          # Dependencies and scripts
└── vite.config.js        # Vite configuration
```

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/abhaypa/interactive-portfolio-zencoder-demo.git
   cd interactive-portfolio-zencoder-demo
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Building for Production

To create a production build:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Deployment

This project is configured to deploy to GitHub Pages using GitHub Actions. When you push to the `main` branch, the workflow in `.github/workflows/deploy.yml` will automatically build and deploy your site.

## Customization

- Update the personal information in the components
- Add your own projects to the `projects` array in `Projects.js`
- Modify the styling in `main.css` to match your personal brand

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Built with [React](https://reactjs.org/)
- Styled with [Bootstrap](https://getbootstrap.com/)
- Developed with [Vite](https://vitejs.dev/)
