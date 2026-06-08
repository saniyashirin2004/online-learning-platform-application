package com.jsp.lms.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.jsp.lms.dao.ContactDao;
import com.jsp.lms.dto.ApiResponse;
import com.jsp.lms.dto.ContactRequest;
import com.jsp.lms.entity.Contact;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class ContactService {

	private final ContactDao contactDao;

	public ApiResponse<Contact> saveContact(ContactRequest request) {

		Contact contact = new Contact();
		contact.setName(request.getName());
		contact.setEmail(request.getEmail());
		contact.setPhone(request.getPhone());
		contact.setMessage(request.getMessage());
		return new ApiResponse<Contact>(true, "Contact details submitted successfully", contactDao.save(contact));
	}

	public ApiResponse<List<Contact>> getAllContacts() {
		List<Contact> contacts = contactDao.findAll();
		return new ApiResponse<List<Contact>>(true, "Contacts fetched successfully", contacts);
	}
}
