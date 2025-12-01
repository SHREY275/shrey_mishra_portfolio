# 🎨 Shrey Mishra - Portfolio Website

Modern, dark-themed portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion.

---

## 📋 Table of Contents

1. [What's New](#-whats-new)
2. [Quick Start](#-quick-start)
3. [Installation Guide](#-installation-guide)
4. [Troubleshooting](#-troubleshooting)
5. [Project Structure](#-project-structure)
6. [Technologies Used](#-technologies-used)
7. [Design System](#-design-system)
8. [Deployment](#-deployment)
9. [Development Tips](#-development-tips)

---

## ✨ What's New

### Content Updates
- ✅ **CGPA Updated**: Now displays **7.13/10** (previously 6.3/10)
- ✅ **New Experience Page**: Dedicated Experience section with timeline view
- ✅ **Full Stack Developer**: Current role at Karpuragaurai Technology (October 2025 – Present)
- ✅ **Data Science Intern**: Code B (April 2025 – June 2025) with detailed highlights
- ✅ **Backend Intern**: Pelorus Technologies (Oct 2024 – Jan 2025) with AI/ML projects
- ✅ **Skills with Badges**: Visual pill-shaped skill tags including **Kiro IDE**
- ✅ **Skills Page Removed**: Replaced with dedicated Experience page

### Design Updates
- ✅ **Sophisticated Dark Theme**: Deep navy background (#111827) with vibrant cyan accents
- ✅ **Enhanced Cards**: Modern card designs with glow effects and depth
- ✅ **Dual Typography**: Inter for body, Fira Sans for headings - strong visual hierarchy
- ✅ **Micro-interactions**: Icon animations, card lifts, profile image zoom
- ✅ **Glassmorphism**: Backdrop blur effects on navigation
- ✅ **Skill Badges**: Pill-shaped, scannable skill tags
- ✅ **Responsive Design**: Fully responsive across all devices
- ✅ **Smooth Animations**: Framer Motion with enhanced transitions

**See `UI_ENHANCEMENTS.md` for detailed design documentation**

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)

### 3-Minute Setup

```bash
# 1. Navigate to project directory
cd project

# 2. Install dependencies (takes 1-2 minutes)
npm install

# 3. Start development server
npm run dev

# 4. Open browser to http://localhost:5173
```

**That's it! Your portfolio is now running! 🎉**

---

## 📦 Installation Guide

### Step 1: Check Prerequisites

Verify Node.js is installed:
```bash
node --version
# Should show: v16.x.x or higher
```

Verify npm is installed:
```bash
npm --version
# Should show: 8.x.x or higher
```

If not installed, download from: https://nodejs.org/

### Step 2: Navigate to Project

**Windows (Command Prompt):**
```cmd
cd D:\projects\portfolio\project
```

**Windows (PowerShell):**
```powershell
cd D:\projects\portfolio\project
```

**Mac/Linux:**
```bash
cd /path/to/portfolio/project
```

### Step 3: Install Dependencies

```bash
npm install
```

This installs:
- React & React DOM
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- React Router
- Lucide React (icons)

**Expected output:**
```
added 234 packages, and audited 235 packages in 45s
```

### Step 4: Start Development Server

```bash
npm run dev
```

**Expected output:**
```
  VITE v5.x.x  ready in 500 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

### Step 5: Open in Browser

Go to: `http://localhost:5173`

### Stop the Server

Press `Ctrl + C` in the terminal

---

## 🔧 Troubleshooting

### Issue 1: "npm: command not found"

**Problem:** Node.js/npm is not installed

**Solution:**
1. Download and install Node.js from https://nodejs.org/
2. Restart your terminal
3. Verify: `node --version`

---

### Issue 2: 404 Error - Page Not Found

**Problem:** Missing index.html file or server not finding the entry point

**Solution:**
The `index.html` file should be in the project root. If missing, it has been created with the correct configuration.

**Verify the fix:**
1. Stop the server (Ctrl+C)
2. Restart: `npm run dev`
3. Open: http://localhost:5173

---

### Issue 3: "Cannot find module 'react'" or TypeScript errors

**Problem:** Dependencies not installed

**Solution:**
```bash
cd project
npm install
```

**Note:** TypeScript errors in your IDE are normal before running `npm install`. They will disappear after installation.

---

### Issue 4: Port 5173 already in use

**Problem:** Another process is using port 5173

**Solution 1 - Use different port:**
```bash
npm run dev -- --port 3000
```

**Solution 2 - Kill the process:**

**Windows:**
```cmd
netstat -ano | findstr :5173
taskkill /PID <PID_NUMBER> /F
```

**Mac/Linux:**
```bash
lsof -ti:5173 | xargs kill -9
```

---

### Issue 5: Styles not loading correctly

**Problem:** Tailwind CSS not working

**Solution:**
1. Stop the dev server (Ctrl+C)
2. Clear Vite cache:
   
   **Windows:**
   ```cmd
   rmdir /s /q node_modules\.vite
   ```
   
   **Mac/Linux:**
   ```bash
   rm -rf node_modules/.vite
   ```

3. Restart:
   ```bash
   npm run dev
   ```

---

### Issue 6: Build fails or npm install errors

**Problem:** Corrupted node_modules or package-lock.json

**Solution:**

**Windows:**
```cmd
rmdir /s /q node_modules
del package-lock.json
npm install
```

**Mac/Linux:**
```bash
rm -rf node_modules package-lock.json
npm install
```

---

### Issue 7: "EACCES" permission errors (Mac/Linux only)

**Problem:** Permission denied during npm install

**Solution:**
```bash
sudo npm install
```

Or fix npm permissions permanently:
```bash
sudo chown -R $USER:$GROUP ~/.npm
sudo chown -R $USER:$GROUP ~/.config
```

---

## 📁 Project Structure

```
project/
├── src/
│   ├── components/
│   │   └── Navigation.tsx      # Dark-themed navigation bar
│   ├── pages/
│   │   ├── Home.tsx            # Landing page with highlights
│   │   ├── Experience.tsx      # Professional experience timeline (NEW!)
│   │   ├── Resume.tsx          # Resume with CGPA & Skills badges
│   │   ├── Projects.tsx        # Project showcase
│   │   ├── Certifications.tsx  # Certifications display
│   │   ├── Blog.tsx            # Blog section
│   │   └── Contact.tsx         # Contact information
│   ├── App.tsx                 # Main app component
│   ├── index.css               # Global styles with dark mode
│   └── main.tsx                # Entry point
├── public/                     # Static assets
├── package.json                # Dependencies and scripts
├── vite.config.ts              # Vite configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
└── README.md                   # This file
```

---

## 🔧 Technologies Used

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 18.x | UI library |
| **TypeScript** | 5.x | Type safety |
| **Vite** | 5.x | Build tool & dev server |
| **Tailwind CSS** | 3.x | Utility-first CSS framework |
| **Framer Motion** | 11.x | Animation library |
| **React Router** | 6.x | Client-side routing |
| **Lucide React** | Latest | Icon library |

---

## 🎨 Design System

### Color Palette (Dark Mode)

| Color | Hex Code | Usage |
|-------|----------|-------|
| Background Primary | `#1e1e1e` | Main background |
| Background Secondary | `#2d2d2d` | Secondary sections |
| Card Background | `#252525` | Card components |
| Text Primary | `#e0e0e0` | Main text |
| Text Secondary | `#b0b0b0` | Secondary text |
| Accent Blue | `#6366f1` | Primary accent |
| Accent Purple | `#8b5cf6` | Secondary accent |
| Border | `#3a3a3a` | Borders and dividers |

### Typography

- **Font Family**: Poppins (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800
- **Base Size**: 16px
- **Line Height**: 1.6

### Responsive Breakpoints

| Device | Width | Tailwind Class |
|--------|-------|----------------|
| Mobile | < 768px | Default |
| Tablet | 768px - 1024px | `md:` |
| Desktop | > 1024px | `lg:` |

---

## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server at localhost:5173 |
| `npm run build` | Build for production (creates `dist/` folder) |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |

---

## 🌐 Deployment

### Option 1: Vercel (Recommended)

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   cd project
   vercel --prod
   ```

### Option 2: Netlify

1. Build the project:
   ```bash
   npm run build
   ```

2. Drag and drop the `dist` folder to [Netlify Drop](https://app.netlify.com/drop)

### Option 3: GitHub Pages

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to `package.json`:
   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

---

## 💡 Development Tips

### Hot Module Replacement (HMR)

Vite provides instant updates:
- Save any file
- Changes appear immediately in browser
- State is preserved

### Browser DevTools

**Open DevTools:**
- Windows/Linux: `F12` or `Ctrl+Shift+I`
- Mac: `Cmd+Option+I`

**Useful tabs:**
- **Console**: See errors and logs
- **Network**: Check loading times
- **Elements**: Inspect HTML/CSS

### VS Code Extensions (Recommended)

1. **ES7+ React/Redux/React-Native snippets**
2. **Tailwind CSS IntelliSense**
3. **Prettier - Code formatter**
4. **ESLint**

### Keyboard Shortcuts

| Action | Windows/Linux | Mac |
|--------|---------------|-----|
| Save file | `Ctrl+S` | `Cmd+S` |
| Format code | `Shift+Alt+F` | `Shift+Option+F` |
| Open terminal | ``Ctrl+` `` | ``Cmd+` `` |

---

## 🔍 Debugging

### Common Error Messages

| Error | Meaning | Solution |
|-------|---------|----------|
| "Cannot read property of undefined" | Accessing undefined variable | Check data structure |
| "Failed to fetch" | Network request failed | Check API endpoint |
| "Module not found" | Missing import | Check import path |
| "Unexpected token" | Syntax error | Check code syntax |

### Check Console for Errors

1. Open browser DevTools (F12)
2. Go to Console tab
3. Look for red error messages

---

## ✅ Features Implemented

### Content Features
- [x] Updated CGPA (7.13/10)
- [x] Full Stack Developer experience
- [x] Kiro IDE in skills
- [x] Professional summary
- [x] Key projects showcase
- [x] Certifications with badges

### Design Features
- [x] Dark mode theme
- [x] Card-based layouts
- [x] Hover effects
- [x] Smooth animations
- [x] Gradient text effects
- [x] Responsive navigation
- [x] Mobile-friendly design

### Technical Features
- [x] TypeScript for type safety
- [x] Component-based architecture
- [x] Client-side routing
- [x] Optimized build process
- [x] Fast refresh in development
- [x] Accessibility compliant (WCAG AA)

---

## 📊 Performance

- ⚡ Fast initial load with Vite
- 🎯 Code splitting for optimal bundle size
- 📦 Tree-shaking for unused code
- 🔄 Efficient re-renders with React

**Expected build size:**
- HTML: ~2 KB
- CSS: ~50 KB
- JS: ~200 KB (gzipped)
- Total: ~250 KB

---

## 🔐 Environment Variables (Optional)

If you need environment variables:

1. Create `.env` file in project root:
   ```env
   VITE_API_URL=your_api_url
   VITE_CONTACT_EMAIL=your_email
   ```

2. Access in code:
   ```typescript
   const apiUrl = import.meta.env.VITE_API_URL;
   ```

---

## 📚 Additional Resources

### Documentation
- [React Docs](https://react.dev/)
- [TypeScript Docs](https://www.typescriptlang.org/docs/)
- [Vite Docs](https://vitejs.dev/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)

### Tutorials
- [React Tutorial](https://react.dev/learn)
- [TypeScript for React](https://react-typescript-cheatsheet.netlify.app/)
- [Tailwind CSS Tutorial](https://tailwindcss.com/docs/utility-first)

---

## ✅ Pre-Launch Checklist

Before deploying:

- [ ] All dependencies installed (`npm install`)
- [ ] Dev server runs without errors (`npm run dev`)
- [ ] Production build succeeds (`npm run build`)
- [ ] No console errors in browser
- [ ] Tested on mobile viewport
- [ ] Tested on tablet viewport
- [ ] Tested on desktop viewport
- [ ] All links work correctly
- [ ] CGPA shows 7.13/10
- [ ] Full Stack Developer role visible
- [ ] Kiro IDE in skills section
- [ ] Dark theme applied everywhere

---

## 🆘 Getting Help

If you're stuck:

1. **Check the error message** - Read it carefully
2. **Google the error** - Someone likely had the same issue
3. **Check this README** - Solution might be in Troubleshooting section
4. **Stack Overflow** - Search for solutions

---

## 📞 Contact

**Shrey Mishra**
- 📧 Email: mishrashrey275@gmail.com
- 🐙 GitHub: [@SHREY275](https://github.com/SHREY275)
- 📱 Phone: +91 7208374231

---

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends
- Icons by [Lucide](https://lucide.dev/)
- Fonts by [Google Fonts](https://fonts.google.com/)
- Built with [Vite](https://vitejs.dev/) and [React](https://react.dev/)

---

## 📄 License

This is a personal portfolio project. Feel free to use it as inspiration for your own portfolio!

---

**Built with ❤️ by Shrey Mishra**

*Last Updated: November 30, 2025*

---

## 🎯 Quick Reference

### Most Common Commands
```bash
npm install          # Install dependencies
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production build
```

### Most Common Issues
1. **404 Error** → index.html was missing (now fixed)
2. **TypeScript errors** → Run `npm install`
3. **Port in use** → Use `npm run dev -- --port 3000`
4. **Styles not loading** → Restart dev server
5. **Build fails** → Delete node_modules and reinstall

### Key Files to Know
- `src/pages/Resume.tsx` - CGPA and Experience
- `src/pages/Skills.tsx` - Skills including Kiro IDE
- `src/index.css` - Dark mode colors
- `package.json` - Dependencies and scripts

---

**Need help? Email: mishrashrey275@gmail.com**
