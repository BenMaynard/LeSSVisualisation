// Creates canvas 320 × 200 at 10, 50
var paper = Raphael(10, 50, 1366, 800);

circle1 = paper.circle(100,100,20).attr({"fill":"#48f5ab","stroke":"#48f5ab"});
popup = paper.popup(100,100,"Hi I m a Circle...:)", "down", 50).hide();//paper.popup()
circle1.mouseover(function(){ popup.show(); });
circle1.mouseout(function(){popup.hide(); });


circle2 = paper.rect(200,100,20,30).attr({"fill":"#48f5ab","stroke":"#48f5ab"});
popup2 = paper.popup(200,100,"Hi jshdjkshdjskdhskjhddsdsdsdsdsdsdskjdhskjdhskjd \n hskdhskdjhsdkjhsdkj \n I m a Circle...:)").hide();//paper.popup()
circle2.mouseover(function(){ popup2.show(); });
circle2.mouseout(function(){popup2.hide(); });

// x and y co-ordinates need to match

//Centre block stats. Need to rename these variables
var allRectangleHeight = 50;
var bevel = 10;
var largeRectangleLength = 600;
var smallRectangleLength = 300;


// Product Backlog style info
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

var continousImprovementTowardsPerfectionText = paper.text(leftBarHorizontalPosition, leftBarVerticalStartingPosition+sideBarVerticalTextOffset, "Continous Improvement \n Towards Perfection")
.attr(borderFont).rotate( textRotation, 210, 125 );

popuptest = paper.popup(leftBarHorizontalPosition, leftBarVerticalStartingPosition,
	"Test text \n 	Shall I put these all in the same location? \n 	What are the limitations of this pop up? \n What can be tweaked via g.raphel? \n Can I Hi I m a Circle...:)"
	 ).hide();//paper.popup()
continousImprovementTowardsPerfectionText.mouseover(function(){ popuptest.show(); });
continousImprovementTowardsPerfectionText.mouseout(function(){popuptest.hide(); });




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