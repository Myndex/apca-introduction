# Math, Errors, and Corrections
_**A response to claims about contrast formulas**_

GitHub user xi (aka Tobias Bengfort) wrote a blog post entitled _"Debunking claims about contrast formulas"_. The post misapplies mathematical transformations in ways that eliminate perceptual uniformity, then draws conclusions from the resulting distorted comparisons. This response addresses those errors against the published vision science literature.

**_Background on expertise_**
It should be noted that by [Tobias's own admission](https://github.com/Myndex/apca-introduction/blob/main/analysis.md#detailed-analysis-of-apca-2022-07-16), he has no training in the field of visual perception. References to the relevant science were provided on multiple occasions. The errors identified below reflect a gap between the mathematical analysis offered and the domain knowledge required.

These errors have been repeated in W3C GitHub repositories, where they may be accepted without critical examination by readers unfamiliar with the vision science literature.


## 1) Generalized comments: 

Some of what is presented here was covered over three years ago in the initial evaluations of existing contrast metrics, some of which were discussed in WCAG thread #695, and some were discussed elsewhere, as part of the visual contrast subcommittee, which was and is working toward finding useful solutions for perceptual uniform contrast metrics.

The central methodological problem is the repeated insistence on "simplifying" math by discarding perceptual uniformity. This occurs throughout the repo, the blog post, and related posts. Mathematical analysis is valuable, but assertions that "only the math matters" without engaging the empirical basis of vision science are not supportable.

Vision science is fundamentally about empirical evidence. That evidence has been collected for decades. For over a century. The depth of research an investigation into human vision is substantial, yet xi references nearly none of it, seeming content to rely only on the very early 180-year-old Weber-Fechner laws. Weber-Fechner is generally regarded as not a perceptual uniform model for human vision, and while still used in research as a way to quantify the just noticeable differences (JND) between visible and invisible, it is nevertheless limited and not uniform nor was it intended for that purpose.

For the purpose of guidelines that are useful for a designer, and particularly in view of the need of creating light mode/dark mode and other enhanced color modes to address particular applications, a perceptually uniform method is required. xi ignores perceptual uniformity, yet this is the key important aspect of modern vision models.


### One-dimensional thinking
The analysis treats contrast as if it can be reduced to a one-dimensional comparison — but it cannot. The context is multi-dimensional, and a one dimensional model absolutely fails to encompass the human vision system. This very basic fact is academic peer-reviewed scientific consensus, yet xi is ignoring it wholesale.

In particular, and this is perhaps xi's biggest failure, human perception of contrast is substantially affected by spatial frequency. Spatial frequency is more important to contrast than the distance between two colors. Everything in every example that xi presents fails to consider spatial frequency as the primary driver of contrast.




### Thresholds are not static
One of the key fallacies that xi continues to assert, is that "only a single threshold is important" as opposed to perceptual uniformity. But this is a substantial misunderstanding. For instance under WCAG2, the threshold of 4.5 to 1 has a completely different appearance when one of the colors is white than that same threshold when one of the colors is black. And that threshold shifts over the entire visual range, and not in a useful way.

What is required first is a perceptually uniform scale so that a given threshold has an equivalent perception across the entire visual range. xi is completely ignoring this fundamental and critically important property of perceptual contrast prediction.


### Regarding Hwang/Peli 
xi brings up Hwang/Peli as if normative, and it is not. This was Discussed early in thread #695 as part of the early due diligence, but while interesting, it lacks credible applicaton.

First, the **Hwang/Peli paper is just a hypothesis**, with no empirical data or study. The graphs are simply math assumptions derived a priori. Further, the Hwang/Peli paper is essentially just an asymmetric recalculation of WCAG 2. While it does improve upon WCAG2's flawed contrast math, it is far from a complete solution.

Early on I experimented with these types of Weber with various asymmetric offsets and scales, and found they did not match to measured perception of sRGB displays over the visual range. I.e. they are not perceptually uniform, such that a given delta value results in an equivalent perceptual change regardless of where within the visual range it occurs. 

The significance of perceptual uniformity across the visual range is fundamental to any useful contrast prediction model.


### S.S.Stevens
[To Honor Fechner and Repeal His Law:](https://www.science.org/doi/10.1126/science.133.3446.80) A power function, not a log function, describes the operating characteristic of a sensory system. (S.S.Stevens, 1961)

xi says:
> _This offset has a very different effect for Weber than for Steven though. Using an offset of 0.05 for Weber is quite similar to using an offset of 0.0025 and and exponent of 1/3 (used e.g. in CIELab and OkLab) for Stevens:_

This is a significant misunderstanding of the field here. First of all CIE L* already has an offset, and as a matter of comparison, ∆L* is very similar to WCAG 2 contrast in terms of the shape of the response curve relative to a given set of color pairs that span the visual range.

L* is actually based on Munsell _Value_, and this relates specifically to diffuse reflected colored tiles in a very controlled environment.

Stevens is among the first to note certain spatial frequency sensitivities in lightness/brightness. But this was lightness/brightness, not quite the same as contrast, which is separate.

The focus on abstract numerical comparisons, rather than empirical data, limits the validity of these conclusions.

The graph of different curves he presents is not really meaningful, as nowhere does he present any of the available empirical data sets as a relative example, or the other accepted perceptual lightness curves (such as L*) so it is not clear what the point is he is trying to make? 



### APCA
APCA traces partly back to Stevens, though also Fairchild's R-Lab, CIECAM02, and many others. APCA then adds several needed practical additions for modeling self-illuminated displays, including flare and black point compensation and polarity sensitivity, and is especially concerned with high spatial frequency stimuli (text).

The analysis does not examine any empirical data, only the abstraction of the math, despite the wealth of available data sets.

Speaking of, we now have next generation contrast matching experiments, intended for larger empirical studies (pending funding), and further fine-tuning. But even so, thus far in the public beta phase, the feedback is the methods/guidelines that are built on APCA 0.0.98G-4g are working very well, and is rapidly being adopted.

Per the feedback from beta users, it is not a question of the APCA math at this point, so much as the wider array of related guidelines, such as use-cases and minimum thresholds, which are openly discussed at the [APCA discussion forum.](https://github.com/Myndex/SAPC-APCA/discussions/39).

Associated with this is the recent shift in the WCAG 3 conformance model, and questions about meeting those issues. 

### What xi is not doing
xi is attempting to reverse engineer the APCA Lc curves, but what xi is not doing is any empirical study or research to provide the basis for the curves. More importantly, his analysis seem to revolve around the narrow situations where one color is either white or black, and ignoring the massive range of colors in between.



For xi's benefit I listed some of the historical contrast methods here: https://github.com/xi/apca-introduction/issues/17#issuecomment-1217843920 


## The purpose of this fork from xi's repo
The original repo contains factual errors and uses examples that obscure the actual differences between contrast methods. This fork provides [**point-by-point corrections**](https://github.com/Myndex/apca-introduction/blob/main/analysis.md) with citations to the published literature.

-----

## 2) Response to the blog post
In his personal blog post with the provacative title ***"Debunking claims about contrast formulas"*** at `.../xi/posts/2022-09-10-contrast-algorithms/` This section addresses the specific claims in that post.

A degree in math does not by itself confer expertise in visual perception. The blog post repeatedly abstracts and converts well-established perceptual equations in ways that destroy their perceptually uniform properties, then claims the results show that different contrast formulas are "all the same as simple contrast" — a conclusion that is not supported by the data.

### Line-by-line response
The blog post misrepresents several standard contrast formulas. Starting with Weber contrast:

> ### _Weber Contrast: (Ymax - Ymin) / Ymin_
> _The authors provide a lot of background information on this one, but fail to mention one crucial point: This again is simple contrast, just with an offset of 1:_

This is incorrect. Weber contrast is defined as $` Cw = (Ysymbol - Ybg) / Ybg `$ The reality is that Weber (unlike WCAG2) is specific to polarity, as it is _MOST IMPORTANT_ for the adapting field to be the denominator. This distinction is significant in vision science. 

When working with Weber, it can be mathmatically convienient to remain positive by using the absolute value of the difference between the symbol and the BG. Something key here: when the BG is white, then the resultant contrast value is between 0 to 1. Tobias' claim that Weber is "just simple contrast minus 1" is again *completely false*. Tobias has been claiming that his variations are "monotonic" but let's take a look at how these actually graph:

These charts are based on a white BG and varying levels of darker text.

Do the "simple" or WCAG plots look anything like the Weber plot? Here with all set to linear on the graph.
<img width="540" alt="Contrast Compared with simple and WCAG set to linear" src="https://github.com/Myndex/apca-introduction/blob/main/images/ContrastCompareSimpleInLinear.png">

And here the Simple and WCAG are set to log for the graph. The claim that these curves are "all the same" is not supported by the plots.
<img width="540" alt="Contrast Compared with simple and WCAG set to log" src="https://github.com/Myndex/apca-introduction/blob/main/images/ContrastCompareSimpleasLog.png">

For actually accurate information on luminance contrast, please see [**NASA's site**](https://colorusage.arc.nasa.gov/luminance_cont.php). 

> ### _Michelson Contrast: (Ymax - Ymin) / (Ymax + Ymin)_
> _Again they fail to mention a crucial detail: This is a Weber Contrast that compares Ymax and the average of Ymax and Ymin:_

The claim that Michelson is "just Weber" is incorrect. The fact that Michelson uses a different denominator than Weber does not seem to register with Tobias in terms of the importance thereof. Again, look at the charts to see the significant differences, and the NASA page linked above discusses this more.


> _I cannot see how you can say that simple contrast is unfit for real-world use and not say something similar about the others._

The charts make the differences plain. These formulas produce significantly different curves, and reducing them to mathematical equivalences by discarding their structure does not change their perceptual behavior.

Here is another version of the chart. In this case, the background ranges from 18Y to 100Y, and the text ranges from 0Y to 18Y. In this configuration, the contrast is a WCAG **4.5:1** across that visual range—in otherwords, a straight horizontal line for WCAG2. On the left of the chart are the darker pairs. Notice how "simple contrast" scales far off the chart. And both Weber and Michaelson also report the darker pairs with higher contrast. It is well known that Weber fails with darker pairs or lower contrast pairs for instance. WCAG 2 is also over reporting the contrast value for the darker pairs, as we know that WCAG2 is not usable for "dark mode" calculations. The APCA plot shows that APCA Lc contrast increases with luminance, in accordance with the human vision system's response.

<img width="540" alt="Contrast Compared with simple and WCAG and adding in APCA... here the full visual range with WCAG2 at 4.5:1 for all" src="https://github.com/Myndex/apca-introduction/blob/main/images/Screen%20Shot%202022-09-23%20at%208.20.00%20PM.png">

These principles are well established in the field of visual perception and represent **peer-reviewed scientific consensus.**

> ### _Equivalence of contrast formulas_
> _I want to try to formalize this notion of “similarity” between different formulas. Usually, a contrast formula is used to decide whether the contrast is above a certain threshold value._

### This is not accurate
This is not true as the "usual" case, though it may be partly true for WCAG_2. Such a statement is ignoring the importance of perceptual uniformity. Not just for thresholds, but for a continuous measurement, which is needed in design workflows such as for creating the visual hierarchy. I discuss this in [**The Realities And Myths Of Contrast And Color**](https://www.smashingmagazine.com/2022/09/realities-myths-contrast-color/). 

-----
## 3) The key point
But aside from this, the claim that perceptual uniformity is not needed, and only "threshold matching" is, is essentially **"one dimensional thinking in a three dimensional space."** Tobias is literally only considering "single points of contrast" when he speaks of thresholds. This grossly misrepresents the complexity and nuance of contrast perception for the human vision system. 

In the graph above, we show that over the visual range from dark pairs to light pairs, NONE of the thresholds are equal among any of the contrasts shown.

**None of them.**

Even though WCAG 2 shows all the color pairs as 4.5:1. What good is threshold matching is there is no uniformity over the visual range? The answer is that threshold matching without perceptual uniformity does not produce consistent results.

If you normalize all the equations such that there is a single point threshold, that threshold point only exists in one narrow place in the visual range. darker or lighter pairs and the thresholds all diverge. And this is just for a single threshold. WCAG 2 has three thresholds. Other standards have more, or are a sliding, continuous scale. 

But no matter how you are working to set up a conformance scheme, Tobias' apparent claim that "you can just match thresholds" is completely false. 

Continuing:

> _Weber-Fechner law...turns out to be a scaled version of simple contrast._

We covered Weber contrast earlier. Here xi presents some math and then asserts that it's just a scaled version of simple contrast.

Again, this is false. You can not in any reasonable way call applying "log" to something a "scaling". This characterization is not mathematically valid.


> _...Even if you consider Weber-Fechner to be outdated, this is still a perceptual model. So both the claims that the other contrast algorithms are not based on perceptually uniform lightness difference and that simple contrast does not consider the logarithmic response characteristics of the human eye are bogus._

### This conclusion is not supported by the evidence.
The claim that "everything is the same as simple contrast" does not hold up against the data. As mentioned above, predicting contrast is not something that can be reduced to a single point thresholds because the distance between a pair of colors and the resultant contrast perception is a non-linear function, as is most of perception science. 

It appears that he wants the reader to somehow believe that "all contrast maths are perceptual" when we know that is definately not the case, and these simple charts prove this. Some months ago I even posted at xi's repo a listing of the last hundred years of various contrast maths, and their stengths and weaknesses. Yet he is only talking about the 180 year old Weber which was shown to be invalid/incomplete by Stevens in the 1960s. But Tobias is not even considering Stevens here, nor is he discussing the more modern methods.

To add, what is important is the area where a model is perceptually uniform (if it is at all). For instance, some of the more basic models are only really useful at the JND (just noticible differences), while more sophisiticated models operate over a larger range, such as suprathreshold, the area of "normal visibility" far above the threshold JND. This is critical, because the models that simply define threshold break down with suprathreshold stimuli.

> _The final contrast formula mentioned in the color.js documentation is APCA. If you are interested in that I can refer you to my detailed analysis._

The "detailed analysis" is based on the same premise — that all contrast formulas reduce to simple contrast — which the evidence above contradicts. A point-by-point response to that analysis is [**here in this fork**](https://github.com/Myndex/apca-introduction/blob/main/analysis.md).

-----
## 4) TL;DR (Summary)

In conclusion, the blog post applies mathematical transformations that destroy perceptual uniformity, then draws conclusions from the resulting distorted comparisons. The claim that all contrast formulas reduce to "simple contrast" is not supported by the empirical data or the published vision science literature.

Because these claims have been repeated in W3C issue posts where they may influence standards development, a detailed correction is warranted. The errors identified above — removal of perceptual uniformity, conflation of mathematically distinct formulas, and absence of empirical validation — are fundamental, not minor.


Thank you for reading,

_Andrew Somers     
Director of Research     
Inclusive Reading Technologies, Inc.     
W3C/AGWG Invited Expert     
WCAG 3.0 co-author     
Inventor of SAPC, APCA, SACAM_     

_Any opinions expressed are those of the author and do not necessarily reflect the opinions of the W3C or the AGWG._

## _THE REVOLUTION WILL BE READABLE™_
