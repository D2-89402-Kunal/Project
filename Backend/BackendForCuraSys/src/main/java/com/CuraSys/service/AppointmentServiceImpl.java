package com.curasys.service;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.curasys.dto.AppointmentDTO;
import com.curasys.entities.Appointment;
import com.curasys.entities.AppointmentStatus;
import com.curasys.repository.AppointmentRepository;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class AppointmentServiceImpl implements AppointmentService{
	
	@Autowired
	private AppointmentRepository appointmentRepository;
	
	@Autowired
	private ModelMapper modelMapper;
	
	
	@Override
	public boolean isSlotAvailable(Appointment appointment) {
		if(appointment.getDoctor() == null) {
			throw new RuntimeException("Doctor object is not set in Appointment object");
		}
		
		return !appointmentRepository.existsByDoctor_DoctorIdAndAppointmentDateAndStartTimeLessThanEqualAndEndTimeGreaterThanEqual(
				appointment.getDoctor().getDoctorId(),
				appointment.getAppointmentDate(),
				appointment.getEndTime(),
				appointment.getStartTime());
	}

	@Override
    	public boolean isSlotAvailable(Long doctorId, LocalDate appointmentDate, LocalTime startTime, LocalTime endTime) {
       	 	return !appointmentRepository.existsByDoctor_DoctorIdAndAppointmentDateAndStartTimeLessThanEqualAndEndTimeGreaterThanEqual(
                	doctorId,
                	appointmentDate,
                	endTime,
                	startTime);
    	}
	

	@Override
	public Appointment bookAppointment(Appointment appointment) {
		if(isSlotAvailable(appointment)) {
				appointment.setStatus(AppointmentStatus.SCHEDULED);
				return appointmentRepository.save(appointment);
		}
		throw new RuntimeException("Slot is unavailable");
	}


}
