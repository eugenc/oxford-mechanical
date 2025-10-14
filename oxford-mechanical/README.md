# Oxford Mechanical Website

A modern, responsive website for Oxford Mechanical - professional plumbing services in Toronto and GTA.

## Features

- 🎨 Modern design with custom theme integration
- 📱 Fully responsive mobile-first design
- ⚡ Built with Next.js 14 and React 18
- 🎯 SEO optimized with proper meta tags
- 🚀 Fast loading with optimized performance
- 🎨 Custom Tailwind CSS configuration
- 📧 Contact forms and service pages
- 🔧 Emergency service highlighting

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom theme
- **Language**: TypeScript
- **Fonts**: Inter (Google Fonts)
- **Icons**: SVG icons and emojis

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd oxford-mechanical
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
oxford-mechanical/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles and theme
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   └── Navigation.tsx     # Navigation component
├── style/                 # Theme files
│   └── new/              # New theme configuration
├── tailwind.config.js     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies
```

## Custom Theme

The website uses a custom theme with the following brand colors:

- **Primary**: #0037ff (Oxford Blue)
- **Secondary**: #dc5608 (Orange)
- **Accent**: #9cc59e (Green)
- **Ink**: #0b0e1c (Dark)

## Services

- Emergency Plumbing Services
- Drain Cleaning & Camera Inspection
- Leak Investigation & Repair
- Preventative Maintenance
- Water Saving Solutions
- Rough-In Plumbing
- Valve Replacement

## Service Areas

- Greater Toronto Area (GTA)
- High-rise condos
- Office buildings
- Schools and universities
- Public buildings

## Contact Information

- **Address**: 1111 Finch West, Toronto
- **Email**: info@oxfordmechanical.ca
- **Phone**: (416) 555-0123
- **Emergency**: 24/7 Service Available

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Adding New Pages

1. Create a new file in the `app/` directory
2. Export a default React component
3. Add navigation links in `components/Navigation.tsx`

## Deployment

The website is ready for deployment on platforms like:

- Vercel (recommended for Next.js)
- Netlify
- AWS Amplify
- Any static hosting service

## License

This project is licensed under the MIT License.
