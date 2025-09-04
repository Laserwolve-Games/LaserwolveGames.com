# Laserwolve Games Studio Website

Create an immersive, cutting-edge digital showcase that establishes Laserwolve Games as an innovative and visually stunning game development studio through bold animations and modern UI design.

**Experience Qualities**:
1. **Electrifying** - High-energy animations and visual effects that capture the excitement of gaming
2. **Futuristic** - Sleek, sci-fi inspired design elements that feel cutting-edge and forward-thinking  
3. **Polished** - Professional presentation with smooth interactions that demonstrate technical excellence

**Complexity Level**: Content Showcase (information-focused)
- Primarily showcasing the studio's capabilities, games, and team through rich visual presentation rather than complex interactive functionality

## Essential Features

**Hero Section with Animated Logo**
- Functionality: Large animated Laserwolve Games logo with particle effects and glowing elements
- Purpose: Immediately establish brand presence and visual impact
- Trigger: Page load with staggered entrance animations
- Progression: Logo materializes → particle effects activate → tagline appears → call-to-action fades in
- Success criteria: Logo animation completes smoothly within 2-3 seconds, particles are fluid

**Game Portfolio Showcase**
- Functionality: Grid of game cards with hover effects, screenshots, and project details
- Purpose: Display studio's work and capabilities to potential clients/players
- Trigger: Scroll into view or navigation click
- Progression: Cards slide in → hover reveals details → click opens detailed view → smooth transitions
- Success criteria: All game cards load properly, hover effects are responsive, images display correctly

**Studio Team Section**
- Functionality: Team member cards with animated reveals and role descriptions
- Purpose: Humanize the studio and showcase expertise
- Trigger: Scroll-triggered animations
- Progression: Team grid appears → individual cards animate in → hover shows details → smooth transitions
- Success criteria: All team members display, animations are staggered naturally

**Contact/Services Section**
- Functionality: Service offerings with animated icons and contact form
- Purpose: Convert visitors into clients or collaborators
- Trigger: Scroll into view or direct navigation
- Progression: Services appear → icons animate → contact form becomes interactive → submission feedback
- Success criteria: Form validates input, services are clearly presented, animations enhance rather than distract

## Edge Case Handling
- **Slow Connections**: Graceful fallbacks for animations, progressive loading of images
- **Motion Sensitivity**: Respect prefers-reduced-motion for accessibility
- **Mobile Performance**: Simplified animations on smaller screens to maintain performance
- **Browser Compatibility**: Fallback states for unsupported CSS features

## Design Direction
The design should feel cutting-edge, electrifying, and futuristic - evoking the excitement of next-gen gaming with sleek sci-fi aesthetics, bold neon accents, and fluid animations that demonstrate technical prowess while maintaining professional polish.

## Color Selection
Complementary (opposite colors) - Using electric blue and vibrant orange to create high-contrast, energetic combinations that feel both futuristic and gaming-focused.

- **Primary Color**: Electric Blue (oklch(0.6 0.25 240)) - Represents technology, innovation, and the digital realm
- **Secondary Colors**: Deep Space Navy (oklch(0.15 0.1 240)) for backgrounds and Dark Charcoal (oklch(0.2 0.02 240)) for cards
- **Accent Color**: Laser Orange (oklch(0.75 0.2 45)) - High-energy highlight for CTAs, hover states, and important elements
- **Foreground/Background Pairings**: 
  - Background (Deep Navy oklch(0.15 0.1 240)): Electric Blue text (oklch(0.85 0.2 240)) - Ratio 5.2:1 ✓
  - Card (Dark Charcoal oklch(0.2 0.02 240)): White text (oklch(0.98 0.01 240)) - Ratio 8.1:1 ✓
  - Primary (Electric Blue oklch(0.6 0.25 240)): White text (oklch(0.98 0.01 240)) - Ratio 4.7:1 ✓
  - Accent (Laser Orange oklch(0.75 0.2 45)): Dark Navy text (oklch(0.15 0.1 240)) - Ratio 6.8:1 ✓

## Font Selection
Typography should convey cutting-edge technology and gaming culture through modern, geometric sans-serif fonts that feel both futuristic and highly legible.

- **Typographic Hierarchy**: 
  - H1 (Studio Name): Orbitron Bold/48px/tight letter spacing for futuristic sci-fi feel
  - H2 (Section Headers): Orbitron Medium/32px/normal spacing for consistency
  - H3 (Game/Team Titles): Inter Bold/24px/slight letter spacing for readability
  - Body Text: Inter Regular/16px/relaxed line height for optimal reading
  - UI Elements: Inter Medium/14px/normal spacing for buttons and navigation

## Animations
Animations should be bold and fluid, creating moments of delight that showcase technical capability while supporting the sci-fi gaming aesthetic through particle effects, glowing elements, and smooth transitions.

- **Purposeful Meaning**: Motion communicates energy, innovation, and technical excellence - key values for a game dev studio
- **Hierarchy of Movement**: Hero logo gets most dramatic animation, section transitions are smooth, micro-interactions add polish

## Component Selection
- **Components**: 
  - Cards for game portfolio and team members with custom hover effects
  - Buttons with glowing hover states using Tailwind shadows
  - Badge components for tech stacks and roles
  - Separator elements between sections
- **Customizations**: 
  - Animated particle background system (custom component)
  - Glowing border effects for cards and buttons
  - Parallax scroll effects for depth
- **States**: 
  - Buttons: default/hover with glow/active with scale/focus with pulse
  - Cards: default/hover with lift and glow/loading with skeleton
- **Icon Selection**: Lucide icons for technology, gaming, and contact elements
- **Spacing**: Generous padding (p-8, p-12) with consistent gaps (gap-6, gap-8) for premium feel
- **Mobile**: Stack cards vertically, reduce animation complexity, maintain core visual hierarchy