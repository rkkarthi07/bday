# Vintage Birthday Website 🎂

A beautiful, vintage-styled birthday website celebrating 10 years of friendship!

## Features

- ✨ Vintage aesthetic with old paper texture and sepia tones
- 📸 Photo gallery section for memories
- 🎬 Video gallery section for moving memories
- 💝 Long heartfelt quote section
- ⏳ Timeline showing the journey together
- 🎉 Birthday wish section with animations
- ❤️ Floating hearts animation
- 📱 Fully responsive design
- 🎨 Beautiful graphics and ornamental borders

## How to Use

1. **Open the website**: Simply open `index.html` in your web browser

2. **Add Your Photos**:
   - Create a `photos` folder in the `bday` directory
   - Add your photos to the `photos` folder
   - Open `script.js` and find the `initializePhotoGallery()` function
   - Uncomment the code and add your photo paths:
   ```javascript
   const photoPaths = [
       'photos/photo1.jpg',
       'photos/photo2.jpg',
       'photos/photo3.jpg',
       // Add more photos here
   ];
   ```

3. **Add Your Videos**:
   - Create a `videos` folder in the `bday` directory
   - Add your videos to the `videos` folder
   - Open `script.js` and find the `initializeVideoGallery()` function
   - Uncomment the code and add your video paths:
   ```javascript
   const videoPaths = [
       'videos/video1.mp4',
       'videos/video2.mp4',
       // Add more videos here
   ];
   ```

4. **Customize the Quote**:
   - Open `index.html`
   - Find the `.long-quote` section
   - Edit the quote text to personalize it

5. **Customize Timeline**:
   - Open `index.html`
   - Find the `.timeline-section`
   - Update the timeline items with your actual memories

6. **Customize Birthday Wishes**:
   - Open `index.html`
   - Find the `.wish-list` section
   - Add or modify the wish items

## File Structure

```
bday/
├── index.html      # Main HTML file
├── styles.css      # All styling
├── script.js       # JavaScript functionality
├── README.md       # This file
├── photos/         # Add your photos here (create this folder)
└── videos/         # Add your videos here (create this folder)
```

## Customization Tips

- **Colors**: Edit the CSS variables in `styles.css` (in the `:root` section) to change the color scheme
- **Fonts**: The website uses Google Fonts (Playfair Display, Dancing Script, Cinzel). You can change these in `index.html`
- **Animations**: Modify animation timings in `styles.css` and `script.js`
- **Content**: All text content is in `index.html` - feel free to personalize it!

## Browser Compatibility

Works best in modern browsers (Chrome, Firefox, Safari, Edge).

## Notes

- Make sure your photos and videos are optimized for web (not too large file sizes)
- The website is designed to work offline once all files are in place
- You can host this on any web server or use it locally

Enjoy creating this special birthday gift! 🎉❤️

