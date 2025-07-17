package com.project.RandomMeet.controller;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.project.RandomMeet.model.Profile;
import com.project.RandomMeet.model.Registration;
import com.project.RandomMeet.service.ProfileService;

@RestController
@RequestMapping("/api/profile")
@CrossOrigin(origins = "http://localhost:4200") 
public class ProfileController {
	@Autowired
    private ProfileService profileService;
    @GetMapping("/profiles")
	public List<Profile> handleget(){
		return profileService.getAll();
	}
    @PutMapping("/{emailid}")
    public ResponseEntity<Profile> updateProfile(@PathVariable String emailid, @RequestBody Profile profileDetails) {
        return ResponseEntity.ok(profileService.updateProfile(emailid, profileDetails));
    }

    @GetMapping("/{emailid}")
    public ResponseEntity<Profile> getProfile(@PathVariable String emailid) {
        return ResponseEntity.ok(profileService.getProfile(emailid));
    }
}
