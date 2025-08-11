package com.curasys.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.curasys.dto.AppointmentDTO;
import com.curasys.entities.Appointment;
import com.curasys.entities.AppointmentStatus;
import com.curasys.entities.Doctor;
import com.curasys.entities.User;
import com.curasys.service.AppointmentService;


@RestController
@RequestMapping("/api/appointments")
public class AppointmentController {
	
	@Autowired
	private AppointmentService appointmentService;
	
	@PostMapping("/addAppointment")
	public ResponseEntity<?> bookAppointment(@RequestBody AppointmentDTO appointmentDto){
		try {
            System.out.println("Appointment Date: " + appointmentDto.getAppointmentDate());
            Appointment appointment = new Appointment();
            appointment.setAppointmentDate(appointmentDto.getAppointmentDate());
            appointment.setStartTime(appointmentDto.getStartTime());
            appointment.setEndTime(appointmentDto.getEndTime());
            appointment.setPatient(new User(appointmentDto.getPatientId()));
            appointment.setStatus(AppointmentStatus.PENDING);
            
            Doctor doctor = new Doctor();
            doctor.setDoctorId(appointmentDto.getDoctorId());
            appointment.setDoctor(doctor);
            System.out.println(doctor);
            
            if (appointmentService.isSlotAvailable(
                    appointmentDto.getDoctorId(),
                    appointmentDto.getAppointmentDate(),
                    appointmentDto.getStartTime(),
                    appointmentDto.getEndTime())) {
                return ResponseEntity.ok(appointmentService.bookAppointment(appointment));
            }
            return ResponseEntity.badRequest().body("Slot is unavailable");
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
	}
	
}
