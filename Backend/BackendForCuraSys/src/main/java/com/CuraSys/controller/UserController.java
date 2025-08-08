package com.CuraSys.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.CuraSys.entities.User;
import com.CuraSys.repository.UserRepository;
import com.CuraSys.service.UserService;

@RestController
@RequestMapping("/users")
public class UserController {

	@Autowired
	public UserService userService;
	
	@Autowired
	public UserRepository userRepository;
	
//	@Autowired
//	private PasswordEncoder passwordEncoder; 

	
	@GetMapping("/patients/count")
	public long getPatientCount() {
		return userService.getPatientCounts();
	}
	
	@PostMapping("/signup")
	public ResponseEntity<?> userSignup(@Validated @RequestBody User u){
		System.out.print("in signup");
		return ResponseEntity
				.status(HttpStatus.CREATED)
				.body(userService.userRegistration(u));
				
	}
}
