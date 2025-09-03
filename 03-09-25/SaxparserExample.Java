import org.xml.sax.Attributes;
import org.xml.sax.helpers.DefaultHandler;
import javax.xml.parsers.SAXParser;
import javax.xml.parsers.SAXParserFactory;
import java.io.File;
public class SaxParserExample {
    public static void main(String[] args) {
        try {
            SAXParserFactory factory = SAXParserFactory.newInstance();
            SAXParser parser = factory.newSAXParser();
            DefaultHandler handler = new DefaultHandler() {
                boolean isTitle = false;
                boolean isAuthor = false;
                boolean isISBN = false;
                boolean isPublisher = false;
                boolean isEdition = false;
                boolean isPrice = false;
                @Override
                public void startElement(String uri, String localName, String qName, Attributes attributes) {
                    if (qName.equalsIgnoreCase("book")) {
                        String id = attributes.getValue("id");
                        System.out.println("------------");
                        System.out.println("BOOK ID: " + id);
                    } else if (qName.equalsIgnoreCase("title")) {
                        isTitle = true;
                    } else if (qName.equalsIgnoreCase("author")) {
                        isAuthor = true;
                    } else if (qName.equalsIgnoreCase("isbn")) {
                        isISBN = true;
                    } else if (qName.equalsIgnoreCase("publisher")) {
                        isPublisher = true;
                    } else if (qName.equalsIgnoreCase("edition")) {
                        isEdition = true;
                    } else if (qName.equalsIgnoreCase("price")) {
                        isPrice = true;
                    }
                }
                @Override
                public void endElement(String uri, String localName, String qName) {
                    if (qName.equalsIgnoreCase("title")) {
                        isTitle = false;
                    } else if (qName.equalsIgnoreCase("author")) {
                        isAuthor = false;
                    } else if (qName.equalsIgnoreCase("isbn")) {
                        isISBN = false;
                    } else if (qName.equalsIgnoreCase("publisher")) {
                        isPublisher = false;
                    } else if (qName.equalsIgnoreCase("edition")) {
                        isEdition = false;
                    } else if (qName.equalsIgnoreCase("price")) {
                        isPrice = false;
                    }
                }
                @Override
                public void characters(char[] ch, int start, int length) {
                    if (isTitle) {
                        System.out.println("Title: " + new String(ch, start, length));
                    } else if (isAuthor) {
                        System.out.println("Author: " + new String(ch, start, length));
                    } else if (isISBN) {
                        System.out.println("ISBN: " + new String(ch, start, length));
                    } else if (isPublisher) {
                        System.out.println("Publisher: " + new String(ch, start, length));
                    } else if (isEdition) {
                        System.out.println("Edition: " + new String(ch, start, length));
                    } else if (isPrice) {
                        System.out.println("Price: " + new String(ch, start, length));
                    }
                }
            };

            parser.parse(new File("Book.xml"), handler);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
