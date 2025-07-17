package com.project.RandomMeet.service;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.RandomMeet.model.GameEntry;
import com.project.RandomMeet.repository.GameEntryRepository;

@Service
public class GameService {

    @Autowired
    private GameEntryRepository repository;

    public void saveEntry(GameEntry entry) {
        repository.save(entry);
    }

    public Optional<GameEntry> getEntryById(String playerId) {
        return repository.findById(playerId);
    }
}

