package com.CuraSys.service;

import com.CuraSys.entities.User;

public interface UserService {


long getPatientCounts();

User userRegistration(User u);
  
}
