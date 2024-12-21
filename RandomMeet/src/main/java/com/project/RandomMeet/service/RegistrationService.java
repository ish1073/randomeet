package com.project.RandomMeet.service;
import java.util.List;
import com.project.RandomMeet.model.Registration;
public interface RegistrationService {
	Registration insertrecord(Registration r);
	List<Registration> getAll();
	void del(int ri);
	Registration updaterecord(int i,Registration r);
	List<Registration> login(String emailid,String password);

	
}
