package com.haarmk.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.haarmk.model.Role;
import com.haarmk.model.RoleName;

public interface RoleRepository extends JpaRepository<Role, Integer> {
	
	Role findByRoleName(RoleName roleName);

}
