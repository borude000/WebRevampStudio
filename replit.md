# Overview

WebRevamp Studio is a modern website redesign agency focused on transforming outdated websites into fast, mobile-first experiences for Indian small and medium businesses (SMBs). The application is a full-stack portfolio website showcasing services like website redesign, responsive development, performance optimization, and ongoing maintenance. It features a contact form for lead generation, portfolio case studies with before/after comparisons, and comprehensive service pages designed to convert visitors into clients.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Styling**: Tailwind CSS with custom design tokens and CSS variables
- **Animations**: Framer Motion for smooth page transitions and micro-interactions
- **State Management**: TanStack Query for server state management and React hooks for local state
- **Forms**: React Hook Form with Zod validation for type-safe form handling

## Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Type System**: TypeScript throughout the entire application
- **Data Storage**: In-memory storage with interface abstraction for easy database migration
- **API Design**: RESTful endpoints with proper error handling and request logging
- **Session Management**: Express session middleware with PostgreSQL session store configuration

## Component Structure
- **Layout System**: Consistent header/footer layout with accessibility features
- **UI Components**: Reusable component library following atomic design principles
- **Page Components**: Route-based components for different sections (Home, Services, Work, About, Contact)
- **Custom Components**: Specialized components like BeforeAfterSlider, ContactForm, and CTAButton

## Performance & SEO
- **Core Web Vitals**: Optimized for performance metrics with lazy loading and efficient bundling
- **SEO Implementation**: Dynamic meta tags, structured data, and Google Analytics integration
- **Accessibility**: WCAG compliance with proper ARIA labels, keyboard navigation, and screen reader support
- **Mobile-First**: Responsive design with touch-friendly interactions and mobile menu

## Development Tooling
- **Build System**: Vite with hot module replacement and optimized production builds
- **Code Quality**: ESLint and TypeScript for code consistency and type safety
- **Styling**: PostCSS with Tailwind CSS and autoprefixer for cross-browser compatibility

# External Dependencies

## Core Framework Dependencies
- **React Ecosystem**: React, React DOM, React Query for state management
- **Routing**: Wouter for client-side navigation
- **Build Tools**: Vite for development and bundling, esbuild for server compilation

## UI and Styling
- **Component Library**: Radix UI primitives for accessible base components
- **Styling**: Tailwind CSS with custom configuration and design tokens
- **Icons**: Lucide React for consistent iconography
- **Animations**: Framer Motion for smooth transitions and interactions

## Forms and Validation
- **Form Handling**: React Hook Form for efficient form state management
- **Validation**: Zod for runtime type validation and schema definition
- **Form Resolvers**: Hookform resolvers for Zod integration

## Database and ORM
- **ORM**: Drizzle ORM configured for PostgreSQL with schema definitions
- **Database Driver**: Neon Database serverless driver for PostgreSQL connections
- **Migrations**: Drizzle Kit for database schema migrations

## Development and Analytics
- **Analytics**: Google Analytics 4 integration for user tracking
- **Development**: Replit-specific plugins for development environment
- **Session Storage**: PostgreSQL session store for user sessions

## Email and Communication
- **Email Service**: Resend API configured for transactional emails (contact form submissions)
- **Contact Methods**: WhatsApp integration for direct communication

## Server Infrastructure
- **Web Server**: Express.js with middleware for JSON parsing and static file serving
- **Development Server**: Vite development server with proxy configuration
- **Production**: Node.js server with static file serving and API routes