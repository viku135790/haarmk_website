package com.haarmk.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.access.expression.method.DefaultMethodSecurityExpressionHandler;
import org.springframework.security.access.expression.method.MethodSecurityExpressionHandler;
import org.springframework.security.access.hierarchicalroles.RoleHierarchy;
import org.springframework.security.access.hierarchicalroles.RoleHierarchyImpl;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.haarmk.security.JwtAuthenticationEntryPoint;
import com.haarmk.security.JwtAuthenticationFilter;

@Configuration
@EnableWebSecurity
public class MySecurityFilterChain {
	@Autowired
	private UserDetailsService userDetailsService;
	
	@Autowired
    private JwtAuthenticationEntryPoint point;
	
    @Autowired
    private JwtAuthenticationFilter filter;
    
    @Autowired
	private PasswordEncoder passwordEncoder;

	
	@Bean
	public SecurityFilterChain mySecurityFilertChainGet(HttpSecurity http) throws Exception {
		
		http.csrf(csrf -> csrf.disable())
			.cors(cors -> cors.disable())
			.sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
			.authorizeHttpRequests(auth -> auth
			.requestMatchers("/v3/api-docs/**", "/swagger-ui/**","/swagger-ui.html", "/api-docs").permitAll()
			.requestMatchers("/users/signup").permitAll()
			.requestMatchers("/users/**").authenticated()
			.requestMatchers("/auth/login").permitAll()
			.requestMatchers("/admin/**").hasAuthority("ADMIN")
			.anyRequest().authenticated())
			.exceptionHandling(ex -> ex.authenticationEntryPoint(point))
			
			;
		
		http.addFilterBefore(filter, UsernamePasswordAuthenticationFilter.class);
		
		return http.build();
	}
	
	
	
	@Bean
	public DaoAuthenticationProvider daoAuthenticationProvider() {
		DaoAuthenticationProvider daoAuthenticationProvider = new DaoAuthenticationProvider();
		daoAuthenticationProvider.setUserDetailsService(userDetailsService);
		daoAuthenticationProvider.setPasswordEncoder(passwordEncoder);
		return daoAuthenticationProvider;
	}
	
	@Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration builder) throws Exception {
        return builder.getAuthenticationManager();
    }
	
	//an admin to be able to do everything a normal user can.
	@Bean
	static RoleHierarchy roleHierarchy() {
	    var hierarchy = new RoleHierarchyImpl();
	    hierarchy.setHierarchy("ROLE_ADMIN > ROLE_USER");
		return hierarchy;
	}
	
	// and, if using method security also with role hierarchy
	@Bean
	static MethodSecurityExpressionHandler methodSecurityExpressionHandler(RoleHierarchy roleHierarchy) {
		DefaultMethodSecurityExpressionHandler expressionHandler = new DefaultMethodSecurityExpressionHandler();
		expressionHandler.setRoleHierarchy(roleHierarchy);
		return expressionHandler;
	}
	
}
