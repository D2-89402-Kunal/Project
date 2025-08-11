package com.curasys.service;

import java.time.LocalTime;
import java.util.List;

import com.curasys.dto.AppointmentDTO;
import com.curasys.entities.Appointment;

public interface AppointmentService {
	
	boolean isSlotAvailable(Long doctorId, 
            java.time.LocalDate appointmentDate, 
            LocalTime startTime, 
            LocalTime endTime);
	
	Appointment bookAppointment(Appointment appointment);

	boolean isSlotAvailable(Appointment appointment);
	
}
