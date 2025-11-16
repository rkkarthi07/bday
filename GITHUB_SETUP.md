# GitHub Pages Setup Guide

Follow these steps to host your birthday website on GitHub Pages:

## Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the **+** icon in the top right corner
3. Select **New repository**
4. Name your repository (e.g., `birthday-website` or `bday-site`)
5. Choose **Public** (required for free GitHub Pages)
6. **DO NOT** initialize with README, .gitignore, or license (we already have these)
7. Click **Create repository**

## Step 2: Upload Files to GitHub

### Option A: Using GitHub Web Interface

1. In your new repository, click **uploading an existing file**
2. Drag and drop all files from the `bday` folder:
   - `index.html`
   - `photos.html`
   - `styles.css`
   - `photos.css`
   - `script.js`
   - `photos.js`
   - `README.md`
   - `.gitignore`
   - The entire `photos/` folder (with all your photos)
3. Scroll down and click **Commit changes**

### Option B: Using Git Command Line

```bash
# Navigate to your bday folder
cd bday

# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit: Birthday website"

# Add your GitHub repository as remote (replace with your repo URL)
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** (top menu)
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select:
   - Branch: **main** (or **master** if that's your default)
   - Folder: **/ (root)**
5. Click **Save**

## Step 4: Access Your Website

Your website will be available at:
```
https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/
```

**Note**: It may take a few minutes for the site to be available after enabling Pages.

## Step 5: Update README (Optional)

Edit the `README.md` file and replace:
- `[your-username]` with your GitHub username
- `[repository-name]` with your repository name

## Troubleshooting

### Images not showing?
- Make sure all photos are in the `photos/` folder
- Check that file names match exactly (case-sensitive on some systems)
- Verify paths in `photos.js` are correct

### 404 Error?
- Wait a few minutes after enabling Pages (it takes time to build)
- Check that `index.html` is in the root of your repository
- Verify the branch name matches what you selected in Pages settings

### Styling not working?
- Ensure all CSS files are uploaded
- Check browser console (F12) for any errors
- Verify file paths are relative (not absolute)

## Updating Your Website

After making changes:

1. **Using Web Interface**: Edit files directly on GitHub and commit
2. **Using Git**:
   ```bash
   git add .
   git commit -m "Update website"
   git push
   ```

Changes will be live within a few minutes!

## Custom Domain (Optional)

If you have a custom domain:
1. Go to repository **Settings** → **Pages**
2. Enter your domain in the **Custom domain** field
3. Follow GitHub's instructions for DNS configuration

---

**Need help?** Check GitHub's [Pages documentation](https://docs.github.com/en/pages)

