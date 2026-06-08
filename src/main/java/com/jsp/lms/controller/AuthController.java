package com.jsp.lms.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jsp.lms.dto.ApiResponse;
import com.jsp.lms.dto.LoginRequest;
import com.jsp.lms.entity.User;
import com.jsp.lms.service.AuthService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/auth")
//@CrossOrigin(origins = "http://localhost:5173")
@AllArgsConstructor
public class AuthController {

	private final AuthService authService;

	@PostMapping("/register")
	public ApiResponse<User> register(@RequestBody User user) {
		return authService.register(user);
	}

	@PostMapping("/login")
	public ApiResponse<User> login(@RequestBody LoginRequest request) {
		return authService.login(request);
	}

}
