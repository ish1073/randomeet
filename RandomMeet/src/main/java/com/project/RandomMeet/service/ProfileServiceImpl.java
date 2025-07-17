package com.project.RandomMeet.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.project.RandomMeet.model.Profile;
import com.project.RandomMeet.repository.ProfileRepository;
@Service
public class ProfileServiceImpl implements ProfileService {
	@Autowired
	private ProfileRepository proRepo;

	@Override
	public List<Profile> getAll() {
		// TODO Auto-generated method stub
		return proRepo.findAll();
	}
	
	@Override
    public Profile updateProfile(String emailid, Profile profileDetails) {
        Profile profile = proRepo.findByEmailid(emailid)
        		.orElse(new Profile());
        profile.setEmailid(profileDetails.getEmailid());
        profile.setUsername(profileDetails.getUsername());
        profile.setBio(profileDetails.getBio());
        profile.setThemeColor(profileDetails.getThemeColor());
        profile.setInterest(profileDetails.getInterest());
        return proRepo.save(profile);
    }

    @Override
    public Profile getProfile(String emailid) {
        return proRepo.findByEmailid(emailid)
                .orElse(new Profile());
    }
}
