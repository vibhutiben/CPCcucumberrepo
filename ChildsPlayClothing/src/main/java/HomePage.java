import org.openqa.selenium.By;

public class HomePage extends Utils {


    By designer =By.id("NI2");
    By productAtoZ = By.className("HdTxt");

    public void designerClick(){
        clickElementBy(designer);

    }
    public void getProductsAtoZText(){
        assertTextMessage(productAtoZ,"A-Z DESIGNERS");

    }


}
