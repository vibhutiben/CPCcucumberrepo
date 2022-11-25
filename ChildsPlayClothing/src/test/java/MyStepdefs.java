import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class MyStepdefs {

    HomePage homePage = new HomePage();

    @Given("^: user is on homepage$")
    public void userIsOnHomepage() {

    }

    @When("^: user is click on designer$")
    public void userIsClickOnDesigner() {
        homePage.designerClick();
    }

    @Then("^: user should able to see designer products$")
    public void userShouldAbleToSeeDesignerProducts() {
        homePage.getProductsAtoZText();

    }
}
