
# FloBiz Smart SMB Console ✨

<p align="center">
  <img src="https://placehold.co/600x300.png" data-ai-hint="dashboard analytics" alt="FloBiz Dashboard Preview">
</p>

<p align="center">
  <strong>A modern, interactive, and intelligent dashboard for Small & Medium Businesses (SMBs) to manage their core operations seamlessly.</strong>
</p>

<p align="center">
  <img alt="Next.js" src="https://img.shields.io/badge/Next.js-15.x-black?style=for-the-badge&logo=next.js">
  <img alt="React" src="https://img.shields.io/badge/React-18.x-blue?style=for-the-badge&logo=react">
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC?style=for-the-badge&logo=tailwind-css">
  <img alt="ShadCN UI" src="https://img.shields.io/badge/ShadCN/UI-blueviolet?style=for-the-badge&logo=shadcn-ui&logoColor=white">
</p>

---

## 🚀 Core Features

FloBiz Smart SMB Console is designed to feel alive and responsive. We've moved beyond static forms and boring tables to create a user experience that is both powerful and delightful.

| Feature                      | Description                                                                                                                                                                                           | Status      |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| **📈 Real-time Dashboard**     | At-a-glance hero metrics for sales, receivables, and inventory. Cards animate on hover and the sales chart glows with a subtle pulse, indicating live data.                                              | ✅ Complete |
| **🧾 Smart Invoice Manager**   | View all invoices with clear status badges. We removed clunky menus in favor of direct action buttons like "Mark as Paid" and "Send Reminder" for a faster workflow.                                  | ✅ Complete |
| **📦 Dynamic Inventory**       | A fully interactive inventory table with a **live search bar** that filters products instantly by name, SKU, or category. Status tabs help you quickly find what you need.                               | ✅ Complete |
| **🚚 Animated Order Tracking** | Place restock orders and watch their progress on a dedicated Orders page. Each order's progress bar updates live at a random speed with smooth, granular animations for a realistic feel.              | ✅ Complete |
| **🎉 Satisfying Animations**   | When you restock an item, a **full-screen animation** of a truck driving to a factory provides delightful, unambiguous feedback. Completed orders trigger a "package received" animation.             | ✅ Complete |
| **🔔 Ambient Notifications**   | The app feels alive with a global notification system. Every 10 seconds, a random toast pop-up appears with important updates—like low stock alerts or new orders—no matter where you are in the app. | ✅ Complete |
| **📊 Insightful Analytics**   | Clean, easy-to-read charts for sales and revenue. We fixed the visual bugs to ensure different data sets have distinct, clear colors.                                                                 | ✅ Complete |
| **⚙️ Comprehensive Settings**  | Easily manage your profile, business details, notification preferences, and application theme (Light/Dark/System).                                                                                      | ✅ Complete |

---

## 🎬 Feature Previews (Demos)

#### Dynamic Order Tracking
*Watch as order progress bars fill up smoothly and at different rates. Once an order hits 100%, it animates to a "Delivered" state!*
<p align="center">
  <img src="https://placehold.co/600x300.png" data-ai-hint="orders tracking" alt="Order Tracking GIF">
</p>

#### Full-Screen Restock Animation
*Clicking "Re-stock" triggers a full-screen overlay, providing clear and satisfying feedback for your action.*
<p align="center">
  <img src="https://placehold.co/600x300.png" data-ai-hint="truck animation" alt="Restock Animation GIF">
</p>

---

## 🛠️ Tech Stack

This project is built with a modern, type-safe, and performant technology stack:

-   **Framework**: [Next.js](https://nextjs.org/) (App Router)
-   **UI Library**: [React](https://react.dev/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Component Library**: [ShadCN/UI](https://ui.shadcn.com/)
-   **State Management**: React Hooks & Context API
-   **AI Integration**: [Genkit by Firebase](https://firebase.google.com/docs/genkit)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)

---

## ⚙️ Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

-   Node.js (v18 or newer)
-   npm or yarn

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/flobiz-console.git
    cd flobiz-console
    ```

2.  **Install NPM packages:**
    ```sh
    npm install
    ```

3.  **Set up environment variables:**
    Create a `.env.local` file in the root directory and add any necessary API keys (e.g., for Firebase or Genkit).
    ```env
    # Example for Genkit/Google AI
    GEMINI_API_KEY=YOUR_API_KEY_HERE
    ```

4.  **Run the development server:**
    ```sh
    npm run dev
    ```

The application will be available at `http://localhost:9002`.

---

<p align="center">
  Made with ❤️ for modern SMBs.
</p>
