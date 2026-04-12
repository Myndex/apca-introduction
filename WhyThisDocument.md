# Why This Repo

This is a response to xi's [*"Why This Document"*](https://github.com/xi/apca-introduction?tab=readme-ov-file#why-this-document) section in his original *"Missing Introduction to APCA."*

## Context

In the original, xi stated he created the repo because:

> *...it was born out of my personal frustration with the original documentation. Some important pieces of information (e.g. the actual algorithm) get buried under all that text...*

This claim does not hold up against the available documentation:

- A clearly marked plain-language introduction, [***Why APCA***](https://git.apcacontrast.com/documentation/WhyAPCA), was published a year before xi created this repo.
- The [actual algorithm](https://github.com/Myndex/SAPC-APCA/blob/master/documentation/APCA-W3-TeX.md) is the **first document** in the documentation folder, with remaining documentation organized by subject.
- These resources were specifically pointed out to xi in [a discussion thread at the APCA repo](https://github.com/Myndex/SAPC-APCA/discussions/79), a few weeks before he created his repo.

Additionally, a chairperson of the W3C AGWG had asked that the mathematical details be separated from the front-page documentation for readability. In response, the math was moved into its own file, clearly labeled at the top of the documentation folder.

## On "Absolute Statements"

> *The original documentation also contains absolute statements like "APCA is perceptually uniform" and that the old algorithm produces "invalid results."*

The claim that the APCA documentation states WCAG 2 produces "invalid results" is **verifiably false**. Nowhere in the published documentation does that phrase appear. What the documentation states is that WCAG 2 far overstates contrast for dark colors — which is a verifiable, well-documented fact consistent with the peer-reviewed literature (see Barten 1999, Fairchild 2013, Buchner & Baumgartner 2007).

APCA's perceptual uniformity is specific to the context of text on self-illuminated displays. This property has been tested, peer-reviewed, and is the principal reason APCA is being widely adopted.

## On Expertise and Scope

> *...in my opinion is wrong as perceptual uniformity is an ideal that can never be reached completely. So I felt like there was room for a more balanced introduction.*

xi states in his own analysis document:

> *I am a regular web developer with a bachelor's degree in math, but **without any training in the science around visual perception**. That's why I cannot evaluate whether APCA is better than WCAG 2.x.*

This is a straightforward acknowledgment of the gap between the analysis offered and the domain knowledge required. Good-faith references to the relevant science were provided to xi on multiple occasions, including authoritative textbooks and peer-reviewed papers. The corrections in this fork are intended to bridge that gap for readers.

## Discussion

The stated rationale for creating the original repo — difficulty finding the algorithm and documentation — is contradicted by the documentation's structure and by direct prior exchanges where that structure was explained. This fork exists because the original contains factual errors that have been cited by others to create confusion about APCA's scientific basis and development status, and those errors needed to be corrected in the same location where they appear.

## Summary

The most significant error in xi's analysis is the **failure to recognize [spatial characteristics](https://github.com/Myndex/SAPC-APCA/discussions/90) as the primary driver of contrast** for text. The original demonstrations and calculations use test elements with spatial frequencies above the point of contrast constancy, and do not use the actual APCA code or methods — producing results that do not represent APCA's actual behavior. These issues are corrected in this fork, along with the other documents.

---

*For questions or discussion, please visit the [APCA discussion forum](https://github.com/Myndex/SAPC-APCA/discussions).*
