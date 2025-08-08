package com.CuraSys.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.CuraSys.repository.UserRepository;

@Service
@Transactional
public class  UserServiceImpl implements UserService {
 
	@Autowired
	public UserRepository userRepository;

	@Override
	public long getPatientCounts() {
		return userRepository.getPatientCount();
	}
	
	
}
