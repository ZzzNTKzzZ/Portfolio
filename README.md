# Portfolio

An advanced, high-performance developer portfolio website designed with a blend of **Glassmorphism** and **Cyber-Minimalism**. It serves as an interactive hub for software engineers to showcase their technical expertise, deep-dive case studies, academic background, and learning roadmap. Engineered with full multi-language (EN/VI) support and integrated API services for client-side interactions.
Live Demo: https://portfoliontk.web.app/
---

## ⚡ Tech Stack & Social Badges

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge)

[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:ntk22052006@gmail.com)
[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/khanhnguyen2205)
[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ZzzNTKzzZ)

---

## 🚀 Key Features

*   **Premium Glassmorphic Theme & Design System**: Optimized with structural CSS backdrop-filters, custom aurora glow elements, dynamic neon borders, and cyber-grid shaders. Implements micro-interactions, springy hover scaling, and clean reveal animations on scroll.
*   **Bento Grid Energy Allocation**: Displays energy allocation across core domains (Backend Systems: 50%, Full-Stack Development: 35%, and Data Engineering: 15%) with detailed technology tag lists.
*   **Context-Driven Localization (i18n)**: Fully integrated `LanguageContext` supporting hot-swapping between English (EN) and Vietnamese (VI), cached persistently in `localStorage`.
*   **Deep-Dive Project Case Studies**:
    *   **TaskFlow**: A collaborative task management system with drag-and-drop Kanban workflow, $O(1)$ reordering via fractional indexing, 4-tier Role-Based Access Control (RBAC), and EventBus-driven optimistic updates.
    *   **Elora Store**: A modern fashion e-commerce store utilizing React 19, MongoDB, and Mongoose. Features debounced searching (with `AbortController` request cancellation), optimistic shopping cart synchronization, and pre-save pricing hooks.
    *   **House Price Prediction**: Machine learning analytics pipeline using Linear Regression, Pandas, and Scikit-Learn for property valuation.
*   **Interactive Learning Roadmap**: Tracks past, current, and future learning frontiers (Distributed Systems, Cloud Native Tools, Data Engineering, and MLOps) organized chronologically.
*   **Integrated Serverless Contact System**: Connected directly to the EmailJS SDK for smooth email delivery, handling loading states and toast notifications without a dedicated backend server.

---

## 🛠️ Technology Stack

| Layer | Technologies & Tools |
| :--- | :--- |
| **Core Frontend** | [React 19](https://react.dev/), JavaScript (ES6+), HTML5, CSS3 |
| **Styling & Layout** | [Tailwind CSS v4](https://tailwindcss.com/), Custom CSS keyframes, Glassmorphism backdrop-filters |
| **State & i18n** | React Context API, Custom Localization Provider (`LanguageContext.jsx`) |
| **Build & Tooling** | [Vite](https://vite.dev/), [ESLint](https://eslint.org/) |
| **Third-Party APIs** | [EmailJS Browser SDK](https://www.emailjs.com/) |
| **Typography & Icons**| Inter (Proportional), Geist Mono (Technical), Google Material Symbols (UI Icons) |

---

## ⚙️ Installation & Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
*   [Node.js](https://nodejs.org/) v18.0.0 or higher
*   [npm](https://www.npmjs.com/) v9.0.0 or higher

### Step-by-step Setup

1.  **Clone the Repository**
    ```bash
    git clone https://github.com/ZzzNTKzzZ/midterm.git
    cd midterm
    ```

2.  **Install Project Dependencies**
    ```bash
    npm install
    ```

3.  **Environment Variables (Optional)**
    To configure your own serverless email delivery using EmailJS, update the credentials in `src/components/Home.jsx` or store them in a local `.env` configuration file:
    ```env
    VITE_EMAILJS_PUBLIC_KEY="your_public_key"
    VITE_EMAILJS_SERVICE_ID="your_service_id"
    VITE_EMAILJS_TEMPLATE_ID="your_template_id"
    ```

4.  **Run the Project in Development Mode**
    Launch the hot-reloading development server:
    ```bash
    npm run dev
    ```
    Once loaded, navigate to `http://localhost:5173` in your web browser.

5.  **Compile and Build for Production**
    Generate clean, optimized assets ready for hosting:
    ```bash
    npm run build
    ```

6.  **Preview Production Build**
    Test the compiled bundle locally before deploying:
    ```bash
    npm run preview
    ```

---
> [!TIP]
> Add screenshot files of your gorgeous portfolio pages under `/assets` and embed them in the markdown file like so:
> `![Homepage Showcase](/assets/elorastore/home.png)`
