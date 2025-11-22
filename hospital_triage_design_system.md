# Hospital Triage Design System

## Table of Contents
1. [Overview](#overview)
2. [Design Philosophy](#design-philosophy)
3. [Color Palette](#color-palette)
4. [Typography](#typography)
5. [Component Library](#component-library)
6. [Layout & Spacing](#layout--spacing)
7. [User Experience Flow](#user-experience-flow)
8. [Accessibility Guidelines](#accessibility-guidelines)

---

## Overview

The Hospital Triage Design System is a comprehensive guide for developing an emergency room triage application. This system enables efficient patient management through a two-tier interface: a **User Interface** for patient intake and an **Admin Interface** for prioritization and management.

### Purpose
- Streamline emergency room operations
- Prioritize patients based on injury severity and pain levels
- Provide clear communication between patients and medical staff
- Ensure equitable and efficient patient care

### Target Users
- **Users**: Patients awaiting triage
- **Admins**: Triage nurses and medical staff

---

## Design Philosophy

### Core Principles

#### 1. **Clarity**
All interface elements must communicate their purpose immediately. Users should understand their role and what actions they can take without confusion.

#### 2. **Accessibility**
The system must be usable by all patients, including those with visual, auditory, or mobility impairments. WCAG 2.1 AA standards guide our design decisions.

#### 3. **Efficiency**
The admin interface prioritizes speed and accuracy in patient management. Every element is positioned to minimize cognitive load and decision time.

#### 4. **Empathy**
Emergency room environments are stressful. The design should feel supportive and professional, reducing patient anxiety.

#### 5. **Consistency**
Visual and behavioral consistency across both interfaces builds user confidence and reduces learning curves.

---

## Color Palette

### Primary Colors

| Color | Hex Code | Usage | Importance |
|-------|----------|-------|-----------|
| **Emergency Red** | `#DC2626` | Alerts, high-priority items, critical attention levels | Immediately signals urgency and draws focus to critical information |
| **Medical Blue** | `#2563EB` | Primary buttons, links, trusted actions | Conveys professionalism and healthcare context |
| **Neutral Dark** | `#1F2937` | Text, headers, primary UI elements | Ensures readability and professional appearance |
| **Neutral Light** | `#F3F4F6` | Backgrounds, secondary elements | Reduces eye strain and creates visual separation |

### Secondary Colors

| Color | Hex Code | Usage | Importance |
|-------|----------|-------|-----------|
| **Attention Yellow** | `#F59E0B` | Medium-priority items, warnings | Draws attention without severity of red |
| **Success Green** | `#10B981` | Confirmations, successful submissions | Indicates positive outcomes and reassures users |
| **Neutral Gray** | `#6B7280` | Disabled states, secondary text | Communicates unavailability or low priority |

### Color Accessibility
- All text meets WCAG AA contrast ratios (minimum 4.5:1 for normal text)
- Do not rely solely on color to convey meaning; use icons and text labels
- Color-blind users can differentiate states through patterns or text

---

## Typography

### Font Stack
```
Primary Font: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif
Fallback: System fonts ensure compatibility across all devices
```

### Typographic Hierarchy

| Element | Font Size | Font Weight | Line Height | Usage |
|---------|-----------|-------------|-------------|-------|
| **Page Title** | 2.5rem (40px) | 700 (Bold) | 1.2 | Main heading for User/Admin pages |
| **Section Header** | 1.875rem (30px) | 600 (SemiBold) | 1.3 | Major section dividers |
| **Subsection Header** | 1.25rem (20px) | 600 (SemiBold) | 1.4 | Secondary section titles |
| **Body Text** | 1rem (16px) | 400 (Regular) | 1.6 | Main content, descriptions |
| **Small Text** | 0.875rem (14px) | 400 (Regular) | 1.5 | Helper text, captions |
| **Button Text** | 1rem (16px) | 600 (SemiBold) | 1.5 | Action labels |

### Typography Importance
- **Hierarchy** guides users' attention and helps them navigate logically
- **Font weight variation** creates visual distinction without adding visual noise
- **Line height** ensures readability for users with visual impairments
- **Consistent sizing** creates a predictable, professional appearance

---

## Component Library

### 1. Page Titles

#### Design Element
```
Large, centered text positioned at the top of each page.
Font Size: 2.5rem
Color: Neutral Dark (#1F2937)
Margin Bottom: 1.5rem
```

#### Purpose
- **User Page Title**: "Hospital Triage - User"
  - Clearly identifies the page as the patient intake interface
  - Sets expectation for the user experience ahead

- **Admin Page Title**: "Hospital Triage - Admin"
  - Distinguishes administrative functions
  - Signals authority and management scope

#### Importance
Large, visible titles reduce confusion about which interface the user is on. This is critical in a high-stress environment where patients and staff must quickly orient themselves.

---

### 2. Page Descriptions

#### Design Element
```
Positioned below the title, centered text
Font Size: 1rem
Color: Neutral Gray (#6B7280)
Font Weight: 400
Margin Bottom: 2rem
Max Width: 600px (on desktop)
```

#### User Page Description Example
"Please describe your injury and pain level. This information helps us prioritize your care."

#### Admin Page Description Example
"Review patient submissions and manage triage priority. Update attention levels as needed and remove patients from the queue."

#### Importance
- Provides context without overwhelming users
- Guides users toward appropriate actions
- Sets expectations for both patient and medical staff
- Reduces anxiety by explaining the process

---

### 3. User Questionnaire

#### Design Element
- **Container**: Centered white box with subtle shadow
- **Background**: Light neutral (#F3F4F6)
- **Padding**: 2rem
- **Border Radius**: 0.5rem
- **Max Width**: 500px on desktop

#### Form Fields

##### A. Injury Type Selection
```
Input Type: Radio buttons or dropdown
Label: "What type of injury are you experiencing?"
Options:
  - Trauma (fractures, cuts, bruises)
  - Burns
  - Chest Pain
  - Difficulty Breathing
  - Head/Neck Injury
  - Poisoning/Overdose
  - Other
Required: Yes
```

##### B. Pain Level Selection
```
Input Type: Range slider or numbered buttons
Label: "Rate your pain level (1-10)"
Scale: 1 (No Pain) to 10 (Severe Pain)
Visual Indicator: Color gradient (Green → Yellow → Red)
Required: Yes
```

##### C. Submit Button
```
Text: "Submit"
Color: Medical Blue (#2563EB)
Padding: 0.75rem 1.5rem
Border Radius: 0.375rem
Font Weight: 600
Hover State: Darker blue (#1D4ED8)
Disabled State: Gray (#9CA3AF)
```

#### Data Flow
1. User selects injury type and pain level
2. Form validates required fields
3. On valid submission: POST to `/submit-triage` or similar endpoint
4. Confirmation message appears: "Thank you! Your information has been received."
5. Admin receives notification in real-time

#### Importance
- **Injury Type** allows medical staff to prepare appropriate resources
- **Pain Level** immediately identifies critical patients requiring urgent care
- **Simple, focused form** reduces patient confusion and submission time
- **Clear labeling** ensures accessibility for users with cognitive or literacy challenges

---

### 4. Admin Summary Panel

#### Design Element
- **Layout**: Table or card-based grid
- **Container**: White background with subtle borders
- **Responsive**: Single column on mobile, multi-column on desktop

#### Summary Display
```
Columns:
  1. Patient ID (auto-generated)
  2. Injury Type
  3. Pain Level
  4. Submission Time
  5. Attention Level (status badge)
  6. Actions (buttons)
```

#### Attention Level Badges

| Level | Color | Icon | Meaning |
|-------|-------|------|---------|
| **Critical** | Emergency Red (#DC2626) | ⚠️ | Immediate medical attention required |
| **High** | Attention Yellow (#F59E0B) | ! | Urgent care needed soon |
| **Normal** | Medical Blue (#2563EB) | ℹ️ | Standard triage queue position |
| **Low** | Neutral Gray (#6B7280) | — | Stable, can wait |

#### Admin Controls

##### A. Update Attention Level
```
Action: Click on patient row or "Priority" button
Interface: Dropdown menu or modal dialog
Options: Critical, High, Normal, Low
Effect: Real-time update to patient list
```

##### B. Remove Patient
```
Action: "Remove" button in Actions column
Confirmation: "Are you sure? This action cannot be undone."
Effect: Patient removed from triage list, admin receives confirmation
```

##### C. View Patient Details
```
Action: Click patient row or "View Details" link
Interface: Modal or sidebar panel
Shows: Full questionnaire responses, timestamp, notes field
```

#### Importance
- **Visual hierarchy** (attention levels with colors) allows quick scanning
- **Real-time updates** ensure accurate patient management
- **Action buttons** are immediately accessible, reducing decision time
- **Confirmation dialogs** prevent accidental data loss
- **Clear status indicators** communicate urgency to entire medical team

---

## Layout & Spacing

### Desktop Layout (1024px and above)

#### User Page
```
┌─────────────────────────────────────┐
│  Hospital Triage - User             │
│  Please describe your injury...     │
├─────────────────────────────────────┤
│                                     │
│    ┌─────────────────────────────┐  │
│    │  Injury Type (Radio/Select) │  │
│    │  Pain Level (Slider)        │  │
│    │  [Submit]                   │  │
│    └─────────────────────────────┘  │
│                                     │
└─────────────────────────────────────┘
```

#### Admin Page
```
┌─────────────────────────────────────┐
│  Hospital Triage - Admin            │
│  Review and manage patient queue... │
├─────────────────────────────────────┤
│  Patient ID │ Injury │ Pain │ Level │ Actions │
│  ─────────────────────────────────────────────│
│  001        │ Trauma │ 8    │ 🔴 Critical     │
│  002        │ Burns  │ 6    │ 🟡 High        │
│  003        │ Chest  │ 4    │ 🔵 Normal      │
└─────────────────────────────────────┘
```

### Mobile Layout (< 480px)

#### Responsive Adjustments
- **Single column layout** for all content
- **Full-width form fields** for easier interaction on touch devices
- **Larger touch targets** (buttons minimum 44px × 44px)
- **Stacked table** converts to card format on mobile
- **Font sizes increased** for readability on small screens

### Spacing System

| Spacing Unit | Pixel Value | Usage |
|--------------|-------------|-------|
| `xs` | 4px | Minimal spacing between tightly related elements |
| `sm` | 8px | Small gaps between form elements |
| `md` | 16px | Default spacing between components |
| `lg` | 24px | Spacing between major sections |
| `xl` | 32px | Large gaps, section separators |
| `2xl` | 48px | Top-level page spacing |

### Padding & Margins

```
Container Padding:     2rem (32px)
Component Margin:      1.5rem (24px) bottom
Form Field Margin:     1rem (16px) bottom
Button Padding:        0.75rem 1.5rem (12px × 24px)
```

---

## User Experience Flow

### User Flow

```
1. User arrives at page
   ↓
2. Reads title and description
   ↓
3. Selects injury type from dropdown/radio
   ↓
4. Selects pain level using slider/buttons
   ↓
5. Reviews selections (optional pre-submit review)
   ↓
6. Clicks "Submit"
   ↓
7. Form validates
   ├─ If invalid: Error message displays, user corrects
   └─ If valid: Success message, form clears
   ↓
8. Admin receives notification
```

### Admin Flow

```
1. Admin opens app
   ↓
2. Views summary of all submitted patients (sorted by priority)
   ↓
3. Reviews patient details if needed
   ↓
4. Updates attention level based on medical assessment
   ↓
5. Calls patient when ready (external to system)
   ↓
6. Removes patient from queue after seen
   ↓
7. Process repeats for next patient
```

### Error Handling

#### User Submission Errors
```
Message: "Please select an injury type before submitting."
Color: Emergency Red (#DC2626)
Position: Above submit button
Dismissible: Yes (click X or refocus on field)
Accessibility: Alert role for screen readers
```

#### Admin Actions
```
Delete Confirmation:
  "Remove patient from queue? This cannot be undone."
  [Cancel] [Confirm]
  
Duplicate Submission Prevention:
  Disable submit button for 2 seconds after successful submission
  Show: "Submitting..." feedback
```

---

## Accessibility Guidelines

### Visual Accessibility

#### Color Contrast
- All text meets WCAG AA minimum (4.5:1 for normal text, 3:1 for large text)
- Color alone never conveys critical information (use icons, text labels, patterns)

#### Text Alternatives
- All icons include aria-labels: `<i class="icon" aria-label="critical priority"></i>`
- Images include descriptive alt text

#### Readable Text
- Minimum font size: 14px for body text
- Line height: 1.5 or greater for body text
- Line length: 50-75 characters for optimal readability
- Dark text on light backgrounds (or vice versa)

### Keyboard Navigation

#### Tab Order
1. Page title (informational, typically skipped by screen readers)
2. Description text
3. First form field (Injury Type)
4. Second form field (Pain Level)
5. Submit button

#### Keyboard Shortcuts (Admin)
- `Esc`: Close modal dialogs
- `Enter`: Confirm actions
- `Tab`: Navigate between patients (on summary table)

### Screen Reader Support

#### Semantic HTML
```html
<h1>Hospital Triage - User</h1>
<p>Please describe your injury...</p>
<form>
  <fieldset>
    <legend>Injury Type</legend>
    <!-- form controls -->
  </fieldset>
</form>
```

#### ARIA Labels
```html
<button aria-label="Remove patient from queue">Remove</button>
<span role="alert" class="error">Please select an option</span>
```

### Mobile Accessibility

#### Touch Targets
- Minimum size: 44px × 44px (Apple), 48px × 48px (Android)
- Spacing between interactive elements: at least 8px

#### Responsive Design
- Readable at all zoom levels (up to 200%)
- Text can be resized independently from page zoom
- No horizontal scrolling required

---

## Summary

This design system provides a comprehensive framework for developing a Hospital Triage application that balances efficiency, accessibility, and empathy. By adhering to these guidelines, the application will serve both patients and medical staff effectively in a high-stress emergency room environment.

### Key Takeaways
- **Design decisions** are informed by user needs and accessibility standards
- **Consistency** across visual and interaction patterns builds user confidence
- **Clarity** in communication reduces errors and improves outcomes
- **Accessibility** ensures equitable care for all patients
- **Efficiency** supports critical medical workflows

---

## References
- [WCAG 2.1 Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Material Design System](https://material.io/design/)
- [Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/)
- [Markdown Guide](https://www.markdownguide.org/cheat-sheet/)
