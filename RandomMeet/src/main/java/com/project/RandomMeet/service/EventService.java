package com.project.RandomMeet.service;

import java.util.List;

import com.project.RandomMeet.model.Event;

public interface EventService {
	List<Event> getEvents();
    List<Event> getEventsByCategory(String category);
    Event addEvent(Event event);
}
