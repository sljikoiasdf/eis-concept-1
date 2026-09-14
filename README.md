# EIS — Concept 1 static site

**Concept 1: the seal, the word, the ink.** Formal, Japanese, placeless. A house rather than a person. The seal (栄, the first character of Eis, cut into a vermilion square) does the seriousness so the words do not have to. Black page-header blocks, Bodoni Moda headlines set large with air, Cormorant Garamond body copy allowed to run long, black-and-white photography, brush strokes as rules and sign-offs. "Master chef" once per page at most.

Open `index.html`. Plain HTML, CSS and JavaScript; no build step, no framework, no browser storage. The only external requests are Google Fonts. Nothing here is shared with Concept 2.

## Files

| File | Purpose |
|---|---|
| `index.html` | Home. The 25-years line, the promise, the two audience routes (Dine at home / Corporate), from-price, the three points of difference, a worked example ($1,400 for eight), three recent events, one real testimonial. |
| `hiro.html` | The chef as a CV: intro, his philosophy quote, dated timeline Tokyo 1974 → Albert Park 2001 → 2026, the 188 Bridport Street story (Architects EAT, up to 36 guests), his closing quote. |
| `dine.html` | Private dinners: guest numbers, days, service area, what happens on the night, what the host provides, dietaries and drinks, the four dinner menus, testimonial, booking button. |
| `corporate.html` | For EAs and office managers: the corporate promise, formats (boardroom lunch, client dinner, team event), the paperwork answers (insured, registered, invoiced, proven), the two corporate menus, testimonial, enquiry button. |
| `menus.html` | Menus landing; shows The Dinner Party ($100). Tabs to every other menu. |
| `menu-dinner2.html` | The Celebration, $175 a head. |
| `menu-dinner3.html` | The Omakase, $250 a head. |
| `menu-dinner4.html` | No Ceiling, from $350 a head — prose, priced to the occasion. |
| `menu-boardroom.html` | Boardroom Lunch, $75 a head. |
| `menu-canape.html` | Canapé Event, $85 a head. |
| `menu-takeaway.html` | Takeaway Sushi, priced per item. |
| `menu-drinks.html` | Drinks pairing, from $45 a head. |
| `events.html` | Recent tables (six events with dates) and a photo gallery. |
| `expect.html` | The six practical facts and the ten-question FAQ. |
| `book.html` | Two enquiry forms (`#private`, `#corporate`), phone, email, Instagram, and the terms. |
| `404.html` | Not-found page (the cat in sunglasses). |
| `styles.css` | All styling. Readable class names (`.page-head`, `.menu-sheet`, `.dish`, …). Responsive: desktop, tablet ≤1179px, phone ≤759px. Print rules output the menu sheet alone on A4. |
| `site.js` | Phone menu toggle, print button, and a submit guard that keeps the forms inert. |
| `favicon.svg`, `logo.svg` | The seal. |
| `images/` | Every photo as JPEG, sized to use (hero 1024px, cards 900px, tiles 640px). |

Every menu is a live page, dish by dish with prices; the print button prints exactly the sheet on screen.

## Forms

`book.html` has two real `<form>` elements, `id="private"` and `id="corporate"`, with `method="post"` and `action="#"`. They are inert: `site.js` prevents submission. To go live, point `action` at the form handler (Carrd's built-in form, Formspree, or Hiro's email service) and remove the submit guard in `site.js`. Field `name` attributes are lowercase-hyphenated versions of the labels (e.g. `date-wanted`, `who-to-invoice`). Both should send to hello@eis.melbourne (see holding note below).

## Fonts — all Google Fonts, loaded from fonts.googleapis.com; none local

- **Bodoni Moda** (400, 800, italic 400) — headlines, prices, the EIS wordmark
- **Cormorant Garamond** (500, 600, italic 500) — body copy
- **Shippori Mincho B1** (800) — Japanese characters: the 栄 in the seal, dish names, menu titles
- Helvetica / Arial (system, not loaded) — small uppercase labels and navigation

## Brand colours

- Sumi ink `#1C1C1C` — text, page-header blocks, buttons
- White `#FFFFFF` — page ground
- Shu vermilion `#D7301F` — the seal only; it appears nowhere else
- Greys derived from ink: `#3E3E3E` body copy on white, `#6B6B6B` labels, `#9A9A9A` / `#CFCFCF` labels and sub-lines on black, `#E6E6E6` hairlines

Photography is shown black-and-white via CSS (`filter: grayscale(1)`); the JPEGs themselves are the originals.

## Unfinished or holding — swap before launch

- **ABN** `00 000 000 000` in the footer is a placeholder.
- **Email** `hello@eis.melbourne` is a holding address; the domain has not been chosen.
- **Phone** `0413 321 388`: Hiro's site prints "04133213 882", one digit too many. Confirm the number.
- **Instagram** `@eis_japanese_restaurant` is real but will change with the name.
- **Menu bundles, tier names and per-head prices** (The Dinner Party $100, The Celebration $175, The Omakase $250, No Ceiling from $350, Boardroom Lunch $75, Canapé Event $85, drinks from $45) are holding. Every dish is a real Eis dish; the bundling and prices are not yet Hiro's.
- **Worked example** "$1,400 for eight" follows from the holding Celebration price.
- **Guest maximums, service area (15 km), travel fee, arrival/duration/clean-up, what the host provides, dietary notice, deposit and cancellation terms, final-numbers rule, lunch/dinner days beyond Tue–Sat** are holding, drawn from competitor practice. Hiro to confirm.
- **Insured / registered / tax invoice** on the Corporate page are unconfirmed.
- **Drinks pairing and BYO** are subject to Hiro's liquor licence.
- **Second pair of hands for groups over ten** is unconfirmed.
- **Events**: the 100th Birthday (8 Sep 2026) and Sushi Lunch (1 Sep 2026) are real; the other four are holding entries. All event and gallery photos are generated placeholders from the brand image library, not photos of real events. Hiro's portrait and the dining-room photo are real (low resolution, restaurant era).
- **Testimonials**: the home-page quote is real; the Dine at home and Corporate quotes are holding.
- **Press, awards, named regulars**: none yet; no space is faked for them.
- **Forms** are inert (above).
