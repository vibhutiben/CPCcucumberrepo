$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/resources/Features/designer.feature");
formatter.feature({
  "line": 2,
  "name": "user should able to access all designer products",
  "description": "",
  "id": "user-should-able-to-access-all-designer-products",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@designer"
    }
  ]
});
formatter.before({
  "duration": 7294146000,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "user should able click the designermenu",
  "description": "",
  "id": "user-should-able-to-access-all-designer-products;user-should-able-click-the-designermenu",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": ": user is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": ": user is click on designer",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": ": user should able to see designer products",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.userIsOnHomepage()"
});
formatter.result({
  "duration": 315254400,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userIsClickOnDesigner()"
});
formatter.result({
  "duration": 160787600,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userShouldAbleToSeeDesignerProducts()"
});
formatter.result({
  "duration": 708906100,
  "status": "passed"
});
formatter.after({
  "duration": 366010500,
  "status": "passed"
});
});