---
target: src/app/page.tsx
total_score: 29
p0_count: 0
p1_count: 4
p2_count: 2
timestamp: 2026-06-18T15-49-09Z
slug: src-app-page-tsx
---
## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Active nav section tracked well; form has spinner + success state. Minor: no aria-current on active links |
| 2 | Match System / Real World | 4 | Copy is exceptional — plain, specific, honest. No jargon anywhere |
| 3 | User Control and Freedom | 3 | Clear nav, form resets gracefully. No skip-nav link |
| 4 | Consistency and Standards | 3 | Strong token system; minor button style drift across sections |
| 5 | Error Prevention | 3 | React-hook-form validation in place; mailto pattern is a clever trust move |
| 6 | Recognition Rather Than Recall | 3 | Fixed navbar always visible; CTAs are descriptive |
| 7 | Flexibility and Efficiency | 2 | Marketing site; no skip-nav for keyboard users |
| 8 | Aesthetic and Minimalist Design | 3 | Eyebrow-on-every-section and identical card grids add visual noise |
| 9 | Error Recovery | 3 | Inline validation, specific error messages. Missing aria-live on errors |
| 10 | Help and Documentation | 2 | No FAQ, no community member specifics (where, when, what to bring) |
| **Total** | | **29/40** | **Good** |

## Anti-Patterns Verdict

LLM assessment: 4 tells — section eyebrow on every section (absolute ban), Inter-only typography (reflex-reject), cream/paper backgrounds (warm-neutral AI band), rounded icon above every card heading (brand ban). Copy is genuinely distinctive but the structural scaffold is the modal AI landing page.

Deterministic scan: [] — automated detector found zero violations. Issues are structural/typographic, not syntactic.

## Overall Impression

Writing is the standout — honest, grounded, specific. The visual scaffold is the modal AI health NGO page: cream background, Inter throughout, eyebrow on every section, icon grids. The single biggest opportunity: make the typography as distinctive as the copy.

## What's Working

1. Copy throughout — precise, earned, differentiating. Protect it.
2. Hero section — dark, image-led, strong visual anchor.
3. GetInvolved form — mailto pattern is thoughtful, validation is solid and specific.

## Priority Issues

**[P1] Section eyebrow as default scaffolding — every section**
Seven sections, seven eyebrows. The structural tell that announces AI scaffolding. Fix: remove from self-evident sections; keep at most one or two as deliberate brand callouts.

**[P1] Inter-only on a brand register site**
Inter is the reflex-reject default. At 92px in hero, it's competent but generic. Fix: pair with a display typeface that brings character to headings.

**[P1] Cream/paper backgrounds — AI-default warm-neutral band**
#F6F8F4 and #FCFCF8 are both in the warm-neutral AI band. The green palette shows intent but retreats to cream everywhere. Fix: commit forest-green to at least one section drench; push toward true neutral off-white elsewhere.

**[P1] MeetTeam has zero real team members — actively hurts credibility**
Three placeholder roles with no names. For institutional partners this is a credibility hole. Fix: remove section or refactor as a "roles we're hiring" callout in GetInvolved.

**[P2] Form error messages not announced to screen readers**
Inline validation errors lack role="alert" or aria-live="polite". Screen reader users won't hear validation failures.

**[P2] No community member information path**
A woman in Kwara can't find: what date, specific location, what to bring, whether it's free.

## Persona Red Flags

**Jordan (First-Timer)**: Can't find when/where/what. "View pilot plan" leads to "July 2025 planning window" — can't plan around a planning window.

**Casey (Mobile User)**: Primary conversion (volunteer form) is 8 sections deep. "Support work" CTA hidden on mobile. Mailto form fails silently when no email client is configured.

**Aisha (Health Partner)**: MeetTeam with no names is a credibility gap. Partnership contact path is the same volunteer form. Government engagement uses uncertain "should seek" language.

## Minor Observations

- Copyright 2026 but launch is July 2025.
- MissionTicker is not actually a ticker.
- GovernmentEngagement section has no id attribute — navbar can't track it.
- bg-paper / bg-cream / bg-white alternate across sections but are visually indistinguishable.
