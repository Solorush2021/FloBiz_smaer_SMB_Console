# FloBiz Smart SMB Console ✨

<p align="center">
  <!-- Animated SVG: Pulsing Dashboard Analytics Bars -->
  <svg width="400" height="180" viewBox="0 0 400 180" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="30" y="120" width="30" height="40" rx="6" fill="#DBEAFE">
      <animate attributeName="y" values="120;60;120" dur="2s" repeatCount="indefinite"/>
      <animate attributeName="height" values="40;100;40" dur="2s" repeatCount="indefinite"/>
    </rect>
    <rect x="80" y="80" width="30" height="80" rx="6" fill="#93C5FD">
      <animate attributeName="y" values="80;40;80" dur="2s" repeatCount="indefinite" begin="0.2s"/>
      <animate attributeName="height" values="80;120;80" dur="2s" repeatCount="indefinite" begin="0.2s"/>
    </rect>
    <rect x="130" y="60" width="30" height="100" rx="6" fill="#2563EB">
      <animate attributeName="y" values="60;30;60" dur="2s" repeatCount="indefinite" begin="0.4s"/>
      <animate attributeName="height" values="100;130;100" dur="2s" repeatCount="indefinite" begin="0.4s"/>
    </rect>
    <rect x="180" y="100" width="30" height="60" rx="6" fill="#60A5FA">
      <animate attributeName="y" values="100;80;100" dur="2s" repeatCount="indefinite" begin="0.6s"/>
      <animate attributeName="height" values="60;80;60" dur="2s" repeatCount="indefinite" begin="0.6s"/>
    </rect>
    <rect x="230" y="90" width="30" height="70" rx="6" fill="#3B82F6">
      <animate attributeName="y" values="90;40;90" dur="2s" repeatCount="indefinite" begin="0.8s"/>
      <animate attributeName="height" values="70;120;70" dur="2s" repeatCount="indefinite" begin="0.8s"/>
    </rect>
    <text x="200" y="170" font-size="20" text-anchor="middle" fill="#334155" font-family="Segoe UI, Arial, sans-serif">
      Analytics Loading...
      <animate attributeName="opacity" values="1;0.5;1" dur="1.2s" repeatCount="indefinite"/>
    </text>
  </svg>
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

| Feature                        | Description                                                                                                                                                                            | Status      |
|-------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|
| **📈 Real-time Dashboard**     | At-a-glance hero metrics for sales, receivables, and inventory. Cards animate on hover and the sales chart glows with a subtle pulse, indicating live data.                           | ✅ Complete |
| **🧾 Smart Invoice Manager**   | View all invoices with clear status badges. We removed clunky menus in favor of direct action buttons like "Mark as Paid" and "Send Reminder" for a faster workflow.                    | ✅ Complete |
| **📦 Dynamic Inventory**       | A fully interactive inventory table with a **live search bar** that filters products instantly by name, SKU, or category. Status tabs help you quickly find what you need.             | ✅ Complete |
| **🚚 Animated Order Tracking** | Place restock orders and watch their progress on a dedicated Orders page. Each order's progress bar updates live at a random speed with smooth, granular animations for a realistic feel.| ✅ Complete |
| **🎉 Satisfying Animations**   | When you restock an item, a **full-screen animation** of a truck driving to a factory provides delightful, unambiguous feedback. Completed orders trigger a "package received" animation.| ✅ Complete |
| **🔔 Ambient Notifications**   | The app feels alive with a global notification system. Every 10 seconds, a random toast pop-up appears with important updates—like low stock alerts or new orders—no matter where you are.| ✅ Complete |
| **📊 Insightful Analytics**    | Clean, easy-to-read charts for sales and revenue. We fixed the visual bugs to ensure different data sets have distinct, clear colors.                                                  | ✅ Complete |
| **⚙️ Comprehensive Settings**  | Easily manage your profile, business details, notification preferences, and application theme (Light/Dark/System).                                                                     | ✅ Complete |
| **🎨 Theme Customization**     | One-tap switch between light and dark themes inspired by myBillBook with smooth sun/moon toggle and adjustable accent colors.                                                         | ✅ Complete |
| **🧑‍💻 Role-Based Access**      | Assign "Owner," "Admin," and "Staff" roles with animated badges and smooth permission toggling that updates UI instantly.                                                              | ✅ Complete |
| **📧 Integrated Help Center**  | Floating help button that expands to FAQs, video tutorials, onboarding checklists, and a simulated live chat widget for real-time guidance.                                           | ✅ Complete |

---

## 🎬 Feature Previews (Demos)

#### Dynamic Order Tracking  
*Watch as order progress bars fill up smoothly and at different rates. Once an order hits 100%, it animates to a "Delivered" state!*

<p align="center">
  <img src="https://placehold.co/600x300.png" alt="Order Tracking Animation Placeholder">
</p>

#### Full-Screen Restock Animation  
*Clicking "Re-stock" triggers a full-screen overlay, providing clear and satisfying feedback for your action.*

<p align="center">
  <img src="https://placehold.co/600x300.png" alt="Restock Fullscreen Animation Placeholder">
</p>

---

## 🛠️ Tech Stack

This project is built with a modern, type-safe, and performant technology stack:

- **Framework:** [Next.js](https://nextjs.org/) (App Router)  
- **UI Library:** [React](https://react.dev/)  
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)  
- **Component Library:** [ShadCN/UI](https://ui.shadcn.com/)  
- **State Management:** React Hooks & Context API  
- **Language:** [TypeScript](https://www.typescriptlang.org/)  

---

## ⚙️ Getting Started

### Prerequisites

- Node.js (v18 or newer)  
- npm or yarn  

### Installation & Setup

1. Clone the repository:  
