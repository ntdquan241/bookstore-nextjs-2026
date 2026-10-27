package vn.edu.iuh.cartapi.api;

import jakarta.enterprise.context.RequestScoped;
import jakarta.inject.Inject;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import vn.edu.iuh.cartapi.model.Product;
import vn.edu.iuh.cartapi.service.ProductCatalog;
import vn.edu.iuh.cartapi.service.ShoppingCart;
import vn.edu.iuh.cartapi.session.UserSession;

import java.util.Map;
import java.util.Optional;

@Path("/cart")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
@RequestScoped
public class CartResource {

    @Inject
    ProductCatalog productCatalog;

    @Inject
    UserSession userSession;

    // API Lấy thông tin giỏ hàng
    @GET
    public Response getCart() {
        if (!userSession.isLoggedIn()) {
            return unauthorized();
        }
        return Response.ok(cartBody()).build();
    }

    // API Thêm sản phẩm vào giỏ hàng
    @POST
    @Path("/items")
    public Response addItem(AddItemRequest request) {
        if (!userSession.isLoggedIn()) {
            return unauthorized();
        }

        Optional<Product> product = request == null
                ? Optional.empty()
                : productCatalog.findById(request.productId());

        if (product.isEmpty()) {
            return Response.status(404)
                    .entity(Map.of(
                            "message", "Không tìm thấy sản phẩm"
                    ))
                    .build();
        }

        userSession.getShoppingCart().add(product.get());

        return Response.ok(cartBody()).build();
    }

    // Hàm hỗ trợ tạo payload trả về cho giỏ hàng
    private Map<String, Object> cartBody() {
        ShoppingCart cart = userSession.getShoppingCart();
        return Map.of(
                "items", cart.getItems(),
                "itemCount", cart.getItemCount(),
                "total", cart.getTotal()
        );
    }

    // Hàm hỗ trợ trả về lỗi chưa đăng nhập
    private Response unauthorized() {
        return Response.status(401)
                .entity(Map.of(
                        "message", "Bạn chưa đăng nhập"
                ))
                .build();
    }

    // Record nhận dữ liệu request thêm sản phẩm
    public record AddItemRequest(long productId) {
    }
}