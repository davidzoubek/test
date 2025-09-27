# Overview

This is a beginner-friendly Czech web application called "Moje první stránka" (My First Website), designed as an educational introduction to modern web development. The application features a clean, minimalist design with a hero section, BMI calculator, and dark/light theme toggle. It follows modern educational platform design patterns similar to coding tutorial sites, emphasizing clarity and approachability for new developers.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Routing**: Wouter for lightweight client-side routing
- **Build Tool**: Vite for fast development and optimized production builds
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent, accessible UI components
- **State Management**: React Query (@tanstack/react-query) for server state management
- **Component Structure**: Modular component architecture with reusable UI components in `/components/ui/`

## Backend Architecture  
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript for type safety across the full stack
- **API Design**: RESTful API structure with `/api` prefix for all endpoints
- **Development**: Hot module replacement and middleware logging for development experience
- **Static Serving**: Vite integration for serving static assets in development

## Data Storage
- **Database**: PostgreSQL configured via Drizzle ORM
- **Schema Management**: Drizzle Kit for database migrations and schema management
- **Connection**: Neon Database serverless PostgreSQL connection
- **Development Storage**: In-memory storage implementation for development/testing

## Theming and UI System
- **Design System**: Custom CSS variable-based theming supporting light/dark modes
- **Color Palette**: Vibrant blues for trust/learning, with carefully crafted light/dark variants
- **Typography**: Inter/Poppins fonts from Google Fonts for modern, readable text
- **Component Library**: Comprehensive shadcn/ui components with Radix UI primitives
- **Responsive Design**: Mobile-first approach with Tailwind responsive utilities

## Authentication and State
- **Theme Management**: Local storage-based theme persistence with React Context
- **Form Handling**: React Hook Form with Zod validation for type-safe forms
- **Client State**: React hooks for local component state management

# External Dependencies

## Core Framework Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL database connection for Neon Database
- **drizzle-orm**: Type-safe ORM for database operations and queries
- **@tanstack/react-query**: Server state management and caching library

## UI and Component Libraries
- **@radix-ui/***: Comprehensive set of unstyled, accessible UI primitives (accordion, dialog, dropdown, etc.)
- **tailwindcss**: Utility-first CSS framework for styling
- **class-variance-authority**: Utility for creating component variants with Tailwind
- **lucide-react**: Modern icon library for React applications

## Development and Build Tools
- **vite**: Fast build tool and development server
- **@vitejs/plugin-react**: React support for Vite
- **@replit/vite-plugin-***: Replit-specific development enhancements
- **tsx**: TypeScript execution engine for Node.js

## Form and Validation
- **react-hook-form**: Performant forms library with minimal re-renders
- **@hookform/resolvers**: Validation resolver for React Hook Form
- **zod**: TypeScript-first schema validation library
- **drizzle-zod**: Integration between Drizzle ORM and Zod validation

## Additional Utilities
- **clsx**: Utility for conditionally constructing className strings
- **date-fns**: Modern JavaScript date utility library
- **wouter**: Minimalist routing for React applications
- **cmdk**: Command menu component for search interfaces