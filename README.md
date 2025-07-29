# Vedant Pancholi - Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. This portfolio showcases Vedant Pancholi's work as an aspiring Data Scientist and Software Engineer.

## 🚀 Features

- **Modern Design**: Clean and professional portfolio layout
- **Responsive**: Fully responsive design that works on all devices
- **Interactive Elements**: Smooth animations and transitions using Framer Motion
- **Contact Form**: Functional contact form with EmailJS integration
- **Analytics**: Built-in analytics with Vercel Analytics and Speed Insights
- **Blobity Effects**: Interactive cursor effects for enhanced UX
- **SEO Optimized**: Meta tags and Open Graph for better search visibility

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons, Iconify
- **Forms**: React Hook Form
- **Contact**: EmailJS
- **Analytics**: Vercel Analytics & Speed Insights
- **Cursor Effects**: Blobity

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (version 18 or higher)
- **npm** or **yarn** package manager

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd Portfolio
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Set Up Environment Variables

Create a `.env.local` file in the root directory and add your EmailJS configuration:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

### 4. Run the Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the portfolio.

## 📁 Project Structure

```
Portfolio/
├── app/                    # Next.js app directory
│   ├── components/         # React components
│   │   ├── about-section/
│   │   ├── contact+footer/
│   │   ├── education-section/
│   │   ├── experiences-section/
│   │   ├── header-section/
│   │   ├── hero-section/
│   │   ├── skills-section/
│   │   ├── ui/
│   │   └── work-section/
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── contexts/              # React contexts
├── public/                # Static assets
├── utils/                 # Utility functions
└── package.json           # Dependencies and scripts
```

## 🎨 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📱 Sections

The portfolio includes the following sections:

1. **Hero Section** - Introduction and call-to-action
2. **About Section** - Personal information and background
3. **Works Section** - Portfolio projects and case studies
4. **Experiences Section** - Work experience and timeline
5. **Skills Section** - Technical skills and expertise
6. **Education Section** - Academic background
7. **Contact Section** - Contact form and information
8. **Footer** - Additional links and information

## 🎯 Customization

### Personal Information
Update the following files to customize the portfolio:

- `app/layout.tsx` - Update metadata, title, and description
- `app/components/hero-section/Hero.tsx` - Update hero content
- `app/components/about-section/About.tsx` - Update about information
- `app/components/work-section/Works.tsx` - Update portfolio projects
- `app/components/experiences-section/Experiences.tsx` - Update work experience
- `app/components/skills-section/Skills.tsx` - Update skills
- `app/components/education-section/Education.tsx` - Update education

### Styling
- Modify `app/globals.css` for global styles
- Update `tailwind.config.ts` for Tailwind configuration
- Customize component-specific styles in individual component files

### Images
- Replace images in the `public/` directory
- Update image references in components

## 📧 Contact Form Setup

The contact form uses EmailJS. To set it up:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create an email service and template
3. Add your EmailJS credentials to `.env.local`
4. Update the contact form configuration in `app/components/contact+footer/Contact.tsx`

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
The project can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Vedant Pancholi**
- Aspiring Data Scientist/Software Engineer
- Expertise in Python, C++, and AI-driven solutions
- Passionate about leveraging data analytics and software engineering

## 📞 Contact

- **Email**: pancholivedant30@gmail.com
- **LinkedIn**: https://www.linkedin.com/in/vedantpancholi/
- **GitHub**: https://github.com/VedantPancholi

---

⭐ If you find this portfolio helpful, please give it a star! 