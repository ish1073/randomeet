package com.project.RandomMeet.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.project.RandomMeet.model.Feedback;
import com.project.RandomMeet.model.Registration;
import com.project.RandomMeet.repository.FeedbackRepository;
import com.project.RandomMeet.repository.RegistrationRepository;

@Service
public class FeedbackServiceImpl implements FeedbackService {
	@Autowired
	@Qualifier("feedRepo")
	private FeedbackRepository feedRepo;
	@Override
	public Feedback insertrecord(Feedback r) {
		return feedRepo.save(r);
	}

	@Override
	public List<Feedback> getAll() {
		return feedRepo.findAll();
	}

	@Override
	public void del(int ri) {
		feedRepo.deleteById(ri);
	}

	@Override
	public Feedback updaterecord(int i, Feedback r) {
		Optional<Feedback> opt=feedRepo.findById(i);
		if(opt.isPresent()) {
			Feedback fold=opt.get();
			fold.setEmailid(r.getEmailid());
			fold.setMessage(r.getMessage());
			return feedRepo.save(fold);
		}
		return null;
	}

}
