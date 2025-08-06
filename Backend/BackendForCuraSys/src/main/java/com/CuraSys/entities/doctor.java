package com.CuraSys.entities;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name="doctors")
@NoArgsConstructor
@Getter
@Setter
@ToString(exclude="appointments")
public class doctor {
  
	private Long doctorId;
	
	private String speacialization;
	
	private String   
	
}
