package com.haarmk.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.haarmk.exception.JobException;
import com.haarmk.exception.UserException;
import com.haarmk.handleUpload.PhotoUploadHandler;
import com.haarmk.handleUpload.ResumeUploadHandler;
import com.haarmk.model.Job;
import com.haarmk.model.User;
import com.haarmk.service.JobService;
import com.haarmk.service.UserService;

@RestController
@RequestMapping("/users")
@CrossOrigin(value = "*")
public class UserController {

	@Autowired
	private UserService userservice;
	
	@Autowired
	private ResumeUploadHandler resumeUploadHandler;
	
	@Autowired
	private PhotoUploadHandler photoUploadHandler;
	
	@Autowired
	private JobService jobservice;

	@PostMapping("/signup")
	public ResponseEntity<User> adduser(@RequestBody User user) throws UserException{

		User adduser = userservice.adduser(user);

		return new ResponseEntity<User>(adduser, HttpStatus.OK);

	}

	@PostMapping("/upload-resume")
	public ResponseEntity<String> uploadResume(@RequestParam("resume") MultipartFile resume){
		if(resume.isEmpty()) {
			return new ResponseEntity<String>("no file is selected", HttpStatus.OK);
		}
		boolean upload = resumeUploadHandler.uploadResume(resume);
		if(upload) {
			return new ResponseEntity<String>(ServletUriComponentsBuilder.fromCurrentContextPath().path("/resumes/").path(resume.getOriginalFilename()).toUriString(),HttpStatus.OK);
		}
		return new ResponseEntity<String>("not uploaded!!",HttpStatus.OK);
		
	}
	
	@PostMapping("/upload-photo")
	public ResponseEntity<String> uploadPhoto(@RequestParam("photo") MultipartFile photo){
		if(photo.isEmpty()) {
			return new ResponseEntity<String>("no file is selected", HttpStatus.OK);
		}
		boolean upload = photoUploadHandler.uploadPhoto(photo);
		if(upload) {
//			return new ResponseEntity<String>("uploaded",HttpStatus.OK);
			return new ResponseEntity<String>(ServletUriComponentsBuilder.fromCurrentContextPath().path("/images/").path(photo.getOriginalFilename()).toUriString(),HttpStatus.OK);
		}
		return new ResponseEntity<String>("not uploaded!!",HttpStatus.OK);
		
	}

	@PostMapping("/applyForJob")
	public ResponseEntity<User> applyforajob(@RequestParam Integer userid, Integer jobid) throws UserException {

		User addjob = userservice.Applyforajob(userid, jobid);

		return new ResponseEntity<User>(addjob, HttpStatus.OK);

	}

	@GetMapping("/getUsersAppliedJobs")
	public ResponseEntity<List<Job>> getjobsforauser(@RequestParam Integer userid) throws JobException, UserException {

		List<Job> addjob = userservice.getjobsauser(userid);

		return new ResponseEntity<List<Job>>(addjob, HttpStatus.OK);

	}
	
	@GetMapping("/getAllJobs")
	public ResponseEntity<List<Job> > getjob() throws JobException{
		
		List<Job> jobs =   jobservice.getjobs() ;
		
		return new ResponseEntity<List<Job> >(jobs , HttpStatus.OK);
		
	}

}
