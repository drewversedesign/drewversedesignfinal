# DrewVerse Design - Creative Web Design Agency

A modern, responsive website for DrewVerse Design, a creative web design agency specializing in stunning websites, tech blogs, e-commerce stores, and creative portfolios.

## 🌟 Features

- **Modern Design**: Clean, professional interface built with React and Tailwind CSS
- **Responsive Layout**: Fully responsive design that works on all devices
- **SEO Optimized**: Built-in SEO features with meta tags and structured data
- **Blog System**: Complete blog functionality with dynamic routing
- **Portfolio Showcase**: Interactive portfolio gallery with modal views
- **Contact Forms**: Functional contact and project inquiry forms
- **Cookie Consent**: GDPR-compliant cookie consent management
- **Performance Optimized**: Fast loading with Vite build system

## 🚀 Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with shadcn/ui components
- **Routing**: React Router DOM
- **State Management**: TanStack Query (React Query)
- **UI Components**: Radix UI primitives
- **Animations**: Framer Motion
- **Forms**: React Hook Form with Zod validation
- **SEO**: React Helmet Async
- **Deployment**: Netlify

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── navbar/         # Navigation components
│   └── blog/           # Blog-specific components
├── pages/              # Page components
├── data/               # Static data and blog posts
├── hooks/              # Custom React hooks
├── lib/                # Utility libraries
├── utils/              # Helper functions
└── App.tsx             # Main application component
```

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd drewversedesignfinal
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📱 Pages

- **Home** (`/`) - Landing page with hero section and services overview
- **About** (`/about`) - Company information and team details
- **Services** (`/services`) - Detailed service offerings
- **Portfolio** (`/portfolio`) - Project showcase gallery
- **Blog** (`/blog`) - Blog listing page
- **Blog Post** (`/blog/:id`) - Individual blog post pages
- **Contact** (`/contact`) - Contact form and information
- **Start Project** (`/start-project`) - Project inquiry form

## 🎨 Customization

### Styling
The project uses Tailwind CSS for styling. You can customize the design by:
- Modifying `tailwind.config.ts` for theme customization
- Updating component styles in the `components/` directory
- Adding custom CSS in `src/index.css`

### Content
- Update company information in `src/utils/meta-tags.ts`
- Modify blog posts in `src/data/blog-posts/`
- Update portfolio projects in the portfolio components

## 🚀 Deployment

### Netlify (Recommended)
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy automatically on push to main branch

### Manual Deployment
```bash
npm run build
# Upload the 'dist' folder to your hosting provider
```

## 🔧 Environment Variables

Create a `.env` file in the root directory for any environment-specific configurations:

```env
VITE_API_URL=your_api_url_here
VITE_GOOGLE_ANALYTICS_ID=your_ga_id_here
```

## 📈 Performance

- Lighthouse score optimized
- Image optimization with proper sizing
- Code splitting for better load times
- SEO-friendly meta tags and structured data

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary to DrewVerse Design.

## 📞 Support

For support or questions about this project, please contact:
- **Website**: [drewversedesign.online](https://drewversedesign.online)
- **Email**: Contact through the website contact form

---

Built with ❤️ by DrewVerse Design
