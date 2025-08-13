package com.CuraSys.controller;

import java.net.Authenticator;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.CuraSys.dto.SigninResponse;
import com.CuraSys.entities.Doctor;
import com.CuraSys.entities.User;
import com.CuraSys.repository.DoctorRepository;
import com.CuraSys.repository.UserRepository;
import com.CuraSys.security.JwtUtils;
import com.CuraSys.service.UserService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/users")
public class UserController {

   // private final controller.DoctorController doctorController;

	@Autowired
	public UserService userService;
	
	@Autowired
	private AuthenticationManager authMgr;

	@Autowired
	private JwtUtils jwtUtils;
	
	@Autowired
	public UserRepository userRepository;

	@Autowired
	DoctorRepository doctorRepository;
//    UserController(controller.DoctorController doctorController) {
//        this.doctorController = doctorController;
//    }
	
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
	@PostMapping
	public ResponseEntity<?>authenticateUser(@Valid @RequestBody User usr){
		System.out.println("in sign in");
		UsernamePasswordAuthenticationToken token=
				new UsernamePasswordAuthenticationToken(usr.getEmail(), usr.getPassword());
		User user =userRepository.findByEmail(usr.getEmail()).orElseThrow();
		System.out.println(user);
		
		Authentication verifiedToken =authMgr.authenticate(token);
		String jwt=jwtUtils.generateJwtToken(verifiedToken);
		
		String role=verifiedToken.getAuthorities().stream()
				.map(grantedAuthority ->grantedAuthority.getAuthority())
				.findFirst()
				.orElse("UNKNOWn");
		Doctor doctorDetails =null;
		if("Doctor".equals(role)) {
			doctorDetails=doctorRepository.findByUserId(user.getUserId()).orElse(null);
		}
		
		SigninResponse resp=new SigninResponse(jwt,"Successfull Auth !!!",role,user.getUserId(),user);
		SigninResponse resp1=new SigninResponse(jwt,"Successfull Auth !!!",role,user.getUserId(),doctorDetails,user);
		
		return ResponseEntity.status(HttpStatus.CREATED)
	            .body("PATIENT".equals(role) ? resp : resp1);
		
	}
}

