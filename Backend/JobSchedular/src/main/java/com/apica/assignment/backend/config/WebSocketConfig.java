package com.apica.assignment.backend.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.config.annotation.WebSocketConfigurer;
import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;

import com.apica.assignment.backend.websocket.JobWebSocketHandler;

@Configuration
@EnableWebSocket
public class WebSocketConfig implements WebSocketConfigurer {

    private final JobWebSocketHandler jobWebSocketHandler;

    @Autowired
    public WebSocketConfig(JobWebSocketHandler jobWebSocketHandler) {
        this.jobWebSocketHandler = jobWebSocketHandler;
    }

    @Override
    public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
        registry.addHandler(jobWebSocketHandler, "/ws").setAllowedOrigins("*");
    }
}
