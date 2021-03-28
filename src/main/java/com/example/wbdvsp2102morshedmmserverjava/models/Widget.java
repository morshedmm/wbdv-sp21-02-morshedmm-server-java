package com.example.wbdvsp2102morshedmmserverjava.models;

import javax.persistence.*;

@Entity
@Table(name="widgets")
public class Widget {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String topicIc;
    private String type;
    private Integer size;
    private String text;
    private Integer width;
    private Integer height;
    private boolean ordered;
    private String src;

    public boolean isOrdered() {
        return ordered;
    }

    public void setOrdered(boolean ordered) {
        this.ordered = ordered;
    }

    public String getSrc() {
        return src;
    }

    public void setSrc(String src) {
        this.src = src;
    }

    public Integer getWidth() {
        return width;
    }

    public Integer getHeight() {
        return height;
    }

    public void seWidth(Integer width) {
        this.width = width;
    }

    public void setHeight(Integer height) {
        this.height = height;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTopicIc() {
        return topicIc;
    }

    public void setTopicIc(String topicIc) {
        this.topicIc = topicIc;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Integer getSize() {
        return size;
    }

    public void setSize(Integer size) {
        this.size = size;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public Widget(Long id, String topicIc, String type, Integer size, String text) {
        this.id = id;
        this.topicIc = topicIc;
        this.type = type;
        this.size = size;
        this.text = text;
    }

    public Widget() {
    }
}