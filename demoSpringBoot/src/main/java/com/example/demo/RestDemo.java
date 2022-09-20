package com.example.demo;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Message;

@RestController
public class RestDemo {
	@GetMapping("/hello")
	public Message sayHello() {
		Message m = new Message();
		m.setName("Joe");
		m.setContent("Welcome");
		return m;
	}
	@CrossOrigin
	@GetMapping("/messages")
	public List<Message> getMessages(){
		List<Message> messages = new ArrayList();
		Message m = new Message();
		m.setName("Joe");
		m.setContent("Welcome to spring boot");
		messages.add(m);
		Message m1 = new Message();
		m1.setName("Krishna");
		m1.setContent("Welcome");
		messages.add(m1);
		Message m2 = new Message();
		m2.setName("Rahul");
		m2.setContent("Welcome");
		messages.add(m2);
		return messages;

	}
}
