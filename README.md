# 📦 Subscription Manager

A simple, browser-based **Subscription Manager App** that allows users to track, sort, and manage their recurring subscriptions (like Netflix, Spotify, or gym memberships). It stores data in **localStorage** so your subscriptions persist even after refreshing or closing the page.

---

## 📘 Table of Contents

* [Overview](#overview)
* [Features](#features)
* [Tech Stack](#tech-stack)
* [Project Structure](#project-structure)
* [Installation](#installation)
* [Usage](#usage)
* [Screenshots](#screenshots)
* [Known Issues & Mistakes](#known-issues--mistakes)
* [How to Prevent Common Mistakes](#how-to-prevent-common-mistakes)
* [Future Improvements](#future-improvements)
* [License](#license)

---

## 🧠 Overview

The **Subscription Manager** helps you:

* Track all your paid services.
* View renewal dates.
* Sort subscriptions by name, price, or renewal date.
* See your **total monthly spending**.
* Get a **“Due Soon” warning** for subscriptions expiring within a week.

Everything is saved automatically in your browser’s **localStorage**, so no backend or database setup is required.

---

## ✨ Features

* 📝 Add new subscriptions with name, price, billing cycle, and category.
* 💾 Automatically saves data to localStorage.
* 🔁 Sort subscriptions by **Name**, **Price**, or **Renewal Date**.
* ⚠️ Shows a **“Due Soon”** label for subscriptions expiring within 7 days.
* 💰 Displays total monthly spending (handles yearly subscriptions by dividing by 12).
* 🗑️ Delete any subscription entry.
* 🎨 Responsive UI powered by **Tailwind CSS**.

---

## 🧰 Tech Stack

| Technology                 | Purpose                             |
| -------------------------- | ----------------------------------- |
| **HTML5**                  | Structure of the app                |
| **Tailwind CSS (via CDN)** | Styling and layout                  |
| **JavaScript (Vanilla)**   | App logic and DOM manipulation      |
| **LocalStorage API**       | Persistent client-side data storage |

---

## 📁 Project Structure

```
subscription-manager/
├── index.html        # Main HTML structure
├── app.js            # Core application logic
├── style.css         # Custom styling (optional)
└── README.md         # Documentation
```

---

## ⚙️ Installation

1. **Clone or Download** this repository:

   ```bash
   git clone https://github.com/your-username/subscription-manager.git
   cd subscription-manager
   ```

2. **Open the `index.html` file** in any modern browser.

   That’s it — no build tools or servers required!

---

## 🚀 Usage

1. Enter the **Service Name**, **Price**, **Billing Cycle (Monthly/Yearly)**, **Renewal Date**, and **Category**.
2. Click **Add** to save the subscription.
3. Use the **Sort by** dropdown to reorder your list.
4. View your **Total Monthly Spend** at the bottom.
5. Click **Delete** to remove an entry.

Your data will persist automatically using **localStorage**.

---

## 🖼️ Screenshots

*(Add screenshots of your app here, e.g., form view, subscription list, and due soon highlight)*

---

## ⚠️ Known Issues & Mistakes

Here are some issues identified in your current code:

| Type                     | Description                                       | File/Line               | Fix                                     |
| ------------------------ | ------------------------------------------------- | ----------------------- | --------------------------------------- |
| 🐞 Typo                  | `Entertinment` misspelled in the category options | `index.html` & `app.js` | Change to `Entertainment`               |
| ⚠️ HTML Comment Error    | You included JS code after closing `</html>` tag  | `index.html` bottom     | Move all JS into `app.js`               |
| ⚙️ Double `p-6` class    | In `result-container` div                         | `index.html`            | Remove duplicate `p-6`                  |
| 💡 Missing Validation    | Empty fields or invalid prices can be submitted   | `app.js`                | Add form validation before pushing data |
| 🧾 Mixed Case in “skill” | Category name inconsistent (`skill` vs `Skill`)   | `index.html`            | Use consistent capitalization           |
| 🔁 No Reset Confirmation | “Delete” button removes instantly                 | `app.js`                | Add confirmation before deletion        |

---

## 🧩 How to Prevent Common Mistakes

1. **Always link JS externally**
   → Avoid embedding scripts after `</html>` — browsers may ignore them.

2. **Validate inputs** before saving:

   ```js
   if (!name || !price || !date) {
       alert("Please fill out all fields!");
       return;
   }
   ```

3. **Maintain consistency** in category names and colors.

4. **Use semantic HTML tags** (`<section>`, `<header>`, `<footer>`) for better structure.

5. **Test sorting and storage** after each change — especially with localStorage.

6. **Check spelling and casing** to prevent mismatched keys (e.g., `Entertinment` vs `Entertainment`).

---

## 🔮 Future Improvements

* ✅ Add **Edit** feature to update existing subscriptions.
* 📊 Add **charts** (e.g., Pie or Bar) for category-wise spending.
* 🌐 Sync with a backend database (e.g., Firebase) for multi-device access.
* 🕓 Add **dark mode** toggle.
* 📅 Auto-reminder notifications for upcoming renewals.

---

## 📜 License

This project is licensed under the **MIT License** — free for personal and commercial use.
See the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Mohammed Aasik**
📧 [your.email@example.com](mailto:aasikflipper@example.com)
🌐 [Your Portfolio or GitHub Profile](https://github.com/mdaasik007)

