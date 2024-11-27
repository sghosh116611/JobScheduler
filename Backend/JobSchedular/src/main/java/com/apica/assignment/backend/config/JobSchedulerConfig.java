package com.apica.assignment.backend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import com.apica.assignment.backend.service.JobScheduler;
import com.apica.assignment.backend.service.jobschedular.ShortestJobFirst;

@Configuration
public class JobSchedulerConfig {

	@Bean
	public JobScheduler jobScheduler() {
		return new ShortestJobFirst();
	}

	@Bean
	public CorsFilter corsFilter() {
		UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
		CorsConfiguration config = new CorsConfiguration();
		config.setAllowCredentials(true);
		config.addAllowedOriginPattern("*"); // Allow any origin
		config.addAllowedHeader("*"); // Allow any headers
		config.addAllowedMethod("*"); // Allow any HTTP method
		source.registerCorsConfiguration("/**", config);
		return new CorsFilter(source);
	}
}
