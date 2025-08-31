# Weather Service API 🌦️

A simple microservice built with **Node.js**, **Express**, and **TypeScript** that fetches and caches weather data using **Redis**.  
The service reduces external API calls by storing responses in Redis with a TTL (time-to-live).

---

## Features
- Fetch current weather data for any city 🌍
- Cache results in **Redis** for faster responses ⚡
- Environment variable support via **dotenv**
- Dockerized Redis support

---

## Tech Stack
- **Node.js** + **Express** (API framework)
- **TypeScript** (typed JavaScript)
- **Redis** (caching layer)
- **Axios** (HTTP requests)
- **dotenv** (environment config)

---

## Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/your-username/weather-service.git
cd weather-service
