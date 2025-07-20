# FloBiz Smart SMB Console ✨

<p align="center">
  <!-- Animated SVG: Dynamic Business Metrics Dashboard -->
  <svg width="720" height="280" viewBox="0 0 720 280" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- Axes -->
    <rect x="65" y="20" width="2" height="210" fill="#D1D5DB"/>
    <rect x="65" y="230" width="640" height="2" fill="#D1D5DB"/>
    <!-- Line Graph (Revenue Trend) -->
    <polyline
      fill="none"
      stroke="#2563EB"
      stroke-width="4"
      points="85,210 145,110 205,70 265,150 325,60 385,120 445,45 505,180 565,80 625,200"
    >
      <animate attributeName="points" dur="2s" repeatCount="indefinite"
        values="
          85,210 145,110 205,70 265,150 325,60 385,120 445,45 505,180 565,80 625,200;
          85,210 145,140 205,70 265,120 325,80 385,140 445,75 505,160 565,120 625,180;
          85,210 145,110 205,70 265,150 325,60 385,120 445,45 505,180 565,80 625,200
        "/>
    </polyline>
    <!-- Bar Graph (Monthly Sales) -->
    <g>
      <rect x="100" width="38" y="190" height="40" rx="6" fill="#60A5FA">
        <animate attributeName="y" values="190;120;190" dur="1.4s" repeatCount="indefinite"/>
        <animate attributeName="height" values="40;110;40" dur="1.4s" repeatCount="indefinite"/>
      </rect>
      <rect x="180" width="38" y="120" height="110" rx="6" fill="#0EA5E9">
        <animate attributeName="y" values="120;150;120" dur="1.7s" repeatCount="indefinite"/>
        <animate attributeName="height" values="110;80;110" dur="1.7s" repeatCount="indefinite"/>
      </rect>
      <rect x="260" width="38" y="160" height="70" rx="6" fill="#F59E42">
        <animate attributeName="y" values="160;100;160" dur="1.1s" repeatCount="indefinite"/>
        <animate attributeName="height" values="70;130;70" dur="1.1s" repeatCount="indefinite"/>
      </rect>
      <rect x="340" width="38" y="80" height="150" rx="6" fill="#38A169">
        <animate attributeName="y" values="80;120;80" dur="1.5s" repeatCount="indefinite"/>
        <animate attributeName="height" values="150;110;150" dur="1.5s" repeatCount="indefinite"/>
      </rect>
      <rect x="420" width="38" y="170" height="60" rx="6" fill="#2563EB">
        <animate attributeName="y" values="170;115;170" dur="1.3s" repeatCount="indefinite"/>
        <animate attributeName="height" values="60;115;60" dur="1.3s" repeatCount="indefinite"/>
      </rect>
      <rect x="500" width="38" y="110" height="120" rx="6" fill="#F43F5E">
        <animate attributeName="y" values="110;160;110" dur="1.9s" repeatCount="indefinite"/>
        <animate attributeName="height" values="120;70;120" dur="1.9s" repeatCount="indefinite"/>
      </rect>
      <rect x="580" width="38" y="180" height="50" rx="6" fill="#D97706">
        <animate attributeName="y" values="180;140;180" dur="1.2s" repeatCount="indefinite"/>
        <animate attributeName="height" values="50;90;50" dur="1.2s" repeatCount="indefinite"/>
      </rect>
    </g>
    <!-- Pie Chart (Expenses Category) -->
    <g>
      <circle cx="670" cy="85" r="40" fill="#E0E7FF"/>
      <path d="M670,45 A40,40 0 0 1 700,78 L670,85 Z" fill="#6366F1">
        <animateTransform attributeName="transform" type="rotate" from="0 670 85" to="360 670 85" dur="3s" repeatCount="indefinite"/>
      </path>
      <path d="M670,85 L700,78 A40,40 0 1 1 630,119 Z" fill="#F59E42">
        <animateTransform attributeName="transform" type="rotate" from="0 670 85" to="360 670 85" dur="2.2s" repeatCount="indefinite"/>
      </path>
    </g>
    <!-- Legend -->
    <g font-family="Segoe UI, Arial, sans-serif" font-size="16">
      <rect x="110" y="250" width="18" height="18" fill="#60A5FA"/><text x="135" y="263" fill="#374151"> Sales </text>
      <rect x="210" y="250" width="18" height="18" fill="#6366F1"/><text x="235" y="263" fill="#374151"> Revenue Trend </text>
      <rect x="340" y="250" width="18" height="18" fill="#F59E42"/><text x="365" y="263" fill="#374151"> Orders </text>
      <rect x="450" y="250" width="18" height="18" fill="#38A169"/><text x="475" y="263" fill="#374151"> Inventory </text>
      <rect x="575" y="250" width="18" height="18" fill="#F43F5E"/><text x="600" y="263" fill="#374151"> Returns </text>
    </g>
    <text x="360" y="22" font-size="24" fill="#1E293B" font-family="Segoe UI, Arial, sans-serif" text-anchor="middle">
      FloBiz Business Analytics Dashboard
    </text>
  </svg>
</p>

<p align="center">
  <strong>A modern, interactive, and intelligent dashboard for Small & Medium Businesses (SMBs – Small and Medium Businesses) to manage all core operations: sales, inventory, orders, invoices, and analytics — live and at a glance.</strong>
</p>

<p align="center">
  <img alt="Next.js" src="https://img.shields.io/badge/Next.js-15.x-black?style=for-the-badge&logo=next.js">
  <img alt="React" src="https://img.shields.io/badge/React-18.x-blue?style=for-the-badge&logo=react">
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC?style=for-the-badge&logo=tailwind-css">
  <img alt="ShadCN UI" src="https://img.shields.io/badge/ShadCN/UI-blueviolet?style=for-the-badge&logo=shadcn-ui&logoColor=white">
</p>

---

## 📚 Table of Contents

- [About the Project](#about-the-project)
- [Live Analytics Preview (SVG)](#live-analytics-preview-svg)
- [Features](#features)
- [Interactive Sample Data Table](#interactive-sample-data-table)
- [Core Graphs Used](#core-graphs-used)
- [Tech Stack](#tech-stack)
- [Setup & Getting Started](#setup--getting-started)
- [How it Works](#how-it-works)
- [FAQ](#faq)
- [License](#license)

---

## 📝 About the Project

FloBiz Smart SMB Console revolutionizes business operations for Indian SMEs (Small and Medium Enterprises), drawing inspiration from the best of myBillBook. This project fuses real-time analytics, automated workflows, vibrant animations, and best-in-class usability to empower owners, staff, and decision-makers to focus on what really matters: smart business growth.

Key design principles:
- **Live Metrics**: Real-time insights into sales, inventory, and financials.
- **Zero Friction UI**: Animations and transitions make every click feel great — no more static spreadsheets.
- **Actionable Dashboards**: No more hidden data. Everything is a click away, clear, and interactive.
- **Customizable**: Toggle layouts, color palettes (light/dark/muted), and even personalize your dashboard modules.

---

## 🔥 Live Analytics Preview (SVG)

<p align="center">
  <!-- See animated SVG dashboard above -->
</p>

---

## 🚀 Features

|  Feature                        | Description                                                                              | Status   |
|----------------------------------|------------------------------------------------------------------------------------------|----------|
| 📈 **Animated Business Charts**  | Live updating sales, inventory, and revenue charts — every metric feels alive and interactive. | ✅       |
| 🚀 **Instant KPI Cards**         | Revenue, Expenses, Orders, Inventory levels update with rolling numbers and color badges.     | ✅       |
| 🧾 **Smart Invoice Manager**     | Category tabs, direct action buttons (Pay, Mark Sent, Download), and advanced filters.        | ✅       |
| 📦 **Dynamic Inventory**         | Inline editing, live reorder levels, and proactive low-stock alerts (all animated).           | ✅       |
| 🚚 **Order Progress Tracking**   | Animated progress bars and real-time status icons for every incoming/fulfilled order.         | ✅       |
| 🎨 **Theme & Layout Customizer** | Switch between myBillBook-inspired Light/Blue or rich Dark/Orange themes instantly.           | ✅       |
| 🔔 **Ambient Notifications**     | Smart toasts, reminders, and at-risk alerts that gently pop in and out.                       | ✅       |
| 🧑‍💻 **Role-Based Profiles**      | Owner/Admin/Staff — each with personalized dashboard modules and permissions.                 | ✅       |
| 🧭 **Integrated Help Center**    | Floating help button unrolls animated onboarding checklists, video tutorials, and chat.       | ✅       |
| 📊 **Exportable Analytics**      | Download tailored reports as CSV, Excel, or PDF with one tap.                                 | ✅       |
| 🪄 **AI-driven Insights**        | "Smart Suggestions" side-panel — AI recommends stock reorders, best sales hours, and more.    | 🧪 Beta  |

---

## 🗂️ Interactive Sample Data Table



---

## 📉 Core Graphs Used

- **Animated Line:** Revenue trend across months—fluid bezier curves and a rolling "glow" highlight.
- **Dynamic Bars:** Monthly sales breakdown — animated bar filling from zero, color-coded by status.
- **Pie Chart:** Expense categories (e.g., Inventory, Operations, Staff, Utilities) updating slice angles per data.
- **Mini Cards:** Top KPIs — rolling number animations, color glow on high/alert status.
- **Progress Circles:** Fulfillment/compliance for orders and quotas.

---

## 🛠 Tech Stack

- **Framework:** Next.js (React framework)
- **UI:** React (hooks-based components)
- **Styling:** Tailwind CSS (with custom theme tokens)
- **Component Library:** ShadCN UI
- **State Management:** React Context API (Application Programming Interface)
- **Language:** TypeScript

---

## ⚙️ Setup & Getting Started

### Prerequisites

- Node.js v18+
- npm or yarn

### Installation

1. **Clone the repo:**
    ```
    git clone https://github.com/your-username/flobiz-console.git
    cd flobiz-console
    ```

2. **Install dependencies:**
    ```
    npm install
    ```

3. **Set environment variables:**
    - Create a `.env.local` file in the root and add any API keys.
    ```
    GEMINI_API_KEY=your_key_here
    ```

4. **Start the dev server:**
    ```
    npm run dev
    ```

5. **Access the app:**  
    Open `http://localhost:9002` in your browser.

---

## ⚡ How it Works

- **Real-time UI:** All key metrics and tables animate as data updates.
- **No page reloads:** Built as a SPA (Single Page Application)—snappy and seamless.
- **Role-based UX:** Dashboard modules render only what you have permission to see.
- **Help when you need it:** Click the floating help icon for real-time onboarding, FAQs, and more.

---

## ❓ FAQ

**Q: Can I use this for non-SMB businesses?**  
A: Yes, it's modular and can be used for other business types. Just tweak settings and user roles.

**Q: Does the dashboard support exports?**  
A: Yes, you can export most reports as CSV, Excel, or PDF.

**Q: Is there a demo mode?**  
A: Yes! Demo login provides sample data and AI-powered suggestions.

**Q: How do I contribute?**  
A: Fork the repo, open a PR (pull request), and check our CONTRIBUTING guidelines.

---

## 🪪 License

This project is [MIT](LICENSE) licensed.

---

<p align="center">
  Built with ❤️ for Small & Medium Businesses (SMBs).
</p>
