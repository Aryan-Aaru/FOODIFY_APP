# Profile Component Structure

This is a refactored version of your profile page, split into reusable components for better maintainability and organization.

## Component Hierarchy

```
Profile.jsx (Main Component)
├── ProfilePanel.jsx
├── DashboardView.jsx
│   ├── SectionCard.jsx
│   ├── ListItem.jsx
│   └── ToggleSwitch.jsx
├── AddressView.jsx
│   └── SectionCard.jsx
├── EditProfileView.jsx
│   └── SectionCard.jsx
└── Footer.jsx
```

## Components Overview

### Main Component
- **Profile.jsx** - The root component that manages state and routing between views

### Layout Components
- **ProfilePanel.jsx** - Left sidebar displaying user info, stats, and quick actions
- **Footer.jsx** - Site footer with links and social media

### View Components
- **DashboardView.jsx** - Main dashboard with account settings and favorites
- **AddressView.jsx** - Address management (list, add, edit, delete)
- **EditProfileView.jsx** - Profile editing form

### Reusable UI Components
- **SectionCard.jsx** - White card container with optional title and action button
- **ListItem.jsx** - Clickable list item with icon, text, and right element
- **ToggleSwitch.jsx** - Toggle switch for settings

## File Structure

```
/components
  ├── ToggleSwitch.jsx       # Reusable toggle switch
  ├── ListItem.jsx           # Reusable list item
  ├── SectionCard.jsx        # Reusable card wrapper
  ├── ProfilePanel.jsx       # Left sidebar profile panel
  ├── DashboardView.jsx      # Main dashboard view
  ├── AddressView.jsx        # Address management view
  ├── EditProfileView.jsx    # Edit profile view
  └── Footer.jsx             # Footer component
Profile.jsx                  # Main component
```

## Usage

```jsx
import Profile from './Profile';

function App() {
  return <Profile />;
}
```

## Key Features

- **View-based navigation** - Switch between dashboard, addresses, and profile edit
- **Reusable components** - All UI elements are modular and reusable
- **State management** - Centralized in main Profile component
- **Easy to extend** - Add new views or sections by creating new components

## State Management

The main `Profile.jsx` component manages:
- `activeView` - Current view ('dashboard', 'addresses', 'profile')
- `user` - User profile data
- `notificationsEnabled` - Notification toggle state

## Styling

All components use Tailwind CSS classes. Main color scheme:
- Primary: Red (#EF4444)
- Background: Gray (#F3F4F6)
- Text: Gray-900 for headings, Gray-600 for body

## Future Improvements

1. Add payment methods view
2. Add order history view
3. Implement image upload for profile picture
4. Add form validation
5. Connect to actual API endpoints
6. Add loading states
7. Add error handling
