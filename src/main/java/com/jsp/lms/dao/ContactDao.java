package com.jsp.lms.dao;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.jsp.lms.entity.Contact;
import com.jsp.lms.repository.ContactRepository;

import lombok.AllArgsConstructor;

@Repository
@AllArgsConstructor
public class ContactDao {

	private final ContactRepository repository;

	public Contact save(Contact contact) {
		return repository.save(contact);
	}

	public List<Contact> findAll() {
		return repository.findAll();
	}

}
