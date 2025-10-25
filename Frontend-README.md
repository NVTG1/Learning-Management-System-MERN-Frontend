# LMS Frontend

React-based Learning Management System frontend with Clerk authentication and Tailwind CSS.

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **React Router DOM** - Routing
- **Clerk** - Authentication
- **Axios** - HTTP client

## Project Structure

```
client/
├── src/
│   ├── assets/          # Images and static files
│   ├── components/      # Reusable components
│   │   ├── student/     # Student-facing components
│   │   └── educator/    # Educator dashboard components
│   ├── context/         # React Context (AppContext)
│   ├── pages/           # Page components
│   │   ├── student/     # Student pages
│   │   └── educator/    # Educator pages
│   ├── App.jsx          # Main app component with routes
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── public/              # Public assets
├── .env                 # Environment variables
├── package.json         # Dependencies
├── vite.config.js       # Vite configuration
└── tailwind.config.js   # Tailwind configuration
```

## Setup Instructions

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Clerk account

### Installation

1. **Install dependencies**
```bash
npm install
```

2. **Create `.env` file**
```env
VITE_CLERK_PUBLISHABLE_KEY=pk_test_your_clerk_key
VITE_API_URL=http://localhost:5000
VITE_CURRENCY=$
```

3. **Run development server**
```bash
npm run dev
```

Visit: `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_CLERK_PUBLISHABLE_KEY` | Clerk authentication key | `pk_test_...` |
| `VITE_API_URL` | Backend API URL | `http://localhost:5000` |
| `VITE_CURRENCY` | Currency symbol | `$` |

## Features

### Student Features
- Browse courses
- View course details with chapters and lectures
- Enroll in courses
- Track enrolled courses
- View course progress
- Watch lecture videos
- Rate courses

### Educator Features
- Dashboard with statistics
- Add new courses with chapters and lectures
- Edit existing courses
- View enrolled students
- Manage course content

## Pages

### Student Pages
- `/` - Homepage with featured courses
- `/course-list` - All courses list
- `/course/:id` - Course details
- `/my-enrollments` - User's enrolled courses
- `/player/:courseId` - Video player

### Educator Pages
- `/educator/educator` - Dashboard
- `/educator/add-course` - Add new course
- `/educator/my-courses` - Educator's courses
- `/educator/student-enrolled` - Enrolled students list

## Components

### Student Components
- `Navbar` - Main navigation
- `Footer` - Page footer
- `Hero` - Homepage hero section
- `CourseCard` - Course display card
- `Loading` - Loading spinner

### Educator Components
- `Navbar` - Educator navigation
- `Sidebar` - Dashboard sidebar menu
- `Footer` - Educator footer

## Styling

Uses Tailwind CSS with custom design system:
- Custom colors (orange theme)
- Responsive breakpoints
- Dark mode support
- Custom utility classes

## Deployment

### Deploy to Vercel

1. **Push to GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Import to Vercel**
- Go to vercel.com
- Import repository
- Set environment variables
- Deploy

3. **Environment Variables on Vercel**
```
VITE_CLERK_PUBLISHABLE_KEY=your_key
VITE_API_URL=your_backend_url
VITE_CURRENCY=$
```

## Common Issues

### Issue: Blank page after deployment
**Solution:** Check browser console for errors, verify Clerk key is set

### Issue: Cannot connect to backend
**Solution:** Update `VITE_API_URL` to production backend URL

### Issue: Clerk authentication not working
**Solution:** Add Vercel URL to Clerk allowed origins

## License

MIT