package com.jsp.lms.service;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.jsp.lms.dao.UserDao;
import com.jsp.lms.dto.ApiResponse;
import com.jsp.lms.dto.LoginRequest;
import com.jsp.lms.entity.User;
import com.jsp.lms.exception.InvalidCredentialsException;
import com.jsp.lms.exception.ResourceNotFoundException;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@Service
public class AuthService {

	private final UserDao userDao;

	public ApiResponse<User> register(User user) {
		if (userDao.existsByEmail(user.getEmail())) {
			throw new InvalidCredentialsException("Email already registered");
		}
		return new ApiResponse<User>(true, "User registered successfully", userDao.save(user));
	}

	public ApiResponse<User> login(LoginRequest request) {
		Optional<User> optional = userDao.findByEmail(request.getEmail());

		if (optional.isPresent()) {
			User user = optional.get();
			if (!user.getPassword().equals(request.getPassword())) {
				throw new InvalidCredentialsException("Invalid email or password");
			}
			return new ApiResponse<User>(true, "Login successful", user);
		}
		throw new ResourceNotFoundException("User Not Found");

	}

}
