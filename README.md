<div align="center">

# 📋 Kanban Board

**A sleek, modern task management application built from the ground up with vanilla web technologies.**

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

[Features](#-features) · [Getting Started](#-getting-started) · [Tech Stack](#%EF%B8%8F-tech-stack) · [Architecture](#-architecture) · [Contributing](#-contributing)

</div>

---

## 🎯 Overview

Kanban Board is a lightweight, high-performance task management tool designed to help individuals and teams visualize their workflow. Inspired by the Kanban methodology, it provides an intuitive drag-and-drop interface to organize tasks across customizable columns — all without the bloat of external frameworks or dependencies.

> *"Simplicity is the ultimate sophistication."* — Leonardo da Vinci

---

## ✨ Features

| Feature | Description |
| :--- | :--- |
| 🌑 **Dark Mode UI** | A modern, eye-friendly dark theme designed for extended use |
| ➕ **Task Creation** | Add new tasks via a modal with title & description fields |
| 🗑️ **Task Deletion** | Remove tasks with a single click — changes persist automatically |
| 🔀 **Drag & Drop** | Move tasks between columns with smooth drag-and-drop interactions |
| 💾 **Local Storage** | All tasks persist in the browser — your board survives page refreshes |
| 📊 **Visual Workflow** | Organize tasks across three columns (To-Do, In Progress, Done) |
| 📱 **Responsive Design** | Seamlessly adapts to desktop, tablet, and mobile screens |
| ⚡ **Zero Dependencies** | Pure vanilla implementation — no frameworks, no bloat |
| 🎨 **CSS Custom Properties** | Themeable design system powered by CSS variables |

---

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Edge, Safari)
- Git (for cloning the repository)

### Installation

```bash
# Clone the repository
git clone https://github.com/manthansharma6767/Kanban-Board.git

# Navigate to the project directory
cd Kanban-Board

# Open in your browser
start index.html        # Windows
open index.html         # macOS
xdg-open index.html     # Linux
```

### Running a Local Server (Optional)

For a development server with live reload capabilities:

```bash
# Using Python
python -m http.server 8080

# Using Node.js (npx)
npx serve .
```

Then navigate to `http://localhost:8080` in your browser.

---

## 🛠️ Tech Stack

```
Frontend
├── HTML5          → Semantic structure & accessibility
├── CSS3           → Custom properties, Flexbox, modern layouts
└── JavaScript     → Vanilla DOM manipulation & interactivity
```

**Why vanilla?** By avoiding frameworks, this project achieves:
- ⚡ **Instant load times** — no bundle overhead
- 🧠 **Full transparency** — every line of code is intentional
- 📦 **Zero supply-chain risk** — no `node_modules` to audit
- 🎓 **Educational value** — demonstrates core web fundamentals

---

## 📐 Architecture

```
Kanban-Board/
│
├── index.html          # Application entry point & structure
├── index.css           # Design system & component styles
├── index.js            # Core application logic & interactivity
├── README.md           # Project documentation
└── LICENSE             # MIT License
```

### Design System

The project uses a centralized CSS custom properties system for consistent theming:

```css
:root {
    --bg-color: #161616;
    --button-color: #000000;
    --text-color: #e0e0e0;
    --border-radius: 8px;
}
```

---

## 🗺️ Roadmap

- [x] Project setup & core layout
- [x] Dark mode UI with CSS custom properties
- [x] Drag-and-drop task management
- [x] Local storage persistence
- [x] Task creation via modal
- [x] Task deletion
- [x] Live column counters
- [ ] Task editing (inline)
- [ ] Column customization
- [ ] Export/Import board data
- [ ] PWA support for offline use

---

## 🤝 Contributing

Contributions are what make the open-source community an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. **Fork** the repository
2. **Create** your feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

---

## 📄 License

Distributed under the **MIT License**. See [`LICENSE`](LICENSE) for more information.

---

## 📬 Contact

**Manthan Sharma** — [@manthansharma6767](https://github.com/manthansharma6767)

Project Link: [https://github.com/manthansharma6767/Kanban-Board](https://github.com/manthansharma6767/Kanban-Board)

---

<div align="center">

**⭐ Star this repo if you found it useful!**

Made with ❤️ by [Manthan Sharma](https://github.com/manthansharma6767)

</div>