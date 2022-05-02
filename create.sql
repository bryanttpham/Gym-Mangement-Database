USE gym;




INSERT INTO payment (payment_amount,payment_time,payment_date,payment_due_date,member_payment)
VALUES(
50,
'2:00 PM',
'22-05-02',
'22-05-05',
'1'
);


/*
INSERT INTO membershiptype
VALUES(
DEFAULT,
'Advanced',
'3 Year',
1500.00
);

INSERT INTO workout_session (workout_id,session_id,workout_date,room,max_availability)
VALUES(
1,
1,
'22-05-02',
'A1',
30
);

INSERT INTO workout(workout_name,workout_description)
VALUES(
'Fire Circuit',
'This is a high intensity interval training class that has three rotation: Eliptical, Rowing, Full Body Strength Training'
);

INSERT INTO instructor (instructor_name,address,phone_number,email)
VALUES(
'John Doe',
'1239 Fake Address',
'4080121234',
'john@gmail.com'
);
INSERT INTO member (id_number,name,address,age,gender,phone_number,join_date,expiration_date,email)
VALUES(
'A1',
'BRYANT PHAM',
'3123 FAKE ADDRESS',
20,
'Male',
'4081230092',
'2022-05-01',
'2023-05-01',
'bryant@gmail.com'
);
INSERT INTO instructor (instructor_name,address,phone_number,email)
VALUES(
'Frank Sinatra',
'1345 Fake Address',
'4080231234',
'frank@gmail.com'
);

INSERT INTO instructor (instructor_name,address,phone_number,email)
VALUES(
'Anna Tran',
'1459 Fake Address',
'9070231234',
'anna@gmail.com'
);

INSERT INTO member (id_number,name,address,age,gender,phone_number,join_date,expiration_date,email)
VALUES(
'2AB',
'Ivy Smith',
'290 FAKE ADDRESS',
25,
'Female',
'4089090092',
'2022-10-01',
'2023-10-01',
'bryant@gmail.com'
);



*/



/*

CREATE TABLE IF NOT EXISTS `member`(
member_id INT(30) NOT NULL AUTO_INCREMENT,
id_number VARCHAR(15),
name VARCHAR(50),
address VARCHAR(100),
age INT(3),
gender VARCHAR(20),
phone_number VARCHAR(11),
join_date date,
expiration_date date,
email VARCHAR(50) NOT NULL,
member_access INT(30),
membership int(11),
PRIMARY KEY (member_id)
);

CREATE TABLE IF NOT EXISTS `membershiptype` (
membership_id int(11) NOT NULL AUTO_INCREMENT,
membership_name varchar(15) NOT NULL,
membership_period varchar(15) NOT NULL,
membership_amount float NOT NULL,
PRIMARY KEY (membership_id)
); 

CREATE TABLE IF NOT EXISTS `instructor`( 
instructor_id INT(30) NOT NULL AUTO_INCREMENT,
instructor_name VARCHAR(50) NOT NULL,
address VARCHAR(100) NOT NULL,
phone_number VARCHAR(11) NOT NULL,
email VARCHAR(50) NOT NULL,
instructor_access INT(30),
PRIMARY KEY (instructor_id)
);

CREATE TABLE IF NOT EXISTS `payment`(
payment_id INT(30) NOT NULL AUTO_INCREMENT,
payment_amount FLOAT NOT NULL,
payment_time VARCHAR(15) ,
payment_date DATE,
payment_due_date DATE,
member_payment INT(30),
PRIMARY KEY(payment_id)
);


CREATE TABLE IF NOT EXISTS `promotion` (
promotion_id INT(30) NOT NULL AUTO_INCREMENT,
promotion_name VARCHAR(50) NOT NULL,
promotion_start_date DATE , 
promotion_end_date DATE,
payment INT(30),
PRIMARY KEY(promotion_id)
);

CREATE TABLE IF NOT EXISTS `personal_training` (
training_id INT(30) NOT NULL AUTO_INCREMENT,
student_notes TEXT,
pt_instructor INT(30),
PRIMARY KEY(training_id)
);

CREATE TABLE IF NOT EXISTS `pt_session`(
training__id INT(30) NOT NULL ,
session_id INT(30) NOT NULL ,
session_day VARCHAR(15),
start_time TIME,
end_time TIME, 
instructor_notes TEXT,
training_notes INT(30),
pt_member INT(30),
pt_instructor INT(30),
PRIMARY KEY(pt_id,session_id)
);

CREATE TABLE IF NOT EXISTS `workout` (
workout_id INT(30) NOT NULL AUTO_INCREMENT,
workout_name VARCHAR(50) NOT NULL,
workout_description TEXT,
course_instructor INT(30),
PRIMARY KEY(workout_id)
);

CREATE TABLE IF NOT EXISTS `workout_session`(
workout_id INT(30) NOT NULL ,
session_id INT(30) NOT NULL,
workout_date DATE,
room VARCHAR(5),
max_availability INT(3),
workout_course INT(30),
workout_member INT(30),
workout_instructor INT(30),
PRIMARY KEY(workout_id,session_id)
);


CREATE TABLE IF NOT EXISTS `user` (
user_id INT(30) NOT NULL ,
username VARCHAR(30) NOT NULL,
user_password VARCHAR(40),
PRIMARY KEY(user_id)
 );

 ALTER TABLE member
	ADD CONSTRAINT member_user
	FOREIGN KEY (member_access)
	REFERENCES user(user_id),
	ADD CONSTRAINT membership_type
	FOREIGN KEY(membership)
	REFERENCES membershiptype(membership_id);
 
 ALTER TABLE instructor
	ADD CONSTRAINT instructor_user
	FOREIGN KEY (instructor_access)
	REFERENCES user(user_id);
  
  
ALTER TABLE workout
     ADD CONSTRAINT fk_workout_instructor
     FOREIGN KEY (course_instructor)
     REFERENCES instructor(instructor_id);

	
ALTER TABLE workout_session
	ADD CONSTRAINT fk_session_course
    FOREIGN KEY (workout_course)
    REFERENCES workout(workout_id),
	ADD CONSTRAINT fk_workout_member
	FOREIGN KEY(workout_member)
	REFERENCES member(member_id),
	ADD CONSTRAINT fk_session_instructor
    FOREIGN KEY(workout_instructor)
    REFERENCES workout(workout_id);

ALTER TABLE promotion
	ADD CONSTRAINT fk_promotion
    FOREIGN KEY (payment)
    REFERENCES payment(payment_id);

ALTER TABLE payment 
    ADD CONSTRAINT fk_payment_member
    FOREIGN KEY (member_payment)
    REFERENCES member(member_id);
    
ALTER TABLE personal_training
	ADD CONSTRAINT fk_training_instructor
    FOREIGN KEY (pt_instructor)
    REFERENCES instructor(instructor_id);   

ALTER TABLE pt_session
	ADD CONSTRAINT fk_pt_session
    FOREIGN KEY (training_notes)
    REFERENCES personal_training(training_id),
    ADD CONSTRAINT fk_training_member
	FOREIGN KEY(pt_member)
	REFERENCES member(member_id),
    ADD CONSTRAINT fk_pt_session_instructor
    FOREIGN KEY(pt_instructor)
    REFERENCES instructor(instructor_id);
    */


