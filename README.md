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

To update it: edit `board/dispatch-board.html` and republish to the same URL.
