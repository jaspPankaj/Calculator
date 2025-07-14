📘 Final README.md
markdown
Copy
Edit
# 🧮 React Calculator App (Windows Style)

An elegant and responsive calculator built using **React** and **Tailwind CSS**, inspired by the look and feel of the **Windows Calculator**. Includes keyboard support, real-time key highlighting, and a scrolling history log.

---

## ✨ Features

- ✅ Windows-style expression/result layout
- ⌨️ Full keyboard support (with key highlight feedback)
- 🖱️ Mouse interaction for all keys
- 🧠 Calculation History Panel (clickable to reuse expressions)
- 🧮 Math.js powered expression evaluation
- 🧑‍💻 Fully responsive + mobile-friendly design
- 💅 Live expression preview with auto scroll
- 🔢 Comma-formatted result display

---

## 📸 Preview

![Calculator](<Screenshot 2025-07-14 232410.png>)

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/react-calculator.git
cd react-calculator
2. Install Dependencies
npm install

3. Start Development Server
npm run dev

For Create React App (CRA), use:
npm start

⌨️ Keyboard Controls
Key	        Action
0–9	        Type number
+ - * /	    Operators
.	        Decimal point
Enter / =	Evaluate expression
Backspace	Delete last character
Esc or C	Clear input and result

🎯 When using the keyboard, the on-screen key will visually flash to mimic a real button press!

🛠 Tech Stack
React 18

Tailwind CSS

mathjs (for safe evaluation)

Optional: tailwind-scrollbar-hide for a cleaner input bar

🧠 Features in Action
✅ Calculation history appears in a scrollable list
✅ Click on a past expression to reuse it
✅ Auto-scroll input field as user types
✅ Responsive on all screen sizes
✅ "C" clears input/result, "DEL" removes one digit

🔮 Planned Improvements
⏳ Persist history with localStorage
🌗 Add Dark Mode toggle
🧮 Add scientific operations (e.g., √, ^, %)
📱 Progressive Web App (PWA) support

📂 Folder Structure
bash
Copy
Edit
src/
├── App.jsx        # Main calculator component
├── index.css      # Tailwind setup and global styles
└── main.jsx       # Root ReactDOM entry
📄 License
MIT © 2025 ["Pankaj Kumar"]

