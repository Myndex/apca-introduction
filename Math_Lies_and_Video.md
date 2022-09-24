# _How To Use Math To Lie_
GitHub user xi (aka Tobias Bengfort) has taken a bizzare position where he is twisting math around in an attempt to disregard the last hundred years of vision and color science, and presenting uninformed opinion in a way that can only create further misunderstandings.

## _Tobias is uninformed regarding vision science_
It should be noted that by [Tobias's own admission](https://github.com/Myndex/apca-introduction/blob/main/analysis.md#detailed-analysis-of-apca-2022-07-16), he has no knoweldge in the field of visual perception. And despite good faith attempts on my part to educate him on the state of the art, he seems content to ignore the current scientific consensus, and then make unsupported statements using abstracted math that results in meaningless conclusions which he nevertheless asserts as fact.

My concern is that he has extended his disinformation into posts in W3C GitHub groups, "baffling with BS" and obfuscating with math that the uninitiated may be tempted to accept without further analysis.

### The purpose of this fork from xi's repo
The xi/apca-introduction repo is rife with misleading, inaccurate, and even false statements. It is using inappropriate examples that are designed to "wash away" the actual and important aspects of the contrast methods that are supposedly being evaluated.

This fork is my attempt to [**provide a rebuttle**](https://github.com/Myndex/apca-introduction/blob/main/analysis.md) to xi's poorly conceived analysis (or if not poorly conceived, determining the true motivation here is difficult as Tobias has been specifically evasive on this issue.)


## Debunking a faux debunker
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

Again, Tobias in his various posts is completely ignoring these principles which are academic in the field of visual perception, and well understood, accepted, peer-reviewed scientific consensus.

> ### _Equivalence of contrast formulas_
> _I want to try to formalize this notion of “similarity” between different formulas. Usually, a contrast formula is used to decide whether the contrast is above a certain threshold value._

### False
This is not true as the "usual" case, though it may be partly true for WCAG_2. Such a statement is ignoring the importance of perceptual uniformity. Not just for thresholds, but for a continuous measurement, which is needed in design workflows such as for creating the visual hierarchy. I discuss this in [**The Realities And Myths Of Contrast And Color**](https://www.smashingmagazine.com/2022/09/realities-myths-contrast-color/). 

## THE BIGGEST TAKEAWAY HERE
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

### No, what is "bogus" is xi's assertion of falsehoods here.
His claims that _"everything is the same as simple contrast"_ are incredibly uninformed. As mentioned above, predicting contrast is not something that can be reduced to a single point thresholds because the distance between a pair of colors and the resultant contrast perception is a non-linear function, as is most of perception science. 

It appears that he wants the reader to somehow believe that "all contrast maths are perceptual" when we know that is definately not the case, and these simple charts prove this. Some months ago I even posted at xi's repo a listing of the last hundred years of various contrast maths, and their stengths and weaknesses. Yet he is only talking about the 180 year old Weber which was shown to be invalid/incomplete by Stevens in the 1960s. But Tobias is not even considering Stevens here, nor is he discussing the more modern methods.

To add, what is important is the area where a model is perceptually uniform (if it is at all). For instance, some of the more basic models are only really useful at the JND (just noticible differences), while more sophisiticated models operate over a larger range, such as suprathreshold, the area of "normal visibility" far above the threshold JND. This is critical, because the models that simply define threshold break down with suprathreshold stimuli.

> _The final contrast formula mentioned in the color.js documentation is APCA. If you are interested in that I can refer you to my detailed analysis._

Xi's "detailed analysis" is similarly unfounded and based on his uninformed belief that everything can be reduced to a simple contrast ratio, which as we have shown, is patently false. My rebuttle to xi's flawed analysis is [**here in this fork**](https://github.com/Myndex/apca-introduction/blob/main/analysis.md).

## TL;DR

In conclusion, I don't know what xi (Tobias Bengfort)'s motiviation is here. The only reason I am taking the time to expose the misleading narrative is that he has taken to posting in W3C areas with spurious claims which must be responded to. At worst, he is intending to harrass, but at best he is spreading misinformation and that has the potential to cause confusion in an area that is already challenging to understand.

At this point I have exerted substantial effort in good faith to help Tobias understand the important factors of vision science, but he is not moving toward the path of knowledge, instead seemingly steadfast in presenting this fallacious narrative which ignores the last hundred years of vision science.

### CONCLUSION: xi/Tobias Bengfort's opinion on this subject is notwithstanding.

Thank you for reading,

Andy


