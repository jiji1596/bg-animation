# React + Tailwind + DaisyUI Boilerplate

This is a minimal and modern boilerplate for quickly starting a new React project with **Tailwind CSS** and **DaisyUI** preconfigured. Ideal for prototyping or building production-ready React applications with clean styling out of the box.

## 🔥 Features

* ⚛️ React + Vite
* 💨 Tailwind CSS
* 🌼 DaisyUI
* ✅ ESLint + Prettier (Optional: add later for code consistency)
* 🗂️ Clean folder structure

---

## 🚀 Getting Started

### Clone this repo manually

```bash
npx degit jiji1596/react-tailwind-daisy-boilerplate my-app
cd my-app
npm install
npm run dev
```

Or use the handy script method below.

---

## 🛠 Create Projects with a Script (Optional)

You can set up new projects easily using a custom shell script.

### Step 1: Install `degit` globally

```bash
npm install -g degit
```

### Step 2: Create the script file

Create a file named `new-react-app.sh` and paste the following code:

```bash
#!/bin/bash

APP_NAME=$1

if [ -z "$APP_NAME" ]; then
  echo "❌ Please provide a project name. Example: ./new-react-app.sh my-app"
  exit 1
fi

npx degit jiji1596/react-tailwind-daisy-boilerplate $APP_NAME
cd $APP_NAME
npm install
npm run dev
```

### Step 3: Make the script executable

```bash
chmod +x new-react-app.sh
```

### Step 4: Run it locally

```bash
./new-react-app.sh my-new-app
```

### (Optional) Step 5: Make it globally accessible

```bash
mv new-react-app.sh /usr/local/bin/new-react-app
```

Now you can run:

```bash
new-react-app my-weather-app
```

---

## 📁 Folder Structure

```
my-app/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── tailwind.config.js
```

---

## 📸 Preview

You’ll get a nice looking landing screen with DaisyUI components styled using Tailwind.

---

## 🙌 Contributing

PRs and suggestions are welcome! Feel free to fork and improve the boilerplate.

---

## 📝 License

MIT
