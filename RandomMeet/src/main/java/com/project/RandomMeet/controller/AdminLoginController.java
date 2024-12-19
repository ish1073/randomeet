package com.project.RandomMeet.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.RandomMeet.model.AdminLogin;
import com.project.RandomMeet.service.AdminLoginService;

@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("/admin/")
public class AdminLoginController {
	@Autowired
	AdminLoginService admserv;
	@GetMapping("/login/{emailid}/{password}")
	public List<AdminLogin> login(@PathVariable("emailid")String emailid,@PathVariable("password")String password){
		return admserv.login(emailid, password);
	}
}
