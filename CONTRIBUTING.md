# Contributing to LaserwolveGames.com

Thank you for your interest in contributing to the Laserwolve Games website! This document provides guidelines for contributing to the project.

## Getting Started

1. Fork the repository
2. Clone your fork locally
3. Create a new branch for your feature or bug fix
4. Make your changes
5. Test your changes thoroughly
6. Submit a pull request

## Development Environment

The Laserwolve Games website is built using modern web technologies. To contribute:

### Prerequisites

- Node.js (latest LTS version)
- npm or yarn package manager
- Modern web browser
- Code editor with TypeScript/React support

### Setup

1. Clone your fork:
   ```bash
   git clone https://github.com/YOUR_USERNAME/LaserwolveGames.com.git
   cd LaserwolveGames.com
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser to the local development URL (usually `http://localhost:5173`)

## Technology Stack

- **Framework**: React with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Components**: Radix UI primitives
- **State Management**: React hooks
- **Type Checking**: TypeScript

## Code Style and Standards

### TypeScript/React

- Use TypeScript for all new code
- Follow React best practices and hooks patterns
- Use functional components with hooks
- Implement proper error boundaries
- Write type-safe code with proper interfaces

### Code Organization

- Keep components small and focused
- Use meaningful component and file names
- Follow the existing project structure
- Separate business logic from presentation
- Create reusable components when appropriate

### Styling

- Use Tailwind CSS classes for styling
- Follow responsive design principles
- Maintain consistency with existing design system
- Optimize for accessibility
- Test across different screen sizes

### Performance

- Optimize bundle size
- Use React.memo() for expensive components
- Implement proper loading states
- Lazy load components when appropriate
- Optimize images and assets

## Submitting Changes

### Pull Requests

1. Ensure your code follows the project's coding standards
2. Write clear, descriptive commit messages
3. Include a detailed description of your changes
4. Reference any related issues
5. Ensure all tests pass and builds successfully
6. Test across different browsers and devices

### Commit Messages

Use clear, descriptive commit messages:

```
feat: add new hero section component
fix: resolve mobile navigation menu issue
docs: update README with new setup instructions
style: improve responsive design for tablet devices
```

### Bug Reports

When reporting bugs, please include:

- Clear description of the issue
- Steps to reproduce
- Expected vs actual behavior
- Browser/device information
- Screenshots or videos if applicable
- Browser console errors (if any)

### Feature Requests

For new features:

- Describe the feature and its use case
- Explain why it would benefit the project
- Consider the scope and complexity
- Provide mockups or examples if applicable

## Testing Guidelines

### Manual Testing

- Test in multiple browsers (Chrome, Firefox, Safari, Edge)
- Verify responsive design on different screen sizes
- Check accessibility with screen readers
- Test with different network conditions
- Verify all links and forms work correctly

### Code Quality

- Run TypeScript type checking: `npm run type-check`
- Run linting: `npm run lint`
- Ensure build succeeds: `npm run build`
- Test production build: `npm run preview`

## Code Review Process

All submissions require review before merging. We look for:

- Code quality and maintainability
- Adherence to project standards
- Proper TypeScript typing
- Responsive design implementation
- Accessibility considerations
- Performance implications

## Areas for Contribution

### Content and Design

- UI/UX improvements
- Content updates and corrections
- Accessibility enhancements
- Mobile responsiveness
- Visual design improvements

### Technical Improvements

- Performance optimizations
- Build process improvements
- SEO enhancements
- TypeScript improvements
- Component refactoring

### Documentation

- Code documentation
- User guides
- Developer documentation
- API documentation

## Resources

### Documentation

- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Radix UI Documentation](https://www.radix-ui.com/)

### Design Resources

- [Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [React Patterns](https://reactpatterns.com/)
- [TypeScript Best Practices](https://typescript-eslint.io/docs/)

## Questions?

If you have questions about contributing:

- Open an issue for discussion
- Check existing issues and pull requests
- Review the project documentation
- Contact us through the website

Thank you for contributing to the Laserwolve Games website!
