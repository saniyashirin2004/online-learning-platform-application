package com.jsp.lms.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.jsp.lms.dao.CourseDao;
import com.jsp.lms.dto.ApiResponse;
import com.jsp.lms.dto.CourseRequest;
import com.jsp.lms.entity.Course;
import com.jsp.lms.exception.ResourceNotFoundException;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class CourseService {

	private final CourseDao courseDao;

	public ApiResponse<Course> createCourse(CourseRequest request) {
		Course course = new Course();
		course.setCourseName(request.getCourseName());
		course.setTrainerName(request.getTrainerName());
		course.setDuration(request.getDuration());
		course.setStartDate(request.getStartDate());

		return new ApiResponse<Course>(true, "Course created successfully", courseDao.save(course));
	}

	public ApiResponse<List<Course>> getAllCourses() {
		List<Course> courses = courseDao.findAll();
		return new ApiResponse<List<Course>>(true, "Courses fetched successfully", courses);
	}

	public ApiResponse<Course> getCourseById(int id) {
		Optional<Course> optional = courseDao.findById(id);
		if (optional.isPresent()) {
			Course course = optional.get();
			return new ApiResponse<Course>(true, "Course fetched", course);
		}
		throw new ResourceNotFoundException("Course not found with id: " + id);
	}

	public ApiResponse<Course> updateCourse(int id, CourseRequest request) {
		Optional<Course> optional = courseDao.findById(id);
		if (optional.isPresent()) {
			Course course = optional.get();
			course.setCourseName(request.getCourseName());
			course.setTrainerName(request.getTrainerName());
			course.setDuration(request.getDuration());
			course.setStartDate(request.getStartDate());
			return new ApiResponse<Course>(true, "Course updated successfully", courseDao.save(course));
		}
		throw new ResourceNotFoundException("Course not found with id: " + id);
	}

	public ApiResponse<Course> deleteCourse(int id) {
		courseDao.deleteById(id);
		return new ApiResponse<Course>(true, "Course deleted successfully", null);
	}

}
