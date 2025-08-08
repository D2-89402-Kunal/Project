package com.CuraSys.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.CuraSys.repository.UserRepository;
import com.CuraSys.service.UserService;

@RestController
@RequestMapping("/users")
public class UserController {

	@Autowired
	public UserService userService;
	
	@Autowired
	public UserRepository userRepository;
	
	@GetMapping("/patients/count")
	public long getPatientCount() {
		return userService.getPatientCounts();
	}
}
