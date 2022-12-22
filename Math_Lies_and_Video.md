# Math Lies and Videotape 
_**How To Use Math To Lie:** the Debunking of a would-be debunker_

GitHub user xi (aka Tobias Bengfort) wrote a blog post entitled _"Debunking claims about contrast formulas"_. In it he has taken a bizzare position and is twisting math around in an attempt to disregard the last hundred years of vision and color science. Unfortunately the presentation of his uninformed opinion can only create further misunderstandings and I feel that it's already complicated and difficult to understand in the first place. Perhaps that's central to the problem here.

**_Tobias is uninformed regarding vision science_**
It should be noted that by [Tobias's own admission](https://github.com/Myndex/apca-introduction/blob/main/analysis.md#detailed-analysis-of-apca-2022-07-16), he has no knoweldge in the field of visual perception. And despite good faith attempts to educate him on the state of the art, he seems content to ignore the current scientific consensus, and then make unsupported statements using abstracted math that results in meaningless conclusions which he nevertheless asserts as fact.

My concern is that he has extended his disinformation into posts in W3C GitHub groups, "baffling with BS" and obfuscating with seemingly complicated but nevertheless incorrect math, that the uninitiated may be tempted to accept without further analysis.


## 1) Generalized comments: 

What is @xi is up to?? Some of what he brings up we covered over three years ago in the initial evaluations of existing contrast metrics, some of which were discussed in WCAG thread #695, and some were discussed elsewhere, as part of the visual contrast subcommittee, which was and is working toward finding useful solutions for perceptual uniform contrast metrics.

It is important to point out that xi is, by his own admission, not familiar with vision or color science. The main exception I have is his insistence on "simplifying" math by discarding perceptual uniformity, which he does liberally at his repo, in his blog post, and a few other places. I certainly don't have a problem with somebody who is focus on mathematics for being involved here, but rather than asking questions, xi ignores important aspects of vision science and then makes claims that only the math matters.

Honestly this is an untenable position. Vision science is not about the math, it is about empirical evidence. That evidence has been collected for decades. For over a century. The depth of research an investigation into human vision is substantial, yet xi references nearly none of it, seeming content to rely only on the very early 180-year-old Weber-Fechner laws. Weber-Fechner is generally regarded as not a perceptual uniform model for human vision, and while still used in research as a way to quantify the just noticeable differences (JND) between visible and invisible, it is nevertheless limited and not uniform nor was it intended for that purpose.

For the purpose of guidelines that are useful for a designer, and particularly in view of the need of creating light mode/dark mode and other enhanced color modes to address particular applications, a perceptually uniform method is required. xi ignores perceptual uniformity, yet this is the key important aspect of modern vision models.


### one-dimensional thinking
A line from Star Trek Wrath of Kahn comes to mind, in that xi is abstracting the math as if it is one dimensional, but the context is three or more dimensions. In particular, and this is perhaps xi's biggest failure, is that human perception of contrast is substantially affected by spatial frequency. In fact special frequency is more important to contrast than the distance between two colors. Everything in every example that xi is doing fails to consider spatial frequency as the primary driver of contrast.

Put another way, xi is applying paint to a rusty car, hoping that will make it run, but the engine is missing.

### Thresholds are not static
One of the key fallacies that xi continues to assert, is that "only a single threshold is important" as opposed to perceptual uniformity. But this is a substantial misunderstanding. For instance under WCAG2, the threshold of 4.5 to 1 has a completely different appearance when one of the colors is white than that same threshold when one of the colors is black. And that threshold shifts over the entire visual range, and not in a useful way.

What is required first is a perceptually uniform scale so that a given threshold has an equivalent perception across the entire visual range. xi is completely ignoring this fundamental and critically important property of perceptual contrast prediction.


### Regarding Hwang/Peli 
xi brings up Hwang/Peli as if normative, and it is not. This was Discussed early in thread #695 as part of the early due diligence, but while interesting, it lacks credible applicaton.

First, the **Hwang/Peli paper is just a hypothesis**, with no empirical data or study. The graphs are simply math assumptions derived a priori. Further, the Hwang/Peli paper is essentially just an asymmetric recalculation of WCAG 2. While it does improve upon WCAG2's flawed contrast math, it is far from a complete solution.

Early on I experimented with these types of Weber with various asymmetric offsets and scales, and found they did not match to measured perception of sRGB displays over the visual range. I.e. they are not perceptually uniform, such that a given delta value results in an equivalent perceptual change regardless of where within the visual range it occurs. 

xi's statements and assumptions clearly demonstrate that he does not understand the significance of this, and the ultimate importance of perceptual uniformity across the visual range.


### S.S.Stevens
[To Honor Fechner and Repeal His Law:](https://www.science.org/doi/10.1126/science.133.3446.80) A power function, not a log function, describes the operating characteristic of a sensory system. (S.S.Stevens, 1961)

xi says:
> _This offset has a very different effect for Weber than for Steven though. Using an offset of 0.05 for Weber is quite similar to using an offset of 0.0025 and and exponent of 1/3 (used e.g. in CIELab and OkLab) for Stevens:_

This is a significant misunderstanding of the field here. First of all CIE L* already has an offset, and as a matter of comparison, ∆L* is very similar to WCAG 2 contrast in terms of the shape of the response curve relative to a given set of color pairs that span the visual range.

L* is actually based on Munsell _Value_, and this relates specifically to diffuse reflected colored tiles in a very controlled environment.

Stevens is among the first to note certain spatial frequency sensitivities in lightness/brightness. But this was lightness/brightness, not quite the same as contrast, which is separate.

Again, Tobias seems focused on abstract numerical comparisons, not vision science.

The graph of different curves he presents is not really meaningful, as nowhere does he present any of the available empirical data sets as a relative example, or the other accepted perceptual lightness curves (such as L*) so it is not clear what the point is he is trying to make? 



### APCA
APCA traces partly back to Stevens, though also Fairchild's R-Lab, and many others. APCA then adds several needed practical additions for modeling self-illuminated displays, including flare and black point compensation and polarity sensitivity, and is especially concerned with high spatial frequency stimuli (text).

xi is not examining any empirical data at all, only the abstraction of the math. This despite the fact there is a wealth of available data sets for training models.

Speaking of, we now have next generation contrast matching experiments, intended for larger empirical studies (pending funding), and further fine-tuning. But even so, thus far in the public beta phase, the feedback is the methods/guidelines that are built on APCA 0.0.98G-4g are working very well, and is rapidly being adopted.

Per the feedback from beta users, it is not a question of the APCA math at this point, so much as the wider array of related guidelines, such as use-cases and minimum thresholds, which are openly discussed at the [APCA discussion forum.](https://github.com/Myndex/SAPC-APCA/discussions/39).

Associated with this is the recent shift in the WCAG 3 conformance model, and questions about meeting those issues. 

### What xi is not doing
xi is attempting to reverse engineer the APCA Lc curves, but what xi is not doing is any empirical study or research to provide the basis for the curves. More importantly, his analysis seem to revolve around the narrow situations where one color is either white or black, and ignoring the massive range of colors in between.

With the patents pending/applied for, we've felt comfortable presenting the math/methods publicly. Doing so makes reverse engineering trivial, meaning that uninformed hacks can twist things around—but make no mistake, they are doing a disservice in that they create confusion and elevate misunderstanding. 

### *But also, reverse engineering is IP theft*.

**Personal note:** if anyone is curious as to why I may seem a little bent out of shape here, it just may have something to do with some hack that knows nothing of visual perception attempting a clumsy reverse engineering of three years of research and development and then posting a misleading "analysis".

For xi's benefit I listed some of the historical contrast methods here: https://github.com/xi/apca-introduction/issues/17#issuecomment-1217843920 


### The purpose of this fork from xi's repo
The xi/apca-introduction repo is rife with misleading, inaccurate, and even false statements. It is using inappropriate examples that are seemingly designed to "wash away" the actual and important aspects of the contrast methods that he claims are being evaluated.

This fork is my attempt to [**provide a rebuttle**](https://github.com/Myndex/apca-introduction/blob/main/analysis.md) to xi's poorly conceived analysis (or if not poorly conceived it is intentionally derisive and obstructing. Determining the true motivation here is difficult as Tobias has been specifically evasive on this issue.)

-----

## 2) Debunking a faux debunker
In his personal blog post with the provacative title ***"Debunking claims about contrast formulas"*** at `.../xi/posts/2022-09-10-contrast-algorithms/` Tobias is painting himself as a "debunker", and he seems to be escalating his derisive and spurious position in his recent post. This page at this fork is intended to address and clarify the problems with his position.

He has stated he has a "degree in math" which is not particularly meaningful and by itself not applicable to the field of visual perception. While it is certainly true that we use math in visual perception, that does not imply that someone with general math skills will automatically understand color science. In Tobias' case, he is frequently abstracting and converting the well established maths used in perception models, and in doing so, corrupting or destroying any perceptually uniform qualities that had existed in the basic equasions.

Tobias does this and has refused to acknowledge that the results he claims are "all the same as simple contrast" (paraphrasing) are in fact not at all the same—the implication here is that his true motivation is to confuse and misinform. He has discovered nothing, and asserts falsehoods or his uninformed opinion as if it were fact.

### Debunking Tobias Line by Line
Let's start off with how Tobias lacks knowledge of the basics of perception science, and as a result he misrepresents the formula for Weber contrast.

> ### _Weber Contrast: (Ymax - Ymin) / Ymin_
> _The authors provide a lot of background information on this one, but fail to mention one crucial point: This again is simple contrast, just with an offset of 1:_

This is laughably wrong. Weber contrast is defined as ` Cw = (Ysymbol - Ybg) / Ybg ` The reality is that Weber (unlike WCAG2) is specific to polarity, as it is _MOST IMPORTANT_ for the adapting field to be the denominator. Apparently Tobias is unaware of this, and is apparently making these leaps of logic without regard for vision science. 

When working with Weber, it can be mathmatically convienient to remain positive by using the absolute value of the difference between the symbol and the BG. Something key here: when the BG is white, then the resultant contrast value is between 0 to 1. Tobias' claim that Weber is "just simple contrast minus 1" is again *completely false*. Tobias has been claiming that his variations are "monotonic" but let's take a look at how these actually graph:

These charts are based on a white BG and varying levels of darker text.

Do the "simple" or WCAG plots look anything like the Weber plot? Here with all set to linear on the graph.
<img width="540" alt="Contrast Compared with simple and WCAG set to linear" src="https://github.com/Myndex/apca-introduction/blob/main/images/ContrastCompareSimpleInLinear.png">

And here the Simple and WCAG are set to log for the graph. Tobais wants us to believe these curves are "all the same".
<img width="540" alt="Contrast Compared with simple and WCAG set to log" src="https://github.com/Myndex/apca-introduction/blob/main/images/ContrastCompareSimpleasLog.png">

For actually accurate information on luminance contrast, please see [**NASA's site**](https://colorusage.arc.nasa.gov/luminance_cont.php). 

> ### _Michelson Contrast: (Ymax - Ymin) / (Ymax + Ymin)_
> _Again they fail to mention a crucial detail: This is a Weber Contrast that compares Ymax and the average of Ymax and Ymin:_

Again, Tobias is making completely unsupportable statements. His claim that Michelson is "just Weber" is bizzare. The fact that Michelson uses a different denominator than Weber does not seem to register with Tobias in terms of the importance thereof. Again, look at the charts to see the significant differences, and the NASA page linked above discusses this more.


> _I cannot see how you can say that simple contrast is unfit for real-world use and not say something similar about the others._

My message to Tobias is to look at the CHARTS. It is plain and clear how and why these formulas differ, and why they are significantly different from "simple ratio". It is not at all okay to break down some equation and ignore the structure of same to make claims that it is just simple contrast. Tobias apparently things the differences are not important, but seriously, you don't need to be a math major to look at these charts and see that there is no comparison.

Here is another version of the chart. In this case, the background ranges from 18Y to 100Y, and the text ranges from 0Y to 18Y. In this configuration, the contrast is a WCAG **4.5:1** across that visual range—in otherwords, a straight horizontal line for WCAG2. On the left of the chart are the darker pairs. Notice how "simple contrast" scales far off the chart. And both Weber and Michaelson also report the darker pairs with higher contrast. It is well known that Weber fails with darker pairs or lower contrast pairs for instance. WCAG 2 is also over reporting the contrast value for the darker pairs, as we know that WCAG2 is not usable for "dark mode" calculations. The APCA plot shows that APCA Lc contrast increases with luminance, in accordance with the human vision system's response.

<img width="540" alt="Contrast Compared with simple and WCAG and adding in APCA... here the full visual range with WCAG2 at 4.5:1 for all" src="https://github.com/Myndex/apca-introduction/blob/main/images/Screen%20Shot%202022-09-23%20at%208.20.00%20PM.png">

Again, Tobias in his various posts is completely ignoring these principles which are academic in the field of visual perception, and well understood, accepted, **peer-reviewed scientific consensus.**

> ### _Equivalence of contrast formulas_
> _I want to try to formalize this notion of “similarity” between different formulas. Usually, a contrast formula is used to decide whether the contrast is above a certain threshold value._

### False
This is not true as the "usual" case, though it may be partly true for WCAG_2. Such a statement is ignoring the importance of perceptual uniformity. Not just for thresholds, but for a continuous measurement, which is needed in design workflows such as for creating the visual hierarchy. I discuss this in [**The Realities And Myths Of Contrast And Color**](https://www.smashingmagazine.com/2022/09/realities-myths-contrast-color/). 

## 3) THE BIGGEST TAKEAWAY HERE
But aside from this, the claim that perceptual uniformity is not needed, and only "threshold matching" is, is essentially **"one dimensional thinking in a three dimensional space."** Tobias is literally only considering "single points of contrast" when he speaks of thresholds. This grossly misrepresents the complexity and nuance of contrast perception for the human vision system. 

In the graph above, we show that over the visual range from dark pairs to light pairs, NONE of the thresholds are equal among any of the contrasts shown.

### NONE OF THEM

Even though WCAG 2 shows all the color pairs as 4.5:1. What good is threshold matching is there is no uniformity over the visual range? Answer: it is a bogus narrative with no basis in fact whatsoever.

If you normalize all the equations such that there is a single point threshold, that threshold point only exists in one narrow place in the visual range. darker or lighter pairs and the thresholds all diverge. And this is just for a single threshold. WCAG 2 has three thresholds. Other standards have more, or are a sliding, continuous scale. 

But no matter how you are working to set up a conformance scheme, Tobias' apparent claim that "you can just match thresholds" is completely false. 

Continuing:

> _Weber-Fechner law...turns out to be a scaled version of simple contrast._

We covered Weber contrast earlier. Here xi presents some math and then asserts that it's just a scaled version of simple contrast.

Again, this is false. You can not in any reasonable way call applying "log" to something a "scaling". This again is disengenuous and clearly intended to confuse the reader.


> _...Even if you consider Weber-Fechner to be outdated, this is still a perceptual model. So both the claims that the other contrast algorithms are not based on perceptually uniform lightness difference and that simple contrast does not consider the logarithmic response characteristics of the human eye are bogus._

### No, what is "bogus" is xi's assertions which amount to falsehoods.
His claims that _"everything is the same as simple contrast"_ are incredibly uninformed. As mentioned above, predicting contrast is not something that can be reduced to a single point thresholds because the distance between a pair of colors and the resultant contrast perception is a non-linear function, as is most of perception science. 

It appears that he wants the reader to somehow believe that "all contrast maths are perceptual" when we know that is definately not the case, and these simple charts prove this. Some months ago I even posted at xi's repo a listing of the last hundred years of various contrast maths, and their stengths and weaknesses. Yet he is only talking about the 180 year old Weber which was shown to be invalid/incomplete by Stevens in the 1960s. But Tobias is not even considering Stevens here, nor is he discussing the more modern methods.

To add, what is important is the area where a model is perceptually uniform (if it is at all). For instance, some of the more basic models are only really useful at the JND (just noticible differences), while more sophisiticated models operate over a larger range, such as suprathreshold, the area of "normal visibility" far above the threshold JND. This is critical, because the models that simply define threshold break down with suprathreshold stimuli.

> _The final contrast formula mentioned in the color.js documentation is APCA. If you are interested in that I can refer you to my detailed analysis._

Xi's "detailed analysis" is similarly unfounded and based on his uninformed belief that everything can be reduced to a simple contrast ratio, which as we have shown, is patently false. My rebuttle to xi's flawed analysis is [**here in this fork**](https://github.com/Myndex/apca-introduction/blob/main/analysis.md).

## 4) TL;DR (Summary)

In conclusion, xi is looking at the contrast problem incorrectly, making invalid assumptions and using inappropriate math. The end result is at a misunderstanding and confusion to a field that is already challenging to understand foremost. He does is not clarifying he is obfuscating.

At this point I have exerted substantial effort in good faith to help Tobias understand the important factors of vision science, but he is not moving toward the path of knowledge, instead seemingly steadfast in presenting this fallacious narrative which ignores the last hundred years of vision science.

I don't know what xi (Tobias Bengfort)'s motiviation is here. The only reason I am taking the time to expose the misleading narrative is that he has taken to posting in W3C areas with spurious claims which must be responded to. At best he is spreading misinformation and that has the potential to cause confusion in an area that is already challenging to understand. However, certain associations he's made imply an intention to harrass and obstruct, which has been the case with a small group of individuals who appear intent on maintaining the status quo, flagrantly disregarding peer-reviewed science.

Such anti-science positions cannot be allowed to stand. Because this has spilled over into W3C issue posts, I have been compelled to set the record straight.

### FINAL CONCLUSION: xi/Tobias Bengfort's opinion on this subject is unsupportable, therefore notwithstanding.


Thank you for reading,

_Andrew Somers     
Senior Color Science Researcher     
Myndex Technologies     
W3C/AGWG Invited Expert     
WCAG 3.0 co-author     
Inventor of SAPC, APCA, SACAM_     

_Any opinions expressed are those of the author and do not necessarily reflect the opinions of the W3C or the AGWG._

## _THE REVOLUTION WILL BE READABLE™_
