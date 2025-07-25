package com.project.RandomMeet.service;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import com.project.RandomMeet.model.Registration;
import com.project.RandomMeet.repository.RegistrationRepository;
@Service
public class RegistrationServiceImpl implements RegistrationService {
	@Autowired
	@Qualifier("regRepo")
	private RegistrationRepository regRepo;
	@Override
	public Registration insertrecord(Registration r) {
		return regRepo.save(r);
	}

	@Override
	public List<Registration> getAll() {
		return regRepo.findAll();
	}

	@Override
	public void del(int ri) {
		regRepo.deleteById(ri);
	}

	@Override
	public Registration updaterecord(int i,Registration r) {
		Optional<Registration> opt=regRepo.findById(i);
		if(opt.isPresent()) {
			Registration rold=opt.get();
			rold.setAddress(r.getAddress());
			rold.setGender(r.getGender());
			rold.setContact(r.getContact());
			rold.setEmailid(r.getEmailid());
			rold.setPassword(r.getPassword());
			return regRepo.save(rold);
		}
		return null;
	}

	@Override
	public List<Registration> login(String emailid, String password) {
		return regRepo.findAllByEmailAndPassword(emailid, password);
	}

	
}
