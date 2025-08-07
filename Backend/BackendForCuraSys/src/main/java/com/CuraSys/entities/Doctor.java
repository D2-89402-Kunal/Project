package com.CuraSys.entities;

import java.sql.Timestamp;
import java.time.LocalTime;
import java.util.List;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name="doctors")
@NoArgsConstructor
@Getter
@Setter
@ToString(exclude="appointments")
public class Doctor {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="doctor_id", nullable =false)
	private Long doctorId;
	
    @Column(name= "specialization" , nullable =false , length = 100)
	private String specialization;
	
    @Column(name = "qualification" , nullable = false , length =100)
	private String qualification;
	
    @Column(name ="experience_years" , nullable = false)
	private int experienceYears;
	
    @Column(name ="clinic_address" , nullable =false , length =255)
	private String clinicAddress;
	
    @Column(name = "consultationFee" , nullable = false )
	private Double consultationFee;
	
    @Column(name = "available_days" , nullable = false , length = 100)
	private String availableDays;
	
    @Column(name= "available_time_start" , nullable = false)
	private LocalTime availableTimeStart;
	
    @Column(name = "available_time_end" , nullable = false)
	private LocalTime availableTimeEnd;
    
    
   //new field for storing the image URL
    @Column(name = "image_url" , length=255)
	private String imageUrl;
	
    @OneToOne
    @JoinColumn(name="user_id", nullable =false)
	private User user;
	
    @CreationTimestamp
    @Column(name="created_at", nullable=false, updatable= false)
	private Timestamp createdAt;
    
	@OneToMany(mappedBy= "doctor", cascade=CascadeType.ALL , fetch=FetchType.EAGER)
	private List<Appointment> appointments ;
	
	
}
