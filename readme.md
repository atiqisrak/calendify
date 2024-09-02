# Calendify

Calendify is a web-based calendar application built using Next.js 12 that allows users to manage their schedules, view events, and interact with a drag-and-drop calendar interface. The project focuses on providing a user-friendly interface for managing events with a two-column layout, including a mini-calendar and a main calendar view.

## Features

- **Two-column Layout:** A left column with a search bar, mini-calendar, and client list, and a right column with the main calendar.
- **Mini Calendar:** Interactive mini-calendar that updates the main calendar upon clicking a date.
- **Search Functionality:** Real-time client search that filters and displays events specific to selected clients.
- **Main Calendar View:** Supports day, week, month, and year views with drag-and-drop event management.
- **Drag-and-Drop Functionality:** Allows dragging client cards to specific date cells in the main calendar.
- **Data Persistence:** All data is saved in local storage, ensuring synchronization across page reloads.
- **Docker Support:** Easily deploy the application using Docker for consistent development and production environments.

## Tech Stack

- **Frontend:** Next.js 14, React 18
- **Libraries:**
  - `react-calendar` for the mini-calendar.
  - `@fullcalendar/react`, `@fullcalendar/daygrid`, `@fullcalendar/timegrid`, and `@fullcalendar/interaction` for the main calendar.
  - `react-beautiful-dnd` for drag-and-drop functionality.
- **Styling:** Tailwind CSS
- **Data Storage:** Local Storage
- **Containerization:** Docker, Docker Compose

## Getting Started

### Prerequisites

Ensure you have Node.js and npm installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/atiqisrak/calendify.git
   cd calendify
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run the development server:**
   ```bash
   npm run dev
   ```
4. **Open your browser and navigate to:**
   ```bash
   http://localhost:3000
   ```

## Docker Setup

1. **Build and run the Docker container:**
   ```bash
   docker-compose up --build
   ```
2. **Access the application at:**
   ```bash
   http://localhost:3000
   ```
3. **Stop the Docker container:**
   ```bash
   docker-compose down
   ```

## Usage

1. **Mini Calendar:** Click on any date in the mini-calendar to update the main calendar view to focus on the selected date.
2. **Search Clients:** Use the search bar to filter clients. Selecting a client will display only that client's events on the main calendar.
3. **Drag and Drop:** Drag client cards from the left column and drop them into date cells on the main calendar to create or move events to specific dates.
4. **Data Persistence:** All actions (like event creation, deletion, and updates) are automatically saved to local storage. Data is reloaded from local storage when the page is refreshed.

## Customization

- **Add More Features:** Extend the functionality by adding more components such as reminders, notifications, and advanced event handling (e.g., recurring events).
- **Styling:** Customize styles using CSS modules or styled-components located in the `/styles` directory.
- **Data Handling:** Modify the data handling logic in the `/utils` folder to integrate with a backend server or external API instead of local storage.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License

This project is licensed under the MIT License.

## Acknowledgements

- This project uses [React Calendar](https://www.npmjs.com/package/react-calendar), [React Big Calendar](https://www.npmjs.com/package/react-big-calendar), and [React DnD](https://react-dnd.github.io/react-dnd/) libraries.

## Contact

For any questions or suggestions, feel free to reach out.

- **Email:** atiqisrak@gmail.com
- **GitHub:** [atiqisrak](https://github.com/atiqisrak)
