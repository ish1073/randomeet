package com.project.RandomMeet.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.RandomMeet.model.Event;
public interface EventRepository extends JpaRepository<Event, Long>{
    List<Event> findByCategory(String category);
}
