package com.project.RandomMeet.service;

import java.util.List;

import com.project.RandomMeet.model.Notification;

public interface NotificationService {
	List<Notification> getAllNotifications();
    List<Notification> getUnseenNotifications();
    Notification addNotification(Notification notification);
    void markAsSeen(Long id);
}
