# Contributing to VELOCITY

Thank you for your interest in contributing to VELOCITY! This document provides guidelines and instructions for contributing to the project.

## 🤝 Code of Conduct

By participating in this project, you agree to maintain a respectful and inclusive environment for everyone.

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn
- Git
- Code editor (VS Code recommended)

### Setup Development Environment

1. **Fork the repository**
   ```bash
   # Click the "Fork" button on GitHub
   ```

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/VELOCITY.git
   cd VELOCITY
   ```

3. **Add upstream remote**
   ```bash
   git remote add upstream https://github.com/Mostafa-SAID7/VELOCITY.git
   ```

4. **Install dependencies**
   ```bash
   npm install
   ```

5. **Create a branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

6. **Start development server**
   ```bash
   npm run dev
   ```

## 📝 Development Guidelines

### Code Style

- **TypeScript**: Use TypeScript for all new files
- **Formatting**: Follow existing code formatting
- **Naming**: Use descriptive variable and function names
- **Comments**: Add comments for complex logic

### Component Guidelines

1. **Functional Components**: Use functional components with hooks
2. **Props Interface**: Define TypeScript interfaces for props
3. **Reusability**: Create reusable components when possible
4. **Accessibility**: Include ARIA labels and keyboard navigation

Example:
```typescript
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'danger';
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  onClick,
  disabled 
}) => {
  // Component implementation
};
```

### Styling Guidelines

1. **Tailwind CSS**: Use Tailwind utility classes
2. **Dark Mode**: Support both light and dark themes
3. **Responsive**: Mobile-first responsive design
4. **Animations**: Use Tailwind animations from config

Example:
```tsx
<button className="px-6 py-3 bg-gradient-to-r from-lime-500 to-orange-500 
                   text-white rounded-xl hover:scale-105 transition-all
                   dark:from-lime-600 dark:to-orange-600">
  Click Me
</button>
```

### State Management

1. **Context API**: Use Context for global state
2. **Local State**: Use useState for component-level state
3. **Persistence**: Use localStorage for data persistence

### File Structure

```
src/
├── components/     # Reusable UI components
├── context/        # Global state contexts
├── data/           # Static JSON data
├── pages/          # Route components
├── services/       # API and business logic
└── utils/          # Utility functions
```

## 🐛 Bug Reports

### Before Submitting

1. Check existing issues
2. Verify it's reproducible
3. Test on latest version

### Bug Report Template

```markdown
**Description**
Clear description of the bug

**Steps to Reproduce**
1. Go to '...'
2. Click on '...'
3. See error

**Expected Behavior**
What should happen

**Actual Behavior**
What actually happens

**Screenshots**
If applicable

**Environment**
- OS: [e.g., Windows 11]
- Browser: [e.g., Chrome 120]
- Version: [e.g., 1.0.0]
```

## ✨ Feature Requests

### Feature Request Template

```markdown
**Feature Description**
Clear description of the feature

**Use Case**
Why is this feature needed?

**Proposed Solution**
How should it work?

**Alternatives**
Other solutions considered

**Additional Context**
Any other information
```

## 🔄 Pull Request Process

### Before Submitting

1. **Update from upstream**
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

2. **Test your changes**
   ```bash
   npm run dev
   npm run build
   npm run lint
   ```

3. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add new feature"
   ```

### Commit Message Format

Follow conventional commits:

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting)
- `refactor:` Code refactoring
- `test:` Adding tests
- `chore:` Maintenance tasks

Examples:
```
feat: add product wishlist functionality
fix: resolve cart quantity update issue
docs: update installation instructions
style: format code with prettier
refactor: simplify product filtering logic
```

### Pull Request Template

```markdown
**Description**
What does this PR do?

**Related Issue**
Fixes #123

**Changes Made**
- Added feature X
- Fixed bug Y
- Updated documentation

**Screenshots**
If applicable

**Testing**
How was this tested?

**Checklist**
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex code
- [ ] Documentation updated
- [ ] No new warnings
- [ ] Tested on multiple browsers
- [ ] Dark mode support added
- [ ] Responsive design verified
```

### Review Process

1. Maintainers will review your PR
2. Address any requested changes
3. Once approved, PR will be merged

## 🧪 Testing

### Manual Testing

1. Test on multiple browsers (Chrome, Firefox, Safari)
2. Test responsive design (mobile, tablet, desktop)
3. Test dark/light mode
4. Test all user flows

### Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

## 📚 Documentation

### When to Update Documentation

- Adding new features
- Changing existing functionality
- Fixing bugs that affect usage
- Adding new dependencies

### Documentation Files

- `README.md`: Project overview and setup
- `CHANGELOG.md`: Version history
- `CONTRIBUTING.md`: This file
- Code comments: Complex logic explanation

## 🎨 Design Contributions

### Design Guidelines

1. Follow existing design system
2. Use brand colors (lime and orange gradients)
3. Maintain consistency across pages
4. Support dark mode
5. Ensure accessibility

### Submitting Designs

1. Create mockups or prototypes
2. Open an issue with design proposal
3. Include rationale and use cases
4. Wait for feedback before implementing

## 🔒 Security

### Reporting Security Issues

**DO NOT** open public issues for security vulnerabilities.

Instead:
1. Email security concerns privately
2. Include detailed description
3. Provide steps to reproduce
4. Wait for response before disclosure

## 📞 Getting Help

### Resources

- GitHub Issues: Bug reports and feature requests
- GitHub Discussions: Questions and discussions
- Documentation: README and code comments

### Questions

If you have questions:
1. Check existing documentation
2. Search closed issues
3. Open a new discussion
4. Be specific and provide context

## 🏆 Recognition

Contributors will be:
- Listed in project documentation
- Credited in release notes
- Acknowledged in the community

## 📄 License

By contributing, you agree that your contributions will be licensed under the same license as the project (MIT License).

---

Thank you for contributing to VELOCITY! Your efforts help make this project better for everyone. 🚀
