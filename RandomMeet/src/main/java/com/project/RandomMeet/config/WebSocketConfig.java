package com.project.RandomMeet.config;
import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.config.annotation.*;

@Configuration
@EnableWebSocketMessageBroker
public class WebSocketConfig implements WebSocketMessageBrokerConfigurer {

    @Override
    public void configureMessageBroker(MessageBrokerRegistry config) {
        config.enableSimpleBroker("/topic", "/queue"); // topics = broadcast, queues = private
        config.setApplicationDestinationPrefixes("/app");
        config.setUserDestinationPrefix("/user"); // for private messaging
    }

    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) {
        registry.addEndpoint("/chat-websocket").setAllowedOrigins("http://localhost:4200").withSockJS(); // main endpoint
    }
}
