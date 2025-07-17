package com.project.RandomMeet.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.RandomMeet.model.Profile;
@Repository
public interface ProfileRepository extends JpaRepository<Profile, Long>{
    Optional<Profile> findByEmailid(String emailid);
		
}
