package com.project.RandomMeet.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

import com.project.RandomMeet.model.PrivateChatMessage;
import com.project.RandomMeet.repository.PrivateChatRepository;

import java.time.LocalDateTime;

@Controller
public class PrivateChatWebSocketController {

    @Autowired
    private PrivateChatRepository repo;

    @Autowired
    private SimpMessagingTemplate messagingTemplate;

    @MessageMapping("/private-message")
    public void receivePrivateMessage(PrivateChatMessage message) {
        message.setTimestamp(LocalDateTime.now());
        PrivateChatMessage saved = repo.save(message);

        // Send to sender and receiver
        messagingTemplate.convertAndSendToUser(saved.getSender(), "/queue/messages", saved);
        messagingTemplate.convertAndSendToUser(saved.getReceiver(), "/queue/messages", saved);
    }
}
