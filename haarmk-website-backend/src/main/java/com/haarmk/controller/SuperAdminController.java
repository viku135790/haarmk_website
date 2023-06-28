package com.haarmk.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.haarmk.model.Role;
import com.haarmk.service.RoleService;

@RestController
@RequestMapping("/superAdmin")
public class SuperAdminController {
	
	@Autowired
	private RoleService roleService;
	
	@PostMapping("/add-role")
	public ResponseEntity<Role> saveRole(@RequestBody Role role){
		Role roleSaved = roleService.saveRole(role);
		return new ResponseEntity<Role>(roleSaved, HttpStatus.OK);
	}


}
