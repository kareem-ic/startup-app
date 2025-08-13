# Youth Sports Finder - Style Guide & Development Standards

## 🎨 Design System Overview

The Youth Sports Finder app follows a modern, clean design philosophy focused on user experience and accessibility. This guide ensures consistency across all components and screens.

## 🎯 Design Principles

- **User-First**: Design for parents and youth athletes
- **Accessibility**: Ensure usability for all users
- **Consistency**: Maintain visual and functional consistency
- **Performance**: Optimize for smooth mobile experience
- **Scalability**: Design system that grows with the app

## 🌈 Color Palette

### Primary Colors
```css
/* Blue - Primary brand color */
--primary-blue: #3B82F6        /* Main buttons, links, active states */
--primary-blue-dark: #2563EB   /* Hover states, secondary buttons */
--primary-blue-light: #60A5FA  /* Subtle highlights, backgrounds */

/* Purple - Secondary brand color */
--primary-purple: #8B5CF6      /* Create Account button, special actions */
--primary-purple-dark: #7C3AED /* Hover states */
--primary-purple-light: #A78BFA /* Light backgrounds */
```

### Secondary Colors
```css
/* Green - Success, positive actions */
--success-green: #10B981       /* Success messages, positive actions */
--success-green-light: #34D399 /* Light success backgrounds */

/* Orange - Warning, attention */
--warning-orange: #F97316      /* Warning messages, attention items */
--warning-orange-light: #FB923C /* Light warning backgrounds */

/* Red - Error, destructive actions */
--error-red: #EF4444           /* Error messages, destructive actions */
--error-red-light: #F87171     /* Light error backgrounds */

/* Gray Scale */
--gray-50: #F9FAFB            /* Light backgrounds */
--gray-100: #F3F4F6           /* Subtle borders */
--gray-200: #E5E7EB           /* Card borders */
--gray-300: #D1D5DB           /* Input borders */
--gray-400: #9CA3AF           /* Placeholder text */
--gray-500: #6B7280           /* Secondary text */
--gray-600: #4B5563           /* Body text */
--gray-700: #374151           /* Headings */
--gray-800: #1F2937           /* Dark text */
--gray-900: #111827           /* Primary headings */
```

### Semantic Colors
```css
/* Competitive Level Indicators */
--elite-red: #DC2626          /* Elite level (trophy icon) */
--travel-amber: #F59E0B       /* Travel level (medal icon) */
--recreational-green: #10B981 /* Recreational level (star icon) */

/* Status Colors */
--favorite-heart: #EF4444     /* Favorited items */
--unfavorite-heart: #D1D5DB   /* Unfavorited items */
--trending-fire: #F59E0B      /* Trending indicators */
```

## 🔤 Typography

### Font Family
- **Primary**: System fonts (San Francisco on iOS, Roboto on Android)
- **Fallback**: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif

### Font Sizes
```css
/* Heading Scale */
--text-xs: 12px      /* Captions, small labels */
--text-sm: 14px      /* Body text, descriptions */
--text-base: 16px    /* Default body text */
--text-lg: 18px      /* Large body text, buttons */
--text-xl: 20px      /* Subheadings */
--text-2xl: 24px     /* Section headings */
--text-3xl: 30px     /* Page titles */
--text-4xl: 36px     /* Hero titles */
```

### Font Weights
```css
--font-light: 300     /* Light text */
--font-normal: 400    /* Regular text */
--font-medium: 500    /* Medium emphasis */
--font-semibold: 600  /* Semi-bold headings */
--font-bold: 700      /* Bold headings */
--font-extrabold: 800 /* Extra bold titles */
```

### Typography Scale
```css
/* Page Titles */
.title-hero {
  font-size: 36px;
  font-weight: 800;
  line-height: 1.2;
  color: var(--gray-900);
}

/* Section Headings */
.title-section {
  font-size: 24px;
  font-weight: 700;
  line-height: 1.3;
  color: var(--gray-800);
}

/* Card Titles */
.title-card {
  font-size: 20px;
  font-weight: 600;
  line-height: 1.4;
  color: var(--gray-800);
}

/* Body Text */
.text-body {
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  color: var(--gray-600);
}

/* Caption Text */
.text-caption {
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  color: var(--gray-500);
}
```

## 🧩 Component Guidelines

### Buttons

#### Primary Button
```css
.btn-primary {
  background-color: var(--primary-blue);
  color: white;
  padding: 16px 24px;
  border-radius: 12px;
  font-size: 18px;
  font-weight: 600;
  border: none;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.btn-primary:hover {
  background-color: var(--primary-blue-dark);
  transform: translateY(-1px);
  box-shadow: 0 6px 8px -1px rgba(0, 0, 0, 0.15);
}
```

#### Secondary Button
```css
.btn-secondary {
  background-color: var(--primary-purple);
  color: white;
  padding: 16px 24px;
  border-radius: 12px;
  font-size: 18px;
  font-weight: 600;
  border: none;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.btn-secondary:hover {
  background-color: var(--primary-purple-dark);
  transform: translateY(-1px);
  box-shadow: 0 6px 8px -1px rgba(0, 0, 0, 0.15);
}
```

#### Oval Button (Special)
```css
.btn-oval {
  background-color: var(--primary-purple);
  color: white;
  padding: 16px 32px;
  border-radius: 50px; /* Full oval */
  font-size: 18px;
  font-weight: 600;
  border: none;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}
```

### Cards

#### Club Card
```css
.card-club {
  background-color: white;
  border-radius: 16px;
  padding: 24px;
  margin-bottom: 16px;
  border: 1px solid var(--gray-200);
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
}

.card-club:hover {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
  transition: all 0.2s ease-in-out;
}
```

#### Featured Card
```css
.card-featured {
  background: linear-gradient(135deg, var(--primary-blue) 0%, var(--primary-purple) 100%);
  color: white;
  border-radius: 16px;
  padding: 24px;
  margin-bottom: 16px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}
```

### Input Fields

#### Text Input
```css
.input-text {
  border: 1px solid var(--gray-300);
  border-radius: 12px;
  padding: 16px;
  font-size: 16px;
  background-color: white;
  color: var(--gray-800);
}

.input-text:focus {
  border-color: var(--primary-blue);
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  outline: none;
}

.input-text::placeholder {
  color: var(--gray-400);
}
```

### Icons

#### Icon Guidelines
- **Size Scale**: 16px, 20px, 24px, 32px
- **Color**: Use semantic colors from palette
- **Spacing**: 8px, 12px, 16px margins around icons
- **Library**: FontAwesome5 for consistency

#### Icon Usage Examples
```css
.icon-small { font-size: 16px; }
.icon-medium { font-size: 20px; }
.icon-large { font-size: 24px; }
.icon-xlarge { font-size: 32px; }

.icon-primary { color: var(--primary-blue); }
.icon-success { color: var(--success-green); }
.icon-warning { color: var(--warning-orange); }
.icon-error { color: var(--error-red); }
```

## 📱 Layout & Spacing

### Spacing Scale
```css
--space-1: 4px    /* Tiny spacing */
--space-2: 8px    /* Small spacing */
--space-3: 12px   /* Medium spacing */
--space-4: 16px   /* Standard spacing */
--space-5: 20px   /* Large spacing */
--space-6: 24px   /* Extra large spacing */
--space-8: 32px   /* Section spacing */
--space-10: 40px  /* Page spacing */
--space-12: 48px  /* Major spacing */
--space-16: 64px  /* Hero spacing */
```

### Container Layouts
```css
/* Page Container */
.container-page {
  padding: 20px;
  padding-top: 80px; /* Account for header */
  max-width: 100%;
}

/* Card Container */
.container-card {
  padding: 24px;
  margin-bottom: 16px;
}

/* Section Container */
.container-section {
  margin-bottom: 32px;
}
```

### Grid System
```css
/* Flexbox Grid */
.grid-2 {
  display: flex;
  gap: 16px;
}

.grid-3 {
  display: flex;
  gap: 16px;
}

/* Responsive Grid */
@media (max-width: 768px) {
  .grid-2, .grid-3 {
    flex-direction: column;
  }
}
```

## 🎭 Interactive States

### Hover Effects
```css
/* Button Hover */
.btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 6px 8px -1px rgba(0, 0, 0, 0.15);
}

/* Card Hover */
.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 12px -1px rgba(0, 0, 0, 0.15);
}
```

### Active States
```css
/* Button Active */
.btn:active {
  transform: translateY(0);
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.1);
}

/* Input Focus */
.input:focus {
  border-color: var(--primary-blue);
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}
```

### Loading States
```css
/* Loading Button */
.btn-loading {
  opacity: 0.7;
  pointer-events: none;
}

.btn-loading::after {
  content: "...";
  margin-left: 8px;
}
```

## 🔍 Search & Filter Components

### Search Bar
```css
.search-container {
  margin-bottom: 32px;
}

.search-input {
  border: 1px solid var(--gray-300);
  border-radius: 12px;
  padding: 16px;
  font-size: 18px;
  width: 100%;
  background-color: white;
}

.search-button {
  background-color: var(--primary-blue);
  color: white;
  padding: 16px 24px;
  border-radius: 12px;
  font-size: 18px;
  font-weight: 600;
  border: none;
  margin-top: 16px;
  width: 100%;
}
```

### Filter Tags
```css
.filter-tag {
  background-color: var(--gray-100);
  color: var(--gray-700);
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
  border: 1px solid var(--gray-200);
  margin-right: 8px;
  margin-bottom: 8px;
}

.filter-tag.active {
  background-color: var(--primary-blue);
  color: white;
  border-color: var(--primary-blue);
}
```

## 📊 Data Display Components

### Club List Item
```css
.club-item {
  background-color: white;
  border-radius: 16px;
  padding: 20px;
  margin-bottom: 16px;
  border: 1px solid var(--gray-200);
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
}

.club-name {
  font-size: 20px;
  font-weight: 600;
  color: var(--gray-800);
  margin-bottom: 8px;
}

.club-team-name {
  font-size: 16px;
  font-weight: 500;
  color: var(--primary-blue);
  margin-bottom: 12px;
}

.club-details {
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
}

.club-detail {
  font-size: 14px;
  color: var(--gray-600);
}
```

### Competitive Level Badge
```css
.level-badge {
  display: inline-flex;
  align-items: center;
  padding: 4px 8px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 600;
  text-transform: capitalize;
}

.level-badge.elite {
  background-color: rgba(220, 38, 38, 0.1);
  color: var(--elite-red);
}

.level-badge.travel {
  background-color: rgba(245, 158, 11, 0.1);
  color: var(--travel-amber);
}

.level-badge.recreational {
  background-color: rgba(16, 185, 129, 0.1);
  color: var(--recreational-green);
}
```

## 🚀 Performance Guidelines

### Image Optimization
- Use appropriate image formats (PNG for icons, JPEG for photos)
- Implement lazy loading for club images
- Optimize image sizes for mobile devices
- Use vector icons when possible

### Animation Guidelines
- Keep animations under 300ms for responsiveness
- Use `transform` and `opacity` for smooth animations
- Avoid animating layout properties
- Implement `will-change` for complex animations

### Loading States
- Show skeleton screens for content loading
- Implement progressive loading for lists
- Use loading spinners for actions
- Provide immediate feedback for user interactions

## ♿ Accessibility Standards

### Color Contrast
- Maintain minimum 4.5:1 contrast ratio for text
- Use semantic colors for status indicators
- Provide alternative text for color-coded information

### Touch Targets
- Minimum 44px × 44px for touch targets
- Adequate spacing between interactive elements
- Clear visual feedback for touch interactions

### Screen Reader Support
- Proper heading hierarchy (h1, h2, h3)
- Descriptive alt text for images
- ARIA labels for interactive elements
- Semantic HTML structure

## 📱 Responsive Design

### Breakpoints
```css
/* Mobile First Approach */
/* Base styles for mobile */

/* Tablet (768px and up) */
@media (min-width: 768px) {
  .container-page { padding: 32px; }
  .grid-2 { flex-direction: row; }
}

/* Desktop (1024px and up) */
@media (min-width: 1024px) {
  .container-page { padding: 40px; }
  .grid-3 { flex-direction: row; }
}
```

### Mobile Considerations
- Touch-friendly button sizes
- Swipe gestures for navigation
- Optimized layouts for small screens
- Reduced motion for mobile users

## 🧪 Testing Guidelines

### Visual Testing
- Test on multiple device sizes
- Verify color contrast ratios
- Check for visual consistency
- Test with different font sizes

### Interaction Testing
- Verify hover and active states
- Test touch interactions on mobile
- Ensure keyboard navigation works
- Validate form submissions

### Performance Testing
- Measure loading times
- Check animation smoothness
- Verify memory usage
- Test on slower devices

## 📚 Component Library

### Available Components
1. **Buttons**: Primary, Secondary, Oval, Loading states
2. **Cards**: Club cards, Featured cards, Info cards
3. **Inputs**: Text inputs, Search bars, Filter tags
4. **Navigation**: Tab bars, Back buttons, Action buttons
5. **Data Display**: Club lists, Detail views, Status indicators
6. **Feedback**: Loading states, Success messages, Error handling

### Component Usage
- Follow the established patterns
- Use semantic class names
- Maintain consistent spacing
- Implement proper accessibility features

## 🔄 Version Control

### Commit Messages
- Use conventional commit format
- Include component names in commits
- Reference design system updates
- Document breaking changes

### Branch Strategy
- `main`: Production-ready code
- `develop`: Development branch
- `feature/*`: New features
- `bugfix/*`: Bug fixes
- `hotfix/*`: Critical fixes

## 📖 Documentation

### Code Comments
- Document complex logic
- Explain design decisions
- Reference design system
- Include usage examples

### Component Documentation
- Props and parameters
- Usage examples
- Accessibility features
- Performance considerations

---

*This style guide is a living document. Update it as the design system evolves and new patterns emerge.* 