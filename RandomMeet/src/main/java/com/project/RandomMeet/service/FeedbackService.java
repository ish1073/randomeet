package com.project.RandomMeet.service;
import java.util.List;

import com.project.RandomMeet.model.Feedback;
import com.project.RandomMeet.model.Registration;
public interface FeedbackService {
	Feedback insertrecord(Feedback r);
	List<Feedback> getAll();
	void del(int ri);
	Feedback updaterecord(int i,Feedback r);
}
