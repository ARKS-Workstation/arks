# Post 02 · Day 3 · Pillar 3 · Audience C · Project Spotlight

**Title:** Meet Max — the AI trainer we built for people who don't read manuals
**Format:** Native text + 1 image (redacted screenshot of a Max conversation)
**Publish:** Day 3, 07:30 GST
**Est. length:** ~1,500 characters

> **Before publishing:** 9 placeholders. The failure paragraph is mandatory — without it
> this post reads as a product launch, which is the wrong register for your third-ever post.

---

## COPY — publish everything between the lines

---

Our drivers were handed a [[PAGE COUNT]]-page operations manual on day one.

Nobody read it. I wouldn't have read it either.

So we built Max — an AI assistant that delivers the same material as a conversation, in
the driver's own language, on the phone already in their pocket, in the ten minutes they
have between runs.

Onboarding went from [[BEFORE]] to [[AFTER]].

That is the headline. Here is the part that actually matters if you're thinking of
building something similar.

**The model was the easy bit.**

Before Max was useful to anyone, we had to rewrite every piece of source material it drew
on. Our manual had been written over [[TIMEFRAME]] by [[NUMBER]] different people, with
contradictions nobody had ever reconciled — because no human trainer had ever read it
end to end either. They just knew which parts to ignore.

Max didn't know which parts to ignore. It answered from all of it, with equal confidence.

That rewrite was [[PROPORTION, e.g. "roughly 70%"]] of the total effort. It is not in any
implementation plan I have ever seen.

**What we got wrong.**

[[SPECIFIC FAILURE — e.g. "In testing, Max gave a driver an outdated instruction about
[[TOPIC]]. It was confident, it was well-phrased, and it was wrong by [[TIMEFRAME]]."]]

[[HOW YOU CAUGHT IT — e.g. "We caught it because [[PERSON/PROCESS]], not because of any
system we had designed."]]

That is when we built [[WHAT YOU BUILT AS A RESULT — the review loop, the escalation
path, the content-freshness check]].

**The lesson, if you take one thing:**

An AI assistant does not fix a documentation problem. It exposes one — instantly, at
scale, to the people least equipped to spot the error.

Fix the source material first. The assistant is the last step, not the first.

If you're building an internal assistant: what did you discover about your own
documentation once a system started reading it?

#AIAssistants #LearningAndDevelopment #HRTech #AIImplementation #FrontlineAI

---

## Why this post is built this way

| Element | Choice | Reasoning |
|---|---|---|
| **Opening** | A concrete, slightly absurd operational fact | "200 pages on day one" is universally recognisable. Everyone has been handed that document. |
| **"I wouldn't have read it either"** | Self-implication | Removes any hint of blaming the workforce. In an executive register this is the difference between empathy and condescension. |
| **Metric placed early, then set aside** | "That is the headline. Here is the part that actually matters." | Explicitly refusing to dwell on your own result is a strong authority signal. It also keeps the post from reading as promotion. |
| **"The model was the easy bit"** | Bolded subhead | This is the genuinely useful, non-obvious claim. It's what Audience C came for. |
| **The contradiction insight** | *"They just knew which parts to ignore"* | The best line in the post. It reframes a documentation problem as an institutional-knowledge problem, which is a much more interesting idea. |
| **Failure section** | Mandatory, specific, with detection method | Vague failures read as false modesty. A specific failure with a specific detection story is the credibility engine of the entire post. Note it discloses a *process* gap, not a person's mistake. |
| **Closing principle** | Generalised beyond your context | *"An AI assistant does not fix a documentation problem. It exposes one."* This is the screenshot line. Structure it to stand alone. |
| **CTA** | Asks for the reader's parallel experience | Gets substantive comments from people building similar things — exactly the audience you want in your comment section. |

## Placeholders in this post

1. `[[PAGE COUNT]]` — manual length
2. `[[BEFORE]]` / `[[AFTER]]` — onboarding duration
3. `[[TIMEFRAME]]` — over how long the manual accumulated
4. `[[NUMBER]]` — how many authors
5. `[[PROPORTION]]` — share of effort spent on content rewriting
6. `[[SPECIFIC FAILURE]]` — a real one, with the topic and the size of the error
7. `[[HOW YOU CAUGHT IT]]` — be honest if it was luck
8. `[[WHAT YOU BUILT AS A RESULT]]`

## Media

Screenshot of a real Max conversation. Redact the driver's name and any identifier.
Crop to phone width — the fact that it's a phone screenshot is part of the argument.

**Do not** use an AI-generated illustration or a stock "robot assistant" graphic. It
would undercut every credibility signal in the copy.

## Legal / consent check before publishing

- [ ] No driver is identifiable in the screenshot or the text
- [ ] The failure described does not identify who made the underlying error
- [ ] `[[PAGE COUNT]]` and onboarding figures are ones you can defend
- [ ] Cleared with [[LINE MANAGER / LEADERSHIP]] if Max is commercially sensitive
