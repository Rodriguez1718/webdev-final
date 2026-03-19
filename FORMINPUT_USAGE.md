# FormInput Component Usage Guide

The `FormInput` component is a flexible, reusable form input component for use across CTASection, ContactForm, and Hero2 forms.

## Location
`src/components/ui/FormInput.astro`

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `"text" \| "email" \| "tel" \| "textarea" \| "select"` | `"text"` | Input type |
| `name` | `string` | Required | Input name attribute |
| `id` | `string` | Same as `name` | Input id attribute |
| `placeholder` | `string` | `""` | Placeholder text |
| `label` | `string` | Optional | Label text (shows required asterisk if needed) |
| `required` | `boolean` | `false` | Whether input is required |
| `rows` | `number` | `4` | Textarea rows (only for textarea type) |
| `options` | `Array<{value, label}>` | `[]` | Select options (only for select type) |
| `variant` | `"light" \| "glass" \| "dark"` | `"light"` | Styling variant |
| `class` | `string` | `""` | Additional CSS classes |

## Variants

### Light Variant (Default)
Semi-transparent white background with white text. Best for dark backgrounds.
```astro
<FormInput
  type="text"
  name="name"
  placeholder="Your Name"
  variant="light"
/>
```

### Glass Variant
Frosted glass effect with backdrop blur and white text. Best for dark backgrounds with depth.
```astro
<FormInput
  type="email"
  name="email"
  placeholder="Your Email"
  variant="glass"
/>
```

### Dark Variant
White background with dark text. Best for light backgrounds (like Hero2 form).
```astro
<FormInput
  type="text"
  name="name"
  placeholder="Your Name"
  variant="dark"
/>
```

## Examples

### Text Input
```astro
<FormInput
  type="text"
  name="name"
  placeholder="Your Name"
  variant="light"
  required
/>
```

### Email Input
```astro
<FormInput
  type="email"
  name="email"
  placeholder="Your Email"
  variant="glass"
  required
/>
```

### Phone Input
```astro
<FormInput
  type="tel"
  name="phone"
  placeholder="Your Phone Number"
  variant="light"
  required
/>
```

### Textarea
```astro
<FormInput
  type="textarea"
  name="message"
  placeholder="Tell us about your project"
  rows={5}
  variant="light"
  required
/>
```

### Select Dropdown
```astro
<FormInput
  type="select"
  name="trade"
  placeholder="Select Your Trade"
  options={[
    { value: "hvac", label: "HVAC" },
    { value: "plumbing", label: "Plumbing" },
    { value: "other", label: "Other" },
  ]}
  variant="light"
  required
/>
```

### With Label
```astro
<FormInput
  type="email"
  name="email"
  label="Email Address"
  placeholder="your@email.com"
  variant="light"
  required
/>
```

## Usage in Forms

### Hero2 (Dark Variant - Light Background)
```astro
---
import FormInput from '../ui/FormInput.astro';
---

<form>
  <FormInput
    type="text"
    name="name"
    placeholder="Full Name"
    variant="dark"
    required
  />
  <FormInput
    type="email"
    name="email"
    placeholder="Email Address"
    variant="dark"
    required
  />
  <FormInput
    type="tel"
    name="phone"
    placeholder="Phone Number"
    variant="dark"
    required
  />
</form>
```

### CTASection (Light Variant - Dark Background)
```astro
---
import FormInput from '../ui/FormInput.astro';
---

<form>
  <FormInput
    type="text"
    name="name"
    placeholder="Your Name"
    variant="light"
    required
  />
  <FormInput
    type="email"
    name="email"
    placeholder="Your Email"
    variant="light"
    required
  />
  <FormInput
    type="tel"
    name="phone"
    placeholder="Your Phone Number"
    variant="light"
    required
  />
  <FormInput
    type="select"
    name="trade"
    placeholder="Select Your Trade"
    options={[
      { value: "hvac", label: "HVAC" },
      { value: "plumbing", label: "Plumbing" },
    ]}
    variant="light"
    required
  />
  <FormInput
    type="textarea"
    name="message"
    placeholder="Tell us about your project"
    variant="light"
    required
  />
</form>
```

### ContactForm (Glass Variant - Dark Background with Depth)
```astro
---
import FormInput from '../ui/FormInput.astro';
---

<form>
  <FormInput
    type="text"
    name="name"
    placeholder="Your Name"
    variant="glass"
    required
  />
  <FormInput
    type="email"
    name="email"
    placeholder="Your Email"
    variant="glass"
    required
  />
  <FormInput
    type="tel"
    name="phone"
    placeholder="Your Phone"
    variant="glass"
    required
  />
  <FormInput
    type="select"
    name="trade"
    placeholder="Select your trade..."
    options={[
      { value: "hvac", label: "HVAC" },
      { value: "plumbing", label: "Plumbing" },
      { value: "other", label: "Other" },
    ]}
    variant="glass"
    required
  />
  <FormInput
    type="textarea"
    name="message"
    placeholder="Tell us about your project..."
    variant="glass"
    required
  />
</form>
```

## Styling

The component automatically applies:
- Consistent padding and border radius
- Smooth transitions on focus
- Proper placeholder colors for each variant
- Design system color integration
- Responsive sizing
- Enhanced visibility with improved placeholder opacity

## Accessibility

- Proper `id` and `name` attributes for form submission
- Optional `label` prop with required indicator
- Focus states for keyboard navigation
- Semantic HTML structure
- High contrast text for readability

## Variant Comparison

| Feature | Light | Glass | Dark |
|---------|-------|-------|------|
| Background | Semi-transparent white | Frosted glass | Solid white |
| Text Color | White | White | Dark navy |
| Best For | Dark backgrounds | Dark backgrounds with depth | Light backgrounds |
| Placeholder Visibility | High | High | High |
| Focus Ring | Orange | White | Orange |

## Notes

- All inputs use proper contrast ratios for accessibility
- Placeholder text is now more visible (70% opacity)
- Focus states provide clear visual feedback
- Select options have dark background for readability
- Textarea has `resize-none` to maintain consistent sizing
- Component is fully responsive
- All variants support custom classes via `class` prop

