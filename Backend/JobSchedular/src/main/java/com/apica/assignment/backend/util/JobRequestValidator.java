package com.apica.assignment.backend.util;

import com.apica.assignment.backend.dto.JobRequest;

public class JobRequestValidator {
	/**
	 * Validates a JobRequest object.
	 *
	 * @param request the JobRequest to validate.
	 * @return true if the request is invalid; otherwise, false.
	 */
	public static boolean isInvalidJobRequest(JobRequest request) {
		return request.getName() == null || request.getName().isBlank() || request.getDuration() <= 0;
	}
}
