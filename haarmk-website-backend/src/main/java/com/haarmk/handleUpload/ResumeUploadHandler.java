package com.haarmk.handleUpload;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

@Component
public class ResumeUploadHandler {
	public final String UPLOAD_DIR = new ClassPathResource("static/resumes").getFile().getAbsolutePath();
	
	public ResumeUploadHandler() throws IOException{};
	
	public boolean uploadResume(MultipartFile resume) {
		boolean uploadStatus = false;
		try {
			Files.copy(resume.getInputStream(),Paths.get(UPLOAD_DIR+File.separator+resume.getOriginalFilename()),StandardCopyOption.REPLACE_EXISTING);
			uploadStatus = true;
		} catch (IOException e) {
			e.printStackTrace();
		}
		return uploadStatus;
	}
	
}
