package com.jsp.lms.controller;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jsp.lms.dto.ApiResponse;
import com.jsp.lms.dto.CourseRequest;
import com.jsp.lms.entity.Course;
import com.jsp.lms.service.CourseService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/courses")
//@CrossOrigin(origins = "http://localhost:5173")
@AllArgsConstructor
public class CourseController {

	private final CourseService courseService;

	@PostMapping
	public ApiResponse<Course> create(@RequestBody CourseRequest request) {
		return courseService.createCourse(request);
	}

	@GetMapping
	public ApiResponse<List<Course>> getAll() {
		return courseService.getAllCourses();
	}

	@GetMapping("/{id}")
	public ApiResponse<Course> getById(@PathVariable int id) {
		return courseService.getCourseById(id);
	}

	@PutMapping("/{id}")
	public ApiResponse<Course> update(@PathVariable int id, @RequestBody CourseRequest request) {
		return courseService.updateCourse(id, request);
	}

	@DeleteMapping("/{id}")
	public ApiResponse<Course> delete(@PathVariable int id) {
		return courseService.deleteCourse(id);
	}

}
