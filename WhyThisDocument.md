# Why This Repo

This is a rebuttal and discussion of xi's [_"Why This Document"_](https://github.com/xi/apca-introduction?tab=readme-ov-file#why-this-document) in the last section of his original _"Missing Introduction to APCA"_. 

## _Questionable Motivations_
In the original, xi claimed he created the repo because:

> _...it was born out of my personal frustration with the original documentation. Some important pieces of information (e.g. the actual algorithm) get buried under all that text..._

**This argument is unpersuasive.**
- First, there was a clearly marked plain language introduction called [***Why APCA***](https://git.apcacontrast.com/documentation/WhyAPCA) which was published a year before xi created this repo. 
- Second, the [actual algorithm](https://github.com/Myndex/SAPC-APCA/blob/master/documentation/APCA-W3-TeX.md) is literally the ***very first document*** in the documentation folder. And the remaining documentation is broken down by subject, again in that folder.

This indicates that xi did not actually read nor look into the documentation folder. In fact I even explained all of this to him directly in [a thread at the APCA repo](https://github.com/Myndex/SAPC-APCA/discussions/79) a few weeks before he created his repo. As a matter of my own opinion, this points to underlying motivations which I'll discuss below.

Perhaps it's useful to add that a **chairperson of the W3C AGWG** had asked me to *"remove the math"* from the basic front page documentation to make it easier to read. In response, I put the math into its own separate file **clearly marked** at the top of the documentation folder.


## _A Twist of Rhetoric?_
> _The original documentation also contains absolute statements like "APCA is perceptually uniform" and that the old algorithm produces "invalid results"._

***This statement is verifiably false***.

Nowhere in the published documentation have I ever stated that *"WCAG&nbsp;2 produced invalid results"*. Nowhere. What I have said is *"WCAG&nbsp;2 far overstates contrast for dark colors"* which is verifiably true. I *have* stated that WCAG&nbsp;2 has inherent problems, but then listing specifically what those problems are. xi's use of provocative language such as _"...contains absolute statements..."_ is surely intended to disparage. Nevertheless, APCA is perceptually uniform in the context of text on a self-illuminated display. This has been tested, studied, peer-reviewed, and discussed at length. It is the principal reason that APCA is being widely adopted today.

Again, this points to motivation. 


## _Weighting a Lay Opinion_
> ..._in my opinion is wrong as perceptual uniformity is an ideal that can never be reached completely. So I felt like there was room for a more balanced introduction._

xi is, by his own admission, not knowledgable in the field of vision science. From his analysis document he states _(emphasis added)_:

> _I am a regular web developer with a bachelor's degree in math, but **without any training in the science around visual perception**. That's why I cannot evaluate whether APCA is better than WCAG 2.x._

I don't know if I should read this as a form of gaslighting? Because the rest of his documentation is indeed purporting to evaluate. What then is the purpose of his repo and discussions? Despite good faith best efforts to present xi with references to the relevant science, and help him climb the learning curve, he has not made a visible effort to understand. Mea culpa for any writing of mine where I am not presenting the information in an easy-to-digest fashion, but I question if that would be of help.

**Motivation** is the question at this point. It is well known that there are a small group of individuals that are opposed to myself (personally) and my work, for reasons that are unclear. They have directly and maliciously obstructed my work with the W3C. xi has links in his repo that appear to connect him to these individuals in some way, and the nature of his issue post #651 in silver would appear to support this conclusion. Is xi associated with the obstructionist group? And to what degree? I don't know conclusively at this time, as the evidence is circumstantial.

Nevertheless, what is the motivation here? Are we lost in translation? 


## _Discussion_
His claims for why he created the parent repo fall flat, as his view implies he did not so much as open the documentation folder, where the relevant documentation is and clearly labeled. This despite the aforementioned discussion thread where I was directly at his disposal, answering his queries in good faith. The implication here, or at least the appearance, is that a third party fed a narrative, or encouraged a bias. 

What is abundantly clear with mounting evidence, is his repo and his Silver issue #651 had the intent and effect of obstructing the work being done in the Visual Contrast group for improving readability. I am well aware of the small group that has been harrassing myself personally, and have been obstructive. Their ultimate motivation is somewhat unclear, perhaps "politics as usual", and I suppose that is to be expected anytime there is a paradigm shift such as the one that the APC Readability Criterion presents.

## TL;DR
The most important deficit of xi's assertions is the **failure to recognize [spatial characteristics](https://github.com/Myndex/SAPC-APCA/discussions/90) as the primary driver of contrast** for text. It appears his demonstrations and calculations are **biased to obfuscate that fact**, using test elements spatially above the point of contrast constancy, and not using the actual APCA code nor methods. These issues were corrected here. The other documents in the repo have also been revised or commented on, including his "analysis".

------

_If you have to lie to make your point, then you have no point to make_   
—_A.Somers_
