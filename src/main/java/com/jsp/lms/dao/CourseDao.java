package com.jsp.lms.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Repository;

import com.jsp.lms.entity.Course;
import com.jsp.lms.repository.CourseRepository;

import lombok.AllArgsConstructor;

@Repository
@AllArgsConstructor
public class CourseDao {

	private final CourseRepository courseRepository;

	public Course save(Course course) {
		return courseRepository.save(course);
	}

	public List<Course> findAll() {
		return courseRepository.findAll();
	}

	public Optional<Course> findById(int id) {
		return courseRepository.findById(id);
	}

	public void deleteById(int id) {
		courseRepository.deleteById(id);
	}

}
