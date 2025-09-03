import org.w3c.dom.*;
import javax.xml.parsers.*;
import java.io.File;
public class DomParserExample{
    public static void main(String args[]){
        try {
            File inputFile = new File("Book.xml");
            DocumentBuilderFactory dbFactory = DocumentBuilderFactory.newInstance();
            DocumentBuilder dBuilder = dbFactory.newDocumentBuilder();
            Document doc = dBuilder.parse(inputFile);
            doc.getDocumentElement().normalize();
            System.out.println("Root Elements");
            NodeList nList = doc.getElementsByTagName("Book");
            for (int i = 0; i < nList.getLength(); i++) {
                Node bookNode = nList.item(i);
                if (bookNode.getNodeType() == Node.ELEMENT_NODE) {
                    Element book = (Element) bookNode;
                    System.out.println("Title " + book.getElementsByTagName("Title").item(0).getTextContent());
                    System.out.println("Author " + book.getElementsByTagName("Author").item(0).getTextContent());
                    System.out.println("ISBN " + book.getElementsByTagName("ISBN").item(0).getTextContent());
                    System.out.println("Publisher " + book.getElementsByTagName("Publisher").item(0).getTextContent());
                    System.out.println("Edition " + book.getElementsByTagName("Edition").item(0).getTextContent());
                    System.out.println("Price " + book.getElementsByTagName("Price").item(0).getTextContent());
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}