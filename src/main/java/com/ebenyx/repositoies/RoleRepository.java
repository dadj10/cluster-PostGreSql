package com.ebenyx.repositoies;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.ebenyx.entities.Role;

public interface RoleRepository extends JpaRepository<Role, String> {
	
	@Query("SELECT c FROM Role c WHERE c.etat <> -1")
	List<Role> findAllRole();
	
	@Query("SELECT c FROM Role c WHERE c.role = 'SuperAdmin' AND c.etat <> -1")
	List<Role> findAllRoleSuperAdmin();

	@Query("SELECT c FROM Role c WHERE c.role = 'Admin' AND c.etat <> -1")
	List<Role> findAllRoleAdmin();
	
	@Query("SELECT c FROM Role c WHERE c.role = ?1 AND c.etat <> -1")
	Role findRoleByName(String role);
	@Query("SELECT c FROM Role c WHERE lower(c.role) = ?1 AND c.etat <> -1")
	Role findRoleByRole(String role);
}
