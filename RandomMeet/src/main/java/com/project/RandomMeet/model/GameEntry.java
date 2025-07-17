package com.project.RandomMeet.model;

import jakarta.persistence.*;
import java.util.UUID;

import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "game")
public class GameEntry {

    @Id
    private String playerId;
    private String truth1;
    private String truth2;
    private String lie;

    // Getters and Setters
    public String getPlayerId() {
        return playerId;
    }

    public void setPlayerId(String playerId) {
        this.playerId = playerId;
    }

	
	public String getTruth1() {
		return truth1;
	}

	public void setTruth1(String truth1) {
		this.truth1 = truth1;
	}

	public String getTruth2() {
		return truth2;
	}

	public void setTruth2(String truth2) {
		this.truth2 = truth2;
	}

	

	public String getLie() {
		return lie;
	}

	public void setLie(String lie) {
		this.lie = lie;
	}


   
}