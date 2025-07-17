package com.project.RandomMeet.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.RandomMeet.model.Notification;
import com.project.RandomMeet.repository.NotificationRepository;

@Service
public class NotificationServiceImpl implements NotificationService {
    @Autowired
    private NotificationRepository notificationRepository;

    @Override
    public List<Notification> getAllNotifications() {
        return notificationRepository.findAll();
    }

    @Override
    public List<Notification> getUnseenNotifications() {
        return notificationRepository.findBySeenFalse();
    }

    @Override
    public Notification addNotification(Notification notification) {
        return notificationRepository.save(notification);
    }

    @Override
    public void markAsSeen(Long id) {
        Notification notification = notificationRepository.findById(id).orElse(null);
        if (notification != null) {
            notification.setSeen(true);
            notificationRepository.save(notification);
        }
    }
}

