package com.jsp.lms.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jsp.lms.entity.Course;

public interface CourseRepository extends JpaRepository<Course, Integer> {

}
