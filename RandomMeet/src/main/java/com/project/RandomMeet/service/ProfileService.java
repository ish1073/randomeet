package com.project.RandomMeet.service;

import java.util.List;
import java.util.Optional;

import com.project.RandomMeet.model.Profile;
import com.project.RandomMeet.repository.ProfileRepository;

public interface ProfileService {
	List<Profile> getAll();
	Profile updateProfile(String emailid, Profile profileDetails);
    Profile getProfile(String emailid);
}
