# Calendify

Calendify is a web-based calendar application built using Next.js 12 that allows users to manage their schedules, view events, and interact with a drag-and-drop calendar interface. The project focuses on providing a user-friendly interface for managing events with a two-column layout, including a mini-calendar and a main calendar view.

## Features

- **Two-column Layout:** A left column with a search bar, mini-calendar, and client list, and a right column with the main calendar.
- **Mini Calendar:** Interactive mini-calendar that updates the main calendar upon clicking a date.
- **Search Functionality:** Real-time client search that filters and displays events specific to selected clients.
- **Main Calendar View:** Supports day, week, month, and year views with drag-and-drop event management.
- **Drag-and-Drop Functionality:** Allows dragging client cards to specific date cells in the main calendar.
- **Data Persistence:** All data is saved in local storage, ensuring synchronization across page reloads.

## Tech Stack

- **Frontend:** Next.js 12, React
- **Libraries:**
  - `react-calendar` for the mini-calendar.
  - `react-big-calendar` for the main calendar.
  - `react-dnd` for drag-and-drop functionality.
- **Styling:** CSS Modules, Styled Components
- **Data Storage:** Local Storage

## Getting Started

### Prerequisites

Ensure you have Node.js and npm installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/atiqisrak/calendify.git
   cd calendify
   ```
