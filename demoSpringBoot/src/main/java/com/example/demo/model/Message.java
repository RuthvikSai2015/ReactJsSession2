package com.example.demo.model;

import java.io.Serializable;

public class Message implements Serializable {
     String name;
     String content;
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
}
