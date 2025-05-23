# Derailed analysis of APCA
### _(rebuttal to xi's analysis)_

Below is user xi's analysis of APCA, which we find flawed and misleading for a number of reasons. He abstracts the math and/or creates his own version of the math and eliminates many of the key properties of the APCA method in performing his "analysis." But then he goes further to create his own separate contrast math and claims it is a "version" of WCAG_2, which it is not. What it is, is a crude and incomplete attempt to reverse engineer the APCA contrast curves, and then used to makes claims that APCA is similar to WCAG 2. In short, on the face of it, his analysis quoted below appears to be disingenuous, and my concern is that it serves to obfuscate and confuse anyone reading his analysis.

The repo was forked to point out the flaws and misconceptions he presents. His original statements are quoted & in italics.

For the rebuttal to his recent blog post, please see [**Math Lies and Video**](https://github.com/Myndex/apca-introduction/blob/main/Math_Lies_and_Video.md)

-----
> ## _Detailed analysis of APCA (2022-07-16)_
>
> _I am a regular web developer with a bachelor's degree in math, but **without any
training in the science around visual perception**. That's why I cannot evaluate
whether APCA is *better* than WCAG 2.x. Instead this is a systematic
comparison of their mathemetical properties._


> [!IMPORTANT]
> In his analysis, xi admits to **no knowledge of the science of visual perception**. With this the case, I'd certainly prefer that xi not assert unsupported/uninformed opinions as if they were facts. I bring this point up, as it is clear he has basic misunderstandings regarding the field of visual perception. Despite his demonstrated lack of understanding, xi's analysis makes a number of unsupported assertions and leaps of logic that serve to mislead the reader. 

.

> ## _Context: The Web Content Accessibility Guidelines (WCAG)_
>
> _APCA was developed to address some issues related to contrast in the Web
Content Accessibility Guidelines (WCAG). WCAG is an official W3C
recommendation, a normative part of many laws all over the world, and generally
a good read._

WCAG 2 is _not_ a normative part of "many" laws. Internationally, _some_ nations use WCAG 2 as the basis for regulation relating to governmental websites. WCAG 2 is not law in the United States except in some narrow areas (25% of airport kiosks must follow WCAG2). WCAG 2.0 is part of the 508 government regulations which apply to government web sites and government procurement of certain IT. 508 has two major exceptions: **1) alternate means**. This allows any alternative method other than WCAG to be used, provided it improves actual accessibility, **2) Commercially available**. If the technology that follows WCAG 2 is not commercially available, then WCAG does not need to be followed for that specific criteria.

It is extremely rare for WCAG 2 to be "legally" applied across the board. In the United States, the ADA does not specify WCAG 2 as a standard, but does say that sites that are public accommodations must be accessible — arguably, working for actual accessibility (as opposed to certain arbitrary goal posts) is best practice here. To be noted, the Winn-Dixie case in Florida was **vacated**, meaning it can not be cited/referenced. IIRC that _was_ the only Federal case that held support for WCAG 2, but no longer citable.

The Domino's case regarded if they had to abide by ADA, not WCAG. 

As far as "generally a good read"—WCAG 2 is considered dense, arcane, and confusing by most who are required to use it.

.

> _WCAG faces a difficult challenge though: There is no one-size-fits-all solution
for accessibility. Different humans have different needs, and different
situations require different kinds of support._

This can only be correctly handled with user customization, something that the W3C WAI & AGWG have not ben able to promote or develop. Part of the problem with many of the needed accessibility features are rooted in the technology, and outside the control of the author until such technology exists.

.

> _This is also the case in the context of color contrast: vision impairments,
ambient light, and screen settings can all have a pronounced impact on
legibility. None of these are known beforehand by website authors, so the rules
provided by WCAG need to work regardless of these factors._

**No.** There are defined and well known baseline standards relating to common case ambient environments and screen standards. Display standards define adjustment criteria, CSS provides size metrics that are based on visual angle (ref px), and manufacturers work with these in developing technologies to extend the operating ranges.

WCAG 2 contrast SCs and understanding docs make dismissive or "hand wavy" statements regarding important factors—for instance, stating that antialiasing can not be considered, which is bizarre when that technology has been an important part of rasterizing for displays for decades.


.

> _Faced with the question whether it wanted to give precise instructions (that
might not be ideal in every situation) or give nuanced but ultimately vague
advise, WCAG went with the former. So today WCAG provides a list of detailed
steps for evaluating a website. Many of these checks can be automated. It does
not always result in perfect accessibility, but it gives lawmakers a solid
baseline._

### _Opinion not based in fact._

Some of WCAG 2, such as that relating to the structure of the document needed for accessibility (i.e. needed for screen reader support) is certainly important. But some of WCAG 2 that relate to perception, such as contrast, are not based in science, not empirically tested nor evaluated, were in fact objected to at the time (objections ignored), and otherwise unsupportable as law, and I am unaware of any cases judged on the merits in the US, at least not at the Federal level. In discussing this with legal council, I was informed that the NY and CA cases were relating to actual accessibility, not automated testing, though this is something we've been looking into.

.

> ## _Components of contrast_
> _When we speak about contrast, we actually mean a few different things:_
> -   _How is the contrast between two colors calculated?_
> -   _Which thresholds are used to decide whether that contrast is sufficient?_
> -   _How do other features like font size and font weight factor into that
    decision?_
> -   _Which parts of the UI need to be checked?_

It is true that contrast means a few different things, but listed above are not those things. Listed above all relate to one _single_ kind of contrast.

While these are some the things that relate specifically to _readability contrast_. Some other important factors are:
- Critical contrast for fluent readability
- Critical size/weight for fluent readability
- The effect of line and letter spacing, padding, other whitespace.
- Visual hierarchy of contrasts

There may be translation errors in some of what xi states due to translation from German, I do try to make allowances for that in my attempts to understand what he is trying to achieve here.

.

> _In the following sections I will take a closer look at how WCAG 2.x and APCA
answer each of these questions._

No, xi does not answer nor address these questions in the present analysis.

.

> ## _The contrast formula_
>
> _There is no *true* contrast formula. Instead, these formulas are supposed to
predict how most humans perceive a color combination, even if they cannot be
correct 100% of the time._

This is a weird statement. Neither color or contrast are "real", they are perceptions. I have no idea what he means by "true" contrast formula, and it may be a translation issue as his native language is german. Nevertheless, as perceptions, we have decades of experience with perceptually uniform color and vision models, such models are the foundation of advanced technology such as image and video data compression. APCA rests solidly on this body of knowledge.

.

> ### _A naive approach_
>
> ```js
> function sRGBtoY(srgb) {
>  return (srgb[0] + srgb[1] + srgb[2]) / 3;
> }
>
> function contrast(fg, bg) {
>   var yfg = sRGBtoY(fg);
>   var ybg = sRGBtoY(bg);
>
>   return ybg - yfg;
> };
> ```
> _This naive approach provides a baseline for the other formulas we will look at.
It does not consider anything we know about human vision, but it already
features the basic structure: We first transform each color to a value that
represents lightness. Then we calculate a difference between the two lightness
values._

No. This naive approach is fundamentally wrong, so it does not provide any sort of baseline. More importantly, it does _NOT_ calculate "lightness" which is a perceptual quality, and the claim that it represents lightness, a perceptual sensation (subject to context) as opposed to _light_ or _luminance_ (a physical measure) further underlines xi's lack of understanding of the science here.

I am not certain the motivation for presenting this approach here, and further, if a naive approach were to be included for a baseline, then the most simple, such as "simple contrast", should be used. Otherwise it only serves to confuse the reader and obscure the point.

To be clear, we formerly provided xi with a resource list in good faith, including suthoritative books which could help inform his thought here. But based on interactions, xi does not appear informed on the subject. For those that have spent a lifetime working with color and light and vision, such a ham-fisted pedestrian discussion, stating falsehoods with a tone of authority, is quite infuriating by itself. That he is applying this shade to work that has been in development, and smearing the meaning is beyond the pale.

.

> ### _WCAG 2.x_
>
> ```js
> function gamma(x) {
>   if (x < 0.04045) {
>     return x / 12.92;
>   } else {
>     return Math.pow((x + 0.055) / 1.055, 2.4);
>   }
> }
> 
> function sRGBtoY(srgb) {
>   var r = gamma(srgb[0] / 255);
>   var g = gamma(srgb[1] / 255);
>   var b = gamma(srgb[2] / 255);
> 
>   return 0.2126 * r + 0.7152 * g + 0.0722 * b;
> }
> 
> function contrast(fg, bg) {
>   var yfg = sRGBtoY(fg);
>   var ybg = sRGBtoY(bg);
> 
>   var c = (ybg + 0.05) / (yfg + 0.05);
>   return (c < 1) ? 1 / c : c;
> };
> ```

**_PARTIALLY INCORRECT_**
This is the WCAG2 formula EXCEPT that WCAG2 does not care which is foreground or which is background, but it does demand which is lighter and which is darker. This is addressed obliquely in the return ternary statement. If this page intends to educate, then the importance of qualifying which color is higher luminance before calculating the ratio should be up front. Also, buried in other parts of the example code, xi _rounds_ the result, but WCAG 2 requires using 'Math.floor()', i.e. AGWG deceided that WCAG 2 contrast must be truncated, not rounded.

The function for WCAG 2 contrast() is more clearly written as:

```
function contrast(fg, bg) {
  let yfg = sRGBtoY(fg) + 0.05;
  let ybg = sRGBtoY(bg) + 0.05;
  
           // divide the lightest by the darkest for the ratio
  return (ybg > yfg) ? Math.floor(ybg/yfg) : Math.floor(yfg/ybg);
};
```

.

> _In WCAG 2.x we see the same general structure, but the individual steps are
more complicated:_

> [!TIP]
> ### No, in WCAG 2 the return is a ratio, not a difference. The naive approach xi presented earlier used a difference.

.

> _Colors on the web are defined in the [sRGB color space]. The first part of this
formula is the official formula to convert a sRGB color to luminance. Luminance
is a measure for the amount of light emitted from the screen. Doubling sRGB
values (e.g. from `#444` to `#888`) does not actually double the physical
amount of light, so the first step is a non-linear "gamma decoding". Then the
red, green, and blue channels are weighted to sum to the final luminance. The
weights result from different sensitivities in the human eye: Yellow light has
a much bigger response than the same amount of blue light._

The weights here are derived from the CIE 1931 2° standard observer. While the CIE 1931 2° standard observer is the cornerstone of most colorimetry, it is also known that it is deficient in some ways. Also, it is useful to point out that the piecewise sRGB math was created in the 1990s for the purpose of processing on the computer technology of the time, but even then, and in the standard, the transfer curve for the physical monitor is a little different, being specified as a pure gamma curve of $`\gamma = 2.2`$, and relating to CRT monitors with a limited output of 80&nbsp;nits. Today, monitors are commonly much brighter, and brighter monitors tend to be adjusted to a higher gamma for the same perceptual effect, in the same given environment.

At any rate, the expected luminance will vary, but is still not the perceptual _lightness_, which is different from the emitted luminance, and related to a number of contextual factors.

### Again:

**Luminance** is a _physical measure_ of light in the real world, but it is not perceptual lightness.

**Perceptual Lightness** is a _model_ of how human vision perceives luminance, given certain contexts. It is not a 1:1 relationship to luminance.

Throughout this analysis, xi seems to conflate the two, and makes some logical leaps that are therefore unsupported.



> _Next the [Weber contrast] of those two luminances is calculated. Weber contrast
has been called the ["gold standard" for text contrast]. It is usually defined
as `(yfg - ybg) / ybg` which is the same as `yfg / ybg - 1`. In this case, 0.05
is added to both values to account for ambient light._

Weber is nothing more than a log of the stimulus to a reference. While it is true that at the very beginning of the early research into perceptual contrast, APCA research lead _once_ referred to Weber as the "gold standard for contrast of text", but to clarify, that applied specifically and only to dark text on a light background, and at or near the _threshold_ JND. Weber becomes increasingly invalid as there is departure from those parameters. It should be mentioned that Weber is roughly 180 years old. In the 1960s, Stevens pointed out how Weber was flawed, and presented the power curve solution. More recently, Poynton pointed out that perception curves were more of a hybrid between log and power curves.

This cherry picking of the APCA research lead's very early public research, notes, and comments to make this point is annoying to say the least, but I suppose that is a consequence of performing research out in the open. It is this kind of trolling that's pushing researchers into private labs.

> [!TIP]
> Where Weber has some utility in terms of research for the purposes of certain comparisons, It is not useful for design guidance in today's world of graphically rich web content, especially with the need for dynamic changes.

.

> _The shift by 1 is removed
because it has no impact on the results (as long as the thresholds are adapted
accordingly)._

The problem here is that it results in incongruent results compared to other methods, and therefore increases confusion in what is already a difficult subject matter. Put another way, "will the real contrast math please stand up?" If 3:1 means something different in half a dozen different standards, then the entirety of the discussion become murky and obfuscated. 3:1 in WCAG 2 is different that 3:1 in some other standards, for instance, yet 3:1 in those standards are referenced as cites by WCAG 2 — see the problem? 

And not to belabor the point but an eminent vision scientist, who originally suggested 7:1 back in 2005, but who was not involved in the choice of 4.5:1/3:1, wrote an [interesting article](https://jov.arvojournals.org/article.aspx?articleid=2628138) pointing out the **lack of empirical evidence** in these standards, even for 3:1. The article is quite illuminating.

.

> _Finally, the polarity is removed so that the formula has the same results when
the two colors are switched._
> _All in all this is a pretty solid contrast formula (at least from a theoretical
perspective), as it just reuses parts from well established standards._

False statement.

The only part of the above that counts as the "contrast formula" is the `(ybg + 0.05) / (yfg + 0.05)` which was **not** a part of any other standard *anywhere*, as it was created specifically as a proposal for WCAG 2, and even then, it was created only for supporting the 7:1 ratio. ***Only.*** So claiming it was somehow **founded in "well established standards" is patently false**. The shift to 4.5:1 and 3:1 did not involve the individual that created it for 7:1.

Also, the original, which still exists in WCAG 2.0 is also not using the correct math for the conversion to luminance (this was only recently corrected for WCAG 2.2), though this is a minor issue, it points to the lack of due diligence in developing the original WCAG 2 contrast math.

> [!CAUTION]
> ### 1.4.3 was not tested and not peer reviewed, not based on empirical evidence, and was even objected to by IBM back in 2007. It is still objected to, and should never be codified into law.

.

> ### _APCA_
> 
> ```js
> function sRGBtoY(srgb) {
>   var r = Math.pow(srgb[0] / 255, 2.4);
>   var g = Math.pow(srgb[1] / 255, 2.4);
>   var b = Math.pow(srgb[2] / 255, 2.4);
>   var y = 0.2126729 * r + 0.7151522 * g + 0.0721750 * b;
> 
>   if (y < 0.022) {
>     y += Math.pow(0.022 - y, 1.414);
>   }
>   return y;
> }
> 
> function contrast(fg, bg) {
>   var yfg = sRGBtoY(fg);
>   var ybg = sRGBtoY(bg);
>   var c = 1.14;
> 
>   if (ybg > yfg) {
>     c *= Math.pow(ybg, 0.56) - Math.pow(yfg, 0.57);
>   } else {
>     c *= Math.pow(ybg, 0.65) - Math.pow(yfg, 0.62);
>   }
> 
>   if (Math.abs(c) < 0.1) {
>     return 0;
>   } else if (c > 0) {
>     c -= 0.027;
>   } else {
>     c += 0.027;
>   }
> 
>   return c * 100;
> };
> ```
>
> _Again we can see the same structure: We first convert colors to lightness, then
calculate the difference between them._

> [!IMPORTANT]
> ### Actually *NO*.

First we convert to _"estimated screen luminance"_ a physical measure of light, essentially luminance but *not* perceptual lightness. And APCA's conversion to estimated screen luminance is a little different and includes additional pre-shaping and shifting of hue weighting.

Then we pre-shape low luminances with a soft clip at black which emulates flare components (in a way similar to DICOM). **_Only THEN_** are the inputs converted to _lightnesses_, and done so using independent exponents which are dependent on polarity, as the exponents define CONTEXT SENSITIVE PERCEPTUAL LIGHTNESS OF TEXT.

So, this is a multi-stage process, first colors to physical light measure (luminance), and pre-shaping, _then_ converting to context sensitive lightness, then finding the difference. 


> _However, in order to be able to compare
APCA to WCAG 2.x, I will make some modifications:_

> [!CAUTION]
> ### The modifications made are not approved, and are a violation of the APCA license.

.

> -   _The final steps do some scaling and shifting that only serves to get nice
    threshold values. Just like the shift by 1 in the WCAG formula, this can
    simply be ignored._

The scale/offset adjust is part of perceptual uniformity. xi can't discard it just because he doesn't understand it. No, it can not be ignored. The bastardized math that xi presents here is **not a valid version of APCA**. It is corrupted and distorted in order to play into xi's narrative.

.

> -   _I will also ignore the `< 0.1` condition because it only affects contrasts
    that are too low to be interesting anyway._

The output clamp *or* one of the low-end extensions is required, especially if you are going to make tests using random generated colors. **This clamp cannot be ignored**. It is this kind of manipulation that caused the APCA restrictive license during the beta period.


.

> -   _The contrast is calculated as a difference, not as a ratio as in WCAG. I
    will look at the `exp()` of that difference. Since
    `exp(a - b) == exp(a) / exp(b)`, this allows us to convert the APCA formula
    from a difference to a ratio. Again I user the same trick: Since `exp()` is
    monotonous, it does not change the results other than moving the
    thresholds._

xi is not adjusting thresholds in a way the presents an apples to apples comparison, and this is part of the most significant flaw in the approach.

But also, the claim that it is monotonic is wrong. Lc 45 through Lc 90 moves in increments of 15. But using Math.exp() this changes with every level. And this is not even adding in the other corruption that xi introduced with the other unapproved changes made. This removes the perceptual uniformity and this does not provide a valid comparison to WCAG2, and the purpose here is not at all clear.

The fact that a correct implementation of APCA spans a range from -108 to +106 is by definition not-monotonic. xi is again working to confuse people with unsupported claims by making assertions that sound authoritative yet are literal nonsense.


### Take a look:

```js
console.log('lc45 - ' + Math.exp(0.45));
console.log('lc60 - ' + Math.exp(0.6));
console.log('lc75 - ' + Math.exp(0.75));
console.log('lc90 - ' + Math.exp(0.9));

console.log('\ncompare to WCAG2 A');
console.log('3 / lc45 - ' + 3 / Math.exp(0.45));
console.log('4.5 / lc60 - ' + 4.5 / Math.exp(0.6));
console.log('7 / lc75 - ' + 7 / Math.exp(0.75));

console.log('\ncompare to WCAG2 B');
console.log('3 / lc60 - ' + 3 / Math.exp(0.6));
console.log('4.5 / lc75 - ' + 4.5 / Math.exp(0.75));
console.log('7 / lc90 - ' + 7 / Math.exp(0.9));

OUTPUT

// exp(Lc) 
> "lc45 - 1.568312185490169"
> "lc60 - 1.8221188003905089"
> "lc75 - 2.117000016612675"
> "lc90 - 2.45960311115695"

// compare to WCAG2 A 
> "3 / lc45 - 1.9128844548653197"
> "4.5 / lc60 - 2.469652362423119"
> "7 / lc75 - 3.3065658691871027"

// compare to WCAG2 B 
> "3 / lc60 - 1.6464349082820793"
> "4.5 / lc75 - 2.125649487334566"
> "7 / lc90 - 2.8459876181841937"

```
In the first section, the distance between levels in non-linearized, removing the perceptual uniformity.

Then in the comparisons to WCAG 2, the relationship is completely broken and not at all aligned as it should be. You don't need to be a math major to see that the de-linearization being done here incorrectly skews any comparative result.

If we try and scale that, using a factor of about 2.47, to try and align WCAG 2 with APCA, we get:

```js

console.log('lc45 - ' + Math.exp(0.45) * 2.47);
console.log('lc60 - ' + Math.exp(0.6) * 2.47);
console.log('lc75 - ' + Math.exp(0.75) * 2.47);
console.log('lc90 - ' + Math.exp(0.9) * 2.47);

console.log('\ncompare to WCAG2 A');
console.log('3 / lc45 - ' + 3 / (Math.exp(0.45) * 2.47));
console.log('4.5 / lc60 - ' + 4.5 / (Math.exp(0.6) * 2.47));
console.log('7 / lc75 - ' + 7 / (Math.exp(0.75) * 2.47));

console.log('\ncompare to WCAG2 B');
console.log('3 / lc60 - ' + 3 / (Math.exp(0.6) * 2.47));
console.log('4.5 / lc75 - ' + 4.5 / (Math.exp(0.75) * 2.47));
console.log('7 / lc90 - ' + 7 / (Math.exp(0.9) * 2.47));


> "lc45 - 3.8737310981607176"
> "lc60 - 4.5006334369645575"
> "lc75 - 5.228990041033307"
> "lc90 - 6.075219684557666"
> "
compare to WCAG2 A"
> "3 / lc45 - 0.7744471477187529"
> "4.5 / lc60 - 0.9998592560417485"
> "7 / lc75 - 1.338690635298422"
> "
compare to WCAG2 B"
> "3 / lc60 - 0.6665728373611657"
> "4.5 / lc75 - 0.8605868369775571"
> "7 / lc90 - 1.15222170776688"

```

And the conclusion is that using exp() is not a valid way to compare here, no matter how you slice it. Again, the motivation or purpose of xi is unknown. The fact is, it would be easier to just invert the WCAG2 ratio as a way to compare.


> _With those changes. All other differences between APCA and WCAG 2.x can be
pushed into `sRGBtoY()`:_

The changes are notwithstanding, but yes the sRGBtoY can be mod like this *EXCEPT* it is *NOT* permissible to use Math.exp() as is shown. 

```js
function sRGBtoY_modified(srgb, exponent) {
  var r = Math.pow(srgb[0] / 255, 2.4);
  var g = Math.pow(srgb[1] / 255, 2.4);
  var b = Math.pow(srgb[2] / 255, 2.4);
  var y = 0.2126729 * r + 0.7151522 * g + 0.0721750 * b;

  if (y < 0.022) {
    y += Math.pow(0.022 - y, 1.414);
  }
  return Math.exp(Math.pow(y, exponent));
}
```


> _An interesting feature of APCA is that it uses four different exponents for
light foreground (0.62), dark foreground (0.57), light background (0.56), and
dark background (0.65). `sRGBtoY\_modified()` takes that exponent as a second
parameter._
>
> _Now that we have aligned the two formulas, what are the actual differences?_

> [!CAUTION]
> The claim that the two formula are "aligned" is patently false. There is an alignment, and it is well documented in the APCA documentation and white paper, though that is not being used here. In fact, there was discussion with xi at the main repo, where the documentation was specifically pointed out to him, yet it seems he has read none of it in creating this comparison.

.

> _This conversion again uses sRGB coefficients. However, the non-linear part is
very different. The author of APCA provides some motivation for these changes
in the article [Regarding APCA Exponents]. The main argument seems to be that
this more closely models real-world computer screens._

The real difference is a small shift in the linearization exponent from the "effective 2.2" of WCAG2 to 2.4, and the combining of the flare/black adjustment into the soft-clamp in a manner that is similar to DICOM.

.

> _To get a better feeling for how these formulas compare, I plotted the results
of `sRGBtoY()`. In order to reduce colors to a single dimension, I used gray
`[x, x, x]`, red `[x, 0, 0]`, green `[0, x, 0]` and blue `[0, 0, x]` values._
>
> _I also normalized the values so they are in the same range as WCAG 2.x. I used
factors (because they do not change the contrast ratio) and powers (because
they are monotonous on the contrast ratio)._

No, and for the same reasons this is an incorrect approach as defined above.

But to add, this analysis is mixing up light (luminance) vs lightness, and making spurious comparisons.
WCAG 2 does not use perceptual lightness at all. Period. It uses a ratio of luminances.

APCA uses the difference of perceptual lightnesses that have been adjusted for certain contextual considerations. The gap in understanding here seems huge—or are these just intentional misstatements to trigger this author and confuse the public? 


```js
var average_exponent = 0.6;
var y0 = Math.exp(Math.pow(0.022, 1.414 * average_exponent));
var y1 = Math.exp(1);

function normalize(y) {
  // scale the lower end to 1
  y /= y0;

  // scale the upper end to 21
  // we use a power so the lower end stays at 1
  y = Math.pow(y, Math.log(21) / Math.log(y1 / y0));

  // scale down to the desired range
  return y / 20;
}
```

xi's method of normalizing corrupts and distorts the result, to the point it's not at all useful.

![sRGBtoY comparison](plots/sRGBtoY_comparison.png)

.

> _The four curves for APCA are very similar._

The curves are very clearly _NOT AT ALL_ similar. This is a bizarre statement, and is plain to see. But also, let's not forget that xi altered the shapes of APCA with the distortions discussed above.

.

> _Despite the very different formula, the WCAG 2.x curve also has a similar shape._

Notwithstanding comment. It is prima facie evidence that these curves are significantly different!! To say otherwise is some form of cognitive dissonance, or malicious motivation. They are curves, but they are so clearly different, that bizarre statements to the contrary have me questioning the motives herein.


.

> _I added a modified WCAG 2.x curve
with an ambient light value of 0.4 instead of 0.05. This one is very similar
to the APCA curves. The second column shows the differences between the APCA
curves and this modified WCAG 2.x. 0.4 was just a guess, there might be even
better values._

> [!NOTE]
> There is no justification for the adding of 0.4: it is not supported by any physical measure, it is not supported by any science. 

The 0.4 is nothing more than a gross and incomplete reverse engineering in a vain attempt to match part of the APCA curves. It is irrelevant, and as used here is clearly an attempt to mislead. It absolutely should NOT be used in this area of analysis whatsoever. If it is to be explored, it needs be explored _SEPARATELY_ and not claimed to be WCAG2 because it is _NOT_. 

This is a conflation of factors, not well described, and presented in a manner that serves only to confuse and obfuscate the facts. This more than anything renders this analysis biased and corrupt, and is eidence of a clear intent to create confusion.

.

> _I also wanted to see how the contrast results compare. I took a random sample
of color pairs and computed the normalized APCA contrast, WCAG 2.x contrast
(without removing the polarity) and the modified WCAG contrast with an ambient
light value of 0.4._

0.4 is not an "ambient light value" - what that would mean is that **40% of the ambient light** in the room was **reflecting off the display** face. If this were the case, a user would be unable to see what was on the display. This again underscores a misunderstanding of the science here. All the 0.4 is is a brute force manipulation of the WCAG2 math, but it does not fix the problem, and is unsupportable by any actual facts.

![contrast comparison](plots/contrast_comparison.png)

.

> _In the top row we see two scatter plots that compare APCA to both WCAG
variants. As we can see, they correlate in both cases, but the modified WCAG
2.x contrast is much closer._

These scatter plots are non-sensical and illustrate nothing cogent. And then the maths appear to be weighted to minimize the actual differences. Importantly, xi used log scales to hide the differences. xi created several versions of these charts, none of them being instructive nor salient.

.

> _In the bottom row we see two more scatter plots. This time the X axis
corresponds to foreground luminance and the Y axis corresponds to background
luminance. The color of the dots indicated the differences between the
respective formulas, calculated as `log(apca / wcag)`. As we can see, the
biggest differences between APCA and WCAG 2.x are in areas where one color is
extremely light or extremely dark. For light colors, APCA predicts an even
higher contrast (difference is in the same direction as contrast polarity). For
dark colors, APCA predicts a lower contrast (difference is inverse to contrast
polarity)._

Again, these scatter plots serve only to confuse, and not to illuminate. They are meaningless in what they are presenting. What are they supposed to mean? They are not well described. In the 1980s, there was an infamous saying "if you can't dazzle them with brilliance, baffle them with BS". What is going on here is not brilliance but something else.


### A mathematically accurate comparison of WCAG 2 and APCA [can be seen here](https://github.com/Myndex/SAPC-APCA/discussions/30#discussioncomment-1904967).

Here are two, click for larger. Light blue are colors WCAG passes but APCA rejects. Purple are colors that pass both, magenta is colors that pass APCA, but not WCAG2:

<img width="240" alt="W451backgroundLc60 WCAG 2 and APCA comparison chart" src="https://user-images.githubusercontent.com/42009457/148043153-4bb1e13c-0dbc-455f-aadf-7a722924c993.jpg"><img width="240" alt="W451backgroundLc75 WCAG 2 and APCA comparison chart" src="https://user-images.githubusercontent.com/42009457/148043156-6550aec5-02c0-42f4-8af4-2512752c89de.jpg">


.

> _To sum up, the APCA contrast formula is certainly not as obvious a choice as
the one from WCAG 2.x._

I don't know what that means. 47% of the colors WCAG 2 result in inaccessible, unreadable content. This makes WCAG2 contrast a terrible choice for any guidelines, and ununable for automated context such as future CSS color-contrast() function.

.

> _I was not able to find much information on how it was
derived._

There are multiple white papers and extensive documentation regarding how APCA was developed and the peer reviewed scientific consensus of CAMs and vision science upon which APCA rests. Again, the place to start is [git.myndex.com](https://git.myndex.com) It is clear that xi has not actually read the documentation, and this opinion is based on my other interactions with him, such as when he was claiming he "could not find the math" when it is literally the FIRST document in the documentation folder at the repo, and also listed in all of the white papers, and in multiple readme and documentation files.


.

> _A closer analysis reveals that it is actually not that different from
WCAG 2.x, but assumes much more ambient light. More research is needed to
determine if this higher ambient light value is significant or just an
artifact of the conversion I did._

This is again a spurious statement coming from a layperson making no effect to understand the materials. None of these assertions have any relevance to ambient light. And the _"not that different"_ statement is not borne out by the actual analysis that demonstrates that WCAG2 **_incorrectly_** passes 47% of random color pairs, and **_incorrectly_** rejects 22% to 60% of random color pairs.

And this is not even delving into use cases and the extended APCA guidelines, which xi has ignored for the entirety of this analysis.

.

> _As we have seen, using a polarity-aware difference instead of a ratio is not a
significant change in terms of results. However, in terms of developer
ergonomics, I personally feel like it is easier to work with. So I would be
happy if this idea sticks._

Polarity awareness adds approximately 15% in accuracy, and is important for dark mode to facilitate a maximum contrast value to prevent halation. 

Outside of polarity, APCA results are significantly different, as already discussed and demonstrated.

.

> ### _Spatial frequency_
> _Smaller text is generally harder to read than bigger text._ 

Logical fallacy or translation error? Using undefined adjectives. In short, no, text is easiest to read within the range of 0.2° to 2.0° of visual angle (Legge et alia). This is well established science.

.

> _In a more general sense, we can speak about the spatial frequency of **features**. This is usually measured in cycles per degree (cpd), since the visual field is measured as an angle._

> [!NOTE]
> We speak of the spatial frequency of stimuli. The size of the retinal image is defined as visual angle. The capital E of the 20/20 line on an eye chart is 2.5 cycles vertically (5 arc minutes of visual angle).

.

> _If content is easy to read because of its spacial frequency, I do not need as much color contrast. On the other hand, if the spatial frequency is bad, more color contrast is needed._

Spatial frequency is not "good or bad" it is high or low, and the question then is what is the appropriate spatial frequency for best fluent readability for a given acuity. Associated with this, is the screen resolution and the effects of antialiasing at a given resolution.

.

> _There is one caveat though: The spatial frequency only defines the contrast threshold under which a pattern is not perceivable at all. Above that it has barely any effect. So we the best way to use it is to define a minimum required color contrast based on spatial frequency._

### _GENERALLY FALSE_
It is true that the CS curve is based on the JND threshold, but it is absolutely false that all of the supra-threshold is in contrast constancy, and that is a misreading or misunderstanding of the literature.

The contrast constancy effect _IS ALSO a product of spatial frequency_, and it is also far supra-threshold. That is, there is a range from JND to the constancy level that is NOT subject to the constancy effect. And that is particularly wider at higher spatial frequencies. This is academic and ample more recent studies define it more completely. [A](https://pubmed.ncbi.nlm.nih.gov/25026464/) [B](https://pubmed.ncbi.nlm.nih.gov/8828197/). And for the record the typical critical size for fluent body text is about 12cpd.

And we can set that aside, as we have the seminal research of Lovie-Kitchin et alia to guide us on critical thresholds for size and contrast—seminal research that was ignored in WCAG 2,** despite being available for over a decade when WCAG 2 contrast was being developed.**

.

> _Interestingly, a lower spatial frequency is not always easier to read though. Studies have shown that the optimal spatial frequency is at about 5-7 cycles per degree. Below that, features get slightly harder to detect. (Perhaps that is the reasons for the "you don't see the forest among the trees" phenomenon.)_

You are conflating different bits of data, including non-relevant aspects of the CS curve. Again see Legge et alia. Moreover, getting cites from Wikipedia, without checking the actually literature, is bad practice. Your statement here is incorrect. Peak sensitivity is spatial frequencies of 2-5 cpd, and sensitivity falls off very rapidly above that. 20/20 vision needs letters to be about 18-30&nbsp;cpd for minimum recognition. Legge et alia show that the range of 0.2° and 2.0° of visual angle is the best readability. All of this is academic.

The CS curve is created using sinusoidal gratings. However, text has a "sharp edge" therefore large bold text is a combination of _both_ low and high spatial frequencies (see signal theory and square waves).

> [!NOTE]
> PEAK contrast sensitivity is approx. 2 to 5 cycles per degree. A basic latin letterform can be defined as ~2.5 cycles total vertically. The size of the letterform then indicates how many cycles exist per degree of visual angle. at 0.2° or (12 arc minutes) this implies a lower bound of 25 cpd, or an x-height of 12 arc minutes or 9.4px, which translates to a minimum font size of 18px (for a 0.52 ratio x height, such as Helvetica or Arial). 

> [!IMPORTANT]
> ### The scientific consensus on "best readability" is text where letterforms subtend between 0.2° and 2.0° of visual angle. (Lovie-Kitchen, Whittacker, Bailey, Legge et alia).

.

> _It is not obvious how to define spatial frequency in the context of the web._ 

Except that **_it is obviously defined_** in CSS with the CSS reference `px` which is further defined as 1.278 arc minutes of visual angle.

.

> _For text, font size and weight certainly play a role. But different fonts have wildly different interpretations of these values._

### Which is why APCA guidelines are based on a _REFERENCE FONT_.

.

> _Since fonts depend on user preference, we cannot know beforehand which fonts will be used._

This is a bizarre statement, and incorrect. Fonts do not "depend on user preference" they are defined in the CSS, therefore the content author definitely knows before hand what font(s) they are choosing.

.

> _We also don't know the size of device pixels or how far the user is from the screen._

As for device pixels, we don't need to know that, that is up to the manufacturer, but we do have the _**GUIDE to that relationship**_, including how close the device is used, and that is the CSS reference px, as stated above. And further we have media queries that specifically do enable the author control for different resolutions.

### See this chart:

<img width="640" alt="Screen PPI to Distance chart" src="https://user-images.githubusercontent.com/42009457/184546653-560f6d02-56c8-4d39-a920-7ccbbdb4e31c.png">

.

> _So how do WCAG 2.x and APCA tackle this topic?_

WCAG 2 ignores it, though there is a single breakpoint at 24px, which happens to be about the point where antialiasing effects come into play. It is not really relevant to spatial frequency, as it goes on to say 18.7px for Bold, which is a much lower spatial frequency. I.e. the SF are not aligned in WCAG 2, and claims to the contrary are simply revisionist.

APCA guidelines for matching to the reference font [**are here**](https://readtech.org/ARC/tests/visual-readability-contrast/?tn=methods#size-weight).

.

> ### _WCAG 2.x_
>
> _WCAG 2.x makes the distinction between regular and [large text]. Large text is
defined as anything above 18 point or 14 point bold. The definition comes with
a lot of notes that explain the limits of that approach though, e.g. that some
fonts are extremely thin._

A lot of notes... that are non-normative in nature, so not actionable as far as regulations go.

Also, the use of 18 & 14 point is weird when px is the canonical reference unit for web content, and has been since the earliest days. The use of pt in the SC has caused a lot of confusion, with people using 18px and 14px, when in fact it should be 24px and 18.7px if one were to actually follow WCAG 2 (which the vast majority of sites do not).


.

> _WCAG 2.x also comes with some rules that allow users to adapt spatial frequency
to their needs: [1.4.4] requires that users can resize the text, [1.4.10]
requires that they can zoom the whole page, and [1.4.12] requires that they can
adjust text spacing._

Yes, user adjustment of size is the most important way to accommodate acuity.


.

> _So WCAG 2.x doesn't really attempt to model spatial frequency for web content.
It elegantly works around the issue by handing control over to the users who
have all the facts._

You are missing the point. APCA guidelines also specify that users must have zoom control and to a substantially greater degree than that defined by WCAG 2. APCA's zoom guidelines are based on the use need for ultimate font size, not an abstract percentage such as WCAG 2, which further at 200% is inadaquate. But also, this is an area of missing technology. The user need here is not related to something the author can do, it relates to missing technologies for user customization.

### _MISSING THE POINT_
But again that is not at all the point. The _POINT_ is that **SPATIAL FREQUENCY is the primary driver of CONTRAST**, so a contrast metric like WCAG 2 that ignores spatial frequency and focuses only on a simple pair of colors is functionally ignoring the biggest driver of contrast.


.

> ### _APCA_
>
> _Conversely, APCA [does attempt to model spatial frequency]:_
>
> 1.  _If the font has an x-height ratio of less than 0.52, increase the size by a
    factor of `0.52 / xHeightRatio`._
> 2.  _Experimentally find a weight offset so the font has a similar weight to
    Arial or Helvetica._
> 3.  _Consider additional font features and adapt the values accordingly._
> 4.  _Use the lookup table provided at the link above to find a minimum contrast
    for the given combination of size and weight._

This actually depends on the conformance level.

The base level, BRONZE, conformance is more relaxed to be similar to WCAG 2, nevertheless those 6 levels still have font size and weight minimums.

The requirement for the lookup table and "font alignment" to a reference font x-height is intended for Silver and Gold levels.

The requirement for "font alignment" to a reference font _weight_ is intended for the Gold level.

.

> _WCAG 3 is still an early draft and does not yet contain many guidelines. I
assume that guidelines similar to 1.4.4, 1.4.10, and 1.4.12 will again be
included. So the strategy of giving users control over spatial frequency will
still work._

There is more in the [pending pull requests](https://github.com/w3c/silver/pull/630) for WCAG 3.

Users should not be blocked from adjusting to their needs. But also, guidelines needs to be in touch with reality, and in this case that means using metrics that make sense. Many of the metrics listed in WCAG 2 are not at all consistent due to the complete lack of standardization among font families.

.

> _With the more sophisticated link between spatial frequency and color contrast,
user intervention might be less relevant though. However, the model described
above is complicated and leaves a lot of wiggle room, especially in steps 2 and
3._

There is "wiggle room" in terms of contrast in the first place, as it is a sliding scale relative to levels from spot reading, sub fluent, fluent and best fluent readability. It is not a binary choice, and attempting to make it binary is a flawed point of view. Lovie-Kitchin et alia did the groudbreakign work here in the 1990s.


.

> ## _Non-text contrast_
>
> _So far we have mainly looked at text. But other parts of a website also need to
be distinguishable. The concept of spatial frequency was explicitly picked
because it can cover those cases. What do WCAG 2.x and APCA have to say about
this?_

Non-text contrast has long been a part of APCA. It is discussed in [more detail here](https://github.com/Myndex/SAPC-APCA/discussions/39).


.

> ### _WCAG 2.x_
>
> _[1.4.11] is specifically about this issue. It basically says that all non-text
content that is not inactive, decorative, or controlled by the browser must
meet contrast requirements. Spatial frequency is not considered in this case.
It is also not always clear which parts of the UI are decorative and which are
actually relevant._

> [!NOTE]
> And 1.4.11 is one of the most incorrect SCs of WCAG 2, and is citing self-referential and unsupportable documentation. Importantly, it fully disregards spatial characteristics in an SC where spatial frequency should be of key importance.


.

> ### _APCA_
>
> _As of today, APCA focusses mostly on text. Its sophisticated approach to
spatial frequency has a lot of potential for non-text content. I could not yet
find any discussion of that though._

Non-text contrast has long been a part of APCA. It is discussed in [more detail here](https://github.com/Myndex/SAPC-APCA/discussions/39) and in [this more recent post](https://github.com/Myndex/SAPC-APCA/discussions/117#discussioncomment-9244796).


.

> ## _Thresholds_
>
> ### _WCAG 2.x_
>
> _WCAG 2.x defines 3 thresholds: 3, 4.5, and 7._
>
> -   _non-text content must have a contrast of at least 3_
> -   _large text must have a contrast of at least 3 (AA) or 4.5 (AAA)_
> -   _other text must have a contrast of at least 4.5 (AA) or 7 (AAA)_
> -   _logos and inactive or decorative elements are exempted_
>
> _How these values were derived is not completely clear:_
>
> There was some user testing associated with the validation of the 2.0
> formula. I could not quickly find a cite for that. My recollection is that
> the hard data pointed to a ratio of 4.65:1 as a defensible break point. The
> working group was close to rounding that up to 5:1, just to have round
> numbers. I successfully lobbied for 4.5:1 mostly because (1) the empirical
> data was not overwhelmingly compelling, and (2) 4.5:1 allowed the option for
> white and black (simultaneously) on a middle gray.\
> -- <https://github.com/w3c/wcag/issues/695#issuecomment-484187617>
>
> [!NOTE]
> I discuss some of the fallacies involved in the development of WCAG 2 contrast [**in this thread**](https://github.com/w3c/wcag/issues/1705#issuecomment-1027058976).
>
> ### _APCA_
>
> _APCA defines 6 thresholds: 15, 30, 45, 60, 75, 90._

The thresholds are only for the lowest, bronze level conformance, and as a "general guideline". APCA employs continuous sliding scales for greater accuracy and improved flexibility. Silver and Gold levels are more specific to the spatial characteristics. Again, Bronze is intended as an easy transition from WCAG2 to APC-RC.

That is, the threshold can be used as a rough guideline, but an automated design systems can employ a fully interpolated sliding scale for determining optimum values, and enjoy better flexibility.

.

> _The required threshold depends on the spatial frequency (see above). 45, 60,
and 75 loosely correspond to 3, 4.5, and 7 in WCAG 2.x._

The thresholds depend on a combination of spatial frequency and use cases, as discussed in the [documentation](https://linktr.ee/Myndex/), which would be useful to read before conducting an "analysis".

.

> _Again I generated random color pairs and used them to compare APCA to WCAG 2.x:_

Because invalid math is used, xi's faux analysis are archived. [A correct comparison can be seen here](https://github.com/Myndex/SAPC-APCA/discussions/30#discussioncomment-1904967) 


.

> ## _Conclusion_
>
> _In this analysis I took a deeper look at the Accessible Perceptual Contrast
Algorithm (APCA), a new algorithm to predict visual contrast. I compared it to
an existing algorithm that has been part of WCAG 2.x, the current standard for
accessibility testing for the web._

Again, a not well developed comparison.

.

> _Though still in early development, APCA already makes two major contributions:_
> - _a different color contrast formula that assume much more ambient light_

*FALSE*. And these spurious statements are what makes this issue frustrating. Ambient light is not the operant difference by any stretch of the imagination. Such statements underline the lack of understanding of the subject matter. The ACTUAL contribution is perceptual uniformity, which is REQUIRED for the advancement of automated color technologies.

> - _a more sophisticated link between spatial frequency and minimum color
>    contrast that allows for more nuanced thresholds_
>
> _It is hard to evaluate APCA from a purely theoretical standpoint._

It is trivial to evaluate because APCA uses simple math, the efficacy of perceptual uniformity is prima facia evidence, and as a practical reality, it's not bogged down in abstract theoretical.

.

> _Instead, thorough empirical validation is required. This has not yet started and will be
a considerable effort. See \<Cluster B thread deleted\>._

> [!IMPORTANT]
> First, the entire basis for APCA is rooted in empirical data, and these claims are false, misleading, and notwithstanding. Here is a link to a listing of [peer review and third party evaluations of APCA](https://git.apcacontrast.com/documentation/independent-review).

> [!WARNING]
> Second, xi's continued linking to certain threads that feature trolling and personal harassment of the author of this rebuttal, implies his true motivations are other than claimed. At the very least, xi has implied by association some connection to the small group of obstructionists to the process, and we are aware of the obstructionists using xi's corrupted faux analysis toward their malicious goals. This has not gone unnoticed.


[Web Content Accessibility Guidelines]: https://www.w3.org/TR/WCAG21/
[sRGB color space]: https://en.wikipedia.org/wiki/SRGB
[Weber contrast]: https://en.wikipedia.org/wiki/Weber_contrast
["gold standard" for text contrast]: https://github.com/w3c/wcag/issues/695#issuecomment-483805436
[Regarding APCA Exponents]: https://git.apcacontrast.com/documentation/regardingexponents
[Studies have shown]: https://en.wikipedia.org/wiki/Contrast_(vision)#Contrast_sensitivity_and_visual_acuity
[large text]: https://www.w3.org/TR/WCAG21/#dfn-large-scale
[1.4.4]: https://www.w3.org/TR/WCAG21/#resize-text
[1.4.10]: https://www.w3.org/TR/WCAG21/#reflow
[1.4.12]: https://www.w3.org/TR/WCAG21/#text-spacing
[does attempt to model spatial frequency]: https://git.apcacontrast.com/documentation/WhyAPCA
[1.4.11]: https://www.w3.org/TR/WCAG21/#non-text-contrast
