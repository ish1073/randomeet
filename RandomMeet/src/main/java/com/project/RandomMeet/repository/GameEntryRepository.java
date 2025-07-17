package com.project.RandomMeet.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.project.RandomMeet.model.GameEntry;

public interface GameEntryRepository extends JpaRepository<GameEntry, String> {
}