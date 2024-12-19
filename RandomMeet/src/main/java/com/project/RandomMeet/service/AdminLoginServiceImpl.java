package com.project.RandomMeet.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.project.RandomMeet.model.AdminLogin;
import com.project.RandomMeet.repository.AdminLoginRepository;

@Service
public class AdminLoginServiceImpl implements AdminLoginService{
	@Autowired
	@Qualifier("admRepo")
	private AdminLoginRepository admRepo;
	@Override
	public List<AdminLogin> login(String emailid, String password) {
		// TODO Auto-generated method stub
		return admRepo.findAllByEmailAndPassword(emailid, password);
	}

}
