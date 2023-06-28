package com.haarmk.serviceimpl;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import com.haarmk.exception.JobException;
import com.haarmk.exception.UserException;
import com.haarmk.model.Job;
import com.haarmk.model.Role;
import com.haarmk.model.RoleName;
import com.haarmk.model.User;
import com.haarmk.repository.JobRepository;
import com.haarmk.repository.RoleRepository;
import com.haarmk.repository.UserRepository;
import com.haarmk.service.UserService;

import io.jsonwebtoken.lang.Collections;

@Service
public class UserServiceImpl implements UserService,UserDetailsService {
	
	@Autowired
	private UserRepository userrepo;
	
	@Autowired
	private JobRepository jobrepo;
	
	@Autowired
	private RoleRepository roleRepository;
	
	@Override
	public User adduser(User user) throws UserException{
		
        User adduser = null;
		
		if(user == null) {
			
			throw new UserException("Enter valid information");
		}else {
			String password = user.getPassword();
			if(password != null ) {
				password = this.encodePassword(password);
				user.setPassword(password);
				System.out.println("AUHO "+user.getAuthorities());
				Role role = roleRepository.findByRoleName(RoleName.USER);
				List<Role> list = new ArrayList<>();
				list.add(role);
				user.setRoles(list);
			}
			 adduser = userrepo.save(user);
		     return adduser;
		}
	}

	@Override
	public User Applyforajob(Integer userid , Integer jobid) throws UserException , JobException{
	    User user1 = null;
	    Job job1 = null;
	   Optional<User> user = userrepo.findById(userid);
	   
	   if(user.isPresent()) {
		   
		  user1= user.get();
	   }else {
		   throw new UserException("user is not present");
	   }
		
	   Optional<Job> job = jobrepo.findById(jobid);
	   
	   if(job.isPresent()) {
		   
		   job1 = job.get();
		   job1.getApplicants().add(user1);
		   user1.getJobs().add(job1);
		   userrepo.save(user1);
		   
	   }else {
		   throw new UserException("job is not present");
	   }
	   
	   
		return user1;
	}

	@Override
	public List<Job> getjobsauser(Integer userid) throws JobException,UserException {
		User user = null;
		List<Job> jobs =null;
		Optional<User> optUser = userrepo.findById(userid);
		
		
		if(optUser.isPresent()) {
			user = optUser.get();
			jobs = user.getJobs();
			if(jobs.size() <= 0) {
				throw new JobException("No jobs are found!!");
			}
			return jobs;
			
		}else {
			throw new UserException("No user exist with this userId ");
		}
		
		
	}

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		System.out.println("userName: "+username);
		User user = userrepo.findByEmail(username).orElseThrow(()-> new UserException("user not found!!!"));
		return user;
	}
	
	@Bean
	public PasswordEncoder getPasswordEncoder() {
		return new BCryptPasswordEncoder();
	}
	
	public String encodePassword(String pass) {
		return this.getPasswordEncoder().encode(pass);
	}

	@Override
	public User addRole(Role role,String email) {
		
		User user = userrepo.findByEmail(email).orElseThrow(()-> new UserException("user not found!!!"));
		List<Role> list =  user.getRoles();
		list.add(role);
		user.setRoles(list);
		return userrepo.save(user);
	}

}
