# Christopher Oueis - Portfolio Website

A modern, interactive portfolio website showcasing professional experience, projects, and skills in AI, data science, and public policy.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-success)
![Built with React](https://img.shields.io/badge/React-18.3-blue)
![Vite](https://img.shields.io/badge/Vite-7.2-646CFF)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC)

## 🌟 Features

### Interactive Experience Map
- **Global location pins** for all professional positions
- **Click-to-explore** functionality with synchronized map and list views
- **Dark themed** CartoDB map matching website aesthetics
- **Auto-scroll highlighting** when selecting locations

### Collapsible Content
- **Experience cards** with expand/collapse for detailed information
- **Project cards** with minimal view and expandable full details
- Smooth animations for enhanced user experience

### Modern Design
- **Minimalist 3-color palette**: Black, light gray, and deep red accents
- **Responsive layout** optimized for all devices
- **Custom animations** using Framer Motion
- **Glassmorphism effects** and gradient text

### Dynamic Sections
- **Hero Section**: Name with animated tagline + social media links
- **About Me**: Concise bio with stats and clearance badge
- **Education**: Funky gradient cards with large logos
- **Professional Experience**: Interactive world map with 7 locations
- **Featured Projects**: Collapsible cards with impact metrics
- **Skills & Capabilities**: Technical stack, methods, domain expertise, and languages with flag emojis
- **Publications**: Research and recognition
- **Contact**: Direct communication options

## 🛠️ Tech Stack

### Core
- **React** 18.3 - UI framework
- **Vite** 7.2 - Build tool and dev server
- **Tailwind CSS** 3.4 - Utility-first styling

### Libraries
- **React-Leaflet** - Interactive maps with Leaflet.js
- **Framer Motion** - Smooth animations and transitions
- **Lucide React** - Modern icon system
- **React Intersection Observer** - Scroll-based animations

### Styling
- Custom gradient text and scrollbars
- Dark theme with minimalist color palette
- Responsive grid layouts
- Custom CSS utilities

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/christopheroueis/personal-website.git

# Navigate to project directory
cd personal-website

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` to view the website.

### Build for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
personal-website/
├── public/                 # Static assets
│   ├── *.png              # Organization logos
│   └── profile-photo.jpg  # Profile image
├── src/
│   ├── components/
│   │   ├── sections/      # Main page sections
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Education.jsx
│   │   │   ├── Experience.jsx (with map)
│   │   │   ├── Projects.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Publications.jsx
│   │   │   └── Contact.jsx
│   │   ├── ui/            # Reusable UI components
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── Badge.jsx
│   │   │   └── Section.jsx
│   │   ├── Navigation.jsx
│   │   └── ProjectCard.jsx
│   ├── data/              # Content data
│   │   ├── education.js
│   │   ├── experience.js
│   │   ├── projects.js
│   │   ├── skills.js
│   │   └── publications.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── tailwind.config.js
├── vite.config.js
└── package.json
```

## 🎨 Customization

### Color Scheme
The minimalist palette is defined in `tailwind.config.js`:
- **Background**: Pure black (#000000) / Dark gray (#0a0a0a)
- **Primary Text**: Light gray (#d1d5db, #e5e7eb)
- **Accent**: Deep red (#dc2626, #991b1b)
- **Links**: Muted blue (#3b82f6)

### Content
Update content in the `/src/data/` directory:
- `education.js` - Academic credentials
- `experience.js` - Professional positions (with coordinates for map)
- `projects.js` - Featured work
- `skills.js` - Technical and domain expertise
- `publications.js` - Research and publications

### Images
Place logos and photos in `/public/`:
- Organization logos: `{org-name}-logo.png`
- Profile photo: `profile-photo.jpg`

## 🌍 Deployment

### Recommended: Vercel

1. Push code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy (auto-detects Vite settings)

### Alternative: Netlify

```bash
# Build command
npm run build

# Publish directory
dist
```

### Custom Domain
Add your domain in the hosting platform's settings after deployment.

## 📋 Required Images

The following logo files need to be added to `/public/`:
- `cmu-logo.png` - Carnegie Mellon University
- `usf-logo.png` - University of South Florida
- `paris-ii-logo.png` - Panthéon-Assas, Paris II
- `deloitte-logo.png` - Deloitte GPS
- `un-escwa-logo.png` - UN ESCWA
- `state-dept-logo.png` - U.S. State Department
- `dia-logo.png` - Defense Intelligence Agency
- `atfl-logo.png` - American Task Force on Lebanon
- `afpc-logo.png` - American Foreign Policy Council
- `profile-photo.jpg` - Profile headshot

## 🔧 Key Features Implementation

### Interactive Map
Uses **React-Leaflet** with CartoDB Dark tiles. Each experience has `coordinates: { lat, lng }` in the data file.

### Collapsible Components
Both Experience and Projects use **Framer Motion's** `AnimatePresence` for smooth expand/collapse animations.

### Social Media Links
LinkedIn and GitHub buttons in Hero section with hover effects and brand colors.

## 📝 License

All rights reserved © 2025 Christopher Oueis

## 🤝 Contributing

This is a personal portfolio website. However, suggestions and feedback are welcome!

## 📧 Contact

- **LinkedIn**: [christopher-oueis-0a4586218](https://www.linkedin.com/in/christopher-oueis-0a4586218)
- **GitHub**: [christopheroueis](https://github.com/christopheroueis)

---

Built with ❤️ using React, Vite, and Tailwind CSS
