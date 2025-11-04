{
  "version": 2,
  "name": "carbonecomarket-invest",
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "."
      }
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ],
  "env": {
    "NODE_ENV": "production"
  },
  "buildCommand": "echo 'No build needed for static site'",
  "outputDirectory": ".",
  "installCommand": "echo 'No installation needed'"
}
