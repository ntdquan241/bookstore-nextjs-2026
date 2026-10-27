package vn.edu.iuh.cartapi.api;

import jakarta.enterprise.context.RequestScoped;
import jakarta.inject.Inject;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import vn.edu.iuh.cartapi.service.ProductCatalog;
import vn.edu.iuh.cartapi.session.UserSession;
import java.util.Map;

@Path("/products")
@Produces(MediaType.APPLICATION_JSON)
@RequestScoped
public class ProductResource {

    @Inject
    ProductCatalog productCatalog;

    @Inject
    UserSession userSession;

    @GET
    public Response findAll() {
        // Kiểm tra trạng thái đăng nhập của user trong session
        if (!userSession.isLoggedIn()) {
            return Response.status(401) // Trả về mã lỗi 401 Unauthorized
                    .entity(Map.of(
                            "message", "Bạn chưa đăng nhập"
                    ))
                    .build();
        }

        // Nếu đã đăng nhập, trả về danh sách toàn bộ sản phẩm (mã 200 OK)
        return Response.ok(
                productCatalog.findAll()
        ).build();
    }
}