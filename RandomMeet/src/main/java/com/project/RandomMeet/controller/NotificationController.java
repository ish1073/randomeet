package com.project.RandomMeet.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.RandomMeet.model.Notification;
import com.project.RandomMeet.service.NotificationService;

@RestController
@RequestMapping("/api/notifications")
@CrossOrigin(origins="http://localhost:4200")
public class NotificationController {
    @Autowired
    private NotificationService notificationService;

    @GetMapping
    public List<Notification> getAllNotifications() {
        return notificationService.getAllNotifications();
    }

    @GetMapping("/unseen")
    public List<Notification> getUnseenNotifications() {
        return notificationService.getUnseenNotifications();
    }

    @PostMapping
    public ResponseEntity<Notification> addNotification(@RequestBody Notification notification) {
        return ResponseEntity.ok(notificationService.addNotification(notification));
    }

    @PutMapping("/{id}/seen")
    public ResponseEntity<Void> markAsSeen(@PathVariable Long id) {
        notificationService.markAsSeen(id);
        return ResponseEntity.ok().build();
    }
}

