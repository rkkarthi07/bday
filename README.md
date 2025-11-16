# Vintage Birthday Website 🎂

A beautiful, vintage-styled birthday website celebrating 10 years of friendship!

## 🌐 Live Demo

This website is hosted on GitHub Pages. Visit the live site at:
**https://[your-username].github.io/[repository-name]/**

## ✨ Features

- ✨ Vintage aesthetic with old paper texture and sepia tones
- 📸 Photo gallery section for memories
- 🎬 Video gallery section for moving memories (ready for videos)
- 💝 Long heartfelt quote section
- ⏳ Timeline showing the journey together
- 🎉 Birthday wish section with animations
- ❤️ Floating hearts animation
- 📱 Fully responsive design
- 🎨 Beautiful graphics and ornamental borders

## 🚀 Getting Started

### For GitHub Pages Hosting

1. **Fork or clone this repository**
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click on **Settings**
   - Scroll down to **Pages** section
   - Under **Source**, select **main branch** (or your default branch)
   - Click **Save**
   - Your site will be available at `https://[your-username].github.io/[repository-name]/`

3. **Customize Your Content**
   - Edit `index.html` to personalize the quotes, timeline, and wishes
   - Add your photos to the `photos/` folder
   - Update photo paths in `photos.js` if needed (already configured for 11 photos)

## 📁 File Structure

```
bday/
├── index.html          # Main homepage
├── photos.html         # Photo gallery page
├── styles.css          # Main stylesheet
├── photos.css          # Photo gallery styles
├── script.js           # Main page JavaScript
├── photos.js           # Photo gallery JavaScript
├── photos/             # Photo folder (add your photos here)
│   ├── photo1.jpg
│   ├── photo2.jpg
│   └── ...
└── README.md           # This file
```

## 📸 Adding Photos

1. **Add your photos** to the `photos/` folder
2. **Name them** as `photo1.jpg`, `photo2.jpg`, etc. (or update paths in `photos.js`)
3. The gallery will automatically display all photos listed in `photos.js`

To add more photos, edit `photos.js` and add paths to the `photoPaths` array:
```javascript
photoPaths = [
    'photos/photo1.jpg',
    'photos/photo2.jpg',
    // Add more photos here
];
```

## 🎬 Adding Videos (Optional)

1. Create a `videos/` folder
2. Add your video files
3. Update `script.js` to include video paths (currently commented out)

## 🎨 Customization

### Colors
Edit CSS variables in `styles.css` (in the `:root` section) to change the color scheme:
```css
:root {
    --vintage-cream: #F5E6D3;
    --vintage-brown: #8B6F47;
    /* ... more colors ... */
}
```

### Fonts
The website uses Google Fonts (Playfair Display, Dancing Script, Cinzel). 
You can change these in `index.html` and `photos.html`.

### Content
- **Quotes**: Edit the `.long-quote` section in `index.html`
- **Timeline**: Update the `.timeline-section` in `index.html`
- **Wishes**: Modify the `.wish-list` section in `index.html`

## 📱 Browser Compatibility

Works best in modern browsers:
- ✅ Chrome
- ✅ Firefox
- ✅ Safari
- ✅ Edge

## 🔧 Technical Details

- Pure HTML, CSS, and JavaScript (no frameworks required)
- Fully static website (works offline once loaded)
- Responsive design (mobile-friendly)
- Lightbox gallery for viewing photos
- Smooth animations and transitions

## 📝 Notes

- Make sure your photos are optimized for web (not too large file sizes)
- Recommended image format: JPG or PNG
- The website works completely offline once all files are loaded
- All paths are relative, so it works on GitHub Pages without modification

## 🤝 Contributing

Feel free to fork this project and customize it for your own use!

## 📄 License

This project is open source and available for personal use.

---

Made with ❤️ and care for a special friend

Enjoy creating this special birthday gift! 🎉❤️
