# Design Guidelines for "Moje první stránka"

## Design Approach
**Selected Approach:** Reference-Based (inspired by modern educational/tutorial platforms)
This simple introductory website follows clean, beginner-friendly design patterns similar to coding tutorial sites like Codecademy or FreeCodeCamp, emphasizing clarity and approachability.

## Core Design Elements

### Color Palette
**Light Mode:**
- Primary: 220 90% 50% (vibrant blue for trust and learning)
- Background: 0 0% 98% (soft white)
- Text: 220 20% 20% (dark blue-gray)
- Accent: 280 70% 60% (subtle purple for highlights)

**Dark Mode:**
- Primary: 220 80% 60% (lighter blue for contrast)
- Background: 220 30% 8% (deep blue-black)
- Text: 220 20% 90% (light blue-gray)
- Accent: 280 50% 70% (muted purple)

### Typography
- **Primary Font:** Inter or Poppins from Google Fonts
- **Headline:** 3xl-4xl font weight, bold (700)
- **Body Text:** lg size, regular weight (400)
- **Line Height:** Generous 1.6-1.8 for readability

### Layout System
**Spacing Units:** Consistent use of Tailwind units 4, 8, 12, and 16
- Padding: p-8 for main container
- Margins: mb-8 between major elements
- Gaps: gap-4 for smaller spacing

### Component Library
**Core Elements:**
- **Hero Section:** Centered layout with large headline and subtext
- **Typography Hierarchy:** Clear distinction between headline and body text
- **Container:** Max-width constraint for optimal reading experience
- **Responsive Design:** Mobile-first approach with proper scaling

### Visual Treatment
**Minimal and Clean:**
- Generous whitespace for focus
- Subtle shadow or border treatments if needed
- No gradients or complex backgrounds
- Focus on typography hierarchy and spacing

### Layout Structure
**Single Section Design:**
- Centered hero section
- Vertically centered content
- Maximum content width of 2xl for readability
- Responsive padding adjustments

### Animations
**Minimal Approach:**
- Subtle fade-in on page load only
- No hover effects or distracting animations
- Focus on content clarity over visual effects

## Images
**No images required** - This design relies entirely on typography and whitespace for visual impact. The simplicity emphasizes the learning/beginner nature of the content.

## Key Design Principles
1. **Clarity First:** Every element serves the content
2. **Beginner-Friendly:** Approachable and non-intimidating
3. **Responsive:** Works perfectly on all device sizes
4. **Accessible:** High contrast ratios and readable typography
5. **Focused:** Single-purpose design with clear message hierarchy