package vn.edu.iuh.sessioncart.session;
import jakarta.enterprise.context.SessionScoped;
import jakarta.inject.Named;
import vn.edu.iuh.sessioncart.service.ShoppingCart;
import java.io.Serial;
import java.io.Serializable;
import java.util.UUID;

@Named ("userSession")
@SessionScoped
public class UserSession implements Serializable {
    @Serial
    private static final long serialVersionUID = 1L;
    private final String instanceId = UUID.randomUUID().toString();
    private final ShoppingCart shoppingCart = new ShoppingCart();
    private String username;

    public void login (String username) { this.username = username; }
    public boolean isLoggedIn() { return username != null; }
    public String getUsername() { return username; }
    public ShoppingCart getShoppingCart() { return shoppingCart; }
    public String getInstanceId() { return instanceId; }
}