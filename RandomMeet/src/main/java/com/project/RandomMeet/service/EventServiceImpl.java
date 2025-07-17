package com.project.RandomMeet.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.project.RandomMeet.model.Event;
import com.project.RandomMeet.repository.EventRepository;

@Service
public class EventServiceImpl implements EventService{
	 private final EventRepository eventRepository;

	    public EventServiceImpl(EventRepository eventRepository) {
	        this.eventRepository = eventRepository;
	    }

	    @Override
	    public List<Event> getEvents() {
	        return eventRepository.findAll();
	    }

	    @Override
	    public List<Event> getEventsByCategory(String category) {
	        return eventRepository.findByCategory(category);
	    }

	    @Override
	    public Event addEvent(Event event) {
	        return eventRepository.save(event);
	    }
	}