package com.project.RandomMeet.controller;

import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.RandomMeet.model.GameEntry;
import com.project.RandomMeet.service.GameService;

@RestController
@RequestMapping("/api/game")
@CrossOrigin(origins = "http://localhost:4200") // Enable CORS for frontend communication
public class GameController {

    @Autowired
    private GameService gameService;

    @PostMapping("/submit")
    public void submitStatements(@RequestBody GameEntry entry) {
        gameService.saveEntry(entry);
    }

    @GetMapping("/opponent/{playerId}")
    public Map<String, Object> getOpponentData(@PathVariable String playerId) {
        GameEntry entry = gameService.getEntryById(playerId)
                .orElseThrow(() -> new RuntimeException("Player not found with ID: " + playerId));

        Map<String, Object> response = new HashMap<>();
        response.put("truths", Arrays.asList(entry.getTruth1(), entry.getTruth2()));
        response.put("lie", entry.getLie());

        return response;
    }
}
