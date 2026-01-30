# Hosting Guide for Monster Energy Website

## Prerequisites
1.  **GitHub Account**: You need an account on [github.com](https://github.com).
2.  **Vercel Account**: You need an account on [vercel.com](https://vercel.com) (you can log in with GitHub).
3.  **MongoDB Atlas Database**: Since `localhost` database won't work in the cloud, you need a cloud database.

---

## Step 1: Create a GitHub Repository
1.  Go to [GitHub New Repository](https://github.com/new).
2.  Name it `monster-energy-website` (or similar).
3.  Make it **Public** or **Private** (doesn't matter).
4.  **Do NOT** initialize with README, .gitignore, or License (we already have these).
5.  Click **Create repository**.
6.  Copy the URL provided (it will look like `https://github.com/YOUR_USERNAME/monster-energy-website.git`).

## Step 2: Push Your Code
Go to your terminal where this project is open and run these commands (replace the URL with yours):

```bash
# Add the remote link (replace URL below with your copied GitHub URL)
git remote add origin https://github.com/YOUR_USERNAME/monster-energy-website.git

# Rename branch to main
git branch -M main

# Push the code
git push -u origin main
```

## Step 3: Set Up Cloud Database (MongoDB Atlas)
1.  Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
2.  Create a free cluster.
3.  Create a database user (username/password).
4.  Network Access: Allow access from anywhere (`0.0.0.0/0`).
5.  Get the **Connection String** (looks like `mongodb+srv://user:pass@cluster.mongodb.net/...`).

## Step 4: Deploy to Vercel
1.  Go to your [Vercel Dashboard](https://vercel.com/dashboard).
2.  Click **Add New...** > **Project**.
3.  Import your `monster-energy-website` repository from GitHub.
4.  **Project Configuration (IMPORTANT):**
    *   **Root Directory**: Click **Edit** and select the `frontend` folder.
    *   **Framework Preset**: It should auto-detect **Next.js**.
    *   **Environment Variables**:
        *   Key: `MONGODB_URI`
        *   Value: *Your MongoDB Atlas connection string from Step 3*.
5.  Click **Deploy**.

## Debugging
If the deployment fails, check the "Logs" tab in Vercel. Common issues include:
*   Incorrect MonogDB IP whitelist (ensure specific IPs are allowed or allow all).
*   Missing environment variables.
