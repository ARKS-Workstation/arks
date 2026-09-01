# Ahmed Abouseif — LinkedIn banner

Three directions, same palette and type as `board/dispatch-board.html`, so the banner
and the content board read as one identity.

| File | Direction |
|---|---|
| `arks-banner-c-index.png` | Index line. Full-bleed ascending curve with a current-position node. |
| `arks-banner-a-dark.png` | Deep field. Ascending bar profile, highlight at the top of the climb. |
| `arks-banner-b-light.png` | Light editorial. Restrained, institutional, hairline rules. |

`brand/` holds 3168×792 (2× retina). `brand/1x/` holds 1584×396, LinkedIn's documented
size, as a fallback if an upload ever objects.

## Content

```
AHMED ABOUSEIF
────
HR & People Operations | AI Implementation | EV Fleet Management
Sustainable Transport | Labour Law | Dubai, UAE

ARKS INVESTMENT HOLDING LTD
```

Two deliberate treatments of the supplied headline:

- **Split across two lines** at a pipe boundary. At 117 characters on a single line it
  would be illegible once LinkedIn scales the banner down on a phone.
- **Separators dimmed to 38% opacity** so the terms read before the punctuation. The
  text itself is unchanged.

## Layout constraints these are built to

LinkedIn overlays the circular profile photo on the banner's **bottom-left** and crops
the **sides** on mobile. Everything carrying meaning sits from x=380 rightward. Verified
by sampling the rendered pixels, not by trusting the layout:

| Banner | Ink under avatar disc | Lockup top / bottom margin |
|---|---|---|
| A | 0 px | 98 / 107 px |
| B | 0 px | 96 / 105 px |
| C | 630 px — decorative curve only, no text | 88 / 105 px |

## Type

Archivo ExtraBold for the name, IBM Plex Sans for the headline, IBM Plex Mono for the
tracked company line. Same faces as the dispatch board. Fonts are fetched from Google
Fonts and installed locally, because webfonts do not resolve at render time in this
environment and would silently fall back to Arial.

## Editing

`node brand/build-banner.mjs` re-renders all six files. `NAME`, `COMPANY`, `HL1` and
`HL2` at the top of the script are the only content constants.
