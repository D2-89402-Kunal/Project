package com.CuraSys.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.CuraSys.entities.User;
import com.CuraSys.repository.UserRepository;

@Service
@Transactional
public class  UserServiceImpl implements UserService {
 
	@Autowired
	public UserRepository userRepository;

//	@Autowired
//	private PasswordEncoder encoder;
	
	@Override
	public long getPatientCounts() {
		return userRepository.getPatientCount();
	}

	@Override
	public User userRegistration(User u) {
		u.setPhoneNumber("+91"+u.getPhoneNumber());
		//u.setPassword(encoder.encode(u.getPassword()));
		return userRepository.save(u);
	}
	
	
}
