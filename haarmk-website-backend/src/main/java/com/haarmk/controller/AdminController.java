package com.haarmk.controller;

import java.security.Principal;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.haarmk.exception.JobException;
import com.haarmk.exception.UserException;
import com.haarmk.model.Job;
import com.haarmk.model.User;
import com.haarmk.service.JobService;

@RestController
@RequestMapping("/admin")
public class AdminController {
	
	@Autowired
	private JobService jobservice;

	@PostMapping("/postJob")
	public ResponseEntity<Job> addjob(@RequestBody Job job) throws JobException{
		
		Job addjob =   jobservice.addjob(job) ;
		
		return new ResponseEntity<Job>(addjob , HttpStatus.OK);
		
	}
	
	
	@GetMapping("/getApplicantsForJob")
	public ResponseEntity<List<User> > getapplicantsforajob (@RequestParam Integer jobid) throws JobException ,UserException{
		
		List<User> users =   jobservice.getapplicantsforajob(jobid) ;
		
		return new ResponseEntity<List<User> >(users , HttpStatus.OK);
		
	}
	
	
	
//	@GetMapping("/test")
//	public String test(Principal principal) {
//	
//	System.out.println();
//		System.out.println("45216--> ");
//		return "tested";
//		
//		
//	}
	
	
	
}
