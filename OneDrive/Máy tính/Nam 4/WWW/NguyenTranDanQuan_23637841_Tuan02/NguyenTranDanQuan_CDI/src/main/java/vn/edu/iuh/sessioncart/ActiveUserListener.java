package vn.edu.iuh.sessioncart;

import jakarta.servlet.ServletContextEvent;
import jakarta.servlet.ServletContextListener;
import jakarta.servlet.annotation.WebListener;
import jakarta.servlet.http.HttpSessionEvent;
import jakarta.servlet.http.HttpSessionListener;

import java.util.concurrent.atomic.AtomicInteger;

@WebListener
public class ActiveUserListener
        implements ServletContextListener, HttpSessionListener {

    // Tên attribute lưu trong Application Scope
    private static final String ACTIVE_USERS_ATTRIBUTE = "activeUsersCount";

    // Biến đếm số session đang hoạt động
    private static final AtomicInteger activeSessions =
            new AtomicInteger(0);

    // Khi ứng dụng Web được khởi động
    @Override
    public void contextInitialized(ServletContextEvent sce) {

        sce.getServletContext().setAttribute(
                ACTIVE_USERS_ATTRIBUTE,
                activeSessions
        );
    }

    // Khi ứng dụng Web bị tắt
    @Override
    public void contextDestroyed(ServletContextEvent sce) {

        sce.getServletContext().removeAttribute(
                ACTIVE_USERS_ATTRIBUTE
        );
    }

    // Khi một session mới được tạo
    @Override
    public void sessionCreated(HttpSessionEvent se) {

        AtomicInteger activeUsers =
                (AtomicInteger) se.getSession()
                        .getServletContext()
                        .getAttribute(ACTIVE_USERS_ATTRIBUTE);

        if (activeUsers != null) {
            activeUsers.incrementAndGet();
        }
    }

    // Khi session bị hủy hoặc timeout
    @Override
    public void sessionDestroyed(HttpSessionEvent se) {

        AtomicInteger activeUsers =
                (AtomicInteger) se.getSession()
                        .getServletContext()
                        .getAttribute(ACTIVE_USERS_ATTRIBUTE);

        if (activeUsers != null && activeUsers.get() > 0) {
            activeUsers.decrementAndGet();
        }
    }
}