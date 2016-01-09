// Creates canvas 320 × 200 at 10, 50
var paper = Raphael(10, 50, 1366, 800);


/* WIP http://jsfiddle.net/Zevan/QK7hw/
var tip = $("#tip").hide();
var tipText = "";
var over = false;

*/

//Centre block stats. Need to rename these variables
var allRectangleHeight = 50;
var bevel = 10;
var largeRectangleLength = 600;
var smallRectangleLength = 300;

//playing with mouseover & mouse out
var animationSpeed = 500;
var hoverStyle = {
  fill: "#A8BED5"};
var style = {
  fill: "#ddd",
  stroke: "#aaa",
  "stroke-width": 1,
  "stroke-linejoin": "round",
  cursor: "pointer"
};


// X (horizontal position) ,Y (vertical position), width, height 

//fonts
var centreFont = {"font-family":"serif", "font-style":"italic", "font-size":"20"};
var borderFont = {"font-family":"serif", "font-style":"italic", "font-size":"20"};

//Border Rectangle Dimensions
var borderSideRectangleHeight = 229;
var borderSideRectangleWidth = 50; //top bar needs to be the sum of with side bar widths and the gap in between
//var borderTopBottomRectangleWidth = 350;
var borderTopBottomRectangleWidth = (660 + borderSideRectangleWidth)/2; //the 660 is the diff between the horizontal and vertical. need to add it as a clac but was playing up
var borderTopBottomRectangleHeight = 50;

//Top Bar Horizontal and Vertical Positions
var topBarHorizontalStartingPosition = 250;
var topBarVerticalPosition = 0;

//Bottom Bar Horizontal and Vertical Positions
var bottomBarHorizontalStartingPosition = 250;
var bottomBarVerticalPosition = borderTopBottomRectangleHeight + (borderSideRectangleHeight*3) ;

//Left Border Horizontal and Vertical Positions
var leftBarHorizontalPosition = 250;
var leftBarVerticalStartingPosition = borderTopBottomRectangleHeight; //merge with right bar variable 

//Right Border Horizontal and Vertical Positions
var rightBarHorizontalPosition = 910;
var rightBarVerticalStartingPosition = borderTopBottomRectangleHeight;

//Text Offset
var sideBarVerticalTextOffset = 10;
var topBarVerticalTextOffset = 25;
var topBarHorizontalTextOffset = 175;

//Text rotation in degrees
var textRotation = 90;

//Centre box offsets
var centreBoxesOffset = 5;

//Centre box horizontal and vertical positions
var fullWidthCentreBoxHorizontalPosition = leftBarHorizontalPosition + borderSideRectangleWidth + centreBoxesOffset;



var fullWidthCentreBoxVerticalPosition = 0;



//Top Bar
//Large Scale Scrum is Scrum. These text offsets need some work
var largeScaleScrumIsScrum = paper.rect(topBarHorizontalStartingPosition, topBarVerticalPosition, borderTopBottomRectangleWidth, borderTopBottomRectangleHeight);
var continousImprovementTowardsPerfectionText = paper.text(topBarHorizontalStartingPosition+topBarHorizontalTextOffset, topBarVerticalPosition+topBarVerticalTextOffset, "Large Scale Scrum Is Scrum").attr(borderFont);

//Transparency. These text offsets need some work
var transparency = paper.rect(topBarHorizontalStartingPosition+borderTopBottomRectangleWidth, topBarVerticalPosition, borderTopBottomRectangleWidth, borderTopBottomRectangleHeight);
var transparencyText = paper.text((topBarHorizontalStartingPosition+350)+topBarHorizontalTextOffset, topBarVerticalPosition+topBarVerticalTextOffset, "Transparency").attr(borderFont);


//Left Bar
//Continius Impo=rovement
var continousImprovementTowardsPerfection= paper.rect(leftBarHorizontalPosition, leftBarVerticalStartingPosition, borderSideRectangleWidth, borderSideRectangleHeight);

/* WIP pop up http://jsfiddle.net/Zevan/QK7hw/

addTip(continousImprovementTowardsPerfection.node, "You are rolling over a circle");


$(document).mousemove(function(e){
    if (over){
      tip.css("left", e.clientX+20).css("top", e.clientY+20);
      tip.text(tipText);
    }
});

function addTip(node, txt){
    $(node).mouseenter(function(){
       tipText = txt;
       tip.fadeIn();
       over = true;
    }).mouseleave(function(){
       tip.fadeOut(200);
       over = false;
    });
}

End WIP pop up http://jsfiddle.net/Zevan/QK7hw/ */



var continousImprovementTowardsPerfectionText = paper.text(leftBarHorizontalPosition, leftBarVerticalStartingPosition+sideBarVerticalTextOffset, "Continous Improvement \n Towards Perfection")
.attr(borderFont).rotate( textRotation, 210, 125 );

//Lean Thinking
var leanThinking = paper.rect(leftBarHorizontalPosition, leftBarVerticalStartingPosition+borderSideRectangleHeight, borderSideRectangleWidth, borderSideRectangleHeight);
var leanThinkingText = paper.text(leftBarHorizontalPosition+borderSideRectangleHeight, leftBarVerticalStartingPosition+sideBarVerticalTextOffset, "Lean Thinking	")
.attr(borderFont).rotate( textRotation, 210, 125 );

//Systems Thinking
var systemsThinking = paper.rect(leftBarHorizontalPosition, leftBarVerticalStartingPosition+(borderSideRectangleHeight*2), borderSideRectangleWidth, borderSideRectangleHeight);
var systemsThinkingText = paper.text(leftBarHorizontalPosition+(borderSideRectangleHeight*2), leftBarVerticalStartingPosition+sideBarVerticalTextOffset, "Systems Thinking	")
.attr(borderFont).rotate( textRotation, 210, 125 );


//Right Bar
//More with LeSS
var moreWithLeSS = paper.rect(rightBarHorizontalPosition, rightBarVerticalStartingPosition, borderSideRectangleWidth, borderSideRectangleHeight);
var moreWithLeSSText = paper.text(rightBarHorizontalPosition, rightBarVerticalStartingPosition+sideBarVerticalTextOffset, "More With LeSS")
.attr(borderFont).rotate( textRotation, 870, 125 );

//Whole Product Focus
var wholeProductFocus = paper.rect(rightBarHorizontalPosition, rightBarVerticalStartingPosition+borderSideRectangleHeight, borderSideRectangleWidth, borderSideRectangleHeight);
var wholeProductFocusText = paper.text(rightBarHorizontalPosition + borderSideRectangleHeight, rightBarVerticalStartingPosition+sideBarVerticalTextOffset, "Whole Product Focus")
.attr(borderFont).rotate( textRotation, 870, 125 );

//Customer Centric
var customerCentric = paper.rect(rightBarHorizontalPosition, rightBarVerticalStartingPosition+(borderSideRectangleHeight*2), borderSideRectangleWidth, borderSideRectangleHeight);
var customerCentricText = paper.text(rightBarHorizontalPosition + (borderSideRectangleHeight*2), rightBarVerticalStartingPosition+sideBarVerticalTextOffset, "Customer Centric")
.attr(borderFont).rotate( textRotation, 870, 125 );


//Bottom Bar

//Empirical Process Control. Need to sort our text offsets
var empircalProcessControl = paper.rect(bottomBarHorizontalStartingPosition, bottomBarVerticalPosition, borderTopBottomRectangleWidth, borderTopBottomRectangleHeight);
var empircalProcessControlText = paper.text(bottomBarHorizontalStartingPosition+175, bottomBarVerticalPosition+25, "Empirical Process Control").attr(borderFont);

//Queueing theory Need to sort our text offsets
var queueingTheory = paper.rect(bottomBarHorizontalStartingPosition+borderTopBottomRectangleWidth, bottomBarVerticalPosition, borderTopBottomRectangleWidth, borderTopBottomRectangleHeight);
var queueingText = paper.text((bottomBarHorizontalStartingPosition*2)+275, bottomBarVerticalPosition+25, "Queueing Theory").attr(borderFont);

//Centre
var productBacklog = paper.rect(fullWidthCentreBoxHorizontalPosition, borderTopBottomRectangleHeight + centreBoxesOffset, largeRectangleLength,	allRectangleHeight,	bevel) 
	.attr(style)
	.attr({href: "http://www.ideesport.fr/idee-cadeau-alsace.html"});
	
	
//	  <p id="tooltip1"><a href="introduction.php">Introduction<span>Introduction to HTML and CSS: tooltip with extra text</a></p>


var productBacklogText = paper.text(fullWidthCentreBoxHorizontalPosition+300, borderTopBottomRectangleHeight + centreBoxesOffset + 25, "One Product Backlog").attr(centreFont);

//Overall PBR             
var overallPBR = paper.rect(fullWidthCentreBoxHorizontalPosition, (borderTopBottomRectangleHeight + centreBoxesOffset)*2, largeRectangleLength, allRectangleHeight, bevel);
var overalPBRText = paper.text(fullWidthCentreBoxHorizontalPosition+300, borderTopBottomRectangleHeight + centreBoxesOffset + 80, "Overal Product Backlog Refinment (PBR)").attr(centreFont);



//Team PBR
var teamPBR1 = paper.rect(fullWidthCentreBoxHorizontalPosition, (borderTopBottomRectangleHeight + centreBoxesOffset)*3, smallRectangleLength, allRectangleHeight, bevel);
var teamPBR1Text = paper.text(fullWidthCentreBoxHorizontalPosition + 150, (borderTopBottomRectangleHeight + centreBoxesOffset + 8)*3, "Team PBR").attr(centreFont);

var teamPBR2 = paper.rect(fullWidthCentreBoxHorizontalPosition + 300, (borderTopBottomRectangleHeight + centreBoxesOffset)*3, smallRectangleLength, allRectangleHeight, bevel);
var teamPBR2Text = paper.text(fullWidthCentreBoxHorizontalPosition + 450, (borderTopBottomRectangleHeight + centreBoxesOffset + 8)*3, "Multi Team PBR").attr(centreFont);


//Multi team design workshops
var multiTeamDesignWorkshop = paper.rect(fullWidthCentreBoxHorizontalPosition, (borderTopBottomRectangleHeight + centreBoxesOffset)*4, largeRectangleLength, allRectangleHeight, bevel);
var overalPBRText = paper.text(fullWidthCentreBoxHorizontalPosition+300, borderTopBottomRectangleHeight + centreBoxesOffset + 190, "Multi Team Design Workshop").attr(centreFont);


//Sprint Planning
var sprintPlanning1 = paper.rect(fullWidthCentreBoxHorizontalPosition, (borderTopBottomRectangleHeight + centreBoxesOffset)*5, largeRectangleLength, allRectangleHeight, bevel);
var sprintPlanning1Text = paper.text(fullWidthCentreBoxHorizontalPosition+300, borderTopBottomRectangleHeight + centreBoxesOffset + 245, "Sprint Planning One").attr(centreFont);

//teriible variable names, wtf do they mean!
var sprintPlanning2a = paper.rect(fullWidthCentreBoxHorizontalPosition, (borderTopBottomRectangleHeight + centreBoxesOffset)*6, smallRectangleLength, allRectangleHeight, bevel);
var sprintPlanning2aText = paper.text(fullWidthCentreBoxHorizontalPosition+155, borderTopBottomRectangleHeight + centreBoxesOffset + 300, "Team Sprint Planning 2").attr(centreFont);

var sprintPlanning2b= paper.rect(fullWidthCentreBoxHorizontalPosition + 300, (borderTopBottomRectangleHeight + centreBoxesOffset)*6, smallRectangleLength, allRectangleHeight, bevel);
var sprintPlanning2bText = paper.text(fullWidthCentreBoxHorizontalPosition+455, borderTopBottomRectangleHeight + centreBoxesOffset + 300, "Multi Team Sprint Planning 2").attr(centreFont);

//CoPs
var architectureCoP = paper.rect(fullWidthCentreBoxHorizontalPosition, (borderTopBottomRectangleHeight + centreBoxesOffset)*7, largeRectangleLength, allRectangleHeight*1.5, bevel);
var testingCoP = paper.rect(fullWidthCentreBoxHorizontalPosition, 490, largeRectangleLength, allRectangleHeight*1.5, bevel);

//Teams
var teamOne = paper.circle(400, 480, 25).animate({fill: "#223fa3", stroke: "#000", "stroke-width": 80, "stroke-opacity": 0.5}, 1000);
var teamTwo = paper.circle(800, 510, 25).animate({fill: "#223fa3", stroke: "#000", "stroke-width": 80, "stroke-opacity": 0.5}, 2000);
var teamThree = paper.circle(675, 460, 25).animate({fill: "#223fa3", stroke: "#000", "stroke-width": 80, "stroke-opacity": 0.5}, 1000);
var teamFour = paper.circle(525, 520, 25).animate({fill: "#223fa3", stroke: "#000", "stroke-width": 80, "stroke-opacity": 0.5}, 1000);

//Sprint Review
var sprintReview = paper.rect(fullWidthCentreBoxHorizontalPosition, 570, largeRectangleLength, allRectangleHeight, bevel);
var sprintReviewText = paper.text(fullWidthCentreBoxHorizontalPosition+300, borderTopBottomRectangleHeight + centreBoxesOffset + 540, "Sprint Review").attr(centreFont);

//Retrospectives
var teamOneRetrospective = paper.rect(fullWidthCentreBoxHorizontalPosition, 625, smallRectangleLength, allRectangleHeight, bevel);
var teamOneRetrospectiveText = paper.text(fullWidthCentreBoxHorizontalPosition + 150, 650, "Team Retrospective").attr(centreFont);

var teamTwoRetrospective = paper.rect(fullWidthCentreBoxHorizontalPosition + 300, 625, smallRectangleLength, allRectangleHeight, bevel);
var teamTwoRetrospectiveText = paper.text(fullWidthCentreBoxHorizontalPosition+ 450, 650, "Joint Retrospective").attr(centreFont);

var overallRetrospective = paper.rect(fullWidthCentreBoxHorizontalPosition, 680, largeRectangleLength, allRectangleHeight, bevel);
var overalRetrospectiveText = paper.text(fullWidthCentreBoxHorizontalPosition+300, borderTopBottomRectangleHeight + centreBoxesOffset + 650, "Overal Retrospective").attr(centreFont);
 


//var ellipse = paper.ellipse(350, 250, 400, 300) .attr({fill: "#000"});





c.attr({href: "http://www.ideesport.fr/idee-cadeau-alsace.html"});

// Sets the fill attribute of the circle to red (#f00)
//c.attr("fill", "#f00");

// Sets the stroke attribute of the circle to white
circle.attr("stroke", "#fff");

/*

//productBacklog.addEventListener("click", function(){ alert("Hello World!");});
//productBacklog.addEventListener("mouseout", productBacklog.animate(style, animationSpeed), true);

//LeSS Map//
var MAP_WIDTH  = 800;
var MAP_HEIGHT = 600;

var mapContainer = document.getElementById("map");
var map = new Raphael(mapContainer, MAP_WIDTH, MAP_HEIGHT);

var style = {
  fill: "#ddd",
  stroke: "#aaa",
  "stroke-width": 1,
  "stroke-linejoin": "round",
  cursor: "pointer"
};

var regions = {};
regions["alsace"] = map.path("M 480.71875,112.28125 477,113.3125 l -1.71875,3 0,2.9375 -1.5625,1.375 -1.375,0 -2.53125,-1.78125 -1.96875,1.375 -2.34375,0 -1.9375,-1.9375 -3.71875,-0.59375 -2.15625,-0.96875 -0.78125,-2.9375 -1.75,1.9375 -0.96875,4.5 -2.5625,0.78125 0,2.53125 2.5625,1.1875 1.9375,1.375 -0.78125,1.75 1.78125,1.15625 3.125,-2.34375 5.4375,3.125 -2.3125,4.3125 0.1875,1.375 1.5625,1.5625 -1.1875,4.09375 -3.90625,3.90625 -2.15625,-0.1875 1.375,1.34375 -0.78125,3.53125 L 459.25,155 l 3.71875,0.96875 -2.15625,4.875 -2.34375,4.6875 0.59375,2.9375 -1.9375,4.5 -3.34375,2.90625 -0.1875,7.625 -2.4375,2.09375 0.0937,0.0625 0.78125,1.5625 3.125,0.1875 3.53125,2.75 0.5625,1.34375 -0.1875,2.34375 -0.96875,1.78125 0.375,2.34375 2.75,-0.40625 0.59375,2.15625 0.96875,4.15625 2.3125,-0.375 -0.40625,2.125 1.375,1.1875 7.21875,-0.1875 3.71875,-2.9375 0.1875,-4.3125 1.96875,-2.53125 -2.5625,-2.9375 -1.34375,-3.125 1.5625,-2.125 0,-4.90625 0.96875,-2.34375 0,-3.90625 1.75,-2.53125 -1.9375,-2.71875 -0.21875,-6.25 5.09375,-9.96875 -0.59375,-5.65625 2.34375,-7.625 0.59375,-6.65625 5.0625,-3.6875 0,-2.34375 1.96875,-2.5625 1.5625,0 1.75,-1.75 -0.375,-3.3125 1.75,-4.6875 2.71875,-0.59375 L 496.5312,115 l -4.875,-0.5625 -4.3125,-2.15625 -2.9375,1.75 -1.5625,-1.75 -2.125,0 z").attr({href: "http://www.ideesport.fr/idee-cadeau-alsace.html"});
regions["ben"] = map.path("M25.221,1.417H6.11c-0.865,0-1.566,0.702-1.566,1.566v25.313c0,0.865,0.701,1.565,1.566,1.565h19.111c0.865,0,1.565-0.7,1.565-1.565V2.984C26.787,2.119,26.087,1.417,25.221,1.417zM15.666,29.299c-0.346,0-0.626-0.279-0.626-0.625s0.281-0.627,0.626-0.627c0.346,0,0.627,0.281,0.627,0.627S16.012,29.299,15.666,29.299zM24.376,26.855c0,0.174-0.142,0.312-0.313,0.312H7.27c-0.173,0-0.313-0.142-0.313-0.312V4.3c0-0.173,0.14-0.313,0.313-0.313h16.792c0.172,0,0.312,0.14,0.312,0.313L24.376,26.855L24.376,26.855z").attr({href: "http://www.ideesport.fr/idee-cadeau-alsace.html"});
regions["nord-pas-de-calais"] = map.path("m 285.78125,4.0625 -6.25,2.9375 -9.75,1.5625 -11.34375,2.15625 -8.59375,6.625 0,26.375 -0.0625,0.78125 3.03125,0.71875 0.96875,2.15625 2.34375,-0.59375 1.375,-1.75 1.75,0.59375 3.71875,2.90625 1.375,-0.5625 0.96875,2.34375 3.5,1.5625 0,1.9375 2.5625,0.96875 2.53125,-0.96875 4.875,-0.59375 1.1875,1 2.34375,-1 1.15625,1.96875 -2.90625,1.9375 0,2.75 0.96875,0.96875 0.78125,-0.1875 0.5625,-1.5625 1.78125,-1.1875 1.75,1.375 4.09375,1.375 1.75,0 0,-1.96875 2.5625,1.78125 0.1875,1.5625 -1.1875,1.75 2.15625,-1.1875 1.78125,-0.78125 0.75,1.375 0,1.375 2.9375,-1.5625 4.6875,0 1.75,1.75 1.5625,0.40625 1.5625,-1 2.15625,0 0.59375,1.1875 0.78125,-0.1875 2.34375,-1.375 2.34375,1.375 3.125,-2.15625 1.375,0 1.5625,1.375 3.125,-2.15625 1.34375,0.1875 1.1875,0.96875 4.3125,0.40625 0.375,1.75 2.15625,-1.9375 1.15625,0 0.78125,2.53125 3.71875,0.96875 1.0625,-0.71875 -0.3125,0 -0.1875,-1.9375 3.90625,-2.34375 -0.59375,-3.71875 -3.71875,-0.96875 0.96875,-1 0,-2.71875 2.9375,-2.15625 -0.78125,-1.5625 -6.25,-4.875 -10.9375,0.59375 -1.15625,1.9375 -1.375,0 0.1875,-6.84375 -3.125,-3.6875 -2.34375,0.375 -1.375,-1.5625 -3.90625,1.75 -1.34375,-1.34375 -2.75,-0.40625 -0.78125,-2.53125 -0.1875,-7.8125 -1.75,-0.78125 -0.21875,-1.1875 -1.15625,0 -0.40625,-2.34375 -2.53125,0.21875 -4.875,1.5625 -2.34375,2.90625 -2.34375,0 -1.5625,-1.9375 -0.59375,-2.15625 -1.9375,-2.15625 -2.75,0 -1.15625,-2.125 0,-3.34375 1.34375,-2.125 -0.78125,-2.9375 -2.53125,-5.09375 z");

for(var regionName in regions) {
    regions[regionName].attr(style);
}

var animationSpeed = 500;
var hoverStyle = {
  fill: "#A8BED5"
}

for(var regionName in regions) {
    (function (region) {
        region.attr(style);

        region[0].addEventListener("mouseover", function() {
            region.animate(hoverStyle, animationSpeed);
        }, true);

        region[0].addEventListener("mouseout", function() {
          region.animate(style, animationSpeed);
        }, true);

d",
 cursor: "pointer"
};

}
*/