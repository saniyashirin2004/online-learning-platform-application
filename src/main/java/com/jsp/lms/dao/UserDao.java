package com.jsp.lms.dao;

import java.util.Optional;

import org.springframework.stereotype.Repository;

import com.jsp.lms.entity.User;
import com.jsp.lms.repository.UserRepository;

import lombok.AllArgsConstructor;

@Repository
@AllArgsConstructor
public class UserDao {

	private final UserRepository userRepository;

	public User save(User user) {
		return userRepository.save(user);
	}

	public Optional<User> findByEmail(String email) {
		return userRepository.findByEmail(email);
	}

	public boolean existsByEmail(String email) {
		return userRepository.findByEmail(email).isPresent();
	}

}
