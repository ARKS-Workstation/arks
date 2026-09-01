# LinkedIn Growth Engine — HR × AI × Sustainable Mobility

Operating system for building authority as a practitioner-operator in HR, AI deployment,
and EV fleet management (Dubai / GCC).

## Configuration (locked in)

| Setting | Value |
|---|---|
| Cadence | Every other day — 30 posts across 60 days |
| Audience | Rotating: HR/People leaders · GCC fleet & mobility · AI-buying founders/ops |
| Voice | Polished executive thought leadership |
| Anchor projects | Ecosine Transports · EV fleet ops · AI assistants "Max" & "Yulisa" |

## Files

| Path | What it is |
|---|---|
| `strategy/positioning.md` | Thesis, content pillars, audience map, rotation logic |
| `profile/profile-optimization.md` | Headline options, About rewrite, experience bullets, Featured, banner |
| `calendar/60-day-calendar.md` | All 30 posts: title, type, pillar, caption, hashtags, media |
| `templates/post-templates.md` | 4 reusable frameworks + worked examples |
| `drafts/` | Ready-to-publish copy, batch by batch |
| `workflow/publishing-workflow.md` | Pre/post-publish checklists, engagement, analytics |
| `PLACEHOLDERS.md` | Every `[[BRACKET]]` that needs a real number before publishing |

## The one rule

Nothing in this repo contains an invented statistic. Anything in `[[DOUBLE BRACKETS]]`
is a slot for a real figure from your operation. Publishing a placeholder as-is is the
only way this system can hurt you.

Find them all:

```
grep -rno '\[\[[^]]*\]\]' . | sort
```

## The board

`board/dispatch-board.html` is the working console — published as a private web page.
It reads the same 30 posts as the calendar and adds the things a document can't do:

- **Today** — set your start date once; it computes which post is due and how many
  placeholders that post still has open.
- **Placeholder guard** — every `[[BRACKET]]` renders in red, and the Copy button warns
  before it hands you copy that still contains one.
- **Live character counters** — against LinkedIn's real caps: 3,000 post body,
  220 headline, 2,600 About.
- **Progress that persists** — published posts and checklist ticks survive closing the
  tab, and sync across devices where the runtime allows it.

### Bilingual and editable

- **Three language modes** — `EN`, `AR`, `BOTH`. Arabic flips the whole interface to
  RTL; `BOTH` shows English and Arabic side by side, each pane in its own direction.
- **Everything is editable in place.** Post captions, the five headlines, the About
  section, the experience bullets and the four template skeletons. Edits persist.
- **Edit Arabic, get English automatically.** Save & translate sends the text to Claude
  from inside the page and fills the other language. It works in both directions.
- **The placeholder guard runs on translations too.** If a translation drops or mangles
  a `[[BRACKET]]`, the page says so instead of quietly saving a broken post.
- **Theme control** — `AUTO` follows the viewer's system setting; `LIGHT` and `DARK`
  override it.

Arabic is hand-authored (not machine-translated) for: the entire interface, all 30 post
titles, the captions for posts 01–03, the About section, all five headlines and the
experience bullets. Remaining captions translate on demand and are cached.

### On a phone

- Header collapses to two compact rows: title, then a horizontally scrollable tab
  strip. 115px on a 390px screen, down from 174px.
- The two three-way switches become single cycling buttons with an icon and the
  current value — tap to advance EN → AR → BOTH, or AUTO → LIGHT → DARK.
- Touch sizing keys off `pointer: coarse`, not viewport width, so a 1024px iPad gets
  44px targets while a 1024px laptop keeps compact ones.
- All text inputs are 16px, below which iOS zooms the whole page on focus.
- Safe-area insets respected on notched phones. No horizontal scroll at any width.

### Sharing

The artifact is private by default. To give it a public link, open it and use the
share menu on the page — that control belongs to the account owner, not to Claude.

Before you do: once the `[[PLACEHOLDERS]]` are filled with real Ecosine figures,
a public link publishes those figures to anyone who has it.

The database is declared read-only for viewers (`read: interact, write: admin`), so
someone opening a shared link cannot overwrite your calendar state — their own ticks
and edits stay in their browser only.

To update it: edit `board/dispatch-board.html` and republish to the same URL.

### Two builds

| File | Artifact | Capabilities | Purpose |
|---|---|---|---|
| `board/dispatch-board.html` | private working board | `db`, `sample` | Yours. Auto-translation on edit, state synced across your devices. |
| `board/dispatch-board-public.html` | share-safe copy | none | For a public link. Identical content; no capability the platform can object to. |

`dispatch-board-public.html` is a byte-for-byte copy of `dispatch-board.html` —
regenerate it with `cp board/dispatch-board.html board/dispatch-board-public.html`
after any edit. The difference is entirely in what is declared at publish time.

With no capabilities the page detects their absence and hides the translate
affordances rather than offering an action that fails. Editing still works and
persists in the viewer's own browser via localStorage; nothing they do reaches
anyone else, and nothing they do can touch your copy.
