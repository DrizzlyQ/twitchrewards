# 🎮 FiveM Twitch Integration System with QBCore

This project is a complete Twitch Bot + Admin Dashboard + FiveM Integration system. Viewers earn points by watching your Twitch stream and can redeem those points for in-game items on your QBCore-based FiveM server.

---

## 🌟 Features

- 🎥 **Twitch Bot**: Tracks watch time and rewards points via chat.
- 🌐 **Web Dashboard**: Built with React + Tailwind, featuring user and admin panels.
- 🎮 **FiveM Integration**: Seamless item redemption using QBCore events.
- 💬 **Discord Login**: Admin panel protected with Discord authentication.
- 💾 **PostgreSQL Database**: Stores users, points, and redemption logs.

---

## 🚀 Tech Stack

- **Frontend**: React + TailwindCSS
- **Backend**: Node.js + Express + Passport (Discord OAuth2)
- **Bot**: Node.js + TMI.js (Twitch)
- **Database**: PostgreSQL
- **FiveM**: Lua + HTTP requests to backend API

---

## 📂 Project Structure

fivem-twitch-system/ │ ├── backend/ # Node.js API for dashboard + DB logic ├── frontend/ # React + Tailwind dashboard ├── twitch-bot/ # Twitch bot that awards points ├── fivem-resource/ # FiveM Lua code for item redemptions ├── database/ # PostgreSQL schema └── .env.example # Environment variable template


