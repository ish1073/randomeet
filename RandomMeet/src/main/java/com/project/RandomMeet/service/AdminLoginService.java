package com.project.RandomMeet.service;

import java.util.List;

import com.project.RandomMeet.model.AdminLogin;

public interface AdminLoginService {
	List<AdminLogin> login(String emailid,String password);
}
