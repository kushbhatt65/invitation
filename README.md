# Parmar Family — Digital Invitation

A mobile-first, traditional Indian family invitation website built with plain HTML, CSS, and JavaScript (plus GSAP for scroll animation).

## How to run it

- **Quickest:** double-click `index.html` to open it in any browser.
- **Recommended (for the music player to work reliably):** serve it with a simple local server, e.g.:
  ```
  npx serve .
  ```
  or, with Python installed:
  ```
  python3 -m http.server 8000
  ```
  then open `http://localhost:8000` in your browser.

The site needs an internet connection the first time it loads (to fetch Google Fonts and the GSAP animation library).

## Where to edit things

Almost everything you'll need to change lives in **one place**: the `invitationData` object at the top of `script.js`.

```js
const invitationData = {
  familyName: "Parmar Family",
  couple: { bride: "[DIDI NAME]", groom: "[GROOM NAME]" },
  dateOne: {
    puja:  { time: "[PUJA TIME]" },
    katha: { time: "[KATHA TIME]" }
  },
  dateTwo: {
    engagement: { time: "[ENGAGEMENT TIME]" },
    party:      { time: "[PARTY TIME]" },
    bhajan:     { time: "[BHAJAN SANDHYA TIME]" }
  },
  venue: {
    name: "[VENUE NAME]",
    address: "[FULL ADDRESS]",
    mapsUrl: "[GOOGLE MAPS URL]"
  },
  contact: {
    phone: "[PHONE NUMBER]",
    whatsapp: "[WHATSAPP NUMBER]"
  },
  audio: { src: "assets/audio/instrumental.mp3" }
};
```

Replace any text inside `[ ]` with the real information. The page will update automatically — you don't need to touch the HTML for these fields.

### Names
- `couple.bride` — Didi's name (shown in the Engagement section)
- `couple.groom` — Groom's name

### Event timings
- `dateOne.puja.time` — Morning पूजा time on 12 October
- `dateOne.katha.time` — Evening कथा time on 12 October
- `dateTwo.engagement.time` — Engagement time on 13 October
- `dateTwo.party.time` — Engagement Party time
- `dateTwo.bhajan.time` — भजन संध्या time

### Venue
- `venue.name` — Venue name, shown in the Venue and Engagement sections
- `venue.address` — Full address, shown under the venue name
- `venue.mapsUrl` — A real Google Maps link (e.g. `https://maps.google.com/?q=...`). Once this is a real link (not wrapped in `[ ]`), the **"Open in Google Maps"** and **"Location"** buttons activate automatically.

### Contact / RSVP
- `contact.phone` — Enables the **Call** button (`tel:` link)
- `contact.whatsapp` — Enables the **WhatsApp** button (digits only, with country code, e.g. `919876543210`)

## Adding photos

1. Add image files to `assets/images/`.
2. **Engagement photo:** in `index.html`, find the `.photo-placeholder` div inside the "ENGAGEMENT" section and replace it with:
   ```html
   <img src="assets/images/your-photo.jpg" alt="Description of the photo">
   ```
3. **Family photo gallery:** in `index.html`, find the `.photo-gallery` div inside the "FAMILY PHOTOS" section and replace each `.photo-frame` div with:
   ```html
   <div class="photo-frame"><img src="assets/images/family1.jpg" alt="Family photo"></div>
   ```
   You can add as many `.photo-frame` items as you like — the gallery scrolls horizontally on mobile.

## Adding background music

1. Add an instrumental audio file (MP3) to `assets/audio/`, e.g. `assets/audio/instrumental.mp3`.
2. Update `audio.src` in `script.js` if you used a different filename.
3. Music is **off by default** — visitors tap the "♫ Music" button (top right) to start it, matching browser autoplay rules.
4. Please only use music you have the rights to use.

## Changing the Google Maps link

1. Open Google Maps and search for the venue.
2. Click **Share → Copy link**.
3. Paste that link into `venue.mapsUrl` in `script.js`.

## File structure

```
index.html          → page structure and content
style.css            → all visual styling, colors, and layout
script.js            → invitationData config + animations + interactions
assets/
  images/            → photos (engagement, family gallery)
  icons/             → any additional icon assets
  audio/             → background instrumental track
README.md            → this file
```

## Notes

- The site respects `prefers-reduced-motion` — visitors with that OS setting will see the invitation fully visible immediately, without animation.
- No names, timings, or addresses have been invented. Anything still showing in `[BRACKETS]` on the live site means it hasn't been filled in yet in `script.js`.
- Built with vanilla HTML/CSS/JS and GSAP (loaded from a CDN) — no build step or frameworks required.
