package com.CuraSys.repository;



import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.CuraSys.entities.Role;
import com.CuraSys.entities.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
	Optional<User> findByEmail(String email);
	
	// In UserRepository.java (Assuming you're using Spring Data JPA)

	public List<User> findByRole(Role role);
    //query for getting total count where role is patient   
	@Query("SELECT COUNT(u) FROM User u WHERE u.role = 'PATIENT'")
    long getPatientCount();
}
