import * as wcag from '../wcag2.js';
import * as apca from '../apca.js';

const LEVEL_LABELS = ['REJECT', 'AA-L', 'AA', 'AAA', 'AAA'];
const FONT_SIZE = ['32px', '24px', '18.7px', '16px', '12px'];
const PADDING = ['0.1em 0.25em', '0.33em', '0.8em', '1em', '1.3em'];
const APCA_LABELS = [ //[0, 15,     22,      30,     37.5,     45,     52.5,    60,      67.5,    75,     82.5,     90,  110];
		['REJECT','NO-TXT','NO-TXT','SPOT','SUBFLT','FLUENT','FLUENT','FLUENT','FLUENT','FLUENT','TOO-HI','TOO-HI'], // 32px
		['REJECT','REJECT','NO-TXT','SPOT','SPOT','SUBFLT','FLUENT','BODYMN','BODYMN','BODYTX','BODYTX','TOO-HI'], // 24px
		['REJECT','REJECT','REJECT','SPOT','SPOT','SUBFLT','SUBFLT','FLUENT','FLUENT','BODYMN','BODYTX','BODYTX'], // 18.7px
		['REJECT','REJECT','REJECT','NONTXT','SPOT','SPOT','SPOT','FLUENT','FLUENT','BODYMN','BODYTX','BODYTX'], // 16px
		['REJECT','REJECT','REJECT','NONTXT','NONTXT','SPOT','SPOT','SPOT','SPOT','SUBFLT','SUBFLT','SUBFLT'], // 12px
	];

// [0,15,22,30,37.5,45,52.5,60,67.5,75,82.5,90,110];

const APCA_OFFSET = [0,1,2,3,4];



// APCA = [0,15,30, 37.5, 45, 52.5, 60, 67.5, 75, 82.5, 90, 110];
// '32px', '24px', '18.7px', '16px', '14px' 

const COLORS = [
	['#444444', '#000000', '#fefefe'],
	['#666666', '#000000', '#fefefe'],
	['#888888', '#000000', '#fefefe'],
	['#aaaaaa', '#000000', '#fefefe'],
	['#cccccc', '#000000', '#fefefe'],
	['#9999ff', '#000000', '#fefefe'],
	['#00bf00', '#000000', '#fefefe'],
	['#ff7373', '#000000', '#fefefe'],
	['#3333ff', '#000000', '#fefefe'],
	['#40631f', '#000000', '#fefefe'],
	['#B80000', '#000000', '#fefefe'],
	['#0f6bff', '#000000', '#fefefe'],
	['#008a00', '#000000', '#fefefe'],
	['#e62200', '#000000', '#fefefe'],
	['#11bbff', '#220044', '#440022'],
	['#ca9641', '#1246ab', '#ba6521'],
	['#153856', '#abcfed', '#897d69'],
	['#9322ad', '#fedcba', '#123456'],
	['#11bbff', '#4400aa', '#aa0044'],
];

var parseColor = function(c) {
	return [
		parseInt(c.substr(1, 2), 16),
		parseInt(c.substr(3, 2), 16),
		parseInt(c.substr(5, 2), 16),
	];
};

var getLevel = function(c, module) {
	var a = Math.abs(c);
	for (let i = 0; i < module.arraySize; i++) {
		if (a < module.levels[i + 1]) {
			return i;
		}
	}
	return module.arraySize - 1;
};

var template = document.querySelector('template');

var addExample = function(fg, bg) {
	var cfg = parseColor(fg);
	var cbg = parseColor(bg);

	var clone = template.content.cloneNode(true);

	var wcag_contrast = wcag.contrast(cfg, cbg);
	var wcag_level = getLevel(wcag_contrast, wcag);
	var font_size = FONT_SIZE[wcag_level];
	var offset = APCA_OFFSET[wcag_level];
	var font_weight = wcag_level == 0 ? 'bold' : 'normal';
	// var textEnd = wcag_level == 0 ? '' : ' BG';

	var colorValues = clone.querySelector('.colorValues');
	var display = clone.querySelector('.display');
	var display2 = clone.querySelector('.display2');
	display.textContent = font_size + ` ${fg}`;
	display2.textContent = `on ${bg} BG`;
	colorValues.style.color = fg;
	colorValues.style.backgroundColor = bg;
	colorValues.style.fontSize = font_size;
	colorValues.style.fontWeight = font_weight;
	colorValues.style.padding = PADDING[wcag_level];

	// edited to add trunc, due to AGWG disregarding standard maths
	// xi's version using toFixed(1) is not correct per WCAG 2
	clone.querySelector('.wcag output').textContent = Math.trunc(wcag_contrast * 10) / 10;
	clone.querySelector('.wcag .badge').textContent = LEVEL_LABELS[wcag_level];
	clone.querySelector('.wcag .badge').classList.add(`badge-${LEVEL_LABELS[wcag_level]}`);

	var apca_contrast = apca.contrast(cfg, cbg);
	var apca_level = getLevel(apca_contrast, apca);
	// apca_level = Math.max(0, apca_level - offset);
	
	clone.querySelector('.apca output').textContent = apca_contrast.toFixed(1);
	clone.querySelector('.apca .badge').textContent = APCA_LABELS[wcag_level][apca_level];
	clone.querySelector('.apca .badge').classList.add(`badge-${APCA_LABELS[wcag_level][apca_level]}`);

	document.body.append(clone);
};

COLORS.forEach(([c1, c2, c3]) => {
	addExample(c1, c2);
	addExample(c2, c1);
	addExample(c1, c3);
	addExample(c3, c1);
});
