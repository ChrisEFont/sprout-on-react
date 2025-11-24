# Copilot Instructions for Sprout (React Pricing Table App)

## Project Overview
Sprout is a React + Vite application for managing and displaying pricing tables with dynamic line items. The app is a **Red Hat pricing quotation tool** handling complex pricing scenarios with multiple discount types and contract terms.

## Architecture & Data Flow

### Component Hierarchy
```
App
└── PricingTable (main container)
    ├── Line (EmptyLine - form for new entries)
    │   └── AddButton
    └── AddedLine[] (read-only display of added lines)
        └── DeleteButton
```

### State Management Pattern
- **Parent (PricingTable)**: Manages `lines` state array of added pricing lines
- **Child (EmptyLine)**: Collects form input via individual `useState` hooks, sends complete object to parent via `props.addLine()`
- **Display (AddedLine)**: Receives all fields as props (no state), displays read-only data

**Example data object structure** (20+ fields):
```javascript
{
  saleType, sku, description, contract, quantity,
  listPrice, totalListPrice, coterm, startDate, endDate,
  cotermListPrice, totalCotermListPrice,
  rhDiscount, transferDiscount, nxDiscount,
  customerPrice, totalCustomerPrice, totalCost, profit
}
```

### Critical Data Flow Issue
⚠️ **AddedLine currently displays as read-only**. Lines cannot be edited or deleted yet - DeleteButton exists but is not fully implemented.

## Build & Development

### Commands
```bash
npm run dev       # Start Vite dev server with HMR
npm run build     # Production build to dist/
npm run lint      # Run ESLint (currently empty config)
npm run preview   # Preview production build locally
```

### Build Configuration
- **Tool**: Vite 6.0.3 with React plugin
- **React**: 18.3.1 with Fast Refresh (Babel-based)
- **Module Type**: ES modules (`"type": "module"` in package.json)

## Code Patterns & Conventions

### Component Structure
1. All components are **functional components** with hooks
2. Import CSS files **directly in component** (e.g., `import './line.css'`)
3. Named exports: `export function ComponentName() {}`
4. Props validation: Add `// eslint-disable-next-line react/prop-types` when prop-types checks are skipped

### Form Input Pattern in EmptyLine
- Each field has a `useState` hook
- onChange handlers: `onChange={e => setState(e.target.value)}`
- No input validation currently implemented
- Form resets after successful submission (see `handleAddLine()`)

### CSS Classes
- **Component-scoped**: `line.css`, `addButton.css`, `deleteButton.css` (imported within components)
- BEM-like naming: `.add-button`, `.delete-button`, `.pricing-table`
- Class names match semantic HTML roles

## Integration Points & External Dependencies

### Dependencies
- **react** (18.3.1): Core UI framework
- **react-dom** (18.3.1): DOM rendering
- **@vitejs/plugin-react** (4.3.4): Fast Refresh
- **ESLint plugins**: eslint-plugin-react, eslint-plugin-react-hooks (configured but minimal rules active)

### Data Source
Currently uses **hardcoded test data** (`elementosPrueba` array in PricingTable.jsx). No backend integration or API calls exist yet.

## Project-Specific Patterns

### Known Issues & TODOs
1. **EmptyLine.jsx**: Multiple versions exist with inconsistent patterns (refs vs hooks, state mismatches)
2. **AddButton.jsx**: Props destructuring includes unused `$line` parameter
3. **AddedLine.jsx**: All inputs are read-only (disabled inputs would improve UX clarity)
4. **Type consistency**: `saleType` stored as string ("0"/"1") but used with numeric logic
5. **ESLint config**: `eslint.config.js` is empty - rules not actively enforced

### Naming Conventions
- camelCase for variables, functions, props
- PascalCase for components
- Be aware: typos exist (`nxDiscountg` class, `cotermPrice` vs `cotermListPrice` inconsistency)
- Some snake-case in class names (preserved for CSS)

### State Cleanup Pattern
After `addLine()`, EmptyLine resets all state to initial values - critical for UX, ensure similar pattern when adding new features.

## Immediate Implementation Tips

1. **Adding fields**: Update EmptyLine state, AddButton prop passing, AddedLine display in parallel
2. **Edit/Delete**: Implement via parent callbacks from PricingTable, pattern ready in DeleteButton structure
3. **Calculations**: Profit margin = `(customerPrice - totalCost) / customerPrice * 100` - add hooks to auto-calculate
4. **Dates**: Use date validation; consider end-date should be >= start-date
5. **Testing**: No test framework yet - consider adding Jest + React Testing Library

## Directory Structure
```
src/
  App.jsx                    (main app entry)
  components/
    PricingTable.jsx         (container, state manager)
    Line.jsx                 (new entry form - NEEDS REVIEW)
    EmptyLine.jsx            (new entry form - CURRENT)
    AddedLine.jsx            (display added lines)
    AddButton.jsx            (submit form)
    DeleteButton.jsx         (remove line - not implemented)
    *.css                    (component styles)
```

## Questions for Refinement

1. Should AddedLine support inline editing, or stay read-only with separate edit view?
2. Are there backend API endpoints planned for data persistence?
3. What validation rules should apply to discount fields and date ranges?
4. Should useContext be introduced for global pricing configuration (discount rates, etc.)?
