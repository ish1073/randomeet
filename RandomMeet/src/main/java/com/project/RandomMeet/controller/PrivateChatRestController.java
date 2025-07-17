package com.project.RandomMeet.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.RandomMeet.model.PrivateChatMessage;
import com.project.RandomMeet.repository.PrivateChatRepository;

@RestController
@RequestMapping("/api/private-chat")
@CrossOrigin(origins="http://localhost:4200")
public class PrivateChatRestController {

    @Autowired
    private PrivateChatRepository repo;

    @GetMapping("/history/{user1}/{user2}")
    public List<PrivateChatMessage> getChat(@PathVariable String user1, @PathVariable String user2) {
        return repo.findBySenderAndReceiverOrReceiverAndSender(user1, user2, user1, user2);
    }
}
