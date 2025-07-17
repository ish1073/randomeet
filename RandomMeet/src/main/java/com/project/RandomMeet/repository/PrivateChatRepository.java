package com.project.RandomMeet.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.project.RandomMeet.model.PrivateChatMessage;

import java.util.List;

public interface PrivateChatRepository extends JpaRepository<PrivateChatMessage, Long> {
    List<PrivateChatMessage> findBySenderAndReceiverOrReceiverAndSender(String s1, String r1, String s2, String r2);
}
