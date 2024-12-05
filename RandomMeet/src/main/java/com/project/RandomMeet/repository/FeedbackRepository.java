package com.project.RandomMeet.repository;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.project.RandomMeet.model.Feedback;
@Repository
@Qualifier("feedRepo")
public interface FeedbackRepository extends JpaRepository<Feedback, Integer> {
	
}
