package com.project.RandomMeet.model;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
@Entity
public class Registration {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int regid;
	private String emailid,address,gender,contact,password;
	public Registration() {
		super();
	}
	public Registration(String username, String address, String gender, String contact, String emailid,
			String password, String interest) {
		super();
		this.address = address;
		this.gender = gender;
		this.contact = contact;
		this.emailid = emailid;
		this.password = password;
	}
	public int getRegid() {
		return regid;
	}
	public void setRegid(int regid) {
		this.regid = regid;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getContact() {
		return contact;
	}
	public void setContact(String contact) {
		this.contact = contact;
	}
	public String getEmailid() {
		return emailid;
	}
	public void setEmailid(String emailid) {
		this.emailid = emailid;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}

	
}
