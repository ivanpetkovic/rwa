# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `npm start` - Start development server (http://localhost:4200)
- `npm run build` - Production build 
- `npm run watch` - Watch mode build with development configuration
- `npm test` - Run unit tests with Vitest
- `ng generate component component-name` - Generate new components

## Architecture

This is a modern Angular 21 application using **standalone components** (no NgModules) and **signals** for reactivity.

### Key Patterns
- **Signals**: Use `signal()` and `input()` for reactive state management
- **Standalone Components**: All components are standalone with explicit imports
- **Modern Control Flow**: Uses Angular's new template syntax
- **TypeScript Strict Mode**: Enabled with comprehensive strict settings

### Structure
```
src/app/
├── components/           # Feature components
│   ├── aircraft-profile/ # Individual aircraft display
│   └── aircrafts-list/   # Aircraft list management  
├── models/              # TypeScript interfaces
├── app.config.ts        # Application configuration
└── app.routes.ts        # Routing configuration
```

### Current State
- Application displays hardcoded aircraft data
- Router outlet configured but no routes defined yet
- Component architecture established but business logic incomplete

### Data Models
- **Aircraft**: Interface with aircraftId, name, speed, attitude properties
- Located in `src/app/models/aircraft.model.ts`

## Testing
- Uses **Vitest** instead of Karma/Jasmine
- Test files follow `*.component.spec.ts` pattern
- TestBed setup for component testing