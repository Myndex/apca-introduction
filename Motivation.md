# Why This Fork Exists

Tobias Bengfort (xi) created the parent repo, *"apca-introduction,"* which contains significant inaccuracies about the APCA algorithm, its scientific basis, and its development context. The analysis document applies mathematical transformations that remove key APCA components, producing results that do not represent the algorithm's actual behavior. This fork provides corrections with citations to the published research record.

## What's Corrected Here

The original repo's errors fall into three categories:

1. **Factual inaccuracies** about APCA's algorithm, documentation, and development status — corrected in the [main README](https://github.com/Myndex/apca-introduction#readme).

2. **Methodological errors in the analysis** — including removal of the output clamp and scale/offset adjustments, use of `Math.exp()` in a way that destroys perceptual uniformity, and introduction of an unsupported 0.4 flare value presented as "modified WCAG 2." These are addressed point by point in the [response to the analysis](https://github.com/Myndex/apca-introduction/blob/main/analysis.md).

3. **Errors in the blog post on contrast formulas** — including the claim that mathematically distinct contrast formulas (Weber, Michelson, simple ratio) are "all the same," which is contradicted by both the empirical data and the published vision science literature. Addressed in [Math Errors and Corrections](https://github.com/Myndex/apca-introduction/blob/main/Math_Errors_and_Corrections.md).

Issues were also filed at the original repo identifying specific errors. Some were closed without action.

## Context

WCAG 2's contrast formula is well documented to produce systematic false passes and false fails (see the [evidence review](https://www.smashingmagazine.com/2022/09/realities-myths-contrast-color/)). APCA was developed to address these limitations using established vision science. The corrections in this fork are necessary because the original repo's errors have been cited elsewhere, contributing to confusion about the state of contrast research.

## Resources

- [**Easy Intro to APCA**](https://git.apcacontrast.com/documentation/APCAeasyIntro) — Plain-language overview
- [**Why APCA**](https://git.apcacontrast.com/documentation/WhyAPCA) — Rationale for a new contrast method
- [**APCA Discussion Forum**](https://github.com/Myndex/SAPC-APCA/discussions) — Open forum for questions and feedback

---

APCA began as a research project to address the documented limitations of WCAG 2.x contrast, beginning with [Issue #695](https://github.com/w3c/wcag/issues/695) in the W3C WCAG repository.
