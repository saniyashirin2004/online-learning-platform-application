package com.jsp.lms.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jsp.lms.dto.ApiResponse;
import com.jsp.lms.dto.ContactRequest;
import com.jsp.lms.entity.Contact;
import com.jsp.lms.service.ContactService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/contact")
//@CrossOrigin(origins = "http://localhost:5173")
@AllArgsConstructor
public class ContactController {

	private final ContactService contactService;

	@PostMapping
	public ApiResponse<Contact> submit(@RequestBody ContactRequest request) {
		return contactService.saveContact(request);
	}

	@GetMapping
	public ApiResponse<List<Contact>> getAll() {
		return contactService.getAllContacts();
	}

}
