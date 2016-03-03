//Need to add improvment backlog

// Creates canvas 320 × 200 at 10, 50
var paper = Raphael(10, 50, 1500, 1000);


// x and y co-ordinates need to match

//Centre block stats. Need to rename these variables
var allRectangleHeight = 50;
var bevel = 10;
var largeRectangleLength = 600;
var smallRectangleLength = 300;


// Product Backlog style info
var productBacklogRefinementStyle = {
  fill: "#ddd",
  stroke: "#aaa",
  "stroke-width": 1,
  "stroke-linejoin": "round",
  cursor: "pointer"
};

var sprintPlanningStyle = {
  fill: "#ccffcc",
  stroke: "#aaa",
  "stroke-width": 1,
  "stroke-linejoin": "round",
  cursor: "pointer"
};


var coPStyle = {
  fill: "#f2f2f2",
  stroke: "#aaa",
  "stroke-width": 1,
  "stroke-linejoin": "round",
  cursor: "pointer"
};

var reviewReflectionStyle = {
  fill: "#ccccff",
  stroke: "#aaa",
  "stroke-width": 1,
  "stroke-linejoin": "round",
  cursor: "pointer"
};


//Principle Colours
var principleColour = "#A2D7E8";

// X (horizontal position) ,Y (vertical position), width, height 

//fonts
var centreFont = {"font-family":"serif", "font-style":"regular", "font-size":"20"};
var borderFont = {"font-family":"serif", "font-style":"regular", "font-size":"20"};
var teamFont = {"font-family":"serif", "font-style":"regular", "font-size":"20"};
var improvementBacklogCustomerValueFlowFont = {"font-family":"serif", "font-style":"regular", "font-size":"30", "letter-spacing":"25px"};

//Border Rectangle Dimensions
var borderSideRectangleHeight = 229;
var borderSideRectangleWidth = 50; //top bar needs to be the sum of with side bar widths and the gap in between
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

//Improvement Backlog & Value Flow
var improvementBacklog = paper.rect(200, 0, 810, 787).attr({fill: principleColour});;
var improvementBacklogText = paper.text(leftBarHorizontalPosition+borderSideRectangleHeight-50, leftBarVerticalStartingPosition+sideBarVerticalTextOffset, "Improvement Backlog")
.attr(improvementBacklogCustomerValueFlowFont).rotate( textRotation, 162, 125 );

    paper.path([
        'M',  985, 17,
        'L',  985 , 785
    ]).attr({
        'stroke-width': 15,
        'stroke': ('white'),
        'arrow-end': 'block-midium-midium',
        'arrow-start': 'oval-narrow-short'       
    });
var customerValueFlowText = paper.text(leftBarHorizontalPosition+borderSideRectangleHeight-55, leftBarVerticalStartingPosition+sideBarVerticalTextOffset-760, "Customer Value Flow")
.attr(improvementBacklogCustomerValueFlowFont).rotate( textRotation, 162, 125 );


//Top Bar
//Large Scale Scrum is Scrum. These text offsets need some work
var largeScaleScrumIsScrum = paper.rect(topBarHorizontalStartingPosition, topBarVerticalPosition, borderTopBottomRectangleWidth, borderTopBottomRectangleHeight).attr({fill: principleColour});
var largeScaleScrumIsScrumText = paper.text(topBarHorizontalStartingPosition+topBarHorizontalTextOffset, topBarVerticalPosition+topBarVerticalTextOffset, "Large Scale Scrum Is Scrum").attr(borderFont);
// will animate the rectangle colour fade, needs more params .animate({fill: "principleColour"}, 2000);


//Transparency. These text offsets need some work
var transparency = paper.rect(topBarHorizontalStartingPosition+borderTopBottomRectangleWidth, topBarVerticalPosition, borderTopBottomRectangleWidth, borderTopBottomRectangleHeight).attr({fill: principleColour});;
var transparencyText = paper.text((topBarHorizontalStartingPosition+350)+topBarHorizontalTextOffset, topBarVerticalPosition+topBarVerticalTextOffset, "Transparency").attr(borderFont);


//Left Bar
//Continius Improvement
var continousImprovementTowardsPerfection= paper.rect(leftBarHorizontalPosition, leftBarVerticalStartingPosition, borderSideRectangleWidth, borderSideRectangleHeight).attr({fill: principleColour});;

var continousImprovementTowardsPerfectionText = paper.text(leftBarHorizontalPosition, leftBarVerticalStartingPosition+sideBarVerticalTextOffset, "Continous Improvement \n Towards Perfection")
.attr(borderFont).rotate( textRotation, 210, 125 );

//.popup(x , y, location , size)

continousImprovementTowardsPerfectionPopUp = paper.popup(leftBarHorizontalPosition, leftBarVerticalStartingPosition+50,
	"Test text \n 	Shall I put these all in the same location? \n 	What are the limitations of this pop up? \n What can be tweaked via g.raphel? \n Can I Hi I m a Circle...:)"
	, 'left', 5 ).hide();//paper.popup()
continousImprovementTowardsPerfectionText.mouseover(function(){continousImprovementTowardsPerfectionPopUp.show(); });
continousImprovementTowardsPerfectionText.mouseout(function(){continousImprovementTowardsPerfectionPopUp.hide(); });




//Lean Thinking
var leanThinking = paper.rect(leftBarHorizontalPosition, leftBarVerticalStartingPosition+borderSideRectangleHeight, borderSideRectangleWidth, borderSideRectangleHeight).attr({fill: principleColour});;
var leanThinkingText = paper.text(leftBarHorizontalPosition+borderSideRectangleHeight, leftBarVerticalStartingPosition+sideBarVerticalTextOffset, "Lean Thinking	")
.attr(borderFont).rotate( textRotation, 210, 125 );

leanThinkingPopUp = paper.popup(leftBarHorizontalPosition, leftBarVerticalStartingPosition+300,
	"Test text \n 	Shall I put these all in the same location? \n 	What are the limitations of this pop up? \n What can be tweaked via g.raphel? \n Can I Hi I m a Circle...:)"
	, 'left', 5 ).hide();//paper.popup()
leanThinkingText.mouseover(function(){leanThinkingPopUp.show(); });
leanThinkingText.mouseout(function(){leanThinkingPopUp.hide(); });



//Systems Thinking
var systemsThinking = paper.rect(leftBarHorizontalPosition, leftBarVerticalStartingPosition+(borderSideRectangleHeight*2), borderSideRectangleWidth, borderSideRectangleHeight).attr({fill: principleColour});;
var systemsThinkingText = paper.text(leftBarHorizontalPosition+(borderSideRectangleHeight*2), leftBarVerticalStartingPosition+sideBarVerticalTextOffset, "Systems Thinking	")
.attr(borderFont).rotate( textRotation, 210, 125 );

systemsThinkingPopUp = paper.popup(leftBarHorizontalPosition, leftBarVerticalStartingPosition+550,
	"Test text \n 	Shall I put these all in the same location? \n 	What are the limitations of this pop up? \n What can be tweaked via g.raphel? \n Can I Hi I m a Circle...:)"
	, 'left', 5 ).hide();//paper.popup()
systemsThinkingText.mouseover(function(){systemsThinkingPopUp.show(); });
systemsThinkingText.mouseout(function(){systemsThinkingPopUp.hide(); });



//Right Bar
//More with LeSS
var moreWithLeSS = paper.rect(rightBarHorizontalPosition, rightBarVerticalStartingPosition, borderSideRectangleWidth, borderSideRectangleHeight).attr({fill: principleColour});;
var moreWithLeSSText = paper.text(rightBarHorizontalPosition, rightBarVerticalStartingPosition+sideBarVerticalTextOffset, "More With LeSS")
.attr(borderFont).rotate( textRotation, 870, 125 );

//Whole Product Focus
var wholeProductFocus = paper.rect(rightBarHorizontalPosition, rightBarVerticalStartingPosition+borderSideRectangleHeight, borderSideRectangleWidth, borderSideRectangleHeight).attr({fill: principleColour});;
var wholeProductFocusText = paper.text(rightBarHorizontalPosition + borderSideRectangleHeight, rightBarVerticalStartingPosition+sideBarVerticalTextOffset, "Whole Product Focus")
.attr(borderFont).rotate( textRotation, 870, 125 );

//Customer Centric
var customerCentric = paper.rect(rightBarHorizontalPosition, rightBarVerticalStartingPosition+(borderSideRectangleHeight*2), borderSideRectangleWidth, borderSideRectangleHeight).attr({fill: principleColour});;
var customerCentricText = paper.text(rightBarHorizontalPosition + (borderSideRectangleHeight*2), rightBarVerticalStartingPosition+sideBarVerticalTextOffset, "Customer Centric")
.attr(borderFont).rotate( textRotation, 870, 125 );


//Bottom Bar

//Empirical Process Control. Need to sort our text offsets
var empircalProcessControl = paper.rect(bottomBarHorizontalStartingPosition, bottomBarVerticalPosition, borderTopBottomRectangleWidth, borderTopBottomRectangleHeight).attr({fill: principleColour});;
var empircalProcessControlText = paper.text(bottomBarHorizontalStartingPosition+175, bottomBarVerticalPosition+25, "Empirical Process Control").attr(borderFont);

//Queueing theory Need to sort our text offsets
var queueingTheory = paper.rect(bottomBarHorizontalStartingPosition+borderTopBottomRectangleWidth, bottomBarVerticalPosition, borderTopBottomRectangleWidth, borderTopBottomRectangleHeight).attr({fill: principleColour});;
var queueingText = paper.text((bottomBarHorizontalStartingPosition*2)+275, bottomBarVerticalPosition+25, "Queueing Theory").attr(borderFont);

//Centre
var productBacklog = paper.rect(fullWidthCentreBoxHorizontalPosition, borderTopBottomRectangleHeight + centreBoxesOffset, largeRectangleLength,	allRectangleHeight,	bevel) 
	.attr(productBacklogRefinementStyle)
	.attr({href: "http://www.ideesport.fr/idee-cadeau-alsace.html"});
	
	
var productBacklogText = paper.text(fullWidthCentreBoxHorizontalPosition+300, borderTopBottomRectangleHeight + centreBoxesOffset + 25, "One Product Backlog").attr(centreFont);

//Overall PBR             
var overallPBR = paper.rect(fullWidthCentreBoxHorizontalPosition, (borderTopBottomRectangleHeight + centreBoxesOffset)*2, largeRectangleLength, allRectangleHeight, bevel)
.attr(productBacklogRefinementStyle);

var overalPBRText = paper.text(fullWidthCentreBoxHorizontalPosition+300, borderTopBottomRectangleHeight + centreBoxesOffset + 80, "Overal Product Backlog Refinment (PBR)").attr(centreFont);



//Team PBR
var teamPBR1 = paper.rect(fullWidthCentreBoxHorizontalPosition, (borderTopBottomRectangleHeight + centreBoxesOffset)*3, smallRectangleLength, allRectangleHeight, bevel)
.attr(productBacklogRefinementStyle);

var teamPBR1Text = paper.text(fullWidthCentreBoxHorizontalPosition + 150, (borderTopBottomRectangleHeight + centreBoxesOffset + 8)*3, "Team PBR").attr(centreFont);

var teamPBR2 = paper.rect(fullWidthCentreBoxHorizontalPosition + 300, (borderTopBottomRectangleHeight + centreBoxesOffset)*3, smallRectangleLength, allRectangleHeight, bevel)
.attr(productBacklogRefinementStyle);

var teamPBR2Text = paper.text(fullWidthCentreBoxHorizontalPosition + 450, (borderTopBottomRectangleHeight + centreBoxesOffset + 8)*3, "Multi Team PBR").attr(centreFont);


//Multi team design workshops
var multiTeamDesignWorkshop = paper.rect(fullWidthCentreBoxHorizontalPosition, (borderTopBottomRectangleHeight + centreBoxesOffset)*4, largeRectangleLength, allRectangleHeight, bevel)
.attr(productBacklogRefinementStyle);

var overalPBRText = paper.text(fullWidthCentreBoxHorizontalPosition+300, borderTopBottomRectangleHeight + centreBoxesOffset + 190, "Multi Team Design Workshop").attr(centreFont);


//Sprint Planning
var sprintPlanning1 = paper.rect(fullWidthCentreBoxHorizontalPosition, (borderTopBottomRectangleHeight + centreBoxesOffset)*5, largeRectangleLength, allRectangleHeight, bevel)
.attr(sprintPlanningStyle);

var sprintPlanning1Text = paper.text(fullWidthCentreBoxHorizontalPosition+300, borderTopBottomRectangleHeight + centreBoxesOffset + 245, "Sprint Planning One").attr(centreFont);

//teriible variable names, wtf do they mean!
var sprintPlanning2a = paper.rect(fullWidthCentreBoxHorizontalPosition, (borderTopBottomRectangleHeight + centreBoxesOffset)*6, smallRectangleLength, allRectangleHeight, bevel)
.attr(sprintPlanningStyle);
var sprintPlanning2aText = paper.text(fullWidthCentreBoxHorizontalPosition+155, borderTopBottomRectangleHeight + centreBoxesOffset + 300, "Team Sprint Planning 2").attr(centreFont);

var sprintPlanning2b= paper.rect(fullWidthCentreBoxHorizontalPosition + 300, (borderTopBottomRectangleHeight + centreBoxesOffset)*6, smallRectangleLength, allRectangleHeight, bevel)
.attr(sprintPlanningStyle);
var sprintPlanning2bText = paper.text(fullWidthCentreBoxHorizontalPosition+455, borderTopBottomRectangleHeight + centreBoxesOffset + 300, "Multi Team Sprint Planning 2").attr(centreFont);

//CoPs
var architectureCoP = paper.rect(fullWidthCentreBoxHorizontalPosition, 385, largeRectangleLength, allRectangleHeight*1.5, bevel)
.attr(coPStyle);
var architectureCoPText = paper.text(fullWidthCentreBoxHorizontalPosition+300, 410, "Architecure CoP").attr(centreFont);

var testingCoP = paper.rect(fullWidthCentreBoxHorizontalPosition, 435, largeRectangleLength, allRectangleHeight*1.5, bevel)
.attr(coPStyle);
var testingCoPText = paper.text(fullWidthCentreBoxHorizontalPosition+300, 460, "Testing CoP").attr(centreFont);

var developmentCoP = paper.rect(fullWidthCentreBoxHorizontalPosition, 490, largeRectangleLength, allRectangleHeight*1.5, bevel)
.attr(coPStyle);
var developmentCoPText = paper.text(fullWidthCentreBoxHorizontalPosition+300, 520, "Development CoP").attr(centreFont);

//Teams


var teamOne = paper.circle(370, 460, 25).animate({fill: "#223fa3", stroke: "#000", "stroke-width": 80, "stroke-opacity": 0.5}, 1000);
var teamOneText = paper.text(370, 420, "Team 1").attr(teamFont);

var teamTwo = paper.circle(500, 490, 25).animate({fill: "#223fa3", stroke: "#000", "stroke-width": 80, "stroke-opacity": 0.5}, 1000);
var teamTwoText = paper.text(500, 450, "Team 2").attr(teamFont);


var teamThree = paper.circle(710, 490, 25).animate({fill: "#223fa3", stroke: "#000", "stroke-width": 80, "stroke-opacity": 0.5}, 1000);
var teamOneText = paper.text(710, 450, "Team 3").attr(teamFont);


var teamFour = paper.circle(840, 460, 25).animate({fill: "#223fa3", stroke: "#000", "stroke-width": 80, "stroke-opacity": 0.5}, 1000);
var teamFourText = paper.text(840, 420, "Team n").attr(teamFont);


//Sprint Review
var sprintReview = paper.rect(fullWidthCentreBoxHorizontalPosition, 570, largeRectangleLength, allRectangleHeight, bevel)
.attr(reviewReflectionStyle);
var sprintReviewText = paper.text(fullWidthCentreBoxHorizontalPosition+300, borderTopBottomRectangleHeight + centreBoxesOffset + 540, "Sprint Review").attr(centreFont);

//Retrospectives
var teamOneRetrospective = paper.rect(fullWidthCentreBoxHorizontalPosition, 625, smallRectangleLength, allRectangleHeight, bevel)
.attr(reviewReflectionStyle);
var teamOneRetrospectiveText = paper.text(fullWidthCentreBoxHorizontalPosition + 150, 650, "Team Retrospective").attr(centreFont);

var teamTwoRetrospective = paper.rect(fullWidthCentreBoxHorizontalPosition + 300, 625, smallRectangleLength, allRectangleHeight, bevel)
.attr(reviewReflectionStyle);
var teamTwoRetrospectiveText = paper.text(fullWidthCentreBoxHorizontalPosition+ 450, 650, "Joint Retrospective").attr(centreFont);

var overallRetrospective = paper.rect(fullWidthCentreBoxHorizontalPosition, 680, largeRectangleLength, allRectangleHeight, bevel)
.attr(reviewReflectionStyle);
var overalRetrospectiveText = paper.text(fullWidthCentreBoxHorizontalPosition+300, borderTopBottomRectangleHeight + centreBoxesOffset + 650, "Overal Retrospective").attr(centreFont);