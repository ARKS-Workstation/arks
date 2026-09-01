# ARKS Investment Holding LTD — LinkedIn banner

Three directions, same palette as `board/dispatch-board.html`, so the banner and the
content board read as one identity.

| File | Direction |
|---|---|
| `arks-banner-a-dark.png` | Deep field. Ascending bar profile, highlight at the top of the climb. |
| `arks-banner-b-light.png` | Light editorial. Restrained, institutional, hairline rules. |
| `arks-banner-c-index.png` | Index line. Full-bleed ascending curve with a current-position node. |

`brand/` holds 3168×792 (2× retina). `brand/1x/` holds 1584×396, LinkedIn's documented
size, as a fallback if an upload ever objects.

## Layout constraints these are built to

LinkedIn overlays the circular profile photo on the banner's **bottom-left** and crops
the **sides** on mobile. Every element carrying meaning sits from x=380 rightward and
clear of the avatar disc. Verified by sampling the rendered pixels, not by trusting the
layout:

| Banner | Ink under avatar disc | Notes |
|---|---|---|
| A | 0 px | clean |
| B | 0 px | clean |
| C | 632 px | decorative curve only, no text — the avatar interrupting a full-bleed line is intended |

## Type

Archivo ExtraBold for the wordmark, IBM Plex Mono for the tracked subline, IBM Plex Sans
for the descriptor. Same faces as the dispatch board.

## Editing

`node brand/build-banner.mjs` re-renders all six files. The wordmark, subline, descriptor
and location are the `NAME` / `SUB` / `DESC` / `PLACE` constants at the top.

The descriptor "Sustainable transport · EV fleet operations · Operational AI" is an
assumption drawn from the Ecosine work, not something confirmed about the holding
company's portfolio. Change it in one line.
